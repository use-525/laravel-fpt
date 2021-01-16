<div class="modal fade" id="edit-cate" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="">Sửa Danh Mục</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="form-edit">
  <div class="form-group">
    <label for="">Tên Danh Mục</label>
    <input type="text" class="form-control" name="cate_name" id="edit-cate_name" placeholder="Tên Danh Mục">
  </div>
  <div class="form-group">
    <label for="">Show Menu</label>
    <select id="edit-show_menu" class="form-control" name="show_menu">
      <option value="0">Không </option>
       <option value="1">Có </option>
    </select>
  </div>
  <div class="form-group">
    <label for="">Description</label>
    <textarea name="description" class="form-control" id="edit-desc" rows="2"></textarea>
  </div>
  <button type="submit" class="btn btn-outline-primary">EDIT</button>
</form >
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
