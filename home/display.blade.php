@extends($site->theme.'::layouts.layout')

@section('content')
    <div class="container">
        <div class="column-full">
            <h1>{{ $body->title }}</h1>

            @if($body->image)
                <img class="full-width" src="/image/{{ $site->tag }}/{{ $body->image }}/600" alt="{{ $body->title }}" />
            @endif

            @var('mainContent', Format::stringSplit($body->content, '@column'))
            @if(is_array($mainContent))
                <div class="row">
                    @foreach($mainContent as $copy)
                        <div class="col-m-6">
                            {!! $copy !!}
                        </div>
                    @endforeach
                </div>
            @else
                {!! $mainContent !!}
            @endif
        </div>
    </div>
@endsection