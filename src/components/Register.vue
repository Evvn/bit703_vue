<template>
  <div class="container">
    <div class="row">
      <form
        id="image-form"
        data-request="addImage"
        method="post"
        action="image/add"
        accept-charset="UTF8"
        class="col col-sm-8 col-md-8"
        enctype="multipart/form-data"
      >
        <!-- {{ form_token() }} -->
        <!-- {{ form_sessionKey() }} -->

        <!-- req form fields for registration -->
        <div class="form-group">
          <label>Name</label>
          <input type="text" name="name" class="form-control" />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" name="email" class="form-control" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" name="password" class="form-control" />
        </div>
        <div class="form-group">
          <label>Password confirmation</label>
          <input type="password" name="password-confirmation" class="form-control" />
        </div>
        <input
          type="submit"
          class="btn btn-primary"
          name="submit"
          value="Register"
        />
        <input type="hidden" name="_handler" value="register" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register'
}
</script>
