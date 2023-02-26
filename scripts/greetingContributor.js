const core = require('@actions/core');

module.exports = async (client, context, issueMessage, prMessage, footer) => {
    try {
        const issue = await client.rest.issues.get({
            owner: context.issue.owner,
            repo: context.issue.repo,
            issue_number: context.issue.number,
        })
        const issueData = issue.data
        const labels = issueData.labels.map(label => label.name)

        if (context.payload.action !== 'opened' || labels.includes('story::comment') === true) {
            console.log('No issue / pull request was opened, skipping');
            return;
        }

        const footerTags = `<p>${footer}</p>`;

        if (!!context.payload.issue) {
            await client.rest.issues.createComment({
                owner: context.issue.owner,
                repo: context.issue.repo,
                issue_number: context.issue.number,
                body: issueMessage + footerTags
            });
        } else {
            await client.rest.pulls.createReview({
                owner: context.issue.owner,
                repo: context.issue.repo,
                pull_number: context.issue.number,
                body: prMessage + footerTags,
                event: 'COMMENT'
            });
        }
    } catch (error) {
        core.setFailed(error.message);
    }
}