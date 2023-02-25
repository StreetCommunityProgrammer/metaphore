---
layout: default
title: Rust Metaphors
nav_order: 10
description: "This page contains any unsual ~~code snippets~~ metaphors from our Rust Punk Member."
permalink: /rust
---

# Rust Metaphors

This page contains any unsual ~~code snippets~~ metaphors from our Rust Punk Member.

## List of Metaphors
{% assign rust = site.metaphors | where: "language", "rust" %}
{% for metaphor in rust %}
- [{{ metaphor.title }}]({{ metaphor.url }})
{% else %}
  _The **Rust** collection is empty. Did you have metaphor in Rust? [Create my Rust metaphor](https://github.com/StreetCommunityProgrammer/metaphore/issues/new?assignees=&labels=metaphore&template=metaphore_request.yml&title=Add+%5BMETAPHORE+NAME%5D){:target="_blank"}_
{% endfor %}