<template lang="html">
  <div class="container">
    <div class="row">
      <div class="jumbotron col-md-3" style="background-color: #ffffff">
        <h5>Hi, {{name}}</h5>
        <p>Post anything you want :)</p>
        <hr class="my-4">
        <button type="button" class="btn btn-outline-danger btn-lg" data-toggle="modal" data-target="#exampleModalCenter">+</button>
      </div>
      <div class="col-md-7">
        <div class="card col-md 7">
          <img class="card-img-top" height="490" width="15" src="../assets/logo.png" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- modal -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Choose your best Photo</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Photo:</label>
                <input type="file" class="form-control" id="recipient-name" @change="ambilFoto">
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Caption:</label>
                <textarea class="form-control" id="message-text" v-model='caption'></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="addPhoto" data-dismiss="modal">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      name: localStorage.getItem('name'),
      token: localStorage.getItem('token'),
      caption: '',
      file: null
    }
  },
  methods: {
    ambilFoto: function (event) {
      this.file = event.target.files[0]
      console.log(this.file)
    },
    addPhoto: function () {
      console.log(this.caption)
      axios({
        method: 'post',
        url: 'http://localhost:3000/api/photo',
        headers: {
          token: this.token
        },
        data: {
          caption: this.caption,
          item: this.file[0]
        }
      }).then(({ data }) => {
        console.log(data)
      })
    }
  }
}
</script>

<style lang="css">
</style>
