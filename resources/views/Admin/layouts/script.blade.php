 <script src=" {{ asset('adminLTE/dist/js/jquery-3.5.1.js') }}"></script>
 <script src=" {{ asset('adminLTE/dist/js/bootstrap.min.js') }}" ></script>
  <script src=" {{ asset('adminLTE/dist/js/jquery.validate.js') }}" ></script>
  <script>
    $.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
    });
</script>

