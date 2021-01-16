@extends('Admin.layouts.main')
@section('content')
<section class="content">
   <div class="container-fluid">
      <div class="row">
         <div class="col-12">
            <div class="card">
               <div class="card-header">
                  <h2 class="card-title">Category</h2>
               </div>
               <!-- /.card-header -->
               <div class="card-body">
                  <div id="example2_wrapper" class="dataTables_wrapper dt-bootstrap4">
                    <button type="button"  data-toggle="modal" data-target="#add-cate"  class="btn btn-primary mb-2">ADD Category</button>
                     <div class="row">
                        <div class="col-sm-12">
                           <table id="example2" class="table table-bordered table-hover dataTable dtr-inline" role="grid" aria-describedby="example2_info">
                              <thead>
                                 <tr>
                                    <th rowspan="1" colspan="1">ID</th>
                                    <th rowspan="1" colspan="1">Name</th>
                                    <th rowspan="1" colspan="1">Show Menu</th>
                                    <th rowspan="1" colspan="1">Desc</th>
                                    <th rowspan="1" colspan="1">Created by</th>
                                    <th rowspan="1" colspan="1">Edit</th>
                                    <th rowspan="1" colspan="1">Delete</th>
                                 </tr>
                              </thead>
                              <tbody id="list-cate">
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
@include('Admin.category.add')
@include('Admin.category.edit')
@endsection
@section('js')
    <script src=" {{ asset('adminLTE/dist/js/category.js') }}"></script>
@endsection
