import { Octokit } from "https://cdn.skypack.dev/@octokit/rest"

export const getAllContributors = async () => {
    try {
        const owner = 'darkterminal'
        const repo = 'metaphore'

        const octokit = new Octokit({
            auth: "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"
        })

        const contributors = await octokit.request(`GET /repos/${owner}/${repo}/contributors`, {
            owner,
            repo
        })

        const contents = await octokit.request(`GET /repos/${owner}/${repo}/contents/collections/stories?ref=scp-react`, {
            owner,
            repo,
            path: '/collections/stories'
        })
        console.log(contents)
        return contributors.data
    } catch (error) {
        console.log(`Error on getAllContributors: ${error}`)
        return 0
    }
}
