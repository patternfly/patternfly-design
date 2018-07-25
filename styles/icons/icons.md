## PatternFly Icons

Custom icons and selections from [IcoMoon &#8211; Free](http://icomoon.io/#icons).

| Icon                                         | Name            | Content String     | Definition          | Type            | Contextual Usage |
| -------------------------------------------- | --------------- | ------------------ | ------------------- | --------------- | ---------------- |{% for icon in site.data.icons.fa %}
| <span class="fa {{ icon.name }}"></span>     | {{ icon.name }} | {{ icon.content }} | {{icon.definition}} | {{ icon.type }} | {{ icon.usage }} |{% endfor %}{% for icon in site.data.icons.pf %}
| <span class="pficon {{ icon.name }}"></span> | {{ icon.name }} | {{ icon.content }} | {{icon.definition}} | {{ icon.type }} | {{ icon.usage }} |{% endfor %}
{:.table .table-striped .table-bordered}
