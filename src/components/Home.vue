<template>
  <div >
    <!-- home page -->
    <header>
	<div class="overlay">
<h2>WELCOME TO KIDS CENTER</h2>
<h3>Reasons for Choosing US</h3>
<h3>We Provide With Quality Education To Our Kids</h3>

	<br>
<label> <router-link to="/signup"><button>Learn More</button></router-link></label>
		</div>
</header>
<!-- events -->
<div class="my-5">
      
      <div class="wrap-cards">
        <div class="card">
          <div class="wrap-image">
            <img
              class="img-event" src="https://images.pexels.com/photos/8107846/pexels-photo-8107846.jpeg"
              alt="animals pictures"
            />
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,100 100,100 100,0"></polygon>
            </svg>
          </div>
        
          <div class="contents">
            <h3>Various Programs</h3>
            <div class="text">
             We have a variety of programs to offer your children regardless of their age and level of knowledge.
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
              The groups where your children will be educated are created according to your child’s interests.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="wrap-image">
            <img
             class="img-event"
              src="https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              
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
            We employ only highly skilled teachers with more than 5 years of experience in teaching children.
            </div>
          </div>
        </div>
      </div>
      <span>Kids Are The Best Explorers In The World
</span>
    </div>
<!-- footer -->
<footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 mx-lg-auto col-md-8 col-10">
            <span class="text-white" data-aos="fade-up" data-aos-delay="100">
              Kids Are <strong> The Best Explorers</strong> In The World.
            </span>
          </div>

          <div
            class="col-lg-3 col-md-6 col-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4 class="my-4">Contact Info</h4>

            <p class="mb-1">
              <i class="fa fa-phone mr-2 footer-icon"></i>
              +99 080 070 4224
            </p>

            <p>
              <a href="#">
                <i class="fa fa-envelope mr-2 footer-icon"></i>
                kids-Center@company.com
              </a>
            </p>
          </div>

          <div
            class="col-lg-3 col-md-6 col-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h4 class="my-4">Our Studio</h4>

            <p class="mb-1">
              <i class="fa fa-home mr-2 footer-icon"></i>
              tunis,pole technologique el ghazala
            </p>
          </div>

          <div
            class="col-lg-4 mx-lg-auto text-center col-md-8 col-12"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <p class="copyright-text">Copyright &copy; 2021</p>
            <a>Created with❤️ by kids Center</a>
            <br />
          </div>

          <div
            class="col-lg-4 mx-lg-auto col-md-6 col-12"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <ul class="footer-link">
              <li><a href="#">Stories</a></li>
              <li><a href="#">Work with us</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>

          <div
            class="col-lg-3 mx-lg-auto col-md-6 col-12"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <ul class="social-icon">
              <li><a href="#" class="fa fa-instagram"></a></li>
              <li><a href="#" class="fa fa-twitter"></a></li>
              <li><a href="#" class="fa fa-dribbble"></a></li>
              <li><a href="#" class="fa fa-behance"></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>

<style scoped>
/* event */

 .img-event{
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
  color:  #5c899e;
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
@media all and (max-width: 768px) {
  .card {
    width: 49%;
    margin-bottom: 3rem;
  }
}
@media all and (max-width: 480px) {
  .card {
    width: 100%;
    margin-bottom: 3rem;
  }
}

/* footer */
.site-footer {
  /* background: var(--dark-color); */
  background-color:rgb(107, 124, 129);
  padding: 7em 0 6em 0;
}

.site-footer a {
  color: var(--p-color);
}

.site-footer a:hover,
.footer-icon {
  color: var(--secondary-color);
}

.footer-link li {
  display: inline-block;
  list-style: none;
  margin: 0 10px;
}

.copyright-text,
.footer-link,
.site-footer .social-icon {
  margin-top: 6em;
}

.copyright-text {
  margin-top: 5.3em;
}

/*---------------------------------------
     SOCIAL ICON              
  -----------------------------------------*/

.social-icon {
  position: relative;
  padding: 0;
  margin: 4em 0 0 0;
}

.social-icon li {
  display: inline-block;
  list-style: none;
}

.social-icon li a {
  text-decoration: none;
  display: inline-block;
  font-size: var(--base-font-size);
  margin: 10px;
  text-align: center;
}

/*---------------------------------------
     RESPONSIVE STYLES              
  -----------------------------------------*/

@media screen and (min-width: 1200px) {
  .about-info h2 {
    max-width: 70%;
  }
}

@media screen and (min-width: 991px) {
  .project h2 {
    max-width: 32%;
    margin: 0 auto;
  }
}

@media screen and (max-width: 991px) {
  .hero {
    padding-top: 14em;
  }

  .hero-text {
    bottom: 2em;
  }

  .navbar {
    padding: 1em;
  }

  .navbar-collapse {
    text-align: center;
    padding: 2.5em 0;
  }

  .nav-link {
    display: inline-block;
  }

  .navbar-expand-lg .navbar-nav .nav-link.contact {
    margin: 1em 0;
  }

  .copyright-text,
  .footer-link,
  .site-footer .social-icon {
    margin-top: 3em;
    padding: 0;
    text-align: left;
  }
}

@media screen and (max-width: 767px) {
  h1 {
    font-size: 36px;
  }

  h2 {
    font-size: 28px;
  }

  h3 {
    font-size: 22px;
  }

  .project-info {
    right: 0;
    left: 0;
    margin: 0 auto;
  }

  .footer-link,
  .site-footer .social-icon {
    margin-top: 1em;
  }

  .copyright-text {
    margin: 2.5em 0 1em 0;
  }

  .footer-link li {
    margin-left: 0;
  }
}

/* the design of the home page */
*{padding: 0; margin: 0; box-sizing: border-box;}
body{height: 900px;}
header {
    background-color: rgb(248, 248, 248);
	background: url('http://www.autodatz.com/wp-content/uploads/2017/05/Old-Car-Wallpapers-Hd-36-with-Old-Car-Wallpapers-Hd.jpg');
	text-align: center;
	width: 100%;
	height: auto;
	background-size: cover;
	background-attachment: fixed;
	position: relative;
	overflow: hidden;
	border-radius: 0 0 85% 85% / 30%;
}
header .overlay{
  display: flex;
  flex-direction: column;
  justify-content: center;
	width: 100%;
	height: 100%;
	padding: 50px;
	color: #FFF;
	text-shadow: 1px 1px 1px #333;
  background-image: linear-gradient( 135deg, #a1c2d89d 10%, #bde4ebce 100%);
		/* background: url("https://wallpaperaccess.com/full/1265273.jpg"); */
        /* background-repeat:no-repeat;  */

}

header .overlay button{
  width: 250px;
  margin: 0 auto;
  margin-bottom: 3rem;
}


h2 {
	font-family: 'Dancing Script', cursive;
	font-size: 80px;
	margin-bottom: 30px;
}

h3, p {
	font-family: 'Open Sans', sans-serif;
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
button:hover{
	cursor: pointer;
}
</style>