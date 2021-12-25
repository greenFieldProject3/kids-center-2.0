<template>
     <div class="signup">
     <!-- <h1>Sign Up</h1> -->
     <form @submit.prevent="send">
          <div class="form-row">
               <div class="form-category">
                    You are :
                    <div class="form-check form-check-inline">
                         <input v-model="category" @click="specialityShow('parent')" class="form-check-input m-2" type="radio" name="category" id="inlineRadio1" value="parent" checked>
                         <label class="form-check-label" for="inlineRadio1">Parent</label>
                    </div>
                    <div class="form-check form-check-inline">
                         <input v-model="category" @click="specialityShow('provider')" class="form-check-input m-2" type="radio" name="category" id="inlineRadio2" value="provider">
                         <label class="form-check-label" for="inlineRadio2">Service Provider</label>
                    </div>
               </div> 
               <div class="form-group col-md-6" v-if="specialitySelect">
                    <label for="inputSpeciality">Specialty</label>
                    <select v-model="speciality" class="form-control" id="inputSpecialty" size="1" name="specialty">
                         <option selected>Specialty</option>
                         <option value="English">English</option>
                         <option value="Français">Français</option>
                         <option value="Arabe">Arabe</option>
                         <option value="Math">Math</option>
                         <option value="Science">Science</option>
                         <option value="Physics">Physics</option>
                    </select>
               </div>
               <div class="form-group">
                    <label for="inputFullname">Full Name</label>
                    <input v-model="fullname" type="text" class="form-control" id="inputFullname" placeholder="Full Name">
               </div>
               <div class="form-group">
                    <label for="inputUsername">Username</label>
                    <input v-model="username" type="text" class="form-control" id="inputUsername" placeholder="username">
               </div>
               <div class="form-group">
                    <label for="inputEmail4">Email</label>
                    <input v-model="email" type="email" class="form-control" id="inputEmail4" placeholder="Email">
               </div>
               <div class="form-group">
                    <label for="inputPassword4">Password</label>
                    <input v-model="password" type="password" class="form-control" id="inputPassword4" placeholder="Password">
               </div>
          </div>
          <div class="form-group">
               <label for="inputPhone">Phone</label>
               <input v-model="phone" type="text" class="form-control" id="inputPhone" placeholder="phone number">
          </div>
          <div class="form-group">
               <label for="inputAddress">Address</label>
               <input v-model="address" type="text" class="form-control" id="inputAddress" placeholder="Tunisie 4000 Ariana">
          </div>
          <div class="form-row">
               <div class="form-group col-md-6">
                    <label for="inputState">City</label>
                    <select v-model="city" id="inputState" class="form-control">
                         <option value="">City</option>
                         <option value="Tunis">Tunis</option>
                         <option value="Ariana">Ariana</option>
                         <option value="Ben arous">Ben arous</option>
                         <option value="Manouba">Manouba</option>
                         <option value="Sousse">Sousse</option>
                         <option value="Sfax">Sfax</option>
                         <option value="Gabes">Gabes</option>
                         <option value="Médenine">Médenine</option>
                         <option value="Mahdia">Mahdia</option>
                         <option value="Béja">Béja</option>
                         <option value="Bizerte">Bizerte</option>
                         <option value="Gafsa">Gafsa</option>
                         <option value="Jendouba">Jendouba</option>
                         <option value="Kairouan">Kairouan</option>
                         <option value="Kasserine">Kasserine</option>
                         <option value="Kef">Le Kef</option>
                         <option value="Monastir">Monastir</option>
                         <option value="Nabeul">Nabeul</option>
                         <option value="Sidi Bouzid">Sidi Bouzid</option>
                         <option value="Siliana">Siliana</option>
                         <option value="Tataouine">Tataouine</option>
                         <option value="Tozeur">Tozeur</option>
                         <option value="Zaghouan">Zaghouan</option>
                         <option value="Zaghouan">Zaghouan</option>
                         <option value="Kébili">Kébili</option>
                    </select>
               </div>
          </div>
          <button type="submit" class="btn btn-primary">Sign up</button>
          <small id="signupHelp" class="form-text text-muted">Already have an account ? <router-link to="/signin"><span>Sign In</span></router-link> </small>

     </form>
     
     </div>
</template>

<script>
import axios from 'axios';

export default {
     name : 'SignUp',
     data(){
          return{
               specialitySelect: false,
               category  : '',
               speciality: '',
               fullname  : '',
               username  : '',
               email     : '',
               password  : '',
               phone     : '',
               address   : '',
               city      : ''

          }
     },
     methods :{
          send(){
               const user = {
                    category  : this.category,
                    speciality: this.speciality,
                    fullname  : this.fullname,
                    username  : this.username,
                    email     : this.email,
                    password  : this.password,
                    phone     : this.phone,
                    address   : this.address,
                    city      : this.city
               }
               
               axios.post('http://localhost:8000/auth/signup', user)
                    .then(() => this.$router.push("/signin"))
                    .catch(err => console.log("signup response : ", err))
          },
          specialityShow(e){
               this.specialitySelect = e === 'provider' ? true : false;
          }
     }
}
</script>

<style>
     .signup{
          margin: 4rem 0;
          display:flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
     }
     .signup h1{
          font-weight: 700;
          color: rgb(140, 140, 140);
          margin: 1rem 0;
     }

     form{
          padding: 1rem 2rem;
          background-color: rgb(240, 240, 240);
          width: 500px;
          border-radius: 5px;
          box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.1);
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

     .form-category{
          font-weight: 500;
          font-size: 16px;
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
