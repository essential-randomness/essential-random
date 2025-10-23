import { defineMiddleware } from "astro:middleware";
import { AtpBaseClient } from "@atproto/api";

const MS_BOBA_DID = "did:plc:r2vpg2iszskbkegoldmqa322";

const HIDDEN_PATHS = ["/connect/post"];

export const onRequest = defineMiddleware(async (context, next) => {
    if (!HIDDEN_PATHS.some(hiddenPath => context.url.pathname.startsWith(hiddenPath))) {
        return next();
    }

    const loggedInDid = context.locals.loggedInUser?.did;
    if (!loggedInDid) {
        return context.redirect("/connect");
    }

    if (loggedInDid !== MS_BOBA_DID) {
        return context.redirect("/connect?unathorized");
    }
    return next();
});