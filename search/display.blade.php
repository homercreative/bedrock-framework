@extends($site->theme.'::layouts.layout')

@section('content')
    <div class="container">
        <div class="column-full">
            <h1>Search results for '{{ $searchTerm }}'</h1>

            <div class="search">
                @if(isset($search))
                    @if(!empty($search))
                        @foreach($search as $item)
                            <div class="result list-item">
                                <h4><a href="{{ $item->url_slug }}">{{ $item->body->title }}</a></h4>

                                <p>{{ $item->dscpn }} <br>
                                    <a href="{{ $item->url_slug }}">http://{{ $site->domain }}{{ $item->url_slug }}</a>
                                </p>
                            </div>
                        @endforeach
                    @else
                        <p>No Items Found</p>
                    @endif
                @else
                    <p>No Items Found</p>
                @endif
            </div>
        </div>
    </div>
@endsection