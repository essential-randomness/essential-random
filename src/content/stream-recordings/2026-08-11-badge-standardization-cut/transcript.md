# Transcript - 2026-08-11-badge-standardization-cut

## [00:00:00](#t=0)

Okay, where were we? We were at the lexicon community because that's where the badges design is. I, oh, yeah, look at all of these things that I wanted to reply. Oh, look at it. I even looked at so many things. Okay, where was it? Badge definitions and awards. We are not looking at how long it's been since I was supposed to reply to this. We are just going with the flow. Okay, so let's see where I was at. I had like a whole things. Here's a more formal proposal for badges appearance.

## [00:00:54](#t=54)

So, here is what we're trying to do. These, see how there is like a attendee, gaggle gatherer, and also this beautiful Git badge. We're trying to do this, but we're trying to do it so that anyone can come and, how do you call it? Like anyone, you assign it to someone, you give it to someone, you define a badge, you give it to folks, and then people can display them. They are, they're standardized, you know, what is there, what fields they have, what everything they have, and this means people can display them on any site or anything.

## [00:01:47](#t=107)

You can have your collection of badges, and anyone can give them to you, or like try to give them to you, and you can accept them or not. And you can put them wherever badges in whatever social app or website or whatever badges are displayable. So this is what we're trying to do, and I, we have one current implementation, and I was trying to make it better because we need to do another implementation. Let's see, actually, I can do, no, Atmos, Atmosphere Conf. I can show these also on live.

## [00:02:33](#t=153)

I'm gonna sign in, and I'm gonna do crossing fingers that I do not accidentally put my password on stream. Oh, no. Yes, yes, yes, look at this. And crossing, see? So this is the actual page.

## [00:02:56](#t=176)

These are in my PDS. You can click on them. You can see the certificate. You can see, you can click on verify badge. I hate that I've done it in, how do you call it, that I've kinda done it all in sync. But yeah, if you click on here, you can verify your badge, and so this is going to, the someone's PDS, sorry, this is going to your PDS and then going to the Atmosphere Conference PDS. It's verifying that the badge is quote unquote real, and then it's making it sparkle.

## [00:03:37](#t=217)

Isn't that great? Yeah, so this is what it's all about. And yep, that's what I want to bring everywhere in the atmosphere. This actually, looking back at this, is kinda giving me a couple of ideas in term of, one big... I'm kinda getting ahead of myself, but just a thought I'm putting out there. In terms of what, why I kinda like, I don't wanna say stalled, but like where it wasn't a clear, oh, let's just do this. The issue was defining the appearance of badges. So, because that's the more, most complicated one, right?

## [00:04:37](#t=277)

How do you standardize what badges look like across the board? Cause it matters to folks what badges look like. I think it makes sense that it does matter. And, but how do you coordinate with it, especially when you want to display them at many different sizes, and so on? So I had some thought about that, but putting it in more, trying to put it in a generic way, like took me more time, and then I got dragged into things. So this is what we're doing. And my thoughts that I just got was, well, this is an interesting way to define this badge could just be a raised badge for this kind of sort of 3D effect.

## [00:05:30](#t=330)

And yes, it may look different on different sides, but maybe that's a, we could define some styles, like raised, I don't know, peel. That, that's one option. That's one option. I am just saying, that's one option.

## [00:05:53](#t=353)

So let's do this. Let's get to remembering what we were doing, and then let's get to remember, to seeing, and remembering what everyone said.

## [00:06:06](#t=366)

Okay, so I'll get to it by end of the week. This is, I, this is my mistake that I keep not learning. I don't do that. I should stop saying it. Well, I do that, but I do that with a fraction of the things I sh— I'm supposed to do it with. Okay, so, appearance lexicon for badges. What I said: the community badge definition currently flattens the name field for badge identification and badge display name. Yes, my, I will die to the— on this hill.

## [00:06:45](#t=405)

This makes it impossible to edit the display name of a badge without mutating the definition itself, causing all records to point to an older badge definition that no longer exists on the PDS, and whose content cannot be verified. So true, bestie. And by bestie, I mean me. While badges definitions shouldn't change, there are many valid reasons for updating their appearance, like typos, new discriminant, like conference entity 2026 conference entity, should it gain a surprise second edition, which it did, yay! Getting money to commission someone a better badge, that's me.

## [00:07:20](#t=440)

A kind soul offers to improve your alt text, I thought of a funnier display name description, and now I'm mad. Also happened to me. I may have invalidated a bunch of people's badges because of that. So this gets further compounded if we add necessary fields like color, icon, image. Solution: an appearance lexicon for badges. Okay, so this is it. `community.lexicon.badge.appearance` defines the user-facing presentation for a badge. A badge definition represents the stable badge being awarded. It has a unique name and unchangeable description. Recipients can trust that the meaning of the badge they hold will not change under them.

## [00:08:10](#t=490)

Okay, so this is the definition. There's two parts: the definition and appearance. Recipients can trust that the meaning of the badge they hold will not change under them. Badge appearance represent how that badge should be displayed, visual, scoping, and link to learn more. This separates two concerns that are currently conflated, stable identity and mutable presentation, what the badge is versus what the badge looks like, allows for progressive enhancement and extensibility. While this badge conflation has been a recurring issue, this is actually a recurring issue, I think, everywhere, and I should write about it because I would like people to think.

## [00:08:54](#t=534)

Like, I just think it's something that there should be a, hey, pay attention to this when designing lexicons. To trying to map some open source and some of fandom's way online life. Yeah, I, having tried that as, people aren't mean. It's just that— it's just they don't think about that part of the difficulties. Okay, so proposal. Update `community.lexicon.badge.definition`. Badge definition is stable for the lifetime of the badge. This exists today, except it's not stable. Proposed change adds an optional reference to a community appearance record describing how this badge looks.

## [00:09:40](#t=580)

If a CID is present, the badge is only valid for the specific version of the appearance record. Useful for when you want to avoid any tampering. If no appearance is present, name and description can be a display fallback. So this is where it is. You have your badge type, this as a name, it's created at a certain date, and then here is the description of the badge, and then you have this appearance.

## [00:10:11](#t=611)

And then this get hashed into a badge grant when you go and give this to someone. So here is the sorta like separation.

## [00:10:33](#t=633)

You have— you put out a badge definition, and it's like, here is how badge look like, and then when you go give it to someone, you kinda like hash it out and sign it with your unique key, and that says, oh, the person that has that access to that key signed my thing, so it must be them.

## [00:10:58](#t=658)

That's it. So, yeah, so this is kinda how it looks. Side proposal: doing the renaming of name ID in the same change. The current name does double duty as a stable identifying and display string, and id for the identifier would make its purpose clearer.

## [00:11:19](#t=679)

I so want to rename it ID. I will Survive, but I still want to rename it ID. And then create the appearance. A badge appearance describes how a badge should be displayed. Challenge: we want to support both types of badges. Just one of it is just icon plus color, easy to create for people who just want to put a badge out without thinking too hard about it. I'm told they exist. Yes. Image badges for the rest of us who miss the GeoCities era. Let's take one of ours, like the Git one.

## [00:11:49](#t=709)

So title, `displayDescription` optional, can be longer than original badge description but falls back to the one in the definition. Image optional, visual representation.

## [00:12:03](#t=723)

Icon optional, an emoji, character or small images that represent the badge. Not defined, falls back to the first letter of the title. Personally, I love, allow two or three graphemes with the understanding that it may be cut to one. `accentColor`, optional. URL optional. Okay? Important: image and icon `accentColor` are not mutually exclusive. Icon can be used to represent the image in spaces, in space-constrained environment, but when possible, implementers should prefer image and consider icon `accentColor` a fallback. So for example, here we have the grand goose ambassador. It's— it has the icon is a goose, and it has the `accentColor` of yellow, and this is what it links to.

## [00:12:54](#t=774)

Oh, URLs should probably have more of a semantic name. Description is absent, so it falls back to the one in the original badge. Title Code Gitter, `displayDescription`, so people will do anything for cat boys, even learn version control. I really need to do it to make this one. Icon, the cat With the computer. Accent colors, Git signature peach color, and then we have the image, which is that image there. FujoGuide's Git, but he's Nyan Cat, creating a rainbow as it dashes through the sky. Let's git coding is written to its right, and then the `aspectRatio`. Okay.

