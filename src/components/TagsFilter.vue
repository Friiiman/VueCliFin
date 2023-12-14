<template>
  <div>
    <div class="blog-details-content__tags-buttons">
      <button @click='selectTag(tag)' class="blog-details-content__tags-button" v-for="(tag, index) in tagsList"
        :key="index">{{ tag }}</button>
    </div>
    <div class="blog-details-content__tags-items">
      <details class="blog-details-content__tags-item" v-for="(article, index) in filterList" :key="index">
        <summary>{{ article.title }}</summary>
        <p class="blog-details-content__tags-text">{{ article.description }}</p>
      </details>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TagsFilter',
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
    ...mapGetters(['articlesTags']),

    filterList () {
      return this.selectedTag
        ? this.articlesTagsList.filter((element) =>
          element.tag.includes(this.selectedTag)
        )
        : this.articlesTagsList
    }
  }
}
</script>
