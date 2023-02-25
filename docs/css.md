---
layout: default
title: CSS Metaphors
nav_order: 2
description: "This page contains any unsual ~~code snippets~~ metaphors from our CSS Punk Member."
permalink: /css
---

# CSS Metaphors

This page contains any unsual ~~code snippets~~ metaphors from our CSS Punk Member.

[Create CSS Story](https://github.com/StreetCommunityProgrammer/metaphore/issues/new?assignees=darkterminal%2Cmkubdev&labels=metaphore%2Ccss&template=create_css_story.yml&title=Your+Story+Title){:target="_blank" .btn .btn-purple}

## List of Metaphors
{% assign css = site.stories | where: "language", "css" %}
{% for metaphor in css %}
- [{{ metaphor.title }} by {{ metaphor.author }}]({{ metaphor.url | relative_url }})
{% else %}
  _The **CSS** collection is empty. Did you have metaphor in CSS? [Create my CSS metaphor](https://github.com/StreetCommunityProgrammer/metaphore/issues/new?assignees=darkterminal%2Cmkubdev&labels=metaphore%2Ccss&template=create_css_story.yml&title=Your+Story+Title){:target="_blank"}_
{% endfor %}