<template>
<div v-if="!this.edit">
    <ion-pane ng-controller="ProfileCtrl">
    <ion-header-bar class="bar-stable">
      <h1 class="title">Your Profile :</h1>
    </ion-header-bar>
    <ion-content>
      <div class="list card">
        <ion-item class="profile-item">
          <div class="profile-picture big-profile-picture">
            <img :src="user.user_img" >
          </div>
          <h2 class="profile-name dark">{{user.fullname}}</h2>
          <div class="profile-info">{{user.email}}</div>
          <div class="profile-info">+216 {{user.phone}}</div>
        </ion-item> 
        <ion-item class="profile-item">
          <button @click="this.editFunc()" id="editbtn" class="button button-block button-positive">
            edit
          </button>
        </ion-item>
      </div>
    </ion-content>
  </ion-pane>
</div>
<div v-else-if="this.edit" >
      <ion-pane ng-controller="ProfileCtrl">
    <ion-header-bar class="bar-stable">
      <h1 class="title">Edit Your Profile :</h1>
    </ion-header-bar>
    <ion-content>
      <div class="list card">
        <ion-item class="profile-item">
          <div class="profile-picture big-profile-picture">
            <img :src="user.user_img" >
          </div>
          <div class="profile-info">new image     : </div>
          <input v-model="imageEdit"/>
          <br />
          <div class="profile-info">new user name : </div>
          <input v-model="fullnameEdit"/>
           <br />
          <div class="profile-info">new email :</div>
          <input v-model="emailEdit"/>
           <br />
          <div class="profile-info">new phone :</div>
          <input  v-model="phoneEdit"/>
        </ion-item> 
        <ion-item class="profile-item">
          <button @click="updateUser()" id="editbtn" class="button button-block button-positive">
            save
          </button>
        </ion-item>
      </div>
    </ion-content>
  </ion-pane>
</div>
</template>

<script>
import axios from 'axios'
import { useRoute } from "vue-router";
export default {
  name: 'Profile',
  data() {
      return {
          user : {},
          edit: false,
          imageEdit : '',
          fullnameEdit : '' ,
          emailEdit : '' ,
          phoneEdit : '' ,
          route : useRoute()
      }
  },
  mounted() {
    this.userInfo()
  },
    methods : {
      userInfo() {
        // const route = useRoute();
        const id = this.route.params.id;

    axios.get("http://localhost:8000/user/" + id)
        .then(({data}) => {
          console.log("user response : ", data);
          this.user = data;
          this.imageEdit  = data.user_img;
          this.fullnameEdit = data.fullname;
          this.emailEdit  = data.email;
          this.phoneEdit  = data.phone;
        })
        .catch(error   => console.error("forum user error : ", error));
      },
      editFunc() {
        if(!this.edit) {
          this.edit = true
        }
        else{
          this.userInfo()
          this.edit = false
        }
      },
      updateUser() {
        // const route = useRoute();
        var user_img = this.imageEdit;
        var fullname = this.fullnameEdit;
        var email    = this.emailEdit;
        var phone    = this.phoneEdit;
        const id = this.route.params.id;
        axios.put("http://localhost:8000/user/"+id, {fullname, email, phone, user_img})
        .then(({data}) => {
          this.editFunc()
        })
        .catch((err) => console.log(err))
      }
    }
}
</script>

<style>
#editbtn{
  background-color: hsl(200, 27%, 59%);
  color: #fff;
  width: 1365px;
  margin-top: 50px;
  padding: 10px;
}
.profile-item {
  text-align: center;
}

.profile-picture {
  border: 1px solid rgba(0, 0, 0, 0.25);
  padding: 3px;
  border-radius: 100%;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  margin: 0 auto;
  width: 128px;
  height: 128px;
  overflow: hidden;
}

.profile-picture img {
  width: 128px;
  border-radius: 100%;
}

.profile-name {
  padding-top: 20px;
  font-size: x-large !important;
  font-weight: bold !important;
  text-transform: capitalize;
}

input{
  margin: 10px;
}
</style>