## [00:13:46](#t=826)

And this is how the— how it looks together with the appearance. So you have the definition, and that one is just like the name is, you are a FujoGuide issue one buyer, and the description is awarded to folks who bought FujoGuide issue one, and then the appearance links to that. Things I like input on. Do pick and choose. ID versus name. Yes. Badge appearance, tagline, or `displayDescription`. A sanctioned way to leave space for each text description. Should image always win over icon, or is it more an alternate renderings according to context?

## [00:14:31](#t=871)

Would people be open to colors as an object instead of a single value? May I interest you in a richer definition of colors than just hex? How are people supposed to extend it with their special display metadata because they want to? Okay, let's see. One of the things that could happen is fake certificates that report verified falsely. Given implementation of that could be built from anyone. We want a trusted certificate verifying authority, wouldn't you, like a web browser company does? Yes, that makes sense. I like the idea of using a field to create limited edition if that's not beyond consideration, for example, by numbering against a total one of ten.

## [00:15:09](#t=909)

You, we should discuss. This goes back to the— we should discuss patterns for this. I think that's a really good one. But it sits a layer below, above this. So if you want to do something like that, you can do a new lexicon, which is a badge collection lexicon, and that one can have limited edition stuff. So it's kind of similar to what I'm doing here right now with badge appearance.

## [00:15:43](#t=943)

So this is like slightly different. Any party can verify, that's a different one. Caveat, Zicklag. Oh, shoot, I should tell people that I am doing this on the Roomy forum. I'm gonna do it quickly, sorry.

## [00:16:29](#t=989)

To the badge proposal I had made some time ago, so I can get a final version out, and I'm gonna link to this. That's what Zicklag is working on, so, first of all, I, you know, I should—

## [00:17:34](#t=1054)

Okay. So, no big deal. I just wanted people to know that this is happening in case they want to have comments live. Okay. Zicklag said: caveat, I'm not someone with a lot of experience with badges, but wanted to leave my thoughts in case they're helpful. They are. I had read— I know because I had read it at the time, but also just generally, I think, thoughts from people who will work with this are always great.

## [00:18:02](#t=1082)

It makes a lot of sense to me to have the badge ID separate from display name. Maybe we can call it `slug`. To me, as someone familiar with the web, `slug` instantly gets the idea across as to what it is for. It is a machine ID that is not the primary key, and it is partially exposed to user, but it is not a display name. You are so right. I like the name `slug`.

## [00:18:26](#t=1106)

Yeah, so now using the `rkey` is not right because you can change, yes, makes sense. Display description feels better than tagline since tagline does imply... we could do something like flavor text. Oh, I liked flavor text. I like flavor text. Oh man. Oh, that's a good name. Because it is a flavor text, right? Like the description, we can keep it. There is a description field in the actual badge, but the flavor text is a whole other thing. It's the— because you, when you hover on it, you want the funny text.

## [00:19:08](#t=1148)

You don't want to like tell people what they are looking at. Like, you don't want to give people useful information. You want them to like laugh. Oh, now I'm sad that there isn't a popover here, but like a gaggle gatherer.

## [00:19:31](#t=1171)

Like you, I would put something like, I came, I don't know, I'm like, the thing that comes to mind is I came to this conference to watch, talk, and meet with people, and I'm all out of talks or something.

## [00:19:48](#t=1188)

But, you know. So like that's— it is a flavor text. I think. I mean, you could argue that flavor text and description and longer and `displayDescription` are slightly different.

## [00:20:28](#t=1228)

So maybe they're different. Like `displayDescription` is the very long— like it's a longer description that you put on the badge, but flavor text to me would be the kind of the tagline. Like they're two separate things.

## [00:20:47](#t=1247)

Oh god. See, that's the problem. People are gonna be like, do not overcomplicate it, but I'm like, but I want both. Should image always win over an emoji-based icon. Would be, I feel like this should maybe an extension, which lead us to lexicon do allow extension by adding extra fields. But my big problem with that is that it's not namespaced, might have other people adding the same field name with different schemas, and could end up with bad records if there's official schema adds a field with the same name.

## [00:21:17](#t=1277)

A solution that I feel is kind of nice, but I haven't seen anyone do is to add an extensions field with an array of open unions. That means anybody can provide a list of custom extension that different apps may or may not support, and each one has an NSID field type field so that there aren't schema overlap issues. If certain extension lexicon becomes commonly supported, Targeted, then maybe to a good candidate. I'm curious if there are any other thoughts on this. Yes, that makes sense. I would actually like, maybe a good thing to do would be, I don't know if we have a thread in this forum to discuss lexicon ex-extensions to lexicon.

## [00:22:03](#t=1323)

I'm going to put a sticker here, sticky notes, to say check about how to extend lexicons. Cause there's at the very least also the sidecar pattern, but I don't know, I don't effectively know if that is like, you know, I don't know how much of that is— how do you say it?

## [00:22:37](#t=1357)

Like, I don't know how many people know about that. Blah.

## [00:22:56](#t=1376)

Including `com.example.badges.extraData` can be added as extra data. I'm saying we can provide an extension field that allows people to put their own extras on the badge that may or may not be intended to converge with other app. Having the extensions as an open union means that they can add data to the lexicon distinguished by my own NSID, so that I know it won't conflict with anybody else's definition on the same field. I actually agree. I agree with this. It's not even an extensions. I am kinda like, I feel like there should be multiple displays of these.

## [00:23:33](#t=1413)

And sure, you can say something like do a sidecar lexicon, but that's not the same thing.

## [00:23:48](#t=1428)

Can be added as extra data today. Extra data records. So this is a sidecar record, right? Okay.

## [00:24:07](#t=1447)

Actively managing an extension space is the whole reason stable extension, a pre-definitional lexicon by any other name, is just stuffed in an extension object. Additional data was an object that is stuffed, got put into for events, didn't need managing. Doesn't, in fact, shouldn't be managed, and once you start talking about managing it, you should either put it in a shared lexicon directly, the one it is extending, or its own lexicon.

## [00:24:34](#t=1474)

Okay, okay. I don't— Oh God. Okay. We can do it. Let's get ourselves a new definition. I'm not gonna yet start with apologies.

## [00:24:52](#t=1492)

I just wanna get some kind of thing going. Okay. So this is the one I had, and I kinda wanna go and go with this. Title Code Gitter, then we said, actually there's two parts. Okay. Badge appearance, and then we have badge Definition. Okay. Where are you? Badge definition. Ta-ta. Oh, I'd put it under there. FujoGuide issue one buyer.

## [00:25:56](#t=1556)

So let's see. What had we... Okay, here is the true. So what we were saying was name `slug`.

## [00:26:20](#t=1580)

Hey, Trezy. Your... Trezy's awake as well. I'm so sorry I made you wait so long. I only mildly should talk to you when I was starting for me, forcing me to do it that early. But no, I'm glad you're awake and I'm glad you're here. It's all in good faith and you arrived at the right time, because we were just getting started with trying to incorporate more feedback. So long, I know.

## [00:26:55](#t=1615)

Okay, so I don't know how much you remember about this. I can give you a quick catch-up on what the points of contention were. And I kind of want to call— I thought I wanted the `slug`, but now I kind of want to call it ID again. But yeah, I can give you a quick— okay, that would be awesome. Okay, so, quick restart for people that weren't here, not from the beginning. So I don't have to explain you the whole idea. The things, here is the things I wanted to change.

## [00:27:35](#t=1655)

In the original one, my proposal was to add this appearance lexicon, because I— yeah, because basically we want appearance. So this is the thing that keeps happening with lexicon. People kind of mix the concerns together that shouldn't be together and then creates a mess. So here, because this definition has to be static, because you have to sign it, my proposal was not to have also the information here that should change.

## [00:28:19](#t=1699)

