const { Base64 } = require('js-base64');
const replace = require('replace-in-file');
const { promises: fsPromises } = require('fs');
const slugify = require('./utils/slugify');

module.exports = async (client, context) => {
  try {
    const issue = await client.rest.issues.get({
      owner: context.issue.owner,
      repo: context.issue.repo,
      issue_number: context.issue.number,
    })
    const issueData = issue.data

    if (issueData.state === 'closed') {
      const labels = issueData.labels.map(label => label.name)

      // Metaphor Categories
      const isCssMetaphor = labels.every(label => ['metaphore', 'css'].includes(label))
      const isJavaScriptMetaphor = labels.every(label => ['metaphore', 'javascript'].includes(label))
      const isJavaMetaphor = labels.every(label => ['metaphore', 'java'].includes(label))
      const isMathsMetaphor = labels.every(label => ['metaphore', 'maths'].includes(label))
      const isPythonMetaphor = labels.every(label => ['metaphore', 'python'].includes(label))
      const isPhpMetaphor = labels.every(label => ['metaphore', 'php'].includes(label))
      const isPhysicsMetaphor = labels.every(label => ['metaphore', 'physics'].includes(label))
      const isRubyMetaphor = labels.every(label => ['metaphore', 'ruby'].includes(label))
      const isRustMetaphor = labels.every(label => ['metaphore', 'rust'].includes(label))
      const isZigMetaphor = labels.every(label => ['metaphore', 'zig'].includes(label))

      if (isCssMetaphor) {
        console.log(`Is css metaphor`)
        const metaphorTitle = slugify(issueData.title)
        const result = await replace({
          files: 'templates/stories.txt',
          from: ['{title}', '{author}', '{created_at}', '{language}', '{content}'],
          to: [issueData.title, issueData.user.login, issueData.created_at, 'css', issueData.body]
        })
        console.log('Replacement result: ' + JSON.stringify(result, undefined, 2))
        const markdownContent = await fsPromises.readFile('templates/stories.txt', 'utf-8')
        const metaphorContent = Base64.encode(markdownContent)
        const createContent = await client.rest.repos.createOrUpdateFileContents({
          owner: context.issue.owner,
          repo: context.issue.repo,
          path: `_stories/css/${metaphorTitle}.md`,
          message: `docs(generate): new metaphor from @${issueData.user.login}`,
          content: metaphorContent,
          committer: {
            name: 'Imam Ali Mustofa',
            email: 'd.darkterminal@gmail.com'
          },
          author: {
            name: 'Imam Ali Mustofa',
            email: 'd.darkterminal@gmail.com'
          }
        })
        console.log(`Content Metadata: ${JSON.stringify(createContent, undefined, 2)}`)
      } else if (isJavaScriptMetaphor) {
        console.log(`Is javascript metaphor`)
        const metaphorTitle = slugify(issueData.title)
        const result = await replace({
          files: 'templates/stories.txt',
          from: ['{title}', '{author}', '{created_at}', '{language}', '{content}'],
          to: [issueData.title, issueData.user.login, issueData.created_at, 'javascript', issueData.body]
        })
        console.log('Replacement result: ' + JSON.stringify(result, undefined, 2))
        const markdownContent = await fsPromises.readFile('templates/stories.txt', 'utf-8')
        const metaphorContent = Base64.encode(markdownContent)
        const createContent = await client.rest.repos.createOrUpdateFileContents({
          owner: context.issue.owner,
          repo: context.issue.repo,
          path: `_stories/javascript/${metaphorTitle}.md`,
          message: `docs(generate): new metaphor from @${issueData.user.login}`,
          content: metaphorContent,
          committer: {
            name: 'Imam Ali Mustofa',
            email: 'd.darkterminal@gmail.com'
          },
          author: {
            name: 'Imam Ali Mustofa',
            email: 'd.darkterminal@gmail.com'
          }
        })
        console.log(`Content Metadata: ${JSON.stringify(createContent, undefined, 2)}`)
      } else if (isJavaMetaphor) {
        console.log(`Is java metaphor`)
        const metaphorTitle = slugify(issueData.title)
        const result = await replace({
          files: 'templates/stories.txt',
          from: ['{title}', '{author}', '{created_at}', '{language}', '{content}'],
          to: [issueData.title, issueData.user.login, issueData.created_at, 'java', issueData.body]
        })
        console.log('Replacement result: ' + JSON.stringify(result, undefined, 2))
        const markdownContent = await fsPromises.readFile('templates/stories.txt', 'utf-8')
        const metaphorContent = Base64.encode(markdownContent)
        const createContent = await client.rest.repos.createOrUpdateFileContents({
          owner: context.issue.owner,
          repo: context.issue.repo,
          path: `_stories/java/${metaphorTitle}.md`,
          message: `docs(generate): new metaphor from @${issueData.user.login}`,
          content: metaphorContent,
          committer: {
            name: 'Imam Ali Mustofa',
            email: 'd.darkterminal@gmail.com'
          },
          author: {
            name: 'Imam Ali Mustofa',
            email: 'd.darkterminal@gmail.com'
          }
        })
        console.log(`Content Metadata: ${JSON.stringify(createContent, undefined, 2)}`)
      } else if (isMathsMetaphor) {
        console.log(`Is maths metaphor`)
        const metaphorTitle = slugify(issueData.title)
        const result = await replace({
          files: 'templates/stories.txt',
          from: ['{title}', '{author}', '{created_at}', '{language}', '{content}'],
          to: [issueData.title, issueData.user.login, issueData.created_at, 'maths', issueData.body]
        })
        console.log('Replacement result: ' + JSON.stringify(result, undefined, 2))
        const markdownContent = await fsPromises.readFile('templates/stories.txt', 'utf-8')
        const metaphorContent = Base64.encode(markdownContent)
        const createContent = await client.rest.repos.createOrUpdateFileContents({
          owner: context.issue.owner,
          repo: context.issue.repo,
          path: `_stories/maths/${metaphorTitle}.md`,
          message: `docs(generate): new metaphor from @${issueData.user.login}`,
          content: metaphorContent,
          committer: {
            name: 'Imam Ali Mustofa',
            email: 'd.darkterminal@gmail.com'
          },
          author: {
            name: 'Imam Ali Mustofa',
            email: 'd.darkterminal@gmail.com'
          }
        })
        console.log(`Content Metadata: ${JSON.stringify(createContent, undefined, 2)}`)
      } else if (isPythonMetaphor) {
        console.log(`Is python metaphor`)
        const metaphorTitle = slugify(issueData.title)
        const result = await replace({
          files: 'templates/stories.txt',
          from: ['{title}', '{author}', '{created_at}', '{language}', '{content}'],
          to: [issueData.title, issueData.user.login, issueData.created_at, 'python', issueData.body]
        })
        console.log('Replacement result: ' + JSON.stringify(result, undefined, 2))
        const markdownContent = await fsPromises.readFile('templates/stories.txt', 'utf-8')
        const metaphorContent = Base64.encode(markdownContent)
        const createContent = await client.rest.repos.createOrUpdateFileContents({
          owner: context.issue.owner,
          repo: context.issue.repo,
          path: `_stories/python/${metaphorTitle}.md`,
          message: `docs(generate): new metaphor from @${issueData.user.login}`,
          content: metaphorContent,
          committer: {
            name: 'Imam Ali Mustofa',
            email: 'd.darkterminal@gmail.com'
          },
          author: {
            name: 'Imam Ali Mustofa',
            email: 'd.darkterminal@gmail.com'
          }
        })
        console.log(`Content Metadata: ${JSON.stringify(createContent, undefined, 2)}`)
      } else if (isPhpMetaphor) {
        console.log(`Is php metaphor`)
        const metaphorTitle = slugify(issueData.title)
        const result = await replace({
          files: 'templates/stories.txt',
          from: ['{title}', '{author}', '{created_at}', '{language}', '{content}'],
          to: [issueData.title, issueData.user.login, issueData.created_at, 'php', issueData.body]
        })
        console.log('Replacement result: ' + JSON.stringify(result, undefined, 2))
        const markdownContent = await fsPromises.readFile('templates/stories.txt', 'utf-8')
        const metaphorContent = Base64.encode(markdownContent)
        const createContent = await client.rest.repos.createOrUpdateFileContents({
          owner: context.issue.owner,
          repo: context.issue.repo,
          path: `_stories/php/${metaphorTitle}.md`,
          message: `docs(generate): new metaphor from @${issueData.user.login}`,
          content: metaphorContent,
          committer: {
            name: 'Imam Ali Mustofa',
            email: 'd.darkterminal@gmail.com'
          },
          author: {
            name: 'Imam Ali Mustofa',
            email: 'd.darkterminal@gmail.com'
          }
        })
        console.log(`Content Metadata: ${JSON.stringify(createContent, undefined, 2)}`)
      } else if (isPhysicsMetaphor) {
        console.log(`Is physics metaphor`)
        const metaphorTitle = slugify(issueData.title)
        const result = await replace({
          files: 'templates/stories.txt',
          from: ['{title}', '{author}', '{created_at}', '{language}', '{content}'],
          to: [issueData.title, issueData.user.login, issueData.created_at, 'physics', issueData.body]
        })
        console.log('Replacement result: ' + JSON.stringify(result, undefined, 2))
        const markdownContent = await fsPromises.readFile('templates/stories.txt', 'utf-8')
        const metaphorContent = Base64.encode(markdownContent)
        const createContent = await client.rest.repos.createOrUpdateFileContents({
          owner: context.issue.owner,
          repo: context.issue.repo,
          path: `_stories/physics/${metaphorTitle}.md`,
          message: `docs(generate): new metaphor from @${issueData.user.login}`,
          content: metaphorContent,
          committer: {
            name: 'Imam Ali Mustofa',
            email: 'd.darkterminal@gmail.com'
          },
          author: {
            name: 'Imam Ali Mustofa',
            email: 'd.darkterminal@gmail.com'
          }
        })
        console.log(`Content Metadata: ${JSON.stringify(createContent, undefined, 2)}`)
      } else if (isRubyMetaphor) {
        console.log(`Is ruby metaphor`)
        const metaphorTitle = slugify(issueData.title)
        const result = await replace({
          files: 'templates/stories.txt',
          from: ['{title}', '{author}', '{created_at}', '{language}', '{content}'],
          to: [issueData.title, issueData.user.login, issueData.created_at, 'ruby', issueData.body]
        })
        console.log('Replacement result: ' + JSON.stringify(result, undefined, 2))
        const markdownContent = await fsPromises.readFile('templates/stories.txt', 'utf-8')
        const metaphorContent = Base64.encode(markdownContent)
        const createContent = await client.rest.repos.createOrUpdateFileContents({
          owner: context.issue.owner,
          repo: context.issue.repo,
          path: `_stories/ruby/${metaphorTitle}.md`,
          message: `docs(generate): new metaphor from @${issueData.user.login}`,
          content: metaphorContent,
          committer: {
            name: 'Imam Ali Mustofa',
            email: 'd.darkterminal@gmail.com'
          },
          author: {
            name: 'Imam Ali Mustofa',
            email: 'd.darkterminal@gmail.com'
          }
        })
        console.log(`Content Metadata: ${JSON.stringify(createContent, undefined, 2)}`)
      } else if (isRustMetaphor) {
        console.log(`Is rust metaphor`)
        const metaphorTitle = slugify(issueData.title)
        const result = await replace({
          files: 'templates/stories.txt',
          from: ['{title}', '{author}', '{created_at}', '{language}', '{content}'],
          to: [issueData.title, issueData.user.login, issueData.created_at, 'rust', issueData.body]
        })
        console.log('Replacement result: ' + JSON.stringify(result, undefined, 2))
        const markdownContent = await fsPromises.readFile('templates/stories.txt', 'utf-8')
        const metaphorContent = Base64.encode(markdownContent)
        const createContent = await client.rest.repos.createOrUpdateFileContents({
          owner: context.issue.owner,
          repo: context.issue.repo,
          path: `_stories/rust/${metaphorTitle}.md`,
          message: `docs(generate): new metaphor from @${issueData.user.login}`,
          content: metaphorContent,
          committer: {
            name: 'Imam Ali Mustofa',
            email: 'd.darkterminal@gmail.com'
          },
          author: {
            name: 'Imam Ali Mustofa',
            email: 'd.darkterminal@gmail.com'
          }
        })
        console.log(`Content Metadata: ${JSON.stringify(createContent, undefined, 2)}`)
      } else if (isZigMetaphor) {
        console.log(`Is zig metaphor`)
        const metaphorTitle = slugify(issueData.title)
        const result = await replace({
          files: 'templates/stories.txt',
          from: ['{title}', '{author}', '{created_at}', '{language}', '{content}'],
          to: [issueData.title, issueData.user.login, issueData.created_at, 'zig', issueData.body]
        })
        console.log('Replacement result: ' + JSON.stringify(result, undefined, 2))
        const markdownContent = await fsPromises.readFile('templates/stories.txt', 'utf-8')
        const metaphorContent = Base64.encode(markdownContent)
        const createContent = await client.rest.repos.createOrUpdateFileContents({
          owner: context.issue.owner,
          repo: context.issue.repo,
          path: `_stories/zig/${metaphorTitle}.md`,
          message: `docs(generate): new metaphor from @${issueData.user.login}`,
          content: metaphorContent,
          committer: {
            name: 'Imam Ali Mustofa',
            email: 'd.darkterminal@gmail.com'
          },
          author: {
            name: 'Imam Ali Mustofa',
            email: 'd.darkterminal@gmail.com'
          }
        })
        console.log(`Content Metadata: ${JSON.stringify(createContent, undefined, 2)}`)
      }
    }
  } catch (error) {
    console.log(`Erorr on storyGenerator: ${error}`)
    return false
  }
}