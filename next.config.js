module.exports = {
	images: {
		domains: ["https", "a.storyblok.com"],
		loader: "imgix",
		path: "",
	},
	env: {
		STORYBLOK_API_KEY: process.env.STORYBLOK_API_KEY,
		STORYBLOK_PREVIEW_SECRET: process.env.STORYBLOK_PREVIEW_SECRET,
		FALLBACK: process.env.FALLBACK || false,
	},
};
