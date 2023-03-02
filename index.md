---
layout: default
title: Home
nav_order: 1
description: "Story as Code: Public Collections of Metaphors from our Freestylers around the World. Gain Unique Perspectives from Our Punk Members."
permalink: /
---

# Street Programmer Community (SCP)
{: .fs-9 .text-center }

Story as Code. Public Collections of Metaphor our Freestylers accross the world. Gain knowledge with unusual perspective from our Punk members.
{: .fs-6 .fw-300 .text-center }

<p align="center">
  <img src="https://img.shields.io/github/issues-closed/StreetCommunityProgrammer/metaphore/metaphore?color=sky&label=Total%20Published%20Metaphor%20Stories&style=flat-square" alt="Total Published Metaphor Stories" />
  <img src="https://img.shields.io/github/issues/StreetCommunityProgrammer/metaphore/metaphore?color=blue&label=Total%20Pending%20Metaphors&style=flat-square" alt="Total Pending Metaphor Stories" />
  <a href="https://github.com/StreetCommunityProgrammer/metaphore/issues?q=is%3Aopen+is%3Aissue+label%3Apunk%3A%3Aidea" target="_blank">
  <img src="https://img.shields.io/github/issues/StreetCommunityProgrammer/metaphore/punk::idea?color=%235BFAF7&label=Total%20Punk%20Idea&style=flat-square" alt="Total Punk Idea" />
  </a>
</p>

![Metaphor](metaphor.png)

## Prologue
{: .text-center }

Hello Punk! We are street programmer that work out of the box in everyway of traditional theory and we're not calling snippet of code but called as Metaphor.
{: .text-center }

Programming languages are essentially bridges for communicating with people around the world without knowing their native language. We can collaborate with each other despite not sharing a common language.
{: .text-center }

Our members are called Punks, Freestylers, and Software Freestyle Engineers, who create metaphors to make the world a better place.
{: .text-center }

Every Punk can contribute their own unique style and unusual ~~ccode snippets~~ metaphor that challenge traditional theory or conventional business practics. But, it work! That's what being a Punk Freestyle Engineer is all about. Welcome to the Street Community Programmer.
{: .text-center }

## Create & Share Your Metaphor Story
{: .text-center }

Don't ask how to contribute, just share what you want to share!
{: .text-center }

<p class="text-center">
  <a href="https://github.com/StreetCommunityProgrammer/metaphore/issues/new/choose" target="_blank" class="btn btn-blue">Let Me In!</a>
</p>

#### Thank you to our Punk Members!
{: .text-center }

<ul class="list-style-none">
{% for contributor in site.github.contributors %}
  <li class="d-inline-block mr-1">
     <a href="{{ contributor.html_url }}"><img src="{{ contributor.avatar_url }}" width="32" height="32" alt="{{ contributor.login }}"></a>
  </li>
{% endfor %}
</ul>
