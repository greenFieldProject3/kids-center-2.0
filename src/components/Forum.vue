<template>
<div class="panel">
            {{user.username}}<input type="text" v-model="newPost"/>
        <button v-on:click="addNewPost()">add</button>
    <div v-for="post in posts" v-bind:key="post.id">
		<div class="panel-element">
		<div class="element-actions">
			<button class="btn btn-action btn-hide"><i class="fa fa-ban"></i></button>
			<button class="btn btn-action btn-heart"><i class="fa fa-heart-o"></i></button>
		</div>
		
		<div class="element-content">
			<button class="btn btn-more">
				<i class="fa fa-ellipsis-h icon-closed"></i>
				<i class="fa fa-times icon-open"></i>
				<i class="fa fa-heart-o icon-hearted"></i>
			</button>
			
			<div class="content-post">
                    <img class="post-avatar" :src="user.user_img">
				<div class="post-content">
					<span class="post-title">Lorem Ipsum Dolor Sit</span>
					<p class="post-body">{{post.message}}</p>
				</div>
			</div>
		</div>
	</div>
    </div>
        </div>
</template>

<script>
import axios from 'axios';
// import {EventBus} from '../EventBus.js';

export default {
    name : 'Forum',
    data(){
        return {
            newPost:"",
            user : {},
            users  : [],
            posts : []
        }
    },
    mounted() {
      this.getAllTheMessages();
      this.getUser();
      // EventBus.on('user', user => this.user = user);
      // console.log("forum user : ", this.user); 
    },
    methods: {
        createNewPost() {
            const article = {
              message : this.newPost ,
              userId : 'e6f85ef2se89f52sdf528d2sf'
            };
            axios.post("http://localhost:8000/forum/add", article)
              .then(response => this.articleId = response.data.id)
              .catch(error => {
                this.errorMessage = error.message;
                console.error("There was an error!", error);
              });
        },
        getAllTheMessages() {
          axios.get("http://localhost:8000/forum/")
            .then(response => this.posts = response.data)
            .catch(error => {
                this.errorMessage = error.message;
                console.error("There was an error!", error);
            });
        },
        getUser() {
            axios.get("http://localhost:8000/user/admin")
                .then(response => {this.users = response.data
                  console.log(this.users)})
                .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error!", error);
                });
        },
        addNewPost() {
            if(this.newPost !== "") {
              this.createNewPost()
              this.getAllTheMessages()
              console.log(this.posts)
              this.newPost = ""
            }
        } 
    }
}
</script>

<style>

/* General */
button {
  display: block;
  background: transparent;
  border: 0;
  cursor: pointer;
}
h1 {
  display: block;
  background-color: #fff;
  width: 100%;
  line-height: 1;
  margin-bottom: 20px;
  padding: 65px 50px;
  font-weight: 700;
  font-size: 32px;
  color: #6F6F6F;
}
.panel {
  max-width: 450px;
  margin: 0 auto;
  padding: 30px 20px;
}
.panel .panel-element {
  position: relative;
}
.panel .panel-element .element-content {
  background-color: #fff;
  padding: 15px;
  border-bottom: 1px solid #d6d6d6;
  position: relative;
  right: 0;
  z-index: 2;
}
.panel .panel-element .element-content .btn-more {
  width: 30px;
  height: 30px;
  line-height: 30px;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
}
.panel .panel-element .element-content .btn-more > i {
  font-size: 16px;
  color: #929292;
  vertical-align: middle;
}
.panel .panel-element .element-content .btn-more .icon-open, .panel .panel-element .element-content .btn-more .icon-hearted {
  display: none;
}
.panel .panel-element .element-content .btn-more:hover {
  background-color: #F9F9F9;
}
.panel .panel-element .element-content .content-post .post-avatar {
  background-color: #ededed;
  width: 60px;
  height: 60px;
  float: left;
  border-radius: 50%;
}
.panel .panel-element .element-content .content-post .post-content {
  margin-left: 75px;
  padding-top: 9px;
}
.panel .panel-element .element-content .content-post .post-content .post-title, .panel .panel-element .element-content .content-post .post-content .post-body {
  display: block;
}
.panel .panel-element .element-content .content-post .post-content .post-title {
  font-size: 14px;
  color: #AFADAD;
}
.panel .panel-element .element-content .content-post .post-content .post-body {
  margin-top: 5px;
  font-size: 12px;
  color: #CCCBCB;
}
.panel .panel-element .element-content:hover .btn-more {
  opacity: 1;
}
.panel .panel-element .element-actions {
  width: 100px;
  height: 45px;
  font-size: 0;
  position: absolute;
  top: 50%;
  right: 20px;
  z-index: 1;
  transform: translateY(-50%);
}
.panel .panel-element .element-actions .btn-action {
  display: inline-block;
  width: 45px;
  height: 45px;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
}
.panel .panel-element .element-actions .btn-action > i {
  font-size: 20px;
}
.panel .panel-element .element-actions .btn-action.btn-hide {
  border-color: #34495e;
}
.panel .panel-element .element-actions .btn-action.btn-hide > i {
  color: #34495e;
}
.panel .panel-element .element-actions .btn-action.btn-hide:hover {
  background-color: #34495e;
}
.panel .panel-element .element-actions .btn-action.btn-heart {
  border-color: #e74c3c;
}
.panel .panel-element .element-actions .btn-action.btn-heart > i {
  color: #e74c3c;
}
.panel .panel-element .element-actions .btn-action.btn-heart:hover {
  background-color: #e74c3c;
}
.panel .panel-element .element-actions .btn-action:not(:last-child) {
  margin-right: 10px;
}
.panel .panel-element .element-actions .btn-action:hover > i {
  color: #fff;
}
.panel .panel-element:not(:first-child) {
  margin-top: 15px;
}
.panel .panel-element.panel-element-open .element-content {
  right: 140px;
}
.panel .panel-element.panel-element-open .element-content .btn-more {
  opacity: 1;
}
.panel .panel-element.panel-element-open .element-content .btn-more .icon-closed {
  display: none;
}
.panel .panel-element.panel-element-open .element-content .btn-more .icon-open {
  display: inline-block;
}
.panel .panel-element.panel-element-hearted .element-actions .btn-action.btn-heart {
  background-color: #e74c3c;
}
.panel .panel-element.panel-element-hearted .element-actions .btn-action.btn-heart > i {
  color: #fff;
}
.panel .panel-element.panel-element-hearted .element-content .btn-more {
  opacity: 1;
}
.panel .panel-element.panel-element-hearted .element-content .btn-more > i {
  color: #e74c3c;
}
.panel .panel-element.panel-element-hearted .element-content .btn-more .icon-open, .panel .panel-element.panel-element-hearted .element-content .btn-more .icon-closed {
  display: none;
}
.panel .panel-element.panel-element-hearted .element-content .btn-more .icon-hearted {
  display: inline-block;
}
.panel .panel-element .element-content {
    background-color: #fff;
    padding: 15px;
    border: 1px solid #d6d6d6;
    position: relative;
    right: 0;
    z-index: 2;
    margin: 1rem 0;
    border-radius: 10px;
}
</style>