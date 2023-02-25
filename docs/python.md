---
layout: default
title: Python Metaphors
nav_order: 8
description: "This page contains any unsual ~~code snippets~~ metaphors from our Python Punk Member."
permalink: /python
---

# Python Metaphors

This page contains any unsual ~~code snippets~~ metaphors from our Python Punk Member.

[Create Python Story](https://github.com/StreetCommunityProgrammer/metaphore/issues/new?assignees=darkterminal%2Cmkubdev&labels=metaphore%2Cpython&template=create_python_story.yml&title=Your+Story+Title){:target="_blank" .btn .btn-purple}

## List of Metaphors
{% assign python = site.stories | where: "language", "python"  | sort: "created_at" | reverse %}
{% for metaphor in python %}
- [{{ metaphor.title }} by {{ metaphor.author }}]({{ metaphor.url | relative_url }})
{% else %}
  _The **Python** collection is empty. Did you have metaphor in Python? [Create my Python metaphor](https://github.com/StreetCommunityProgrammer/metaphore/issues/new?assignees=darkterminal%2Cmkubdev&labels=metaphore%2Cpython&template=create_python_story.yml&title=Your+Story+Title){:target="_blank"}_
{% endfor %}