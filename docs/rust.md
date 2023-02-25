---
layout: default
title: Rust Metaphors
nav_order: 10
description: "This page contains any unsual ~~code snippets~~ metaphors from our Rust Punk Member."
permalink: /rust
---

# Rust Metaphors

This page contains any unsual ~~code snippets~~ metaphors from our Rust Punk Member.

[Create Rust Story](https://github.com/StreetCommunityProgrammer/metaphore/issues/new?assignees=darkterminal%2Cmkubdev&labels=metaphore%2Crust&template=create_rust_story.yml&title=Your+Story+Title){:target="_blank" .btn .btn-purple}

## List of Metaphors
{% assign rust = site.stories | where: "language", "rust" %}
{% for metaphor in rust %}
- [{{ metaphor.title }} by {{ metaphor.author }}]({{ metaphor.url | relative_url }})
{% else %}
  _The **Rust** collection is empty. Did you have metaphor in Rust? [Create my Rust metaphor](https://github.com/StreetCommunityProgrammer/metaphore/issues/new?assignees=darkterminal%2Cmkubdev&labels=metaphore%2Crust&template=create_rust_story.yml&title=Your+Story+Title){:target="_blank"}_
{% endfor %}