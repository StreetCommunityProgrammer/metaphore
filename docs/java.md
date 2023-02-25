---
layout: default
title: Java Metaphors
nav_order: 3
description: "This page contains any unsual ~~code snippets~~ metaphors from our Java Punk Member."
permalink: /java
---

# Java Metaphors

This page contains any unsual ~~code snippets~~ metaphors from our Java Punk Member.

[Create Java Story](https://github.com/StreetCommunityProgrammer/metaphore/issues/new?assignees=darkterminal%2Cmkubdev&labels=metaphore%2Cjava&template=create_java_story.yml&title=Your+Story+Title){:target="_blank" .btn .btn-purple}

## List of Metaphors
{% assign java = site.stories | where: "language", "java" %}
{% for metaphor in java %}
- [{{ metaphor.title }} by {{ metaphor.author }}]({{ metaphor.url | relative_url }})
{% else %}
  _The **Java** collection is empty. Did you have metaphor in Java? [Create my Java metaphor](https://github.com/StreetCommunityProgrammer/metaphore/issues/new?assignees=darkterminal%2Cmkubdev&labels=metaphore%2Cjava&template=create_java_story.yml&title=Your+Story+Title){:target="_blank"}_
{% endfor %}