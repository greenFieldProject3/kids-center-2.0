<template>
  <div id="nav" class="navbar">
    <img width="40" alt="kid center" src="https://img.icons8.com/cotton/50/000000/christmas-kid-2.png" />
    <router-link to="/"><span>Kids Center</span></router-link>
    <div class="spacer"></div>
    <router-link  to="/"><span>Home</span></router-link>
    <router-link v-if="user.username" :to="`/forum/${user._id}`"><span>Forum</span></router-link>
    <router-link v-if="user.username" to="/services"><span>Search</span></router-link>
    <div class="spacer-right"></div>
    <router-link to="/contact"><span class="navbar-title">Contact</span></router-link>
    <router-link v-if="user.username"  to="/"><span class="d-flex align-items-center"><img :src="user.user_img" class="user-logo" />{{user.username}}</span></router-link>
    <router-link v-if="!user.username" to="/signin"> <span class="navbar-title">Sign In</span></router-link>
    <router-link v-if="user.username"  to="/">       <span @click="logout" class="navbar-title">Log Out</span></router-link>
  </div>
  <router-view/>
</template>

<script>
import {inject} from 'vue';

export default {
    name: 'App',
    data(){
        return{
            user : {},
            EventBus : inject('EventBus')
        }
    },
    mounted(){
        this.EventBus.on('user', (user) => this.user = user);
    },
    methods:{
        logout(){
            this.user = {};
        }
    }


}
</script>

<style scoped>
  :host {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    color: #333;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    z-index: 0;
}

a{
  text-decoration: none !important;
}

h1,
h2,
h3,
h4,
h5,
h6,
span {
    margin: 0 .7rem;
}

.spacer {
    flex: 0.5;
}

.spacer-right {
    flex: 1;
}

.container{
    width:50%;
    margin:5%;
    margin-left: 25%;
    min-height: 300px;
    /* background-color: salmon; */
}

.navbar {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    display: flex;
    align-items: center;
    background-color: hsl(200, 27%, 59%);
    color: white;
    font-size: 17px;
    font-weight: 600;
    padding: 0 1rem;
}
.navbar img {
    margin-right: .5rem;
}
.navbar span {
    text-decoration: none;
    color: #fff;
    background: transparent;
    text-align: center;
    position: relative;
    cursor: pointer;
    padding: 0.2rem 1rem;
}
.navbar span:before {
    content: '';
    position: absolute;
    width : calc(100% + 4px);
    height: calc(100% + 4px);
    top: calc(2px/-1);
    left: calc(2px/-1);
    background: linear-gradient(to right, #fff 0%, #fff 100%), linear-gradient(to top, #fff 50%, transparent 50%), linear-gradient(to top, #fff 50%, transparent 50%), linear-gradient(to right, #fff 0%, #fff 100%), linear-gradient(to left, #fff 0%, #fff 100%);
    background-size: 100% 2px, 2px 200%, 2px 200%, 0% 2px, 0% 2px;
    background-position: 50% 100%, 0% 0%, 100% 0%, 100% 0%, 0% 0%;
    background-repeat: no-repeat, no-repeat;
    transition: transform 0.3s ease-in-out, background-position 0.3s ease-in-out, background-size 0.3s ease-in-out;
    transform: scaleX(0) rotate(0deg);
    transition-delay: 0.3s, 0.3s, 0s;
}
.navbar span:hover:before {
    background-size: 200% 2px, 2px 400%, 2px 400%, 55% 2px, 55% 2px;
    background-position: 50% 100%, 0% 100%, 100% 100%, 100% 0%, 0% 0%;
    transform: scaleX(1) rotate(0deg);
    transition-delay: 0s, 0s, 0.3s;
}

.user-logo{
    width : 25px;
    height: 25px;
    border-radius: 50%;
}

@-webkit-keyframes orbit {
    0% {
        transform: rotateZ(0deg);
    }
    100% {
        transform: rotateZ(360deg);
    }
}
@keyframes orbit {
    0% {
        transform: rotateZ(0deg);
    }
    100% {
        transform: rotateZ(360deg);
    }
}
@-webkit-keyframes invert-orbit {
    0% {
        transform: rotateZ(360deg) rotateY(30deg) rotateX(-75deg);
    }

    100% {
        transform: rotateZ(0deg) rotateY(30deg) rotateX(-75deg);
    }
}
@keyframes invert-orbit {
    0% {
        transform: rotateZ(360deg) rotateY(30deg) rotateX(-75deg);
    }

    100% {
        transform: rotateZ(0deg) rotateY(30deg) rotateX(-75deg);
    }
}

</style>
