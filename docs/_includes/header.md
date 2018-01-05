<header id="dh-site-header">
    <div class="container">
        <nav class="dh-collapse dh-topnav">

            <a href="{{ '/' | prepend: site.url}}" class="dh-topnav-item dh-topnav-logo-link">
                <img src="{{'/assets/img/github.svg' | prepend: site.url}}" /> {{site.custom_settings.name}}
            </a>

            <label class="dh-topnav-item dh-label" for="dh-topnav-toggle-checkbox"></label>

            <input type="checkbox" class="dh-toggler" id="dh-topnav-toggle-checkbox">

            <div id="dh-topnav-collapse">
                {% assign pages = site.pages | where_exp:"p",
                "p.custom_menu_order > 0" | sort:"custom_menu_order" %}
                {% for p in pages } %}
                <a href="{{p.url | prepend: site.url}}" class="dh-topnav-item {% if p.url== page.url %}dh-active{% endif %}">
                    {{p.title}}
                </a>
                {% endfor %}
            </div>

        </nav>

    </div>
</header>
