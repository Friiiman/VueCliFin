<template>
  <div class="project-details-slider">

    <div class="linear linear__left-linear"></div>
    <div class="linear linear__right-linear"></div>

    <tiny-slider class="project-details-slider__item" :mouse-drag="true" :loop="false" :controls="false" speed="500" gutter="50" items="1">
        <div class="project-details-slider__img">
          <img class="project-details-slider__img-item" src="styles/img/slider-photo.jpg" alt="project photo">
        </div>
        <div class="project-details-slider__img">
          <img class="project-details-slider__img-item" src="styles/img/slider-photo.jpg" alt="project photo">
        </div>
        <div class="project-details-slider__img">
          <img class="project-details-slider__img-item" src="styles/img/slider-photo.jpg" alt="project photo">
        </div>
    </tiny-slider>

  </div>
</template>

<script>
import VueTinySlider from 'vue-tiny-slider'

export default {
  name: 'ProjectDetailsSlider',
  components: {
    'tiny-slider': VueTinySlider
  }
}
</script>
