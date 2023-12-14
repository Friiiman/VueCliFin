<template>
  <div class="project-details-slider">

    <div class="linear linear__left-linear"></div>
    <div class="linear linear__right-linear"></div>

    <div class="project-details-slider__item">
      <img class="project-details-slider__img" src="styles/img/slider-photo.jpg" alt="project photo">
    </div>
    <ul class="project-details-slider__pagination">
      <li class="project-details-slider__pagination-item"></li>
      <li class="project-details-slider__pagination-item"></li>
      <li class="project-details-slider__pagination-item"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetailsSlider'
}
</script>
