---
layout: default
title: JavaScript Metaphors
nav_order: 4
description: "This page contains any unsual ~~code snippets~~ metaphors from our JavaScript Punk Member."
permalink: /javascript
---
# JavaScript Metaphors

This page contains any unsual ~~code snippets~~ metaphors from our JavaScript Punk Member.

[Create Javascript Story](https://github.com/StreetCommunityProgrammer/metaphore/issues/new?assignees=darkterminal%2Cmkubdev&labels=metaphore%2Cjavascript&template=create_javascript_story.yml&title=Your+Story+Title){:target="_blank" .btn .btn-purple}

## List of Metaphors
{% assign javascript = site.stories | where: "language", "javascript" %}
{% for metaphor in javascript %}
- [{{ metaphor.title }} by {{ metaphor.author }}]({{ metaphor.url | relative_url }})
{% else %}
  _The **JavaScript** collection is empty. Did you have metaphor in JavaScript? [Create my JavaScript metaphor](https://github.com/StreetCommunityProgrammer/metaphore/issues/new?assignees=darkterminal%2Cmkubdev&labels=metaphore%2Cjavascript&template=create_javascript_story.yml&title=Your+Story+Title){:target="_blank"}_
{% endfor %}