<template>
    <section class="not-found">
        <div class="linear linear__left-linear"></div>
        <div class="linear linear__right-linear"></div>
        <div class="not-found__content">
        <h1 class="not-found__title">404</h1>
        <p class="not-found__text">We are sorry, but the page you requested was not found</p>
        <router-link to="/" class="not-found__button">Back To Home
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
            </svg>
        </router-link>
        </div>
        <div class="not-found__image">
        <img src="styles/img/Page-404.jpg" alt="Страница не найдена" class="not-found__img">
        </div>
    </section>
  </template>

<script>
export default {
  name: 'NotFound'
}
</script>

  <style scoped>
  .not-found {
    position: relative;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .not-found .linear {
    height: 247%;
  }

  .not-found__content {
    padding-top: 225px;
    max-width: 569px;
    max-height: 424px;
  }

  .not-found__title {
    margin-bottom: -50px;
    color: #CDA274;
    font-family: 'DM Serif Display';
    font-size: 250px;
  }

  .not-found__text {
    margin-bottom: 60px;
    color: #292F36;
    font-family: 'DM Serif Display';
    font-size: 35px;
    line-height: 53px;
    letter-spacing: 0.01em;
  }

  .not-found__button {
    position: relative;
    padding: 26px 78px 26px 54px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0.02em;
    background-color: #292F36;
    border: none;
    border-radius: 18px;
    cursor: pointer;
  }

  .not-found__button:hover {
    background-color: #CDA274;
  }

  .not-found__button svg{
    position: absolute;
    top: 38%;
    right: 50px;
  }

  .not-found__button:hover svg path {
    stroke: #292F36;
  }

  .not-found__image {
    position: absolute;
    height: 1042px;
    top: 0;
    right: -340px;
  }

  .not-found__img {
    border-radius: 0 0 0 355px;
  }

  @media(min-width: 1281px){
    .not-found .linear {
      height: 100vh;
  }
  }

  </style>
