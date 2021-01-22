@extends('Admin.layouts.main')
@section('content')
<section class="content">
   <div class="container-fluid">
      <div class="row">
         <div class="col-12">
            <div class="card">
               <div class="card-header">
                  <h2 class="card-title">User</h2>
               </div>
               <!-- /.card-header -->
               <div class="card-body">
                  <div id="example2_wrapper" class="dataTables_wrapper dt-bootstrap4">
                    <button type="button"  data-toggle="modal" data-target="#add-user"  class="btn btn-primary mb-2">ADD USER</button>
                     <div class="row">
                        <div class="col-sm-12">
                           <table id="example2" class="table table-bordered table-hover dataTable dtr-inline" role="grid" aria-describedby="example2_info">
                              <thead>
                                 <tr>
                                    <th rowspan="1" colspan="1">ID</th>
                                    <th rowspan="1" colspan="1">Name</th>
                                    <th rowspan="1" colspan="1">Email</th>
                                    <th rowspan="1" colspan="1">Profile Phto</th>
                                    <th rowspan="1" colspan="1">Edit</th>
                                    <th rowspan="1" colspan="1">Delete</th>
                                 </tr>
                              </thead>
                              <tbody id="list-user">
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
@include('Admin.user.add')
@include('Admin.user.edit')
@include('Admin.user.changePassword')
@endsection
@section('js')
    <script src=" {{ asset('adminLTE/dist/js/user.js') }}"></script>
@endsection
