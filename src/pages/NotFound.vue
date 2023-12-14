<template>
  <div class="not-found">
    <p class="not-found__text">404</p>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.not-found__text {
  font-size: 180px;
}
</style>
