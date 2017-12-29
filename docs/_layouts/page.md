---
layout: default
---

<div class="clearfix">
    {% if page.custom_icon %}
    <img src="{{site.url}}/assets/img/icons/{{page.custom_icon}}.svg" width="96" height="96" alt="{{page.title}}" class="float-left mr-1">
    {% endif %}
    <h1>{{page.title}}</h1>
    <div class="lead">{{page.custom_subtitle}}</div>
</div>

{{ content }}
