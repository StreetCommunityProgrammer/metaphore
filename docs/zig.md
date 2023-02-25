---
layout: default
title: Zig Metaphors
nav_order: 11
description: "This page contains any unsual ~~code snippets~~ metaphors from our Zig Punk Member."
permalink: /zig
---

# Zig Metaphors

This page contains any unsual ~~code snippets~~ metaphors from our Zig Punk Member.

## List of Metaphors
{% assign zig = site.stories | where: "language", "zig" %}
{% for metaphor in zig %}
- [{{ metaphor.title }} by {{ metaphor.author }}]({{ metaphor.url | relative_url }})
{% else %}
  _The **Zig** collection is empty. Did you have metaphor in Zig? [Create my Zig metaphor](https://github.com/StreetCommunityProgrammer/metaphore/issues/new?assignees=&labels=metaphore&template=metaphore_request.yml&title=Add+%5BMETAPHORE+NAME%5D){:target="_blank"}_
{% endfor %}