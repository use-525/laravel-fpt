
<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog"  id="product-image-modal"   aria-hidden="true">
  <div class="modal-dialog modal-lg">
   <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ảnh mô tả</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                     <div class="row ">

                    <form id="add-anhmt" class="mb-3" method="post"  enctype="multipart/form-data">
                <input type="file"  id="img_url" multiple="multiple"  name="img_url" class="form-control-file img_url">
                <button  type="submit"   class="btn them_anhmota btn-success mt-2">Thêm ảnh</button>
                            </form>
                     </div>
                    <div class="row" id="product-image-list">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
  </div>
</div>
