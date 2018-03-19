<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>

    @include('partials.head')

</head>
<body class="layout-app">

    <div id="app">

        @yield('content')

    </div>

    @include('partials.footer')

</body>
</html>
