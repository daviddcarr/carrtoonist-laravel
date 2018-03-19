
{{-- Meta --}}
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

{{-- Title --}}
<title>{{ config('app.name') }} @stack('title')</title>

{{-- CSFR Token --}}
<meta name="csrf-token" content="{{ csrf_token() }}">

{{-- Styles --}}
<link href="{{ mix('css/app.css') }}" rel="stylesheet">

@yield('head')
