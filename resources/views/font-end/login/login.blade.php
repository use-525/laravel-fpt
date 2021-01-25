@extends('font-end.layout.main')
@section('content')
     <!-- ****** New Arrivals Area Start ****** -->
        <section class="new_arrivals_area section_padding_100_0 clearfix">
         <div class="container">
	<aside class="col-sm-8">
<div class="card">
<article class="card-body">
	<h4 class="card-title text-center mb-4 mt-1">Sign in</h4>
	<hr>
<form  id="form-login" method="post" data-url="">

	<div class="form-group">
	<div class="input-group">
		<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-user"></i> </span>
		 </div>
		<input name="email" id="email" class="form-control" placeholder="Email or login" type="email" >
	</div> <!-- input-group.// -->
	</div> <!-- form-group// -->
	<div class="form-group">
	<div class="input-group">
		<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
		 </div>
	    <input class="form-control" placeholder="******" type="password" name="password" id="password">
	</div> <!-- input-group.// -->
	</div> <!-- form-group// -->
	<div class="form-group">
	<button type="submit" class="btn btn-primary btn-block"> Login  </button>
	</div> <!-- form-group// -->
	</form>
</article>
</div>

        </section>

@endsection
@section('js')
    <script src=" {{ asset('adminLTE/dist/js/login.js') }}"></script>
@endsection