So the point here was we keep the minimal information in the declaration itself, but we also link out to what the appearance of this badge is, so that this can change without the signature needing to be redone. So the things I was gonna keep here is the `createdAt` and description, and then I have a very strong opinion that we should have both name and ID, because the ID is how you uniquely identify the badge and how you want it kinda like connected to other badges. So here, for example, see the `atconf-2025-connection-rank-a`, this is— this put, if you order by ID, that kind of puts them together in line, it can be used as a slug and can have all those properties that can be useful in a decentralized environment, while the name can be the user facing name and a display fallback.

## [00:29:40](#t=1780)

And then like the description here being the very tiny smallest quick, what is this? If that whole description changes, the CID changes, the signature becomes invalid, right? So here is what I was— so what I was thinking about that is, the other side is the users don't really own the badge if they don't have the useful data, like what the fuck is this badge? Yeah. So here is my thought. My thought was, if we create, we leave the title, name, and description here, but that— but we separate those from the display.

## [00:30:30](#t=1830)

So we have two, actually. These remain as fallback so that you can only just define this if you want, you can also remove the appearance. But the official kind of like functionality of that name and description here is that it's not necessarily— I don't want to say it's not user-facing, but it's serious and what you would remember, what would inform people about the purpose of the badge, as opposed to what I have done here, where I've called this badge Gaggle Gatherer, because that is the— like, because this is...

## [00:31:18](#t=1878)

The name of the badge is about having fun, like the one that you display. It's not about being like... It's about being funny. It's not about being accurate.

## [00:31:34](#t=1894)

And so that's kinda my point here, that I would want to— that the name here be something that people can understand. I think I've put it more down. So here would be, well, this one doesn't actually have a grand goose ambassador, but like something understandable, like attendee. Even if you wanna call at your attendees, like, I don't know, confirmed buddy, buddies. I don't know. Like, whatever you want to name that, that one is what it actually does. Like what it actually is. And the description is similarly, you know, awarded for making at least a hundred connections in the atmosphere conf, as opposed to like, maybe your description is like, I— sorry.

## [00:32:40](#t=1960)

Now the down to fuck is like going to be a thing for me, for my streams, cause I'm like, that's what came out of me, like another down to fuck joke. And like, no, no, no, no, no, stop with that. Making at least one hundred connection in atmosphere conf, that this is not appropriate. We don't— that's the intrusive thought, that's intrusive thought gremlin speaking directly to my subconscious. We don't need that. But you know, like something funny and normal that you're not gonna like get, code of conducted out of a community or a conference for.

## [00:33:23](#t=2003)

Something, yeah. So like, you know, something like that. I had this conflict, as you can imagine, like while doing anything where people are like, oh, this should be informative. And I'm like, no, this should be funny. So yes, I am trying to allow for both ways of being.

## [00:33:50](#t=2030)

Oh, this was actually the appearance one. Okay, it's done. So that was the— this is the idea. And then the other part being this appearance thing points to the official appearance of the badge. And if you want this never to change, because you are like, I promise you this badge appearance is not gonna change from under you, like, you know, I'm not gonna suddenly put— I'm not gonna turn your goose into a duck, and then you're mad because that was supposed to be a goose and not a duck.

## [00:34:27](#t=2067)

Yeah, you know it, you can determine that the appearance of the badge has been tampered with, or you cannot put it. So that's the first part of the changes I wanted to make. And then the other, like the actual bigger part of the appearance, this was, so this would have the title, which is what you get displayed, the `displayDescription`. See here I put in this one, my description was awarded to folks with FujoGuide Issue One, which is a description of what the badge does, and instead the `displayDescription` here is some people would do anything for catboys, even learn version control, which is funny.

## [00:35:28](#t=2128)

Which is what they want on my badge. I don't— like I awarded to folks who bought FujoGuide Issue One, yes, fine, okay, super great, that's like, that's informative. No one needs your informative text.

## [00:35:47](#t=2147)

So, yes. Okay, so we have that, and then I was gonna have URL, which I'm now feeling not great about, cause I wanna— I want to specify better what this URL should be. Like, see, this is something I hate about just generally.

## [00:36:19](#t=2179)

Trezy says: so the fallback flow is something like check for appearance sidecar, check for the title description and definition, title description from root definition. Yes, that's the fallback. There's, like, you know, if not everything else fail and there's no description, there's not appearance record, then fail it. But okay, so you're talking about the sidecar, and here is— okay, let me get there, because I have not really a spicy opinion, but I have a thought on about that, because the sidecar has been brought forward. And I understand the concept of a sidecar, and a supporting gives several levels of agency, which is a good thing.

## [00:37:08](#t=2228)

Thank you. I do think it's— yeah, I— this is what I want in a badge. I want to be able to, like, support many different ways of being, and that requires extensibility. Oh, Captain Calliope at the Streamplace chat says: do they have HR where you live?

## [00:37:36](#t=2256)

I started my own company, so I can be my own HR. And as long as no one complains to the Department of Labor, I'm fine, I think. I don't know. Do not take this as legal advice. I may not be fine. Now I'm curious, actually.

## [00:37:56](#t=2276)

When do... I think there's... Okay. No, no, we're not discussing whether I can make it workplace appropriate, but to like say down to fuck, I guess.

## [00:38:14](#t=2294)

Claim the down to fuckness of your community. Oh, Trezy moved there. Okay. Okay. So, let's continue. Let's not— do not involve HR. Do not involve HR.

## [00:38:34](#t=2314)

Okay. So yeah, that was my general idea. And you can see here that you have, again, title, `displayDescription`. Then I was putting an icon, which is kinda like, again, it can be an emoji, can be an actual URL to an image. That is meant to be the compact version of it, or the...

## [00:39:05](#t=2345)

Let me show you. So, this would like kind of be like, if you want a compact thing, you have the, like, the symbol here plus the name plus a color. That was the idea. And then you have an image, which is actually the longer thing. So for example here, cause I wanted to support both those and something like this Let's Git Coding.

## [00:39:35](#t=2375)

New Lexicon gets Boba to say Jim Ray, that is DTF. Okay. Okay. Okay. We can do it. We should tell Jim. I, I'm also thinking I'm DTF, down to formalize. But I don't know if there is a better one.

## [00:39:58](#t=2398)

Maybe we should do that sticker for, like, for lexicon community. Like, hey, Boris, you know, Boris, Nick, what do you say, think of my, I'm down to... no, sorry. Yes, I'm DTF sticker for lexicon community. Great marketing. Down to formalize is the perfect lexicon trojan horse. Yes.

## [00:40:38](#t=2438)

IETF DTF stickers. Yes. Yes. Okay. Okay. All right. Like, back at the actual lexicon making, we were saying. And then this is kind of the idea I had, and then I want to go to the, to both what I was mumbling on, and I kept mumbling on, and some of the discussion that there was underneath. Because I think this is a good start, but I don't, like, I think I'm going to regret some parts of this.

## [00:41:26](#t=2486)

And this is what, to me, this is what lexicons making is all about: how much am I going to regret things in a few years? And there's an interesting tension there, right?

## [00:41:41](#t=2501)

Because you have, like, you know, this has been part of the tension, because people are like, oh, you just get it out and iterate, and I'm like, yes. Also, maybe let's think about it. I'm not saying a lot, but like ten minutes more. And so I'm trying to find the right balance between these, and some of it comes from having more people doing it, that I, like, you know, that, that we can trust to maybe take up some patterns, like let's not mix presentation and like, you know, formal data that shouldn't, that cannot change in the same badge lexicon.

## [00:42:34](#t=2554)

Trezy says, I'm gonna read the rest, but Trezy said, it's one of the toughest thing with building directly into formalized namespaces I've found out. Yes. And it, and it's a weird tension, right? Cause like, as less you go on community, especially, I find it's a weird tension cause you are bought— oh, I have a whole other set of thoughts here. But yeah, like, you know, it, it's like people are gonna see what you do as a, like, sort of more official. And so if you're calling something lexicon community, which gives people the pa— the impression of legitimacy, then do you have a responsibility of putting in more work?

## [00:43:32](#t=2612)

