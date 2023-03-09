exports.data = function() {
  return {
    // generate directly to the serverless bundle folder
    permalink: "./netlify/functions/serverless/_generated-serverless-collections.json",
    permalinkBypassOutputDir: true,
		eleventyExcludeFromCollections: true,
  };
};

exports.render = function({collections}) {
  let entries = [];
  // Iterate over any items with the `sidebarNav` tag
  for(let entry of collections.post) {
    entries.push({
      data: {
        title: entry.data.title,
        page: entry.data.page,
      }
    });
  }

  return JSON.stringify({
    post: entries
  }, null, 2);
};