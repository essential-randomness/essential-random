import { ActionError, defineAction } from "astro:actions";
import { getLoggedInAgent } from "@fujocoded/authproto/helpers";
import { record, z } from "astro:schema";
import { TID } from "@atproto/common-web";
import { RichText } from "@atproto/api";

const MS_BOBA_DID = "did:plc:r2vpg2iszskbkegoldmqa322";
export const server = {
  postToBluesky: defineAction({
    accept: "form",
    input: z.object({
      content: z.string().min(2).max(200),
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

      const rt = new RichText({
        text: input.content,
      });
      await rt.detectFacets(agent);

      let linkToEmbed: string | null = null;

      for (const facet of rt.facets ?? []) {
        for (const feature of facet.features) {
          if (feature.$type == "app.bsky.richtext.facet#link") {
            linkToEmbed = feature.uri;
          }
        }
      }

      const recordContent = {
        text: rt.text,
        facets: rt.facets,
        $type: "app.bsky.feed.post",
        langs: ["en"],
        createdAt: new Date().toISOString(),
      };

      if (linkToEmbed) {
        recordContent.embed = {
          $type: "app.bsky.embed.external",
          external: {
            uri: linkToEmbed,
            title: linkToEmbed,
            description: "Your fabulous link"
          },
        };
      }

      try {
        // Come celebrate Astro to Bluesky posting on Streamplace https://stream.place/essentialrandom.bsky.social
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
        console.error(e)
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message:
            (e as any).message ?? "There was an error creating your record",
        });
      }
    },
  }),
};
