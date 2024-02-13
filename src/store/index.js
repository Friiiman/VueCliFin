import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // начальное состояние
    articlesNewsCardsList: [
      {
        id: 1,
        img: 'styles/img/articles-news-card/articles-news-card1.jpg',
        type: 'Kitchan Design',
        name: 'Let’s Get Solution For Building Construction Work',
        date: '2022-12-26',
        dateExpanded: '26 December,2022'
      },
      {
        id: 2,
        img: 'styles/img/articles-news-card/articles-news-card2.jpg',
        type: 'Living Design',
        name: 'Low Cost Latest Invented Interior Designing Ideas.',
        date: '2022-12-22',
        dateExpanded: '22 December,2022'
      },
      {
        id: 3,
        img: 'styles/img/articles-news-card/articles-news-card3.jpg',
        type: 'Interior Design',
        name: 'Best For Any Office & Business Interior Solution',
        date: '2022-12-25',
        dateExpanded: '25 December,2022'
      },
      {
        id: 4,
        img: 'styles/img/articles-news-card/articles-news-card4.jpg',
        type: 'Kitchan Design',
        name: 'Let’s Get Solution For Building Construction Work',
        date: '2022-12-26',
        dateExpanded: '26 December,2022'
      },
      {
        id: 5,
        img: 'styles/img/articles-news-card/articles-news-card5.jpg',
        type: 'Living Design',
        name: 'Low Cost Latest Invented Interior Designing Ideas.',
        date: '2022-12-22',
        dateExpanded: '22 December,2022'
      },
      {
        id: 6,
        img: 'styles/img/articles-news-card/articles-news-card6.jpg',
        type: 'Interior Design',
        name: 'Best For Any Office & Business Interior Solution',
        date: '2022-12-25',
        dateExpanded: '25 December,2022'
      }
      // {
      //   id: 7,
      //   img: 'styles/img/articles-news-card/articles-news-card5.jpg',
      //   type: 'Living Design',
      //   name: 'Low Cost Latest Invented Interior Designing Ideas.',
      //   date: '2022-12-22',
      //   dateExpanded: '22 December,2022'
      // },
      // {
      //   id: 8,
      //   img: 'styles/img/articles-news-card/articles-news-card5.jpg',
      //   type: 'Living Design',
      //   name: 'Low Cost Latest Invented Interior Designing Ideas.',
      //   date: '2022-12-22',
      //   dateExpanded: '22 December,2022'
      // },
      // {
      //   id: 9,
      //   img: 'styles/img/articles-news-card/articles-news-card5.jpg',
      //   type: 'Living Design',
      //   name: 'Low Cost Latest Invented Interior Designing Ideas.',
      //   date: '2022-12-22',
      //   dateExpanded: '22 December,2022'
      // },
      // {
      //   id: 10,
      //   img: 'styles/img/articles-news-card/articles-news-card5.jpg',
      //   type: 'Living Design',
      //   name: 'Low Cost Latest Invented Interior Designing Ideas.',
      //   date: '2022-12-22',
      //   dateExpanded: '22 December,2022'
      // },
      // {
      //   id: 11,
      //   img: 'styles/img/articles-news-card/articles-news-card5.jpg',
      //   type: 'Living Design',
      //   name: 'Low Cost Latest Invented Interior Designing Ideas.',
      //   date: '2022-12-22',
      //   dateExpanded: '22 December,2022'
      // },
      // {
      //   id: 12,
      //   img: 'styles/img/articles-news-card/articles-news-card5.jpg',
      //   type: 'Living Design',
      //   name: 'Low Cost Latest Invented Interior Designing Ideas.',
      //   date: '2022-12-22',
      //   dateExpanded: '22 December,2022'
      // },
      // {
      //   id: 13,
      //   img: 'styles/img/articles-news-card/articles-news-card1.jpg',
      //   type: 'Living Design',
      //   name: 'Low Cost Latest Invented Interior Designing Ideas.',
      //   date: '2022-12-22',
      //   dateExpanded: '22 December,2022'
      // },
      // {
      //   id: 14,
      //   img: 'styles/img/articles-news-card/articles-news-card1.jpg',
      //   type: 'Living Design',
      //   name: 'Low Cost Latest Invented Interior Designing Ideas.',
      //   date: '2022-12-22',
      //   dateExpanded: '22 December,2022'
      // },
      // {
      //   id: 15,
      //   img: 'styles/img/articles-news-card/articles-news-card1.jpg',
      //   type: 'Living Design',
      //   name: 'Low Cost Latest Invented Interior Designing Ideas.',
      //   date: '2022-12-22',
      //   dateExpanded: '22 December,2022'
      // },
      // {
      //   id: 16,
      //   img: 'styles/img/articles-news-card/articles-news-card1.jpg',
      //   type: 'Living Design',
      //   name: 'Low Cost Latest Invented Interior Designing Ideas.',
      //   date: '2022-12-22',
      //   dateExpanded: '22 December,2022'
      // },
      // {
      //   id: 17,
      //   img: 'styles/img/articles-news-card/articles-news-card1.jpg',
      //   type: 'Living Design',
      //   name: 'Low Cost Latest Invented Interior Designing Ideas.',
      //   date: '2022-12-22',
      //   dateExpanded: '22 December,2022'
      // }
    ],
    projectCardsList: [
      {
        checked: false,
        sizeBig: true,
        imgSrc: 'styles/img/project-card-imgs/project-photo5.jpg',
        name: 'Minimal Bedroom',
        type: 'Decor / Artchitecture',
        tag: 'Bedroom'
      },
      {
        checked: false,
        sizeBig: false,
        imgSrc: 'styles/img/project-card-imgs/project-photo6.jpg',
        name: 'Minimal Bedroom',
        type: 'Decor / Artchitecture',
        tag: 'Bedroom'
      },
      {
        checked: false,
        sizeBig: true,
        imgSrc: 'styles/img/project-card-imgs/project-photo7.jpg',
        name: 'Modern Bedroom',
        type: 'Decor / Artchitecture',
        tag: 'Bedroom'
      },
      {
        checked: false,
        sizeBig: false,
        imgSrc: 'styles/img/project-card-imgs/project-photo8.jpg',
        name: 'Classic Minimal Bedroom',
        type: 'Decor / Artchitecture',
        tag: 'Bedroom'
      },
      {
        checked: false,
        sizeBig: true,
        imgSrc: 'styles/img/project-card-imgs/project-photo9.jpg',
        name: 'Minimal Bedroom table',
        type: 'Decor / Artchitecture',
        tag: 'Bedroom'
      },
      {
        checked: false,
        sizeBig: false,
        imgSrc: 'styles/img/project-card-imgs/project-photo10.jpg',
        name: 'System Table',
        type: 'Decor / Artchitecture',
        tag: 'Bedroom'
      },
      {
        checked: false,
        sizeBig: true,
        imgSrc: 'styles/img/project-card-imgs/project-photo11.jpg',
        name: 'Modern Bedroom',
        type: 'Decor / Artchitecture',
        tag: 'Bedroom'
      },
      {
        checked: false,
        sizeBig: false,
        imgSrc: 'styles/img/project-card-imgs/project-photo12.jpg',
        name: 'Modern Bedroom',
        type: 'Decor / Artchitecture',
        tag: 'Bedroom'
      },
      {
        checked: false,
        sizeBig: false,
        imgSrc: 'photo.jpg',
        name: 'Modern Bathroom',
        type: 'Decor / Artchitecture',
        tag: 'Bathroom'
      },
      {
        checked: false,
        sizeBig: false,
        imgSrc: 'photo.jpg',
        name: 'Modern Bathroom',
        type: 'Decor / Artchitecture',
        tag: 'Bathroom'
      },
      {
        checked: false,
        sizeBig: false,
        imgSrc: 'photo.jpg',
        name: 'Bathroom',
        type: 'Decor / Artchitecture',
        tag: 'Bathroom'
      },
      {
        checked: false,
        sizeBig: false,
        imgSrc: 'photo.jpg',
        name: 'Kitchan',
        type: 'Decor / Artchitecture',
        tag: 'Kitchan'
      },
      {
        checked: false,
        sizeBig: false,
        imgSrc: 'photo.jpg',
        name: 'Modern Kitchan',
        type: 'Decor / Artchitecture',
        tag: 'Kitchan'
      },
      {
        checked: false,
        sizeBig: true,
        imgSrc: 'photo.jpg',
        name: 'Modern Living Area',
        type: 'Decor / Artchitecture',
        tag: 'Living Area'
      },
      {
        checked: false,
        sizeBig: false,
        imgSrc: 'photo.jpg',
        name: 'Modern Living Area',
        type: 'Decor / Artchitecture',
        tag: 'Living Area'
      },
      {
        checked: false,
        sizeBig: true,
        imgSrc: 'photo.jpg',
        name: 'Modern Living Area',
        type: 'Decor / Artchitecture',
        tag: 'Living Area'
      },
      {
        checked: false,
        sizeBig: false,
        imgSrc: 'photo.jpg',
        name: 'Modern Living Area',
        type: 'Decor / Artchitecture',
        tag: 'Living Area'
      }
    ]
  },
  mutations: {
    // методы для изменения состояния
  },
  actions: {
    // методы для асинхронных операций
  },
  getters: {
    // методы для чтения состояния
    articlesNewsCards (state) {
      return state.articlesNewsCardsList
    },

    articlesNewsCardsSliced (state) {
      return state.articlesNewsCardsList.slice(0, 3)
    },

    projectCards (state) {
      return state.projectCardsList
    }
  },
  modules: {
    // модули Vuex для разделения хранилища на под-хранилища
  }
})
