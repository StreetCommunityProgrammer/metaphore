---
layout: default
title: Physics Metaphors
nav_order: 7
description: "This page contains any unsual ~~code snippets~~ metaphors from our Physics Punk Member."
permalink: /physics
---

# Physics Metaphors

This page contains any unsual ~~code snippets~~ metaphors from our Physics Punk Member.

[Create Physics Story](https://github.com/StreetCommunityProgrammer/metaphore/issues/new?assignees=darkterminal%2Cmkubdev&labels=metaphore%2Cphysics&template=create_physics_story.yml&title=Your+Story+Title){:target="_blank" .btn .btn-purple}

## List of Metaphors
{% assign physics = site.stories | where: "language", "physics"  | sort: "created_at" | reverse %}
{% for metaphor in physics %}
- [{{ metaphor.title }} by {{ metaphor.author }}]({{ metaphor.url | relative_url }})
{% else %}
  _The **Physics** collection is empty. Did you have metaphor in Physics? [Create my Physics metaphor](https://github.com/StreetCommunityProgrammer/metaphore/issues/new?assignees=darkterminal%2Cmkubdev&labels=metaphore%2Cphysics&template=create_physics_story.yml&title=Your+Story+Title){:target="_blank"}_
{% endfor %}