---
layout: default
title: Maths Metaphors
nav_order: 5
description: "This page contains any unsual ~~code snippets~~ metaphors from our Maths Punk Member."
permalink: /maths
---
# Maths Metaphors

This page contains any unsual ~~code snippets~~ metaphors from our Maths Punk Member.

## List of Metaphors
{% assign maths = site.metaphors | where: "language", "maths" %}
{% for metaphor in maths %}
- [{{ metaphor.title }} by {{ metaphor.author }}]({{ metaphor.url }})
{% else %}
  _The **Maths** collection is empty. Did you have metaphor in Maths? [Create my Maths metaphor](https://github.com/StreetCommunityProgrammer/metaphore/issues/new?assignees=&labels=metaphore&template=metaphore_request.yml&title=Add+%5BMETAPHORE+NAME%5D){:target="_blank"}_
{% endfor %}