---
layout: default
title: Devheart CSS
permalink: /
---


<h1>Devheart CSS</h1>
<p class="lead mb-2">{{site.custom_settings.description}}</p>

<div class="row mx-0">

{% assign pages = site.pages | where_exp:"p", "p.custom_menu_order > 0" | sort:"custom_menu_order" %}
{% for p in pages %}

    <a href="{{p.permalink | prepend: site.url}}" class="col-12 col-xl-6 p-2 dh-responsive-shadow">
        <h2>{{p.title}}</h2>
        {{p.custom_description}}
    </a>

{% endfor %}

</div>