How much responsibility do you have, especially when it comes with... When it intersects the ability to, like, experiment. I have thoughts about this, but we are trying to get things done. We are DTF, down to formalize here. Fre- oh, Trezy showed me the badges definitions for `trezy.pet`. I'm gonna look at it. And Calliope says, and Ballor, I mean, making enterprise ATProto untenable to PR and legal departments. I agree. I agree. That is, this is what it is, this is what this is. This is the, like, you know, gunshotting the neigh— like, shooting your gunshots in the neighborhood to keep rent down.

## [00:44:31](#t=2671)

Trezy says, I think the answer is one thousand percent, there's a lot of responsibility when adding anything to lexicon.community. I agree. Well, I... Oh, God, we shouldn't go in this discussion right now, but we... I want to have this discussion at some point because I think the discussion is important. I think...

## [00:44:55](#t=2695)

Okay, put it this way. As where, this is gonna be a summarization.

## [00:45:02](#t=2702)

People need to understand specifically what something is for and what it is promising. There is nothing wrong with promising something that's slightly different from people's expectations as long as you are clear about what the promise is. And so this is something that I would like to do with lexicon community, because what is exactly the promise here? I think it's a good discussion, and I think spelling that out as clearly as possible to everyone is gonna be better for both the people working in it and for the broader community to know.

## [00:45:55](#t=2755)

Because if not, you get like this conflict where everyone puts their own expectation on it, and you can't help but break them, because you— those expectations, you have no power over them. You stop having power over the expectation, which means there's always someone that's gonna have more expectations than you have planned for.

## [00:46:20](#t=2780)

So that's the thing. Lexicon community is going to need a lot more governance at some point, so you have a big bag of fish later. Yes. Come talk to me, because I'm in the technical steering committee. I don't know like how many people here know. So that's part of where I see the tension, and there is like everywhere it needs hell and more governance. The problem is making more governance happen, and making more governance happen when there is just like the people doing governance and the people— like the people are doing fifteen different roles right now.

## [00:46:57](#t=2817)

So we need to work on that. Oh, speaking of which, oh God, we keep getting distracted. Sorry. Speaking of which, Calliope, I just found out about, I forgot the name, but like Ecosystem Coalition something, and that you are part of it. We should talk about that. I didn't know. I just found out about it today, and by all means, let's have that discussion. Okay.

## [00:47:27](#t=2847)

Trezy says, an excellent time space, but I think it's also worthwhile to experiment and iterate. Yes, I agree. I actually... No, no, no, no. Miss Boba. Bad Miss Boba. What we were saying, yes, the ATProto badge. Oh my God, people, I am so bad at this. Miss Boba, keep a stream on track: challenge level impossible.

## [00:47:55](#t=2875)

This is the sad reality. Also my cat is crying. I will give her food. `trezy.pet`. Volume type, credit, and description name. Yeah, see, you also put name as like, kinda like the slug, and like kinda the ID, and I agree, that makes sense. It's just, I think name and ID are both good to have. And it frees up this sorta like permanent default meaning of the badge as a thing. So yeah.

## [00:48:52](#t=2932)

Badge definitions and awards. Okay. Ecosystem action. Yes, that one. What's the actual topic so I can do my part to not derail? The actual topic is...

## [00:49:09](#t=2949)

I, I've Been dragged into the community standards working group, and I have let this badge definition and awards proposal kinda sorta fizzle. And no, I need this, Trezy, this, I, we got to get badge passed it, but I do wanna make some changes. So we're making a final, finalish proposal, and this is where we're defining it. I agree, I like name plus ID, alternative title plus ID. Yeah, I would suggest reuse name, but for my badge definitions, name is equal `rkey`. Makes sense. I just would not— like, I asked about this, and there was some concern about the `rkey` may change, and I'm like, yeah, let's, you know, it's fine.

## [00:50:01](#t=3001)

Let's not use the R— let's not impose using the `rkey` for this. I'm gonna give my cat some food. Very quick, and I'll be back.

## [00:50:51](#t=3051)

Okay. So that was the ... she has been fed. Okay, so this was the thing, and then from the... I had a bunch of questions. I can bring it up again. So this was discussion about something different. There was some discussion about numbering against a total, and I think that's where a sidecar lexicon makes a lot of sense, or at the very least, kinda like a group of badges lexicon.

## [00:51:23](#t=3083)

Yeah, so there's that. Okay, and then there were some other comments.

## [00:51:38](#t=3098)

So what's the benefit of a ID field over `rkey`, because you can't index across ATProto on a field value?

## [00:51:49](#t=3109)

I think somewhere someone said, oh, tempting to do the `rkey`, but I can't imagine wanting to change the slug, even if it's rare, so having a global unique ID assigned, the creation of the badge can never change fields right. So that's basically my thinking, to... you can always have the badge name equals to the ID, sorry, the badge ID equals to the `rkey`. I'm just kinda... and maybe that is the fallback if there isn't... I'm just kinda like, why not have it? Like you can index across ATProto on a field value.

## [00:52:26](#t=3146)

Yeah, that's, again, that makes sense. And so I'm kinda like, well, we could have both.

## [00:52:42](#t=3162)

And yeah, that's my thinking, because for example, if you— well, I guess if you change the ID, the signature becomes invalid anyway. I just would prefer the AT URI to be stable.

## [00:53:03](#t=3183)

Yeah, but changing the `rkey` is going to be problematic regardless of whether it's human readable or not. That's why I'm saying, right, like you don't really change the `rkey`. Your ID field, any, for any reason you need to change the ID field, that is a lot less of an issue, even if the— for like all the AT URI out there. That's kind of my thinking. And you know, the ID, you maybe, one example that I was coming from was the AtmosphereConf. We don't know if— we didn't know the first time if there was going to be a second one.

## [00:53:39](#t=3219)

So like, you know, maybe we did the ID Atmosphere Conf, and now we want to be Atmosphere Conf dash 2025. It's not particularly— like, it's— there's always an issue because you're kind of invalidating things. But, you know, that's, like, I still feel more comfortable, put it that way.

## [00:54:09](#t=3249)

This is the whole thing I went through with the game records, like having to name the... re-change the IDs, just completely after the slug feels out of the record because it's not indexable. No, but these are great things to capture.

## [00:54:30](#t=3270)

I wish we had— maybe someone should do it— the lexicon design frustration thread, where you just go and put your frustration. It reminds me of this thing, which is really funny, which I don't know— well, I mean, I don't know how many people have heard of it. I really like reading tech Twitter. That's my endearing character flaw, is how I call it. And someone was talking about giving AI agents skill— actually, a command line tool called Papercut. And every time an AI agent would encounter an issue, they had told it, use Papercut and write down what the issue was.

## [00:55:21](#t=3321)

And so you basically had this whole thing with the AI agents would just like continuously file, like just file, oh, this went mildly wrong as they were doing things, and apparently everyone that has tried it is like, this is the most useful thing ever. And so I'm thinking kinda like that, but for humans. That's smart, right? I thought it was. And people have been finding it really interest— like really useful, and so I'm like, maybe that is what we need.

## [00:55:57](#t=3357)

Here we go. Now, okay. I'm gonna do this. Gonna do lexicon paper cuts thread. I'm gonna open this. We're gonna open the lexicon paper cuts threads. Cause it also gives us a good signal about what does the ecosystem need in terms of education on how to write these, or like what do we want to ask people to... Please, for the love of God, stop— no, no, stop doing this, but like, here is the solution to all your woes.

## [00:56:32](#t=3392)

So yeah, I think that's useful. Anyway, so the first part here was... I w- I was kinda like going through this, and the first part of it was here, going: so we have ID, name, description, and appearance. This is how I put this one. Okay, here is the thing. Appearance, you could argue that it should be a sidecar record. I don't love sidecars, though.

## [00:57:17](#t=3437)

Like my— one of my issues with sidecars is that they're hard to discover. So like, for example, imagine someone else does a different appearance lexicon.

## [00:57:36](#t=3456)

You would need to know that that's fine. No, no. Okay. First of all, I want to say, I think sidecars are great for certain uses. This— we are not discussing the fact that sidecars are useful. Wanna say, I think it's a very cool pattern. I am just saying in this case, it makes me, like, I wanna discuss what can go wrong, put it that way.

## [00:58:07](#t=3487)

