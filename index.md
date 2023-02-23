---
layout: default
title: Home
nav_order: 1
description: "Just the Docs is a responsive Jekyll theme with built-in search that is easily customizable and hosted on GitHub Pages."
permalink: /
---

# Street Programmer Community (SCP)
{: .fs-9 }

Story as Code. Public Collections of Metaphor our Freestylers accross the world. Gain knowledge with unusual perspective from our Punk members.
{: .fs-6 .fw-300 }

## Contributing

Every Punk can make any contributions to share your styles and unsual ~~code snippet~~ metaphor that belived it's something wrong different in traditional theory or usual business, but it's work! That our Punk Freestyle Engineer. Welcome to the Street Community Programmer.

#### Thank you to the Our Punk Members!

<ul class="list-style-none">
{% for contributor in site.github.contributors %}
  <li class="d-inline-block mr-1">
     <a href="{{ contributor.html_url }}"><img src="{{ contributor.avatar_url }}" width="32" height="32" alt="{{ contributor.login }}"></a>
  </li>
{% endfor %}
</ul>