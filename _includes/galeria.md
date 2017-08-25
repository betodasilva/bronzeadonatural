{% for galeria in site.galleries %}
    <div class="col-sm-6">
        <img src="{{ galeria.image }}" alt="">
    </div>
{% endfor %}
