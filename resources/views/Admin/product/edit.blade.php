<div class="modal fade bd-example-modal-lg" id="edit-prd" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Sua San Pham</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="form-edit">
  <div class="form-group">
    <label for="">Tên San Pham</label>
    <input type="text" class="form-control" name="name" id="edit-name" placeholder="Tên San Pham">
  </div>
  <div class="form-group">
    <label for="">Image</label>
    <input type="file" class="form-control-file" id="edit-image" name="image">
    <image src="" width="150" height="150" id="showImageEdit"/></image>
  </div>
   <div class="form-group">
    <label for="">Image Detail</label>
    <input type="file" class="form-control-file" id="edit-imageUrl" name="image_url" multiple="multiple">
  </div>
   <div class="form-group">
    <label for="">Danh muc</label>
    <select id="edit-cate" class="form-control"  name="cate_id">
    </select>
  </div>
   <div class="form-group">
    <label for="">Gia</label>
    <input type="number" class="form-control" name="price" id="edit-price" placeholder=" Gia">
  </div>
  <div class="form-group">
    <label for="">Description</label>
    <textarea name="short_desc" class="form-control" id="edit-short_desc" rows="2"></textarea>
  </div>
   <div class="form-group">
    <label for="">Detail</label>
    <textarea name="detail" class="form-control" id="edit-detail" rows="2"></textarea>
  </div>

  <button type="submit" class="btn btn-outline-primary">ADD</button>
</form >
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
