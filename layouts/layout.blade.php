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
    <link rel="stylesheet" href="/themes/{{$site->theme}}/assets/css/template.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">

    <link rel="stylesheet" href="/themes/{{$site->theme}}/assets/css/{{$domain}}.css" />
    @section('styles')
    @show
    <script src=" https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>

</head>
<body>

@section('wrapper')
    @yield('content')
@show

<script src="/themes/{{$site->theme}}/assets/js/script.js"></script>
</body>
</html>