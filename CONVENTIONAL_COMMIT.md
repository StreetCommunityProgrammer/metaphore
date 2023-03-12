# Conventional Commits

Conventional Commits is a specification for adding human and machine-readable meaning to commit messages. It provides a consistent way to structure commit messages, making them more informative and easier to understand. By following the Conventional Commits specification, it becomes easier to automate changelog generation, versioning, and releases.

## Format

A Conventional Commit message consists of a header, an optional body, and an optional footer. The header has a special format that includes a type, a scope, and a subject. The body provides additional information about the change, and the footer provides a place to add metadata about the commit, such as issue tracking numbers.

The format of a header is as follows:

```bash
<type>[optional scope]: <subject>
```

### Type

The type field is required and describes the kind of change that the commit introduces. Examples of types include:

- feat: a new feature
- fix: a bug fix
- docs: documentation changes
- style: changes that do not affect the meaning of the code, such as formatting
- refactor: code changes that neither fix a bug nor add a feature
- test: adding missing tests or correcting existing tests
- chore: changes to the build process or auxiliary tools

### Scope

The scope field is optional and describes the part of the codebase that is affected by the change.

### Subject

The subject field is required and provides a brief summary of the change.

**Examples**

Here are some examples of Conventional Commit messages:

```bash
feat(users): add user registration endpoint
```

```bash
fix(authentication): handle invalid credentials error
```

```bash
docs(readme): add example usage
```

**Benefits**

Using Conventional Commits provides a number of benefits:

- Provides a consistent way to structure commit messages across a team or organization
- Makes it easier to generate changelogs, versioning, and releases
- Provides more information about changes, making it easier to understand the purpose of a commit
- Makes it easier to automate processes such as generating release notes or updating documentation

**Conclusion**

By using Conventional Commits, you can make your commits more informative and easier to understand, helping your team and organization work more efficiently.
