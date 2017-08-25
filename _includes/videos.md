{% for item in site.videos %}
    <div class="col-sm">
        <iframe width="640" height="360" src="{{item.video}}" frameborder="0" allowfullscreen></iframe>
    </div>
{% endfor %}