Because as I was saying, like, if you have appearance here and someone wants to use a different lexicon for appearance, and I think this should be an open union, then, you know, if you have a sidecar, if only we had a protocol for discovering things, well, but you don't have it for like saying, here is a sidecar lexicon for this other lexicon, right? We don't have that. We could consider adding a, like, this is a sidecar for this field to lexicons, but that is a whole other type of proposal.

## [00:58:55](#t=3535)

So that, that's kind of like where I'm at. So if I wanted to do sidecar lexicon, yeah, yeah, you know, how, let's see, how deep can this rabbit hole go? It can go so deep. But like, if I wanted to be like, fuck lexicon community, I think their choices suck, and I wanted to do like the `did:web` slash FujoCoded dot com slash community com dot FujoCoded dot badge dot appearance. Like, I could do it. And the thing is, the infralex concern of interest. Yeah, I mean, that's kind of like where we were going.

## [00:59:43](#t=3583)

And I, and I'm not against it. I'm mostly just like, I want to go through it. That's kind of why I'm doing it right now. So that's the thing, right? So if I have the appearance here, someone can say, okay, this is, I see how this is. Like, I can discover this. I want to put all the API dot JSON and OpenAPI definitions into lexicon at some point. Oh, oh. It's like, that's perverse. I love it. I love it.

## [01:00:19](#t=3619)

You scientists were so worried about, Trezy says, right, but that's an application developer concern. You need to plan for its content, which means you need to know about its context, which means you need to come from it, from a real entry point, not just I found this thing on accident. Not wrong. Don't disagree. We can talk, actually, this goes to another thing that I was thinking.

## [01:00:57](#t=3657)

I don't, okay, so some people have talked also about the idea of having, how do you call it? Okay.

## [01:01:12](#t=3672)

I may be using the word wrong, but lexicon mixins, by which I mean, if you have this, like, if you get this URI and you're like, well, let's go see if this URI has like the same fields, you could in theory fall back.

## [01:01:35](#t=3695)

But you can't really go... Like, I'm trying to, what I'm trying to do, and I'll, I can give you the other thought I have, that maybe makes this different.

## [01:01:53](#t=3713)

But the other thought I have is, sorry, what I'm trying to do is I'm trying to basically create a Create, way for people to discover that there is more to do and implement and look at. I have some ideas, like, for example, something where I would like to, something I would like to do is making it easier to have standardized renderers for different lexicons. And so if you're doing that, you do not actually need to care about what's in here because you would have like a libraries, then that's all the type of badges that are possible, which you just giving it the badge appearance.

## [01:02:54](#t=3774)

But now if you are not, don't have this easily in the lexicon, now you don't have a way to easily get this information altogether. Like, you have to kind of go Through multiple steps. I don't know. I'm, but let me tell, shouldn't discovery come from the documentation for the lexicon? But people don't read. Like, I know, like, yes, and at the same time, I feel like the more you reduce the friction for people to have to discover something, the more that will be adopted. So again, sidecar lexicon, some of my fear is if we don't allow some sort of pointer from here to the appearance, everyone is just gonna implement lexicon communities version of it, and it's gonna be harder for new appearances to exist in the, to come up in the protocol.

## [01:03:57](#t=3837)

Cause for example, if you're logging all your requests, like think about this, if you are A developer logging all the requests, all the badges that you get, and you don't see a lot of badges without a corresponding sidecar lexicon for a badge definition.

## [01:04:23](#t=3863)

Now you are just like, well, this lexicon badges have no definition, have no appearance associated with that. But if you're logging and you see this appearance field, and you're like, well, I don't know about this appearance field, I'm seeing fifteen different lexicons in which the appearance field is a lexicon I don't know. Well, now you're motivated to go and be like, what is this and how can I display it? You actually make visible that more things are possible here, and you're not relying on people advocating and understanding for the things to be there.

## [01:05:00](#t=3900)

And so the, and you always have the name and description. So here, appearance, if we make it an open union, we can say we support the, we have provided a basic appearance from lexicon community, but you can make another one.

## [01:05:18](#t=3918)

But it can be another one, so like, you know, fallback if you don't know it. So yes, and there is a limit to how much friction reasonable to remove. Yeah, for sure, like, for sure, but I, that's true, and that's also like, and that's like, how do you do it?

## [01:05:44](#t=3944)

That's not true, and Depends how much it costs someone to remove that friction.

## [01:05:53](#t=3953)

You know, it's a balance, and that, that's part of like the discussions that we have. If I find a new lexicon, the first thing I do is reverse the NSID and start looking for more info. I feel like that's the bare minimum supporting discovery. But you, okay, but you wouldn't find a new lexicon, is my point. My point is this URI having this appearance here means you find a new lexicon. Not having that appearance there means you need to figure out that there is a sidecar for this, even though we don't have a standardized way to look for sidecars.

## [01:06:27](#t=3987)

So you rely a lot more on your knowledge of the ecosystem and on the ability to like, the willingness of someone of doing the jump of figuring out what a sidecar is and learning. I'm like, that's mostly what I'm saying. And I don't know, I think having the appearance here is, I, I'm gonna do the forgiveness, not permission, unless you really, really hate it, and it's optional, so you can do a sidecar, that sort of, like, I would keep it.

## [01:07:07](#t=4027)

But anyway, I do like sidecars and we can still use them. So that's also like, you can still have a sidecar for more information on the badge. So for example, well, let's go discuss the appearance, because I think the appearance makes sense. Also, I'm gonna, wait a second, I'm gonna order DoorDash because it's so late. What am I gonna order? I want Taxi burrito. No, burrito taxi, help me.

## [01:07:46](#t=4066)

Okay, not fried chicken. We're not doing fried chicken. I kind of want ramen, though.

## [01:07:55](#t=4075)

My partner isn't here, which means no one is cooking for me while I spend too much time thinking about protocols.

## [01:08:05](#t=4085)

I am blessed with a partner that has, like, seen my ADHD, struggling to ever get stuff cooked on time, and has been like, okay, you know what? I'm gonna try to lead this.

## [01:08:20](#t=4100)

Well, even cooking together is just kind of like, I'll try to do it when you're really, really busy. So right now he isn't here and I'm like, oh my god, it's nine ten. I am supposed to eat. That is a thing that people do.

## [01:08:37](#t=4117)

Mm-mm-mm. No fried chicken blasphemy, I know. I know. Okay, okay. Let me see. God, are these things expensive?

## [01:08:58](#t=4138)

I'm like, I can't believe that ordering a whole bunch of ramen coming straight up to my house from one of Oakland's many world-famous ramen place would be, would cost money. Okay.

## [01:09:30](#t=4170)

I am, uh-uh-uh. Looking at my options. But yeah, also talking while I do this, since it's gonna take me a second to decide. But yeah, so I, the other thing I have here is how to support multiple appearance in general. So I would like there to be a standardized thing for the, like, I do think there needs to be a community lexicon badge appearance, but I would like to think about extensions. And this was something that Zicklag was bringing up, like spoilers, but this is a bit more of the, like, Zicklag was mentioning extensions here.

## [01:10:28](#t=4228)

I don't know that extensions is the right thing, but I kind of I wanna have, I feel like I am being, I'm gonna be like, stop it, stop overcomplicating this. I kind of wanna add alternate appearances, because you, like, actually a badge has potentially multiple ones that people can, like, get different groups can support. So for example, different sizes, right? You can have a badge that, okay, if you have, If you're displaying it at five hundred times a million, like appearance of different format environments, yes.

## [01:11:26](#t=4286)

Like, if you're displaying it in a place where you need a square, or in a place where there's a lot of space, or in a simple row that has to be just like, you know, the eighty-eight by thirty-three things, those are different appearances for the same thing. And I think it matters. Like, that's a very, very common thing to want, a normal and reasonable thing to want for once.

## [01:12:04](#t=4324)

And I'm kinda like, you know, I can already feel the forum being like, Ms. Boba, stop overcomplicating this. No, Ms. Boba, bad Ms. Boba. But also I feel like, yeah, different formats, different environments. I already want them. I want this. I hate, like, so I have thoughts on this. I like the idea of creating that for the format, then everything else is an array, in an array. Yeah, that's what I was thinking. Like, I was thinking about an appearances, like, `alternates` array.

