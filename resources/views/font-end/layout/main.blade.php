@include('font-end/layout/links');
<body>
    <div id="app">
  @include('font-end/layout/nav')

        <main class="py-4">
            @yield('content')
        </main>
    </div>
     @include('font-end/layout/footer')
     @include('font-end.layout.script')
    @yield('js')
</body>
</html>
