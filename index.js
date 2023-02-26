const core = require('@actions/core');
const github = require('@actions/github');
const storyGenerator = require('./scripts/storyGenerator');

async function run() {
  try {
    const githubToken = core.getInput('github-token', { required: true });
    const client = github.getOctokit(githubToken);
    const context = github.context;

    await storyGenerator(client, context)
  } catch (error) {
    core.setFailed(error.message);
  }
}
run()