## [01:12:43](#t=4363)

Because you cannot put it in here, you cannot put it in the original definition, right? Like, so here is like, `alternates`, I don't know what, and this could be where the, It just makes particular strong sense for me to have these for badges. Cause we, you know, if you have, like, we all know about different appearances for badges, right? But you can also think about, how is it? Games, dot games. No, wait, we would have to be, I'm gonna do the `did:web`, I'm so sorry. I forget, I don't remember all the seconds are done, sorry.

## [01:13:43](#t=4423)

And then you add this, like, and this is, Steam, for example, Steam badge, G5. Oh God, it's, do I need another one?

## [01:14:07](#t=4447)

Do I apologize for having... Oops, I also got this one. This is badges.appearance, like Steam, you know?

## [01:14:25](#t=4465)

Oh, oh God, sorry, I can't get this one. Appearance, maybe we can do Steam badges, like, kinda like Steam-like, and then you have... Oh, this also needs, further, you have games, feature `gamesgamesgamesgames.games`, yes.

## [01:14:54](#t=4494)

So, like, you can have these, and then you can have, yeah, you can have Steam-like, PS5 style, I don't know, but like, and here we can have `fujocoded.com`. And then `com.fujocoded.badges.appearance`, and we are gonna have like, what do we do?

## [01:15:25](#t=4525)

I'm trying to think what's the, how do I want to create problems here? What can I do?

## [01:15:41](#t=4541)

I don't know. I don't know. AO3, whatever. You can't really put badges on AO3, but like, you know, actually we can do this overcomplicated badge lexicon. That's it.

## [01:16:10](#t=4570)

This is how we're gonna do it. Badge appearance. What? This is like, I refuse to, the...

## [01:16:23](#t=4583)

Where did my... Okay, okay, overcomplicated look. All 9,000 says, hi, who goes the code? We keep getting distracted. And I get the pedantic. If it's a generic badge type, do we know what's alternate versus primary? Why not have all items listed in an array without being prescriptive about what the default is? I agree. I was thinking about that, actually.

## [01:17:00](#t=4620)

I would see, put it this way, I Could see the lexicon community appearance one as a fallback, but like, you know, you could see these as being even more important. We need some, we need, first of all, we need some, how do you call it? We need to be precise about what this means, and I support being precise. Like, I support saying this is how you define a primary, this is like, you know, this is not more important than others, and we just got to be precise, and I support us Over-engineering this.

## [01:17:58](#t=4678)

It's not over-engineering, but it's my thing, but like also I support us doing it.

## [01:18:09](#t=4689)

We could, the issue of why I didn't do it immediately as an array is because of, you cannot change this, right? You cannot change it. So you can't keep adding without got getting back to the problem. And you're like, for what it worth, this is another thing I ran into with the game lexicon. I ended up giving games a media array with all the media items for cartridge, box artists, the primary media, but other application like Steamplace can and will choose different primaries. Yes. Yes, thank you for having done something and validating my pet peeves, that I haven't done like anything really where I can be like, oh, you know, like, I ran into this, but I have been thinking a lot about all of this, and I know that this is gonna be a problem.

## [01:19:09](#t=4749)

So yes, yes, I agree. I think that we need some of that. And this is a— one of the places where we'll encounter it.

## [01:19:27](#t=4767)

Like this is really one of the places where we encounter it. Like you have already. So first of all, the fact that you have already gives us ammunition, because I think, yeah, I don't know if you ever hear this, I love Boris and I love Nick, and I understand why they're like, try to push things through. I'm also like, you could stand to ...complicate things like ten minutes more. So I feel like I have to keep pushing to get some of these further out, and so I need your support, because again, I can already smell the Ms.

## [01:20:03](#t=4803)

Boba, we do not need an alternate. But I do think we do. There's like a hundred plus schema in G5 now, in fact, with so many lexicon design and more general data modeling issues. Oh, oh yeah, no, I mean, I can imagine. I really do think that, like, you know, I'll— one of the things that got me into ATProto was lexicons, because I always, like, it was lexicons, because as soon as I saw it, again, it validated my rant against— I'm sorry. You know, like, I was just like, everything is data modeling.

## [01:20:50](#t=4850)

We need to model data better. And it's so important to get, like, people to agree on data, and that is really hard. And then I saw this, and I was like, thank you. Got data with a shape that is, like, formalized in a new protocol. Now we have someone is coming, is gonna come here, like, what about the other 15,000 ways? Yes, I know. I know. But this is an ATProto ecosystem.

## [01:21:28](#t=4888)

So we can do it right this time. I am sure we are never gonna do anything that we're gonna regret in the future.

## [01:21:44](#t=4904)

There is a meme that's something like, I want to do X, which is a normal and healthy thing to aspire to. That's me with I want to do correct lexicon, which is a normal thing to want and aspire to. So, okay, I'm gonna get my ramen. One second.

## [01:22:32](#t=4952)

Dun. I'm like, you have to pay two dollars fifty to add corn to this ramen. I'm like, okay, I'll go cornless. There's already the soft-boiled egg in it, so we are in business. I'm getting a spicy tantan.

## [01:23:08](#t=4988)

And I'm also getting a— oh, they have matzo soup now. Oh, that looks so good. Soupless mixing ramen. I want soup tonight.

## [01:23:39](#t=5019)

And then I'm getting fried shishito because I need vegetables. I need to make my boyfriend proud.

## [01:23:53](#t=5033)

Boyfriend was like, you're gonna eat vegetables while I'm not there. I was like, yes, yes, I am a good girl. I eat my vegetables.

## [01:24:14](#t=5054)

Okay. Got it. Got it. Right, not even too bad. Oh, this is before. Oh, no, this is with the delivery fee. Okay. Okay. I can live with this.

## [01:24:55](#t=5095)

Wait, sorry, just one second. Oh, yes, that makes sense. I was like, I'm going to be a terrible person and add a Coke to it. I don't drink it often, but I was kind of like, yeah, I'm feeling like a terrible person today. And there was a— if you get a Coke, you get $4 off. But it came to the same total, and I was like, wait, but it didn't apply the deal. No, it did apply the deal. It's just that the Coke costs four dollars.

## [01:25:29](#t=5129)

So overall, it— I just came to the same place. Okay. I am placing the order. That's it. Arrives in thirteen minutes. You just— come on, give me some time.

## [01:26:08](#t=5168)

Love giggles is a motivation of faction— factor. I love it too.

## [01:26:16](#t=5176)

I guess you could call it giggle. I was thinking there's two main ways of doing things, and one is because of spite, and the second one is because it was funny.

## [01:26:31](#t=5191)

But also you should make even spite things done in spite because it was funny, because you can. And one other thing about doing this as an array without a prescriptive primary makes it more sensible in the future. The community appearance ends up being primary by default because there are no other appearance lexicon, but there absolutely will be, especially for games, I'd like immediately define an appearance lexicon specifically for `trezy.pet` to cover details that aren't in the core description or appearance, like unlock requirements for a chip.

## [01:27:06](#t=5226)

Yeah, no, I agree. I agree. And I think this is why you're particularly like well-suited to sort of figure out what, like, what to do here, because, okay, so for example, this appearance thing, right? We could say that the appearance lexicon— so first of all, I don't want to do a lexicon that is just the array, right? I don't want to do the f-sequence that is just the array. I think that's a— how do you call it? I think that's a, that— that's asking for trouble.

## [01:27:55](#t=5275)

But you could, if we said something like all lexicons, we ask that your appearance lexicon as an alternate, sorta kinda. Sort of kinda arraign it. Then even if you do a— so, so we can always do a— okay, we are asked pretty please people to provide an alternate here. So even if I don't know the lexicon, I can at least go look at the `alternates`. And maybe there is something there which is a lexicon community appearance, which I know how to render. Or we just, like, you put it in your `alternates`.

## [01:28:45](#t=5325)

