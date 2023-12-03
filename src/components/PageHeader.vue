<template>
    <header class="page-header">

        <div class="linear linear__left-linear"></div>
        <div class="linear linear__right-linear"></div>

        <a href="#" class="page-header__logo">
            <img src="styles/img/main-logo.svg" alt="main logo">
        </a>
        <nav class="main-nav">
            <ul class="main-nav__list">
                <li class="main-nav__item">
                    <a href="#" class="main-nav__link">Home</a>
                </li>
                <li class="main-nav__item">
                    <a href="#" class="main-nav__link">Project</a>
                </li>
                <li class="main-nav__item">
                    <a href="blog.html" class="main-nav__link">Blog</a>
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
