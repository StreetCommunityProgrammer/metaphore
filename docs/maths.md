---
layout: default
title: Maths Metaphors
nav_order: 5
description: "This page contains any unsual ~~code snippets~~ metaphors from our Maths Punk Member."
permalink: /maths
---
# Maths Metaphors

This page contains any unsual ~~code snippets~~ metaphors from our Maths Punk Member.

[Create Maths Story](https://github.com/StreetCommunityProgrammer/metaphore/issues/new?assignees=darkterminal%2Cmkubdev&labels=metaphore%2Cmaths&template=create_maths_story.yml&title=Your+Story+Title){:target="_blank" .btn .btn-purple}

## List of Metaphors
{% assign maths = site.stories | where: "language", "maths"  | sort: "created_at" | reverse %}
{% for metaphor in maths %}
- [{{ metaphor.title }} by {{ metaphor.author }}]({{ metaphor.url | relative_url }})
{% else %}
  _The **Maths** collection is empty. Did you have metaphor in Maths? [Create my Maths metaphor](https://github.com/StreetCommunityProgrammer/metaphore/issues/new?assignees=darkterminal%2Cmkubdev&labels=metaphore%2Cmaths&template=create_maths_story.yml&title=Your+Story+Title){:target="_blank"}_
{% endfor %}