I think there's also a difference between an alternate and an extensible, like an extension of the metadata. And don't kill me now, but I'm like, maybe if there's more metadata, like a more metadata extension that doesn't change the appearance itself. That is a more— that's potentially a sidecar lexicon. If not— okay, okay, look, what if we did this? We keep all of this. I also wanted to change URL cause I think this is way too— you say URL, people are gonna put two thousand different things in there, and they're all gonna— and like, and then you're gonna— not gonna be able to figure out what that is.

## [01:29:45](#t=5385)

So something like link, I kinda wanna be linked to— I don't know, it's not— cause it's not— if it's a link to the author of the badge, then it's author link. It's not URL. Like, you know, links to— or something, like on click. I— on click, you know?

## [01:30:15](#t=5415)

I just want to avoid name that don'ts that don't say anything or say too much.

## [01:30:28](#t=5428)

Also I'm a big fan of the— huh, I wonder what happens if I poke this approach. Yeah, no, definitely, that's a great approach. And maybe I am— I just feel we're passing the discourse because I feel like everybody's five thousand percent smarter than me.

## [01:30:42](#t=5442)

No, no, I think everyone feels like that is kind of the trick. It's kind of the trick. I also— come on, Trezy, with everything you've done and are doing, like, yeah, yeah. Like, shh. You've learned the whole AppView thing.

## [01:31:08](#t=5468)

Why are you... This is me realizing I haven't finished my coffee from this morning, so I'm drinking my coffee. How are you saying that?

## [01:31:23](#t=5483)

I know you put wine it, and so like, you know, yes, there's, you know, there's things, but regardless. I'll say it's WebLink. See, the WebLink has kind of the same issue where it's like a lot of things can be one. So this is kind of like, what I'm trying to do here is I'm trying to do a— When I look at this, I automatically know that is maybe `displayLink`, if we want to counter the description and link. Trezy, you're so smart, but you use Lua, so less smart.

## [01:32:12](#t=5532)

Only smart people, like, it's like the galaxy brain meme. It's okay, but it's not TypeScript.

## [01:32:26](#t=5546)

So, okay, hear me out. Hear me out. We do this, and then we do— You, you're not like the almost most powerful person inside Bluesky on the future of the protocol. Trezy. Okay, I don't want to call this appearance, but looks. Okay, I'm going to call it look. This is a name to be, but somewhat like appearance, but not appearance. Oh God, am I misspelling appearance again? Cause I was mis— yes, I am. Appearance. I had to correct it. This is, yes, cause the Italian word is apparenze, so it's like A P A.

## [01:33:50](#t=5630)

R E, and so that keeps fucking me over. Yeah, Trezy. Yeah, right? Like, come on, Trezy.

## [01:34:04](#t=5644)

But no, I— again, the trick is kinda like— the trick is that it feels always like that. Like, no one feels like they are as influen- not as influential, as powerful as they are. Like it's the thing I keep saying.

## [01:34:37](#t=5677)

Hi Umbra, sorry, there's Umbra in the Twitch chat. Like the things I Keep telling people is that it's just people. Like, it really is just people all the way down. And like, even the people that one perceives as most powerful or like as most like having it together is like, no, no, no, they— they're just a dude, even, like, gender neutral. Everyone feels like just a dude, and some of the— and this is pros and cons. One is at some point you realize you're not just a dude and you're like, oh, fuck, I didn't ask not to be, and now I am not, and this uncomfortable.

## [01:35:33](#t=5733)

Does this come with strings attached, even though I didn't ask for it? But like in general, that's been a thing that I have realized the more and more I meet people. And I know people that have done things that I'm like, you know, but you have done that thing. You felt like such a mythical creature. And now I talk to you and you're like, human? What?

## [01:36:05](#t=5765)

Anyway, sidecars don't require auto-definition. I feel like the prescriptivism is nearly to Lex— Lexicon, which is more wrong than there are a bunch of random ass sidecars.

## [01:36:18](#t=5778)

Okay. I— I'm just going to say none of this is stopping sidecars. But we were saying. So what I was thinking is it could also be something like this, and then this is like— And then this is the thing, and this is just like...

## [01:36:50](#t=5810)

Oh God. Is there a... Let me get a JSON. JSON notepad. Is this a thing? JSON tools for viewing and editing? No, I want it...

## [01:37:12](#t=5832)

Yeah, humans. So yeah, and also, oh, it's just us. It's like the, you know the meme with the guy on the bus where it's like, oh, it's just humans, and one side is really happy, and yeah, and then it's... Oh, it's just human on the other side. It's the guy being in despair. That's the beauty and the terror of it. This is just humans. Okay, JSON editor online. I— my— the— how do you call it? The discourse editor is lexicon phobic. That's— I'm declaring it, so.

## [01:38:02](#t=5882)

Okay. Tell me, transform, I don't know what that is, text tree table quoted object. I can't believe this would be my problem. Whatever. Oh, two of these. Transform, nope. Bagot, whatever, done. Oh, there, the— you can have a link. Not stopping sidecar, but its goal was to support discovery. Sidecar, however, listing the sidecar in the record blesses those sidecars, so any sidecar not listed there are not blessed and thus feel inherently less trustworthy.

## [01:38:35](#t=5915)

But it's not listed in the... Well, but like, so non-blessed sidecar become less discoverable. Okay, I think this is a discussion we should have maybe also with other people. Let me try to get this while my— before my ramen arrives. I think it's a worthy discussion.

## [01:39:04](#t=5944)

Yeah, I am open to being wrong here. I'm open to being wrong. I just would like to have the discussion, put it that way. I think we should have it. The issue I have is, like, discovering— well, I mean, I told you, right?

## [01:39:32](#t=5972)

Prod, what the fuck did I do? Sorry. What have I done? Okay, no, no, no, no. Okay, okay, okay. Sorry. I can do it. I don't know what I did, but I can do it. Right? Okay, okay.

## [01:40:03](#t=6003)

Oh God, what have I done? Is this right? Why are you red? Why do you hate me? Ocosiant image.

## [01:40:21](#t=6021)

Okay. Is this enough? Oh, oh, come on, JSON. I hate you, JSON. Why are you like that, JSON?

## [01:40:39](#t=6039)

I hate— I should have looked. Is there a JSONC here or something that's like JSON without comments? It's like, and then Satan said, let there be JSON without— but let's not give it comments or like dangling commas at the end. This is Satan's doing.

## [01:41:11](#t=6071)

The JSON untangled tango, I love it. I'm going to call it that way from now on.

## [01:41:20](#t=6080)

W-w-transform, okay, I just— oh, there's two. I just wanted to have it displayed the same copy. Okay, okay, we're doing text, tree, table. Switch to tree mode. Okay, tree. Okay, okay, that's it. So I wasn't really— what I was trying to do here was something like, type, like having types for anything that's more than this very, very simple thing. And I know this is now again— oh, I'm gonna put a lexicon in your lexicon, like it's lexicons all the way down. But this is kinda like, you know, bear with me.

## [01:42:13](#t=6133)

Like sorta, like, and so you could have a lot of this, right? You could have as many you want as just image, and you could have external records. Do you even need this? I don't know if you need this, but like, you know what I'm saying? JSON5 supports both comments and dangling support. Yes, yes, thank you. Yes. I know JSONC, may have seen JSON5, but like see the, like having this sort of, you know, you can put as many images here as you want, so you can have— whoa, why didn't you copy my second image?

## [01:43:08](#t=6188)

Because it's the same. And this is like, you know, and this is maybe just like small icon with get, with FujoGuide Git, and this is for like with five height, five, like this is the `aspectRatio` is like one. That's not necessarily the size, but like the `aspectRatio`, right?

## [01:43:48](#t=6228)

And so that allows for more, as many images as you want up to two hundred fif-five, two five six. Does it have a limit? I didn't know that.

## [01:44:03](#t=6243)

So like this would allow for different types. I guess you could even just do, I guess you could even do this, right? You could do— oh, come on. Oh, cause you have to do it this way. Like you could do type this and just inline it, and here you inline the data, right? That's the, like, here you get more data. So much data.

## [01:44:51](#t=6291)

No, give me this too. And this would be actually the, somewhere we had a FujoCoded lexicon there.

## [01:45:10](#t=6310)

