<!doctype html>
<!--[if lt IE 7]>
<html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en-GB"> <![endif]-->
<!--[if IE 7]>
<html class="no-js lt-ie9 lt-ie8" lang="en-GB"> <![endif]-->
<!--[if IE 8]>
<html class="no-js lt-ie9" lang="en-GB"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en-GB"> <!--<![endif]-->
<head>
    <meta charset="UTF-8">
    <title>{{ $site->title }} | {{ $body->title }}</title>
    <link rel="stylesheet" href="/themes/{{$site->theme}}/assets/css/template.min.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="{{ $site->dscpn }}">
    @section('styles')
    @show
</head>
<body>
<header>
    <div class="container">
        <div class="column-full">
            <h1 class="identity">{{ $site->title }}</h1>

            <h2 class="tagline">{{ $site->domain }}t</h2>
        </div>
    </div>
    <div class="nav">
        <div class="container">
            <nav class="column-full" id="main-nav">
                <ul class="global-nav">
                    <li class="global-nav-item"><a href="/" title="">Home</a></li>
                    @var('areas', Node::getAreas(null, false))
                    @var('ignore', ['homepage', 'news', 'events', 'blog', 'contact', 'big-numbers'])
                    @foreach($areas as $areaItem)
                        @if(!in_array($areaItem->tag, $ignore))
                            @if($areaItem->homepage != 1)
                                @if(isset($area))
                                    @if($areaItem->tag == $area->tag)
                                        <li class="global-nav-item"><a href="{{ $areaItem->url_slug }}" class="active">{{ $areaItem->title }}</a></li>
                                    @else
                                        <li class="global-nav-item"><a href="{{ $areaItem->url_slug }}">{{ $areaItem->title }}</a></li>
                                    @endif
                                @else
                                    <li class="global-nav-item"><a href="{{ $areaItem->url_slug }}">{{ $areaItem->title }}</a></li>
                                @endif
                            @endif
                        @endif
                    @endforeach
                </ul>
            </nav>
        </div>
    </div>
</header>
@section('wrapper')
    @yield('content')
@show

@include($site->theme.'::partials.footer')

<script src="/themes/{{$site->theme}}/assets/js/bundle.js"></script>
<script src="/themes/{{$site->theme}}/assets/js/script.js"></script>
</body>
</html>