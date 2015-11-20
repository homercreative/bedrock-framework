@var('item', $snippets->shuffle()->first())
<h3>{{ $item->title }}</h3>
<p>{!! $item->body  !!}</p>