---
layout: default
title: Java Metaphors
nav_order: 3
description: "This page contains any unsual ~~code snippets~~ metaphors from our Java Punk Member."
permalink: /java
---

# Java Metaphors

This page contains any unsual ~~code snippets~~ metaphors from our Java Punk Member.

## List of Metaphors
{% assign java = site.metaphors | where: "language", "java" %}
{% for metaphor in java %}
- [{{ metaphor.title }} by {{ metaphor.author }}]({{ metaphor.url | relative_url }})
{% else %}
  _The **Java** collection is empty. Did you have metaphor in Java? [Create my Java metaphor](https://github.com/StreetCommunityProgrammer/metaphore/issues/new?assignees=&labels=metaphore&template=metaphore_request.yml&title=Add+%5BMETAPHORE+NAME%5D){:target="_blank"}_
{% endfor %}