<template>
  <div class="page_header">
    <h2>Kategoriyalar</h2>
  </div>
  <div class="container_category">
    <div v-for="category in categories" :key="category._id" class="card">
      <div class="avatar">
        <img class="image" :src="getImageUrl(category.image)" :alt="category.name" />
      </div>
      <div class="content-container">
        <p class="title">{{ category.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      categories: []
    }
  },
  async created() {
    await this.fetchCategories()
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get('http://localhost:5000/api/categories')
        this.categories = response.data.filter((category) => category.link === '/furnitures')
      } catch (error) {
        console.error('Error fetching categories', error)
      }
    },
    getImageUrl(path) {
      return path ? `http://localhost:5000/${path}` : ''
    }
  }
}
</script>
