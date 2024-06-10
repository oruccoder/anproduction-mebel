<template>
  <div>
    <form @submit.prevent="uploadImage">
      <input type="file" @change="onFileChange" />
      <button class="reload" type="submit">Upload</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      selectedFile: null,
      message: ''
    }
  },
  methods: {
    onFileChange(event) {
      this.selectedFile = event.target.files[0]
      console.log('Selected file:', this.selectedFile)
    },
    async uploadImage() {
      if (!this.selectedFile) {
        this.message = 'No file selected'
        return
      }

      const formData = new FormData()
      formData.append('image', this.selectedFile)
      console.log('Uploading image:', this.selectedFile)

      try {
        const response = await axios.post('http://localhost:5000/api/upload/ironworks', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        console.log('Upload response:', response.data)
        this.message = response.data.message
        this.$emit('image-uploaded')
      } catch (error) {
        console.error('Error uploading image:', error)
        this.message = 'Error uploading image'
      }
    }
  }
}
</script>
