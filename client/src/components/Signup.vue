<template lang="html">
  <div class="container">
    <div class="row">
      <div class="card col-md-6 offset-md-3">
        <div class="card-header">
          Sign Up
        </div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model='email' placeholder="Enter email">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Full Name</label>
              <input type="text" class="form-control" v-model='name' placeholder="Enter Full Name">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" v-model='password' placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary" @click="signUp">Submit</button>
            <div class="">
              <span><router-link to="/Login"> go back to login</router-link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Signup',
  data () {
    return {
      email: '',
      name: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      axios({
        method: 'post',
        url: 'http://localhost:3000/users/signup',
        data: {
          email: this.email,
          name: this.name,
          password: this.password
        }
      }).then(data => {
        console.log(data)
      })
    }
  }
}
</script>

<style lang="css">
</style>
