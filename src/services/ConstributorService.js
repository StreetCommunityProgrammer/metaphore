import { Octokit } from "https://cdn.skypack.dev/@octokit/rest"

export const getAllContributors = async () => {
    const github = new Octokit({
        auth: import.meta.env.VITE_GITHUB_TOKEN
    })

    const contributors = await github.rest.repos.listContributors({
        owner: 'StreetCommunityProgrammer',
        repo: 'metaphore',
    });
    return contributors.data
}
