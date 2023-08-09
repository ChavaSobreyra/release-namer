const core = require("@actions/core");
const { generateSlug } = require("random-word-slugs");

try {
  const releaseName = generateSlug(2, {
    format: "title",
    partsOfSpeech: ["adjective", "noun"],
  });

  core.setOutput("RELEASE_NAME", releaseName);

  console.log({ slug });

  // determine if needs name prepended
  // prepend name
} catch (error) {
  core.setFailed(error.message);
}
