import { defineMiddleware } from "astro:middleware";
import { getActionContext } from "astro:actions";
import type { APIContext } from "astro";

const MS_BOBA_DID = "did:plc:r2vpg2iszskbkegoldmqa322";

const HIDDEN_PATHS = ["/connect/post"];

const getGatedRedirectUrl = (context: APIContext) => {
  if (
    !HIDDEN_PATHS.some((hiddenPath) =>
      context.url.pathname.startsWith(hiddenPath)
    )
  ) {
    return null;
  }

  const loggedInDid = context.locals.loggedInUser?.did;
  if (!loggedInDid) {
    return "/connect";
  }

  if (loggedInDid !== MS_BOBA_DID) {
    return "/connect?unathorized";
  }
  return null;
};

export const onRequest = defineMiddleware(async (context, next) => {
  const redirectToUrl = getGatedRedirectUrl(context);
  if (redirectToUrl) {
    return context.redirect(redirectToUrl);
  }

  const { action, setActionResult, serializeActionResult } =
    getActionContext(context);

  // If we have an action saved in our session, then we set it as the result
  // of Astro.actions and we move forward
  const latestAction = await context.session?.get(`latest-astro-action`);
  if (latestAction) {
    setActionResult(latestAction.name, latestAction.result);
    await context.session?.delete(`latest-astro-action`);

    return next();
  }

  // This request was triggered by a form submission. We should save the
  // result of the form submission and send the user back where they came
  // from.
  if (action?.calledFrom === "form") {
    const result = await action.handler();
    context.session?.set(`latest-astro-action`, {
      name: action.name,
      result: serializeActionResult(result),
    });

    if (result.error) {
      const referer = context.request.headers.get("Referer");
      if (!referer) {
        throw new Error("Action submission went wrong");
      }
      return context.redirect(referer);
    }

    return context.redirect(context.originPathname);
  }

  next();
});
