<template>
  <div>
    <!-- home page -->
    <header>
      <div class="overlay">
        <h2>WELCOME TO KIDS CENTER</h2>
        <h3>Reasons for Choosing US</h3>
        <h3>We Provide With Quality Education To Our Kids</h3>

        <br />
        <label>
          <router-link to="/signup"
            ><button>Learn More</button></router-link
          ></label
        >
      </div>
    </header>
    <!-- events -->
    <div class="my-5">
      <div class="wrap-cards">
        <div class="card">
          <div class="wrap-image">
            <img
              class="img-event"
              src="https://images.pexels.com/photos/8107846/pexels-photo-8107846.jpeg"
              alt="animals pictures"
            />
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,100 100,100 100,0"></polygon>
            </svg>
          </div>

          <div class="contents">
            <h3>Various Programs</h3>
            <div class="text">
              We have a variety of programs to offer your children regardless of
              their age and level of knowledge.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="wrap-image">
            <img
              class="img-event"
              src="https://images.pexels.com/photos/8471964/pexels-photo-8471964.jpeg"
            />
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon
                points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100"
              ></polygon>
            </svg>
          </div>

          <div class="contents">
            <h3>Hobby Groups</h3>
            <div class="text">
              The groups where your children will be educated are created
              according to your child’s interests.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="wrap-image">
            <img
              class="img-event"
              src="https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg"
            />
            <svg
              viewBox="-2.93 488.5 604.753 113.677"
              preserveAspectRatio="none"
            >
              <path
                d=" M 599.677 599.677 L -0.323 600.677 Q -2.12 578.16 -1 566 C 14.002 403.153 201.273 584.248 310 570 Q 415.249 556.208 600.323 490 L 599.677 599.677 Z "
              ></path>
            </svg>
          </div>

          <div class="contents">
            <h3>Qualified Teachers</h3>
            <div class="text">
              We employ only highly skilled teachers with more than 5 years of
              experience in teaching children.
            </div>
          </div>
        </div>
      </div>
      <h1>Kids Are The Best Explorers In The World</h1>
    </div>
    <!-- footer -->
    <footer class="footer">
      <div class="waves">
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
      </div>
      <ul class="social-icon">
        <li class="social-icon__item">
          <a class="social-icon__link" href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li class="social-icon__item">
          <a class="social-icon__link" href="#">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li class="social-icon__item">
          <a class="social-icon__link" href="#">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li class="social-icon__item">
          <a class="social-icon__link" href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>
      <ul class="menu">
        <label
          ><router-link class="menu__link" to="/"> Home</router-link></label
        >
        <label
          ><router-link class="menu__link" to="/about">Team</router-link></label
        >
        <label
          ><router-link class="menu__link" to="/contact"
            >Contact</router-link
          ></label
        >
      </ul>
      <p class="copyright">
        2021 |
        <a>Created with❤️ by kids Center</a>
      </p>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
};
</script>

<style scoped>
/* event */

.img-event {
  max-height: 350px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  font-family: "Libre Baskerville", serif;
  font-size: 16px;
  padding: 3rem 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e4d5f0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  font-weight: normal;
}
h1 {
  margin: 0 0 4rem;
  text-align: center;
  font-size: 1.6em;
  color: #5c899e;
}
.wrap-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card {
  width: 32%;
  max-width: 100%;
  margin: 0 0 4rem;
  box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.25);
  background-color: #5c899e;
}
.card .wrap-image {
  position: relative;
}
.card .wrap-image img {
  width: 100%;
  height: auto;
}
.card .wrap-image svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
}
.card .wrap-image svg polygon,
.card .wrap-image svg path {
  fill: #5c899e;
  stroke: #5c899e;
}
.card:nth-child(4) .wrap-image svg path {
  stroke-width: 3px;
}
.card:nth-child(5) .wrap-image svg path {
  stroke-width: 4px;
}
.card:nth-child(6) .wrap-image svg path {
  stroke-width: 6px;
}
.card .contents {
  padding: 1rem;
}
.card .contents h3 {
  margin: 0 0 0.5rem;
  font-size: 1.125em;
  color: #fff;
}
.card .contents .text {
  color: rgba(0, 0, 0, 0.5);
  line-height: 1.6;
  font-size: 0.9em;
}

/* footer */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  margin-bottom: 300px;
}

body {
  display: flex;
  background: #333;
  justify-content: flex-end;
  align-items: flex-end;
  min-height: 100vh;
}

.footer {
  position: relative;
  width: 100%;
  background: #748fb8e5;
  min-height: 100px;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.social-icon,
.menu {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;
}

.social-icon__item,
.menu__item {
  list-style: none;
}

.social-icon__link {
  font-size: 2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
}
.social-icon__link:hover {
  transform: translateY(-10px);
}

.menu__link {
  font-size: 1.2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
  text-decoration: none;
  opacity: 0.75;
  font-weight: 300;
}

.menu__link:hover {
  opacity: 1;
}

.footer p {
  color: #fff;
  margin: 15px 0 10px 0;
  font-size: 1rem;
  font-weight: 300;
}

.wave {
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 100px;
  /* background: url("https://i.ibb.co/wQZVxxk/wave.png"); */

  background-size: 1000px 100px;
}

.wave#wave1 {
  z-index: 1000;
  opacity: 1;
  bottom: 0;

  animation: animateWaves 4s linear infinite color #748fb8e5 !important;
}

/* the design of the home page */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  height: 900px;
}
header {
  /* background-color: rgba(248, 248, 248, 0.335); */
  background-image: url("https://images.pexels.com/photos/5428267/pexels-photo-5428267.jpeg");

  text-align: center;
  /* width: 100%; */
  height: auto;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
  border-radius: 0 0 85% 85% / 30%;
}
header .overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 50px;
  color: #fff;
  text-shadow: 1px 1px 1px #333;
  /* background-image: linear-gradient( 135deg, #a1c2d89d 10%, #bde4ebce 100%); */
  /* background: url("https://wallpaperaccess.com/full/1265273.jpg"); */
  /* background-repeat:no-repeat;  */
}

header .overlay button {
  width: 250px;
  margin: 0 auto;
  margin-bottom: 3rem;
}

h2 {
  font-family: "Dancing Script", cursive;
  font-size: 80px;
  margin-bottom: 30px;
}

h3,
p {
  font-family: "Open Sans", sans-serif;
  margin-bottom: 30px;
}

button {
  border: none;
  outline: none;
  padding: 10px 20px;
  border-radius: 50px;
  color: #333;
  background: #fff;
  margin-bottom: 50px;
  box-shadow: 0 3px 20px 0 #0000003b;
}
button:hover {
  cursor: pointer;
}
</style>
