const core = require('@actions/core');
const github = require('@actions/github');

try {
  const who = core.getInput('who-to-greet');
  console.log('Hello, ' + who + '!');
  console.log('Triggered by: ' + github.context.actor);
  core.setOutput('time', new Date().toTimeString());
} catch (error) {
  core.setFailed(error.message);
}
