---
layout: default
title: Physics Metaphors
nav_order: 7
description: "This page contains any unsual ~~code snippets~~ metaphors from our Physics Punk Member."
permalink: /physics
---

# Physics Metaphors

This page contains any unsual ~~code snippets~~ metaphors from our Physics Punk Member.

## List of Metaphors
{% assign physics = site.metaphors | where: "language", "physics" %}
{% for metaphor in physics %}
- [{{ metaphor.title }} by {{ metaphor.author }}]({{ metaphor.url | relative_url }})
{% else %}
  _The **Physics** collection is empty. Did you have metaphor in Physics? [Create my Physics metaphor](https://github.com/StreetCommunityProgrammer/metaphore/issues/new?assignees=&labels=metaphore&template=metaphore_request.yml&title=Add+%5BMETAPHORE+NAME%5D){:target="_blank"}_
{% endfor %}