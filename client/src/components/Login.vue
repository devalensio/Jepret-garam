<template>
  <div class="body">
    <div class="container">
      <div class="row">
        <div class="card col-md-6 offset-md-3">
          <div class="card-header">
            Login
          </div>
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model='email' placeholder="Enter email">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model='password' placeholder="Password">
              </div>
              <button type="submit" class="btn btn-primary" @click="signIn">Submit</button>
              <div>
                <p>don't have an account ? <router-link to="/Signup">create one here</router-link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      console.log(this.email)
      console.log(this.password)
      axios({
        method: 'post',
        url: 'http://localhost:3000/users/signin',
        data: {
          email: this.email,
          password: this.password
        }
      }).then(({ data }) => {
        console.log(data)
        localStorage.setItem('token', data.token)
        localStorage.setItem('name', data.name)
        this.$router.push('home')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
