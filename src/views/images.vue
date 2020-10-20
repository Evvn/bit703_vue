<!-- Images View -->
<template>
  <div id="main">
    <UsersImages />
    <div id="others-images" class="container">
      <div class="row">
        <h2>Latest Images</h2>
      </div>
      <OthersImages />
    </div>
  </div>
</template>

<script>
import OthersImages from '@/components/OthersImages.vue'
import UsersImages from '@/components/UsersImages.vue'

export default {
  name: 'images',
  components: {
    OthersImages,
    UsersImages
  }
}
</script>
