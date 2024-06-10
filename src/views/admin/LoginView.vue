<script>
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {
  data() {
    return {
      formData: {
        email: '',
        password: ''
      },
      message: ''
    }
  },
  setup() {
    const router = useRouter()
    return { router }
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post('http://localhost:5000/api/auth/login', this.formData)
        localStorage.setItem('accessToken', response.data.accessToken)

        this.router.push({ name: 'user-profile', params: { id: response.data.userId } })
      } catch (error) {
        this.message = error.response.data.message
      }
    }
  }
}
</script>

<template>
  <div class="body">
    <div class="wrapper">
      <h2>Login</h2>
      <form @submit.prevent="handleSubmit">
        <div class="input-box">
          <input type="text" v-model="formData.email" placeholder="Enter your email" required />
        </div>
        <div class="input-box">
          <input type="password" v-model="formData.password" placeholder="**********" required />
        </div>
        <div class="input-box button">
          <input type="Submit" value="Daxil Ol" />
        </div>
        <div class="text">
          <h3>Hesabınız Yoxdur? <a href="/admin/register">Qeydiyyatdan Keç</a></h3>
        </div>

        <p v-if="message">{{ message }}</p>
      </form>
    </div>
  </div>
</template>

<style lang="less">
@import '../../assets/base';
.body {
  width: 100%;
  height: 100vh;
  .flex-center();
  background-image: url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  .back-cover();
}
.wrapper {
  position: relative;
  max-width: 430px;
  width: 100%;
  background: @second;
  padding: 34px;
  border-radius: 6px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
.wrapper h2 {
  position: relative;
  font-size: 22px;
  font-weight: 600;
  color: @primary;
}
.wrapper h2::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 28px;
  border-radius: 12px;
  background: @danger;
}
.wrapper form {
  margin-top: 30px;
}
.wrapper form .input-box {
  height: 52px;
  margin: 18px 0;
}
form .input-box input {
  height: 100%;
  width: 100%;
  outline: none;
  padding: 0 15px;
  font-size: 17px;
  font-weight: 400;
  color: @primary;
  border: 1.5px solid @shadow;
  border-bottom-width: 2.5px;
  border-radius: 6px;
  transition: all 0.3s ease;
}
.input-box input:focus,
.input-box input:valid {
  border-color: @danger;
}
form .policy {
  display: flex;
  align-items: center;
}
form h3 {
  color: @primary;
  font-size: 14px;
  font-weight: 500;
  margin-left: 10px;
}
.input-box.button input {
  color: @second;
  letter-spacing: 1px;
  border: none;
  background: @danger;
  cursor: pointer;
}
.input-box.button input:hover {
  background: @danger;
}
form .text h3 {
  color: @primary;
  width: 100%;
  text-align: center;
}
form .text h3 a {
  color: @danger;
  text-decoration: none;
}
form .text h3 a:hover {
  text-decoration: underline;
}
</style>
