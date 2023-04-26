export default async function getTwitterUsername(username) {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json();
    return (data.twitter_username) ? data.twitter_username : username;
}
