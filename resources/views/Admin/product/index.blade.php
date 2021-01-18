@extends('Admin.layouts.main')
@section('content')
<section class="content">
   <div class="container-fluid">
      <div class="row">
         <div class="col-12">
            <div class="card">
               <div class="card-header">
                  <h2 class="card-title">Product</h2>
               </div>
               <!-- /.card-header -->
               <div class="card-body">
                  <div id="example2_wrapper" class="dataTables_wrapper dt-bootstrap4">
                    <button type="button" class="btn btn-add btn-primary mb-2">ADD Product</button>
                     <div class="row">
                        <div class="col-sm-12">
                           <table id="example2" class="table table-bordered table-hover dataTable dtr-inline" role="grid" aria-describedby="example2_info">
                              <thead>
                                 <tr>
                                    <th rowspan="1" colspan="1">ID</th>
                                    <th rowspan="1" colspan="1">Name</th>
                                    <th rowspan="1" colspan="1">Image</th>
                                    <th rowspan="1" colspan="1">Category</th>
                                    <th rowspan="1" colspan="1">Price</th>

                                    <th rowspan="1" colspan="1">Star</th>
                                    <th rowspan="1" colspan="1">Views</th>
                                    <th rowspan="1" colspan="1">Show</th>
                                    <th rowspan="1" colspan="1">Edit</th>
                                    <th rowspan="1" colspan="1">Delete</th>
                                    <th rowspan="1" colspan="1">Anh</th>
                                 </tr>
                              </thead>
                              <tbody id="list-prd">
                              </tbody>

                           </table>
                        </div>
                     </div>

                  </div>
               </div>
               <!-- /.card-body -->
            </div>
            <!-- /.card -->
         </div>
         <!-- /.col -->
      </div>
      <!-- /.row -->
   </div>
   <!-- /.container-fluid -->
</section>
@include('Admin.product.add')
@include('Admin.product.edit')
@include('Admin.product.show')
@include('Admin.product.product_galleries')
@endsection
@section('js')
    <script src=" {{ asset('adminLTE/dist/js/product.js') }}"></script>
@endsection