I don't know that. No, the type is not the app, but it's like this. Oh my God, I'm so sorry. It should be like this, right? Should be like this. I forgot how this works.

## [01:45:28](#t=6328)

And you can still have like a URL, I guess, if you wanted.

## [01:45:37](#t=6337)

Does this make sense? Am I... Any consideration to define specific aspect ratio? Yeah, that's another thing I have like a whole treatise on, cause I feel like, cause I've, oh, I have this problem with like, I have this problem with profile banners, cause it's... You end up with a blessed quote-unquote profile banner size, and then everyone has to do it that way because everyone has only their profile, like their Bluesky profile banner. And if you're like, I want mine to be square, well, tough luck, because everyone is just a Bluesky profile banner, and those have a very fixed thing.

## [01:46:30](#t=6390)

And again, I'm not saying, you know, we don't have to fix it now, but I am, but yeah, I am like, what is, like, I have opinions. Type can be an AT-URI as long as it resolves to a record type. Really? Today I learned. I didn't know that. I do think we, you know, like, I think there could be here more like a, you know, like, category, and then you can have something like web, like, you know, target websites, and this one as target, I don't know. Like, you can have a lot of different things.

## [01:47:20](#t=6440)

I'm not saying you can't, like, we could, and I think that's a separate discussion. I am going to be murdered for proposing this, is my feeling. But I also think it makes sense.

## [01:47:36](#t=6456)

Because this would keep this to the very minimum, right? You have accent, you have icon, and you have an `accentColor`, you have the `displayLink`, and you can have...

## [01:47:54](#t=6474)

maybe click-through. What about click-through URL? How are we feeling about click-through URL? I know it's a mouthful, but it explains. Oh, well, maybe we can just do click-through. So if you have one thing to click through, that, well, URL, why not?

## [01:48:15](#t=6495)

Like, so you have like the very, very basics. But then here you can have a lot. And I do think this is something I would like to kinda get more thoughts to about, like, this badge appearance. How do we define a lot of these alternates? Because we're gonna keep needing it. Like for profiles, we need it, right? But yeah, like, oh my, I wanna save this.

## [01:48:51](#t=6531)

But we can extend. I think this lets us extend a lot, right? Like something like this does let us, like, alternate displays, you can consider icon and `accentColor` to be like an accent, just `accentColor`. Okay, I'm gonna be also bold, apologies, but I'm gonna make this a lexicon cause I am gonna be pissed if not. And we can do color, and then this can be like, well, I kinda just wanna like RGB, you know, like I kinda wanna be able to say, to keep this a bit more open.

## [01:49:46](#t=6586)

I have to think about it. I don't know that I love just having the `accentColor` in that format always. It, I feel like everyone is restricting me from having a lot of potential, like, you know, oh, let's, sure, let's keep everyone to the simplest RGB when we are, like, finally fought for web development to get different color spaces, you know?

## [01:50:18](#t=6618)

`sourceUrl` and link URLs. That's actually not bad. `sourceUrl`, `clickUrl`. I think I actually really like it, because it tells you who is the creator of it, like who owns it, and where to go when you click it. I do actually think that's a really good separation.

## [01:50:46](#t=6646)

Okay, I'll see, F for the win, right? Okay, okay, I'm gonna do it. I'm like, I'm so sorry, Nick, and everyone else who thinks I am a pedantic person, but I am RGB. This is the color scheme for type. My ramen has arrived.

## [01:51:12](#t=6672)

I am so sorry. I'm like, how was it? Remember that old meme, which is, I am in your X, do some verb your Y, is like, I am in your community, in your forum, overcomplicating your lexicons. But yeah, like, you could do appearance RGB, and then you can have red and whatever, like, or you can have it, like, code or something. Yeah. Cause you, right, I want the OKLCH. The ability to have that too. I don't know if this could also be an array, like we can keep overcomplicating it, but, and I will if you don't stop me.

## [01:52:02](#t=6722)

But, or if not, the alternative to this, what we can do is we can do RGB color, and then we put an actual RGB, and then in the future we can do color as like a separate field. I am, like, again, I am kind of sold about the precision color, because, you know, if you do color and you put RGB colors, you are inadvertently restricting the whole ecosystem to only using RGB colors, but we finally got the OKLCH and all of that. So if you're like, well, but we want to Of an RGB because everyone supports, because RGB is supported everywhere, OKLC is not.

## [01:52:49](#t=6769)

Fine, but let's do, let's allow then multiple formats. Yes, so sorry, I have opinions. I feel like the `accentColor` icon should also go into the appearance arrays and other format. I was thinking about that. I feel like, you know, I feel like it makes sense to me to have like the really minimum thing that one could use to display something, like an icon, a col- one color, and that's, you know, that's okay. That's the bare minimum, because I'm afraid that then you're going to get no alternate display, you know, and then you have nothing.

## [01:53:34](#t=6814)

But with an icon, a color, and a title, you can do a lot. It's kind of my thing. Yeah, that's what I think. Alternatively add community.simple with the color hex and icon. Yeah, that's like, and you could do an extension of this. Like, I, one thing I would like, I was thinking here was for the ones like this to have like type raised, so that you could have like, see, so you could tell people that this is meant to be kind of like something that looks a bit raised and so on, and put it in the appearance array.

## [01:54:18](#t=6858)

Yeah, no, I mean, that's kind of what I'm saying. I agree. I'm just saying that having icon and color as like the full, these are, this is the fallback, right? You can put more here, but this is the very minimum fallback. And you could add like, you could also have a, maybe not target, but you could have a, I don't know, type: preferred, I don't know, something to indicate that this is the one you prefer.

## [01:54:58](#t=6898)

I think there should be that. And it would be, like, it would be nice. I, we can also consider this like in order, you're supposed to get to the first one that fits. I don't know, we can keep discussing this. I think it makes sense to keep discussing this.

## [01:55:24](#t=6924)

Yep. Arrays are better for the decentralized environment. I actually agree. I think the arrays are great. I'm going to propose this. I'm going to die for everyone's sins, and I'm going to go there and I'm going to say, we have this, we have Trezy's blessing. Trezy has been doing an app for games, and Trezy has witnessed the errors, and Trezy says that we can have a, we can have an array there.

## [01:55:59](#t=6959)

Oh, wait, you had said something about Steam somewhere. I like the way Steam does library banners. You define the background, the logo, and whether the logo should show up at the top left or bottom left. You can go way further than that, but it's still very flexible. Yeah, that's interesting. We should, I should look at it, or like if you ever remember to send it to me. I really think that this type of thing with different images is something that we should get to, like, have a really long discussion about.

## [01:56:30](#t=6990)

Because I think it's one of the ways that centralization sneaks back in, or like uniformity at the very least. So, yeah. I'm gonna go get my ramen. Trezy says it should all be an array. Yes, yes. Yes, yes.

## [01:56:51](#t=7011)

I'm... Okay, go grab some scripture. Do it. So anyway, I'm gonna type this up. I'm gonna put it in the... Maybe tomorrow I should do the actual type this up, because it's 10 PM and I need to eat my ramen, but also do a bunch of things I still need doing, because this is hell.

## [01:57:16](#t=7036)

But yeah. I'm going to die for everyone's sins and then threatens to take Trezy along. We really need clippable boards. I'm really, we, I have them on Tw— like this is also on Twitch, so I don't know if you can like, if you can expand it, but yeah.

## [01:57:48](#t=7068)

We need to, I don't know how our like clippable bots are gonna be for my reputation.

## [01:58:00](#t=7080)

I can shoot in, like fire shots in the neighborhood for you all. But also, yes, me, I'm going to die for everyone's sins and like get Trezy to die with me. Accidentally get Trezy murdered. It's more fun to be together.

## [01:58:25](#t=7105)

We're all in this together, she says, as everyone gets, you know, murdered by the mob alongside her. Anyway, gonna go get my ramen. Thank you all for coming. What happens on Streamplace stays on Streamplace. Yes. Yes. For now, at least.

## [01:58:55](#t=7135)

Okay. Gonna go, or my ramen is getting cold. Bye. Bye, folks. Thanks for coming. I'll see you around.

## [01:59:04](#t=7144)

Bye-bye.
