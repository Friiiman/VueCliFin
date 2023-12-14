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
    ],
    articlesTagsList: [
      {
        tag: 'Kitchen',
        title: 'Kitchen 1',
        description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.'
      },
      {
        tag: 'Kitchen',
        title: 'Kitchen 2',
        description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.'
      },
      {
        tag: 'Kitchen',
        title: 'Kitchen 3',
        description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.'
      },
      {
        tag: 'Bedroom',
        title: 'Bedroom 1',
        description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.'
      },
      {
        tag: 'Bedroom',
        title: 'Bedroom 2',
        description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.'
      },
      {
        tag: 'Bedroom',
        title: 'Bedroom 3',
        description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.'
      },
      {
        tag: 'Building',
        title: 'Building 1',
        description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.'
      },
      {
        tag: 'Building',
        title: 'Building 2',
        description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.'
      },
      {
        tag: 'Building',
        title: 'Building 3',
        description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.'
      },
      {
        tag: 'Architecture',
        title: 'Architecture 1',
        description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.'
      },
      {
        tag: 'Architecture',
        title: 'Architecture 2',
        description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.'
      },
      {
        tag: 'Architecture',
        title: 'Architecture 3',
        description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.'
      },
      {
        tag: 'Kitchen Planning',
        title: 'Kitchen Planning 1',
        description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.'
      },
      {
        tag: 'Kitchen Planning',
        title: 'Kitchen Planning 2',
        description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.'
      },
      {
        tag: 'Kitchen Planning',
        title: 'Kitchen Planning 3',
        description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.'
      },
      {
        tag: 'Bathroom',
        title: 'Bathroom 1',
        description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.'
      },
      {
        tag: 'Bathroom',
        title: 'Bathroom 2',
        description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.'
      },
      {
        tag: 'Bathroom',
        title: 'Bathroom 3',
        description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.'
      }
    ],
    projectCardsList: [
      {
        sizeBig: true,
        imgSrc: 'styles/img/project-card-imgs/project-photo5.jpg',
        name: 'Minimal Bedroom',
        type: 'Decor / Artchitecture',
        tag: 'Bedroom'
      },
      {
        sizeBig: false,
        imgSrc: 'styles/img/project-card-imgs/project-photo6.jpg',
        name: 'Minimal Bedroom',
        type: 'Decor / Artchitecture',
        tag: 'Bedroom'
      },
      {
        sizeBig: true,
        imgSrc: 'styles/img/project-card-imgs/project-photo7.jpg',
        name: 'Modern Bedroom',
        type: 'Decor / Artchitecture',
        tag: 'Bedroom'
      },
      {
        sizeBig: false,
        imgSrc: 'styles/img/project-card-imgs/project-photo8.jpg',
        name: 'Classic Minimal Bedroom',
        type: 'Decor / Artchitecture',
        tag: 'Bedroom'
      },
      {
        sizeBig: true,
        imgSrc: 'styles/img/project-card-imgs/project-photo9.jpg',
        name: 'Minimal Bedroom table',
        type: 'Decor / Artchitecture',
        tag: 'Bedroom'
      },
      {
        sizeBig: false,
        imgSrc: 'styles/img/project-card-imgs/project-photo10.jpg',
        name: 'System Table',
        type: 'Decor / Artchitecture',
        tag: 'Bedroom'
      },
      {
        sizeBig: true,
        imgSrc: 'styles/img/project-card-imgs/project-photo11.jpg',
        name: 'Modern Bedroom',
        type: 'Decor / Artchitecture',
        tag: 'Bedroom'
      },
      {
        sizeBig: false,
        imgSrc: 'styles/img/project-card-imgs/project-photo12.jpg',
        name: 'Modern Bedroom',
        type: 'Decor / Artchitecture',
        tag: 'Bedroom'
      },
      {
        sizeBig: false,
        imgSrc: 'photo.jpg',
        name: 'Modern Bathroom',
        type: 'Decor / Artchitecture',
        tag: 'Bathroom'
      },
      {
        sizeBig: false,
        imgSrc: 'photo.jpg',
        name: 'Modern Bathroom',
        type: 'Decor / Artchitecture',
        tag: 'Bathroom'
      },
      {
        sizeBig: false,
        imgSrc: 'photo.jpg',
        name: 'Bathroom',
        type: 'Decor / Artchitecture',
        tag: 'Bathroom'
      },
      {
        sizeBig: false,
        imgSrc: 'photo.jpg',
        name: 'Kitchan',
        type: 'Decor / Artchitecture',
        tag: 'Kitchan'
      },
      {
        sizeBig: false,
        imgSrc: 'photo.jpg',
        name: 'Modern Kitchan',
        type: 'Decor / Artchitecture',
        tag: 'Kitchan'
      },
      {
        sizeBig: false,
        imgSrc: 'photo.jpg',
        name: 'Modern Living Area',
        type: 'Decor / Artchitecture',
        tag: 'Living Area'
      },
      {
        sizeBig: false,
        imgSrc: 'photo.jpg',
        name: 'Modern Living Area',
        type: 'Decor / Artchitecture',
        tag: 'Living Area'
      },
      {
        sizeBig: false,
        imgSrc: 'photo.jpg',
        name: 'Modern Living Area',
        type: 'Decor / Artchitecture',
        tag: 'Living Area'
      },
      {
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

    articlesTags (state) {
      return state.articlesTagsList
    },

    projectCards (state) {
      return state.projectCardsList
    }
  },
  modules: {
    // модули Vuex для разделения хранилища на под-хранилища
  }
})
