<template>
    <div class="blog-details-content">

        <div class="linear linear__left-linear"></div>
        <div class="linear linear__right-linear"></div>

        <div class="blog-details-content__articles">
            <article class="blog-details-card" v-for="article in filterList" :key="article.id">
                <div class="blog-details-card__top">
                    <h3 class="blog-details-card__title">{{ article.title }}</h3>
                    <div class="blog-details-card__image">
                        <img :src="article.imgSrc" alt="decore photo"
                            class="blog-details-card__img">
                        <div class="blog-details-card__image-desc">
                            <time :datetime="article.date" class="blog-details-card__date">{{ article.dateText }}</time>
                            <p class="blog-details-card__breadcrumbs">{{ article.type }}</p>
                        </div>
                    </div>
                    <p class="blog-details-card__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of
                        Lorem Ipsum available, but the majority have suffered alteration in some form, by
                        injecthumour, or randomised words which don't look even slightly believable.</p>
                    <p class="blog-details-card__text">Embarrassing hidden in the middle of text. All the Lorem
                        Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                    <blockquote class="blog-details-card__blockquote">
                        <svg width="74" height="56" viewBox="0 0 74 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z"
                                fill="#CDA274" />
                        </svg>
                        <p v-html="article.blockquote"></p>
                    </blockquote>
                </div>

                <div class="blog-details-card__bottom">
                    <h3 class="blog-details-card__title">{{ article.subtitle }}</h3>
                    <ol class="blog-details-card__list">
                        <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                            turpmaximus.posuere in.Contrary to
                            popular belief.There are many variations of passages of Lorem Ipsum available, but the
                            majority
                            have suffered.</p>
                        <li class="blog-details-card__list-item">Contrary to popular belief.There are many
                            variations of
                            passages of Lorem Ipsum available, but the majority have suffered.</li>
                        <li class="blog-details-card__list-item">Contrary to popular belief.There are many
                            variations of
                            passages of Lorem Ipsum available, but the majority have suffered.</li>
                        <li class="blog-details-card__list-item">Contrary to popular belief.There are many
                            variations of
                            passages of Lorem Ipsum available, but the majority have suffered.</li>
                    </ol>
                    <img :src="article.subImgSrc" alt="decore photo"
                        class="blog-details-card__img-second">
                    <p class="blog-details-card__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpmaximus.posuere in.Contrary to
                        popular belief.There are many variations of passages of Lorem Ipsum available, but the
                        majority
                        have suffered.</p>
                </div>
            </article>
        </div>

        <div class="blog-details-content__tags">
            <h2 class="blog-details-content__tags-title">Tags</h2>

            <div class="blog-details-content__tags-buttons">
                <button @click='selectTag(tag)' class="blog-details-content__tags-button" v-for="(tag, index) in tagsList" :key="index">{{ tag }}</button>
            </div>

        </div>

    </div>
</template>

<script>
export default {
  name: 'BlogDetailsContent',

  data () {
    return {
      selectedTag: '',
      currentTagButton: '',
      tagsList: [
        'Kitchen',
        'Bedroom',
        'Building',
        'Architecture',
        'Kitchen Planning',
        'Bathroom'
      ],
      articles: [
        {
          id: 1,
          tag: 'Kitchen',
          title: 'Let’s Get Solution for Building Construction Work',
          imgSrc: 'styles/img/blog-details/blog-details-card1.jpg',
          date: '2022-12-26',
          dateText: '26 December,2022',
          type: 'Interior / Home / Decore',
          blockquote: 'The details are not the details.<br>They make the design.',
          subtitle: 'Design sprints are great',
          subImgSrc: 'styles/img/blog-details/blog-details-card2.jpg'
        },
        {
          id: 2,
          tag: 'Bedroom',
          title: 'Title 2',
          imgSrc: '#',
          date: '2022-12-26',
          dateText: '26 December,2022',
          type: 'Lorem / Home / Decore',
          blockquote: 'Lorem ipsum dolor sit amet consectetur.',
          subtitle: 'Lorem ipsum dolor sit amet consectetur',
          subImgSrc: '#'
        },
        {
          id: 3,
          tag: 'Building',
          title: 'Title 3',
          imgSrc: '#',
          date: '2022-12-26',
          dateText: '26 December,2022',
          type: 'Interior / Ipsum / Decore',
          blockquote: 'Lorem ipsum dolor sit amet.',
          subtitle: 'Consectetur adipisicing elit',
          subImgSrc: '#'
        },
        {
          id: 4,
          tag: 'Architecture',
          title: 'Title 4',
          imgSrc: '#',
          date: '2022-12-26',
          dateText: '26 December,2022',
          type: 'Interior / Home / Dolor',
          blockquote: 'Lorem ipsum dolor sit amet.<br> Consectetur adipisicing elit.',
          subtitle: 'Lorem ipsum dolor sit amet',
          subImgSrc: '#'
        },
        {
          id: 5,
          tag: 'Kitchen Planning',
          title: 'Title 5',
          imgSrc: '#',
          date: '2022-12-26',
          dateText: '26 December,2022',
          type: 'Lorem / Home / Dolor',
          blockquote: 'The details are not the details.<br> They make the design.',
          subtitle: 'Design sprints are great',
          subImgSrc: '#'
        },
        {
          id: 6,
          tag: 'Bathroom',
          title: 'Title 6',
          imgSrc: '#',
          date: '2022-12-26',
          dateText: '26 December,2022',
          type: 'Lorem / Ipsum / Dolor',
          blockquote: 'Lorem ipsum dolor sit amet consectetur.',
          subtitle: 'Lorem ipsum dolor sit amet consectetur.',
          subImgSrc: '#'
        }
      ]
    }
  },
  methods: {
    selectTag (tag) {
      if (this.currentTagButton) {
        this.currentTagButton.target.classList.remove(
          'blog-details-content__tags-button--active'
        )
        event.target.classList.add('blog-details-content__tags-button--active')
        this.currentTagButton = event
      } else {
        event.target.classList.add('blog-details-content__tags-button--active')
        this.currentTagButton = event
      }
      if (this.selectedTag === tag) {
        this.selectedTag = ''
        event.target.classList.remove(
          'blog-details-content__tags-button--active'
        )
      } else {
        this.selectedTag = tag
      }
    }
  },
  computed: {
    filterList () {
      return this.selectedTag
        ? this.articles.filter((element) =>
          element.tag.includes(this.selectedTag)
        )
        : this.articles.slice(0, 3)
    }
  }
}
</script>
