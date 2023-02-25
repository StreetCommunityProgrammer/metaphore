---
layout: default
title: PHP Metaphors
nav_order: 6
description: "This page contains any unsual ~~code snippets~~ metaphors from our PHP Punk Member."
permalink: /php
---

# PHP Metaphors

This page contains any unsual ~~code snippets~~ metaphors from our PHP Punk Member.

## List of Metaphors
{% assign php = site.metaphors | where: "language", "php" %}
{% for metaphor in php %}
- [{{ metaphor.title }} by {{ metaphor.author }}]({{ metaphor.url | relative_url }})
{% else %}
  _The **PHP** collection is empty. Did you have metaphor in PHP? [Create my PHP metaphor](https://github.com/StreetCommunityProgrammer/metaphore/issues/new?assignees=&labels=metaphore&template=metaphore_request.yml&title=Add+%5BMETAPHORE+NAME%5D){:target="_blank"}_
{% endfor %}