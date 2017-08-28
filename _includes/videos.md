{% for item in site.videos %}
    <div class="col-sm video">
        <iframe width="540" height="300" src="{{item.video}}" frameborder="0" allowfullscreen></iframe>
    </div>
{% endfor %}
