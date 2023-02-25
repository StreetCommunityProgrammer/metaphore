---
layout: default
title: PHP Metaphors
nav_order: 6
description: "This page contains any unsual ~~code snippets~~ metaphors from our PHP Punk Member."
permalink: /php
---

# PHP Metaphors

This page contains any unsual ~~code snippets~~ metaphors from our PHP Punk Member.

[Create PHP Story](https://github.com/StreetCommunityProgrammer/metaphore/issues/new?assignees=darkterminal%2Cmkubdev&labels=metaphore%2Cphp&template=create_php_story.yml&title=Your+Story+Title){:target="_blank" .btn .btn-purple}

## List of Metaphors
{% assign php = site.stories | where: "language", "php"  | sort: "created_at" | reverse %}
{% for metaphor in php %}
- [{{ metaphor.title }} by {{ metaphor.author }}]({{ metaphor.url | relative_url }})
{% else %}
  _The **PHP** collection is empty. Did you have metaphor in PHP? [Create my PHP metaphor](https://github.com/StreetCommunityProgrammer/metaphore/issues/new?assignees=darkterminal%2Cmkubdev&labels=metaphore%2Cphp&template=create_php_story.yml&title=Your+Story+Title){:target="_blank"}_
{% endfor %}