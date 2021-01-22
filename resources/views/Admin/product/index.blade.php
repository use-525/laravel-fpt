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
                     <div class="row">
                        <button type="button" class="btn btn-add btn-primary mb-2">ADD Product</button>
                        <form class="form-inline ml-3">
                           <div class="input-group input-group-sm">
                              <input class="form-control form-control-navbar" id="keywords" type="search" placeholder="Search" aria-label="Search">
                              <div class="input-group-append">
                                 <button class="btn btn-navbar" type="submit">
                                 <i class="fas fa-search"></i>
                                 </button>
                              </div>
                           </div>
                        </form>
                        <select class="custom-select mr-sm-2"id="sort">
                            <option value="all">Sắp xếp theo</option>
                            <option value="sort=price-asc">Giá tăng dần</option>
                            <option value="sort=price-desc">Giá giảm dần</option>
                            <option value="sort=name-asc">Tên A-&gt;Z</option>
                            <option value="sort=name-desc">Tên Z-&gt;A</option>
                        </select>
                     </div>
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
