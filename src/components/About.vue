<template>
  <div> 
    <div class="about-section">
  <h2>Our Mission</h2>
  <h6>To Provide good Quality of Education For Your Kids And Collect Donation For Kids That Need Help Around The World</h6>
  
</div>

<h2 style="text-align:center">Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src="https://avatars.githubusercontent.com/u/90458850?v=4" alt="Jane" style="width:100%">
      <div class="container">
        <h2>Belguesmi Sakr</h2>
        <p><button class="button"><a href="https://github.com/BelguesmiSakr" class="other-links">Contact</a></button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="https://avatars.githubusercontent.com/u/86421744?v=4" alt="Mike" style="width:100%">
      <div class="container">
        <h2>Naseur Mossab</h2>
       
        <p><button class="button"><a href="https://github.com/naceurmossaab" class="other-links">Contact</a></button></p>
      </div>
    </div>
  </div>
   <div class="column">
    <div class="card">
      <img src="https://scontent.ftun16-1.fna.fbcdn.net/v/t1.6435-9/123486814_1060360594396739_2687984173334952824_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bRr96in6848AX9IAD_1&_nc_ht=scontent.ftun16-1.fna&oh=00_AT9TNVl_Uji3xHN-o0AtMJ6FlbkirWBSUdaJowTHCe0cCA&oe=61EAD7A4" alt="Jane" style="width:100%">
      <div class="container">
        <h2>Chaabani Sarra</h2>
        <p><button class="button"><a href="https://github.com/ChaabaniSarra" class="other-links">Contact</a></button></p>
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <img src="https://i.postimg.cc/k5y54SFZ/T02-E5-DNSTR6-U02-E5-F7-DYSU-64b4c87a0552-512.jpg" alt="John" style="width:100%">
      <div class="container">
        <h2>Med_Ali_Baklouti</h2>
        
        
       
        <p><button class="button"><a href="https://github.com/baklouti118" class="other-links">Contact</a></button></p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <img src="https://avatars.githubusercontent.com/u/74403924?v=4" alt="John" style="width:100%">
      <div class="container">
        <h2>Ali Boubaker</h2>
        
        
         
        
        
        
        
        
        <p><button class="button"><a href="https://github.com/Ali-boubaker" class="other-links">Contact</a></button></p>
      </div>
    </div>
  </div>
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
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-facebook"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-twitter"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
    </ul>
    <ul class="menu">
     
      <label ><router-link  class="menu__link" to="/"> Home</router-link></label>
      <label ><router-link class="menu__link" to="/about">Team</router-link></label>
      <label ><router-link  class="menu__link" to="/contact">Contact</router-link></label>



    </ul>
     <p class="copyright">
        2021 |
      <a>Created with❤️ by kids Center</a>
    </p>
  </footer>
  </div>
</template>

<script>
export default {
  name:"about"
}
</script>

<style scoped>
/* footer */
.copyright {
  font-size: 10px;

  color: white;

  letter-spacing: 1.5px;

  word-spacing: 2px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
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
  background: #8da2c2;
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


/* about us */
span{
  text-decoration-style: dashed;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
  border-radius: 50px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(48, 133, 155, 0.993);
  margin: 8px;
  border-radius: 10px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #80aeccb9;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: rgba(91, 137, 212, 0.609);
  text-align: center;
  cursor: pointer;
  width: 100%;
  border-radius: 80px;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
</style>