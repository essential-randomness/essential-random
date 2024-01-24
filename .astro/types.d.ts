declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';

	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>,
				import('astro/zod').ZodLiteral<'avif'>,
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<[BaseSchemaWithoutEffects, ...BaseSchemaWithoutEffects[]]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<BaseSchemaWithoutEffects, BaseSchemaWithoutEffects>;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"faqs": {
"bobaboard-subscription.md": {
	id: "bobaboard-subscription.md";
  slug: "bobaboard-subscription";
  body: string;
  collection: "faqs";
  data: any
} & { render(): Render[".md"] };
"call-topic.md": {
	id: "call-topic.md";
  slug: "call-topic";
  body: string;
  collection: "faqs";
  data: any
} & { render(): Render[".md"] };
"cancelling.md": {
	id: "cancelling.md";
  slug: "cancelling";
  body: string;
  collection: "faqs";
  data: any
} & { render(): Render[".md"] };
"favorite-support.md": {
	id: "favorite-support.md";
  slug: "favorite-support";
  body: string;
  collection: "faqs";
  data: any
} & { render(): Render[".md"] };
"icons-design.md": {
	id: "icons-design.md";
  slug: "icons-design";
  body: string;
  collection: "faqs";
  data: any
} & { render(): Render[".md"] };
"not-working.md": {
	id: "not-working.md";
  slug: "not-working";
  body: string;
  collection: "faqs";
  data: any
} & { render(): Render[".md"] };
"old-plan.md": {
	id: "old-plan.md";
  slug: "old-plan";
  body: string;
  collection: "faqs";
  data: any
} & { render(): Render[".md"] };
"secure-payment.md": {
	id: "secure-payment.md";
  slug: "secure-payment";
  body: string;
  collection: "faqs";
  data: any
} & { render(): Render[".md"] };
"splitting-your-time.md": {
	id: "splitting-your-time.md";
  slug: "splitting-your-time";
  body: string;
  collection: "faqs";
  data: any
} & { render(): Render[".md"] };
};
"posts": {
"doing-content-right/index.mdx": {
	id: "doing-content-right/index.mdx";
  slug: "doing-content-right";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".mdx"] };
"enter-the-fujoverse/index.mdx": {
	id: "enter-the-fujoverse/index.mdx";
  slug: "enter-the-fujoverse";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".mdx"] };
"entry2.mdx": {
	id: "entry2.mdx";
  slug: "entry2";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".mdx"] };
"extravaganzas/1-now-its-time-to-find-out/index.mdx": {
	id: "extravaganzas/1-now-its-time-to-find-out/index.mdx";
  slug: "extravaganzas/1-now-its-time-to-find-out";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".mdx"] };
"extravaganzas/2-2-llc-vs-nonprofit/index.mdx": {
	id: "extravaganzas/2-2-llc-vs-nonprofit/index.mdx";
  slug: "extravaganzas/2-2-llc-vs-nonprofit";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".mdx"] };
"extravaganzas/index.mdx": {
	id: "extravaganzas/index.mdx";
  slug: "extravaganzas";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".mdx"] };
"get-static-paths/index.mdx": {
	id: "get-static-paths/index.mdx";
  slug: "get-static-paths";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".mdx"] };
"getting-things-started/index.mdx": {
	id: "getting-things-started/index.mdx";
  slug: "getting-things-started";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".mdx"] };
"html-css-what-next/index.mdx": {
	id: "html-css-what-next/index.mdx";
  slug: "html-css-what-next";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".mdx"] };
"the-fight-for-the-open-web/index.mdx": {
	id: "the-fight-for-the-open-web/index.mdx";
  slug: "the-fight-for-the-open-web";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".mdx"] };
"the-last-month-of-bobaboard/index.mdx": {
	id: "the-last-month-of-bobaboard/index.mdx";
  slug: "the-last-month-of-bobaboard";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".mdx"] };
"tip-jar-with-stripe-and-paypal/index.mdx": {
	id: "tip-jar-with-stripe-and-paypal/index.mdx";
  slug: "tip-jar-with-stripe-and-paypal";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".mdx"] };
};
"projects": {
"ao3-dot-js.mdx": {
	id: "ao3-dot-js.mdx";
  slug: "ao3-dot-js";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".mdx"] };
"astrolabe.mdx": {
	id: "astrolabe.mdx";
  slug: "astrolabe";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".mdx"] };
"bobaboard.mdx": {
	id: "bobaboard.mdx";
  slug: "bobaboard";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".mdx"] };
"build-our-website.mdx": {
	id: "build-our-website.mdx";
  slug: "build-our-website";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".mdx"] };
"fandom-coders.mdx": {
	id: "fandom-coders.mdx";
  slug: "fandom-coders";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".mdx"] };
"fujoboard.mdx": {
	id: "fujoboard.mdx";
  slug: "fujoboard";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".mdx"] };
"fujoguide.mdx": {
	id: "fujoguide.mdx";
  slug: "fujoguide";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".mdx"] };
