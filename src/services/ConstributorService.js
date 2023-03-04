import { Octokit } from "https://cdn.skypack.dev/@octokit/rest"

export const getAllContributors = async () => {
    try {
        const github = new Octokit({
            auth: import.meta.env.VITE_GITHUB_TOKEN
        })
        const owner = 'StreetCommunityProgrammer'
        const repo = 'metaphore'

        const contributors = await github.rest.repos.listContributors({
            owner,
            repo
        })
        return contributors.data
    } catch (error) {
        console.log(`Error on getAllContributors: ${error}`)
        return 0
    }
}
