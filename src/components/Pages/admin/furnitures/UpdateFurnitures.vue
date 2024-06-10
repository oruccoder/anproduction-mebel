<template>
  <div v-if="image">
    <form @submit.prevent="updateImage">
      <input type="file" @change="onFileChange" />
      <button class="reload" type="submit">Update</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    image: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedFile: null,
      message: ''
    }
  },
  methods: {
    onFileChange(event) {
      this.selectedFile = event.target.files[0]
    },
    async updateImage() {
      if (!this.selectedFile) {
        this.message = 'No file selected'
        return
      }

      const formData = new FormData()
      formData.append('image', this.selectedFile)

      try {
        const response = await axios.put(
          `http://localhost:5000/api/furnitures/images/${this.image._id}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        )
        this.message = response.data.message
        this.$emit('image-updated')
      } catch (error) {
        console.error('Error updating image:', error)
        this.message = 'Error updating image'
      }
    }
  }
}
</script>
