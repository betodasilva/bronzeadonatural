{% for galeria in site.galleries %}
    <a class="col-sm-6" href="{{galeria.image}}">
       
            <img src="{{ galeria.image }}" alt="" class="rounded">
    </a>
{% endfor %}
