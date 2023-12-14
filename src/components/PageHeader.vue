<template>
    <header class="page-header">

        <div class="linear linear__left-linear"></div>
        <div class="linear linear__right-linear"></div>

        <router-link to="/" class="page-header__logo">
            <img src="styles/img/main-logo.svg" alt="main logo">
        </router-link>
        <nav class="main-nav">
            <ul class="main-nav__list">
                <li class="main-nav__item">
                    <router-link to="/" class="main-nav__link">Home</router-link>
                </li>
                <li class="main-nav__item">
                    <router-link to="/project" class="main-nav__link">Project</router-link>
                </li>
                <li class="main-nav__item">
                    <router-link to="/blog" class="main-nav__link">Blog</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'PageHeader',

  data () {
    return {}
  }
}
</script>
