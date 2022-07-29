const {Octokit} = require("@octokit/action");

const octokit = new Octokit();
const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
const runId = process.env.GITHUB_RUN_ID;

async function run() {
// See https://developer.github.com/v3/issues/#create-an-issue
    const { data } = await octokit.rest.actions.listJobsForWorkflowRun({
        owner,
        repo,
        runId,
    });


    console.log(data);
}

run()