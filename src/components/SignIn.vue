<template>
     <div class="signin">
     <!-- <h1>Sign In </h1> -->
     <form @submit.prevent="send">
          <div class="form-group">
               <label for="exampleInputUsername1">Username</label>
               <input v-model="username" type="text" class="form-control" id="exampleInputUsername1" placeholder="Username" required>
          </div>
          <div class="form-group">
               <label for="exampleInputPassword1">Password</label>
               <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required>
          </div>
          <button type="submit" class="btn btn-primary">Sign In</button>
          <small id="signupHelp" class="form-text text-muted">Don't have an account ? <router-link to="/signup"><span>Sign Up</span></router-link> </small>
          <label for="errorSignIn" class="form-text error-form">{{status}}</label>
     </form>
     </div>
</template>

<script>
import axios from 'axios';
import {EventBus} from '../EventBus.js';

export default {
     name : 'SignIn',
     data(){
          return{
               user    : {},
               username: '',
               password: '',
               status  : ''
          }
     },
     methods :{
          send(){
               const user = {
                    username: this.username,
                    password: this.password
               }
               
               axios.post('http://localhost:8000/auth/signin', user)
                    .then(({data}) => {
                         // console.log("signin response : ", data);
                         this.username = '';
                         this.password = '';
                         this.user   = data;
                         this.status = '';
                         EventBus.emit('user', this.user);
                         this.$router.push("/");
                         })
                    .catch(err => {
                         this.status = "wrrong username/password";
                         console.log("signin error : ", err);
                         })

          }
     }
     
}
</script>

<style>
     .signin{
          margin: 5rem 0;
          display:flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
     }
     .signin h1{
          font-weight: 700;
          color: rgb(140, 140, 140);
          margin: 1rem 0;
     }

     form{
          padding: 1rem 2rem;
          width: 500px;
          border-radius: 5px;
          box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.3);
          background-color: #fff;
     }

     form *{
          margin: 0.3rem 0;
     }

     form button{
          margin: 0.5rem 1rem 0 0;
          padding: .2rem 1rem;
     }

     form span{
          text-decoration: underline;
          cursor: pointer;
     }

     .error-form{
          display: flex;
          justify-content: center;
          align-items: center;
          color: red;
          font-size: 15px;
          font-weight: 500;
     }
</style>