"personal-website.mdx": {
	id: "personal-website.mdx";
  slug: "personal-website";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".mdx"] };
"robinboob.mdx": {
	id: "robinboob.mdx";
  slug: "robinboob";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".mdx"] };
};
"testimonials": {
"a-good-friend-and-a-deep-thinker-who-tru.md": {
	id: "a-good-friend-and-a-deep-thinker-who-tru.md";
  slug: "a-good-friend-and-a-deep-thinker-who-tru";
  body: string;
  collection: "testimonials";
  data: any
} & { render(): Render[".md"] };
"always-had-a-knack-for-solving-problems.md": {
	id: "always-had-a-knack-for-solving-problems.md";
  slug: "always-had-a-knack-for-solving-problems";
  body: string;
  collection: "testimonials";
  data: any
} & { render(): Render[".md"] };
"always-really-insightful-and-has-a-belie.md": {
	id: "always-really-insightful-and-has-a-belie.md";
  slug: "always-really-insightful-and-has-a-belie";
  body: string;
  collection: "testimonials";
  data: any
} & { render(): Render[".md"] };
"an-accomplished-coder-developer-consulta.md": {
	id: "an-accomplished-coder-developer-consulta.md";
  slug: "an-accomplished-coder-developer-consulta";
  body: string;
  collection: "testimonials";
  data: any
} & { render(): Render[".md"] };
"building-bobaboard-effort.md": {
	id: "building-bobaboard-effort.md";
  slug: "building-bobaboard-effort";
  body: string;
  collection: "testimonials";
  data: any
} & { render(): Render[".md"] };
"fandom-old-and-software-engineer.md": {
	id: "fandom-old-and-software-engineer.md";
  slug: "fandom-old-and-software-engineer";
  body: string;
  collection: "testimonials";
  data: any
} & { render(): Render[".md"] };
"first-hand-professional-silicon-valley-f.md": {
	id: "first-hand-professional-silicon-valley-f.md";
  slug: "first-hand-professional-silicon-valley-f";
  body: string;
  collection: "testimonials";
  data: any
} & { render(): Render[".md"] };
"i-couldnt-have-gotten-me-and-my-website.md": {
	id: "i-couldnt-have-gotten-me-and-my-website.md";
  slug: "i-couldnt-have-gotten-me-and-my-website";
  body: string;
  collection: "testimonials";
  data: any
} & { render(): Render[".md"] };
"i-trust-ms-bobas-efforts-to-shape-better.md": {
	id: "i-trust-ms-bobas-efforts-to-shape-better.md";
  slug: "i-trust-ms-bobas-efforts-to-shape-better";
  body: string;
  collection: "testimonials";
  data: any
} & { render(): Render[".md"] };
"if-she-could-adopt-me.md": {
	id: "if-she-could-adopt-me.md";
  slug: "if-she-could-adopt-me";
  body: string;
  collection: "testimonials";
  data: any
} & { render(): Render[".md"] };
"infectious-enthusiasm.md": {
	id: "infectious-enthusiasm.md";
  slug: "infectious-enthusiasm";
  body: string;
  collection: "testimonials";
  data: any
} & { render(): Render[".md"] };
"one-of-the-few-people-i-trust-to-navigat.md": {
	id: "one-of-the-few-people-i-trust-to-navigat.md";
  slug: "one-of-the-few-people-i-trust-to-navigat";
  body: string;
  collection: "testimonials";
  data: any
} & { render(): Render[".md"] };
"possibly-one-of-the-most-positive-encour.md": {
	id: "possibly-one-of-the-most-positive-encour.md";
  slug: "possibly-one-of-the-most-positive-encour";
  body: string;
  collection: "testimonials";
  data: any
} & { render(): Render[".md"] };
"the-kind-of-person-who-can-not-only-come.md": {
	id: "the-kind-of-person-who-can-not-only-come.md";
  slug: "the-kind-of-person-who-can-not-only-come";
  body: string;
  collection: "testimonials";
  data: any
} & { render(): Render[".md"] };
"the-only-person-ive-seen-approach-buildi.md": {
	id: "the-only-person-ive-seen-approach-buildi.md";
  slug: "the-only-person-ive-seen-approach-buildi";
  body: string;
  collection: "testimonials";
  data: any
} & { render(): Render[".md"] };
"uniquely-creative-and-continues-to-guide.md": {
	id: "uniquely-creative-and-continues-to-guide.md";
  slug: "uniquely-creative-and-continues-to-guide";
  body: string;
  collection: "testimonials";
  data: any
} & { render(): Render[".md"] };
"zz-a-fantastic-webdev-and-social-space-crea.md": {
	id: "zz-a-fantastic-webdev-and-social-space-crea.md";
  slug: "zz-a-fantastic-webdev-and-social-space-crea";
  body: string;
  collection: "testimonials";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"socials": {
"socials": {
	id: "socials";
  collection: "socials";
  data: any
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = never;
}
