import { ActionError, defineAction } from "astro:actions";
import { getLoggedInAgent } from "@fujocoded/authproto/helpers";
import { record, z } from "astro:schema";
import { TID } from "@atproto/common-web";

const MS_BOBA_DID = "did:plc:r2vpg2iszskbkegoldmqa322";
export const server = {
  postToBluesky: defineAction({
    accept: "form",
    input: z.object({
      text: z.string().min(2).max(200),
      facets: z.any(),
    }),
    handler: async (input, { locals }) => {
      if (!locals.loggedInUser) {
        throw new ActionError({
          code: "UNAUTHORIZED",
          message: "User must be logged in",
        });
      }
      if (locals.loggedInUser.did !== MS_BOBA_DID) {
        throw new ActionError({
          code: "UNAUTHORIZED",
          message: "Impostor!!! Banish the impostor!!",
        });
      }

      const agent = await getLoggedInAgent(locals.loggedInUser);

      if (!agent) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "No agent for you",
        });
      }

      const recordContent = {
        text: input.text,
        facets: JSON.parse(input.facets) ?? [],
        $type: "app.bsky.feed.post",
        langs: ["en"],
        createdAt: new Date().toISOString(),
      };

      try {
        const record = await agent.com.atproto.repo.createRecord({
          repo: locals.loggedInUser.did,
          collection: "app.bsky.feed.post",
          rkey: TID.nextStr(),
          record: recordContent,
        });

        if (!record.success) {
          console.error(record.data);
          throw new ActionError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Uh-oh, your record didn't go through.",
          });
        }

        return {
          atUri: record.data.uri,
        };
      } catch (e) {
        console.error(e);
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message:
            (e as any).message ?? "There was an error creating your record",
        });
      }
    },
  }),
};
