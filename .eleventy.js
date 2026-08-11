// 11ty config for TBI-Insights.
//
// Three content collections: capabilities/, case-studies/, signals/.
// Each markdown file has a permalink `/{type}/{slug}/`. The home page (index.njk)
// reads all three collections and produces a card grid with filter chips.
//
// Static assets (fonts, images, base.css) are copied through unchanged.

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy({ "_includes/base.css": "base.css" });

  // Collections in publication order (newest first) — sorted by frontmatter `date`.
  const byDate = (a, b) => new Date(b.data.date) - new Date(a.data.date);

  eleventyConfig.addCollection("capabilities", (api) =>
    api.getFilteredByGlob("content/capabilities/*.md").sort(byDate)
  );
  eleventyConfig.addCollection("caseStudies", (api) =>
    api.getFilteredByGlob("content/case-studies/*.md").sort(byDate)
  );
  eleventyConfig.addCollection("signals", (api) =>
    api.getFilteredByGlob("content/signals/*.md").sort(byDate)
  );
  eleventyConfig.addCollection("allInsights", (api) =>
    api.getFilteredByGlob("content/**/*.md").sort(byDate)
  );

  // Format a date as "07 Aug 2026" — matches the TBI voice rule (no US m/d/y).
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    const d = new Date(dateObj);
    return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  });

  // Human-readable vertical label filter — passes through, extension point for aliases.
  eleventyConfig.addFilter("verticalLabel", (v) => v);

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
    pathPrefix: "/insights/",
  };
};
