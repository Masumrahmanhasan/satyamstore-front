<template>
  <div class="container-fluid">
    <form @submit.prevent="checkLogin" id="loginForm" method="post" autocomplete="off">
      <div class="row">
        <div class="registertoast"> Please Now Login</div>
        <div class="login_text">
          <input type="text" v-model="form.mobile" class="form-control" id="login_mobile">
        </div>
        <div class="login_pass">
          <input type="password" class="form-control" id="login_password" name="password">
        </div>
        <div class="login_submit">
          <button type="submit" class="btn btn-primary login_btn"></button>
        </div>
      </div>

    </form>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        form: {
          mobile: ''
        }
      }
    },
    methods: {
      checkLogin() {
        alert('hello')
      }
    }
  }

</script>

<style>

body {
  background-repeat: round !important;
  background-image: url("images/LoginScreen.jpg") !important;
  background-size: cover !important;
  height: 100vh !important;
  overflow-x: hidden;
}

.login_text {
  position: absolute;
  bottom: 24%;
  width: 24%;
  left: 22%;
}

.login_pass {
  position: absolute;
  bottom: 14%;
  width: 23%;
  left: 23%;
}

.login_text input,
.login_pass input {
  line-height: 0.5;
  height: 6vh;
}

.login_submit {
  position: absolute;
  bottom: 6%;
  width: 19%;
  left: 43%;
}

.login_btn {
  width: 100%;
  height: 7vh;
  border: transparent;
  background: transparent;
}

.login_btn:hover,
.login_btn:focus,
.login_btn:first-child:hover {
  border: transparent;
  background: transparent;
}

@media (min-width: 992px) {
  .login_pass {
    position: absolute;
    bottom: 14%;
    width: 23%;
    left: 24%;
  }
}

.registertoast {
  position: absolute;
  color: #fcb544;
  left: 13%;
}

</style>