{% for item in site.videos %}
    <div class="col-sm">
        <iframe width="540" height="300" src="{{item.video}}" frameborder="0" allowfullscreen></iframe>
    </div>
{% endfor %}
