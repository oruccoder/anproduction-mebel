<script>
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      number: '',
      message: ''
    }
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('http://localhost:5000/api/submit', {
          name: this.name,
          number: this.number,
          message: this.message
        })
        alert(response.data.message)
        this.name = ''
        this.number = ''
        this.message = ''
      } catch (error) {
        console.error(error)
        alert('There was an error submitting the form')
      }
    }
  }
}
</script>

<template>
  <div class="contact_contain">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-info">
          <h1 class="contact-title">Bizimlə Əlaqə</h1>
          <p class="contact-description">
            Mesaj və Sifarişlərinizi Qeyd Edərək Rahatlıqla Bizimlə Əlaqə Saxlaya Bilərsiniz
          </p>
          <div class="contact-email">
            <h2 class="contact-subtitle">Email</h2>
            <ul class="contact-list">
              <li class="contact-item">
                <div class="icon-wrapper">
                  <box-icon name='phone' ></box-icon>
                </div>
                <a target="_blank" href="#" class="contact-link">
                  <small class="contact-link-text">Əlaqə nömrəsi</small>
                  <strong><a href="tel:905010271819">+90 (501) 027 1819</a></strong>
                </a>
              </li>
            </ul>
          </div>
          <div class="contact-socials">
            <h2 class="contact-subtitle">Socials</h2>
            <ul class="social-list">
              <li class="social-item">
                <a href="javascript:void(0)">
                 <box-icon name='instagram' type='logo' ></box-icon>
                </a>
              </li>
              <li class="social-item">
                <a href="javascript:void(0)">
                  <box-icon name='facebook-circle' type='logo' ></box-icon>
                </a>
              </li>
              <li class="social-item">
                <a href="javascript:void(0)">
                 <box-icon name='whatsapp' type='logo' ></box-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <form @submit.prevent="submitForm" class="contact-form">
          <label for="name">Ad Soyad: </label>
          <input type="text" v-model="name" placeholder="Ad Soyad" required class="input-field" />

          <label for="number">Nömrə:</label>
          <input
            type="number"
            v-model="number"
            inputmode="numeric"
            placeholder="(055)"
            class="input-field"
            required
          />

          <label for="message">Mesaj:</label>
          <textarea
            v-model="message"
            placeholder="Mesajlar"
            rows="6"
            id="message"
            class="textarea-field"
            required
          ></textarea>
          <button type="submit" class="submit-button">Göndər</button>

          <p v-if="responseMessage">{{ responseMessage }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import '../../assets/base';
.contact_contain {
  width: 100%;
  height: 100vh;
  .flex-center();
}
.container {
  width: 100%;
  max-width: 1000px;
  padding: 16px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding: 32px;
  background-color: white;
  box-shadow: 0 2px 10px -3px @transparent-dark;
  border-radius: 8px;
}

@media (min-width: 640px) {
  .contact-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.contact-title {
  font-size: 2rem;
  font-weight: 800;
}

.contact-description {
  margin-top: 12px;
  color: #888;
  font-size: 0.875rem;
}

.contact-email,
.contact-socials {
  margin-top: 48px;
}

.contact-subtitle {
  font-size: 1.125rem;
  font-weight: 800;
}

.contact-list,
.social-list {
  margin-top: 12px;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-item,
.social-item {
  display: flex;
  align-items: center;
}

.icon-wrapper {
  background-color: #e6e6e6cf;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-link {
  color: @primary;
  font-size: 0.875rem;
  margin-left: 12px;
}

.contact-link-text {
  display: block;
}

.social-list {
  flex-direction: row;
  gap: 16px;
}

.input-field,
.textarea-field {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 0.875rem;
  outline: none;
  transition: border-color 0.3s;

  margin: 10px;
}

.input-field:focus,
.textarea-field:focus {
  border-color: @primary;
}

.textarea-field {
  padding-top: 12px;
}

.submit-button {
  width: 100%;
  background-color: @primary;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: @primary;
}
</style>
