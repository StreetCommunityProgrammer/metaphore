---
layout: default
title: Python Metaphors
nav_order: 8
description: "This page contains any unsual ~~code snippets~~ metaphors from our Python Punk Member."
permalink: /python
---

# Python Metaphors

This page contains any unsual ~~code snippets~~ metaphors from our Python Punk Member.

## List of Metaphors
{% assign python = site.metaphors | where: "language", "python" %}
{% for metaphor in python %}
- [{{ metaphor.title }}]({{ metaphor.url }})
{% else %}
  _The **Python** collection is empty. Did you have metaphor in Python? [Create my Python metaphor](https://github.com/StreetCommunityProgrammer/metaphore/issues/new?assignees=&labels=metaphore&template=metaphore_request.yml&title=Add+%5BMETAPHORE+NAME%5D){:target="_blank"}_
{% endfor %}