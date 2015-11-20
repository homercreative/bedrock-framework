@extends($site->theme.'::layouts.layout')

@section('content')
    <h1>Default -  {{ $body->title }}</h1>

    @if(empty($list))
        No Pages Found
    @else
        @foreach(($list) as $listItem)
            <div class="row">
                    <div class="col-xs-12 col-md-3"><a href="{{ $listItem->url_slug }}">{{ $listItem->title }}</a>
                    </div>
            </div>
        @endforeach

        @if(isset($list->links))
            {{ $list->links() }}
        @endif
    @endif
@stop
