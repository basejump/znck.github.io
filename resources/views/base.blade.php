<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="@yield('pageDescription', $siteDescription)">

    <title>@yield('pageTitle') {{$siteName}}</title>
    <link rel="author" href="/humans.txt" />

    <link rel="apple-touch-icon" sizes="57x57" href="/assets/icons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/assets/icons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/assets/icons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/assets/icons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/assets/icons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/assets/icons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/assets/icons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/assets/icons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/assets/icons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/assets/icons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png">
    <link rel="manifest" href="@url('/assets/icons/manifest.json')">
    <meta name="msapplication-TileColor" content="#ff574a">
    <meta name="msapplication-TileImage" content="/assets/icons/ms-icon-144x144.png">
    <meta name="theme-color" content="#ff574a">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">

    <link rel="stylesheet" href="@url('assets/css/app.css')">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>
<nav class="navbar navbar-light border-bottom">
    <div class="container">
        <a class="navbar-brand" href="@url('/')">
            {{$siteName}}
        </a>
        <div>
            <div class="clearfix hidden-lg-up">
                <a role="button" class="navbar-toggler float-xs-right" data-toggle="collapse"
                   data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                   aria-label="Toggle navigation"></a>
            </div>
            <div class="collapse navbar-toggleable-md" id="navbarResponsive">
                <ul class="nav navbar-nav float-lg-right">
                    @include('nav')
                </ul>
                @yield('extra-nav')
            </div>
        </div>
    </div>
</nav>

<div class="body" style="min-height: 70vh">
    @yield('body')
</div>

<div class="clearfix"></div>

<script src="@url('assets/js/app.js')" type="text/javascript"></script>
</body>
</html>
