@if(!empty($group))
    <p>{{ $group->title }}</p>
    @foreach($group->snippets as $snippet)
        <p>{{ $snippet->title }}</p>
        <p>{{ $snippet->keywords }}</p>
    @endforeach
@else
    <p>No Snippets Found</p>
@endif