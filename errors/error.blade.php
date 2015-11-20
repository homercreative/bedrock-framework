@extends($site->theme.'::layouts.layout')

@section('content')
    <div class="main-content">

        <header class="band band-white compact">
            <div class="container">
                <div class="col-m-12">
                    <h1>404 - Page Not Found</h1>
                    <p>This page was Not found. This could be a missed type text</p>

                </div>
            </div>
        </header>
        <div class="band">
            <div class="container">
                <div class="row">

                    <div class="col-m-12 ">
                        <p>Here are some alternate pages</p>
                        @if(isset($search))
                            @foreach($search as $item)
                                <a href="{{ $item->url_slug }}">
                                    <h4>{{ $item->body->title }}</h4>
                                    <p>{{ $item->dscpn }}</p>
                                </a>
                            @endforeach
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop