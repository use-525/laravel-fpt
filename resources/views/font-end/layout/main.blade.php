@include('font-end/layout/links');
<body>
    <div id="app">
  @include('font-end/layout/nav')

        <main class="py-4">
            @yield('content')
        </main>
    </div>
     @include('font-end/layout/footer')
        <script>
                $.ajaxSetup({
    	headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
	});
//                $(document).ready(function(){
//   let productNumber = localStorage.getItem("cartNumbers");
//          if (productNumber){
//              $('.cart_quantity').text(productNumber);
//          }
//     });
        </script>
    @yield('js')
</body>
</html>
