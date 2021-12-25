<template>
	<figure class="snip0057 blue">
		<figcaption>
			<img class="user-picture" :src="service.user_img" alt="" />
			<h2>
				{{ service.fullname }}
			</h2>
			<p>{{ service.city }}</p>
			<p>(216) {{ service.phone }}</p>
			<p>{{ service.email }}</p>
			<div class="icons">
				<a href="#"><i class="ion-ios-home"></i></a
				><a href="#"><i class="ion-ios-email"></i></a
				><a href="#"><i class="ion-ios-telephone"></i></a>
			</div>
		</figcaption>
		<div class="image">
			<img :src="servisesPics[service.specialty]" alt="sample3" />
		</div>
		<div class="position">{{ service.specialty }}</div>
	</figure>
</template>
<script>
	export default {
		name: "Service",
		props: {
			service: Object,
		},
		data() {
			return {
				servisesPics: {
					"English":
						"https://media.istockphoto.com/photos/african-american-girl-raising-her-hands-while-sitting-on-her-desk-in-picture-id1323715308?b=1&k=20&m=1323715308&s=170667a&w=0&h=MeG-_I7iI4HsElwGrxCgMm7P4QkJsWGmwvcrOyYnGlc=",
					"Health care":
						"https://media.istockphoto.com/photos/african-american-doctor-with-face-mask-examining-boys-throat-during-a-picture-id1287924870?b=1&k=20&m=1287924870&s=170667a&w=0&h=IQXjrdzzp83xAZyd7oLHog0wCluKFZc5RD-Z5ZsUirM=",
					"Mental care":
						"https://media.istockphoto.com/photos/mom-and-son-laugh-together-while-playing-in-living-room-picture-id1165345367?b=1&k=20&m=1165345367&s=170667a&w=0&h=gwJd7nteQ7rAhDGuNi57VB-XwLiagNDOFpoMJPbeuCU=",
					"School Transportation":
						"https://media.istockphoto.com/photos/students-heading-to-school-wearing-masks-picture-id1283623157?b=1&k=20&m=1283623157&s=170667a&w=0&h=b_a9o4A3NTp6B0ZiBn1rYUMhHtj7bQQpMd687ro5R0k=",
					"Healthy food":
						"https://images.unsplash.com/photo-1517673400267-0251440c45dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGtpZHMlMjBoZWFsdGh5JTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					"Sport activities":
						"https://images.unsplash.com/photo-1598880513655-d1c6d4b2dfbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8a2lkcyUyMHNwb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					"Entertainment activities":
						"https://www.compassroseevents.com/wp-content/uploads/2015/04/Youth-Inflatable-Bounce-Jump-Slide.jpg",
					"Birthday and parties":
						"https://media.istockphoto.com/photos/admiring-birthday-candles-picture-id524889574?b=1&k=20&m=524889574&s=170667a&w=0&h=yFaaQuMtv2ez81NHnI1j6aDxuG8OAmvUccVfJoZ6Ofw=",
					"Prepare Gifts":
						"https://www.everydaycheapskate.com/wp-content/uploads/learning-xmas-toy-and-little-boy.jpg",
					"Baby siting":
						"https://www.care.com/c/wp-content/uploads/sites/2/2021/04/nicolef455-202056180356614979-1620x1080.jpg",
				},
			};
		},
	};
</script>
<style scoped>
	@import url(https://fonts.googleapis.com/css?family=Raleway:400,200,300,800);
	@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);

	figure.snip0057 {
		font-family: "Raleway", Arial, sans-serif;
		position: relative;
		overflow: hidden;
		margin: 10px 2rem;
		min-width: 400px;
		max-width: 400px;
		width: 100%;
		background: #ffffff;
		color: #000000;
		/* -------------- */
		-webkit-border-radius: 23px;
		border-radius: 23px;
		background: #e5e8f0;
		-webkit-box-shadow: 10px 10px 42px #bec7da, -10px -10px 42px #fbffff;
		box-shadow: 10px 10px 42px #a7adbd, -10px -10px 42px #fbffff;
	}
	figure.snip0057 * {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		-webkit-transition: all 0.35s ease-in-out;
		transition: all 0.35s ease-in-out;
	}
	figure.snip0057 .image {
		width: 50%;
		height: 450px;
		overflow: hidden;
		z-index: 1;
		-webkit-transform: skewX(-15deg);
		transform: skewX(-15deg);
	}
	figure.snip0057 .image img {
		position: relative;
		display: block;
		height: 450px;
		left: -15%;
		z-index: 1;
		-webkit-transform: skew(15deg);
		transform: skew(15deg);
	}
	figure.snip0057:before {
		position: absolute;
		content: "";
		height: 100%;
		width: 45%;
		background: rgba(0, 0, 0, 0.2);
		-webkit-transform: skewX(-17deg);
		transform: skewX(-17deg);
		-webkit-box-shadow: 15px 0px 25px rgba(0, 0, 0, 0.7);
		box-shadow: 15px 0px 25px rgba(0, 0, 0, 0.7);
	}
	figure.snip0057 figcaption {
		padding: 20px 30px 20px 20px;
		position: absolute;
		right: 0;
		bottom: 10px;
		width: 50%;
	}
	figure.snip0057 figcaption h2,
	figure.snip0057 figcaption p {
		margin: 0;
		text-align: right;
		padding: 10px 0;
		width: 100%;
	}
	figure.snip0057 figcaption h2 {
		font-size: 1.3em;
		font-weight: 300;
		text-transform: uppercase;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	}
	figure.snip0057 figcaption h2 span {
		font-weight: 800;
	}
	figure.snip0057 figcaption p {
		font-size: 0.9em;
		opacity: 0.8;
	}
	figure.snip0057 figcaption .icons {
		width: 100%;
		text-align: right;
	}
	figure.snip0057 figcaption .icons i {
		font-size: 26px;
		padding: 5px;
		top: 50%;
		color: #000000;
		opacity: 0;
	}
	figure.snip0057 figcaption a {
		opacity: 0.3;
	}
	figure.snip0057 figcaption a:hover {
		opacity: 0.8;
	}
	figure.snip0057 .position {
		position: absolute;
		bottom: 0;
		width: 100%;
		text-align: right;
		padding: 15px 30px;
		font-size: 1.3em;
		opacity: 1;
		font-style: italic;
		color: #ffffff;
		background: #000000;
		font-weight: bold;
	}
	figure.snip0057.blue .position {
		background: #20638f;
	}
	figure.snip0057.red .position {
		background: #962d22;
	}
	figure.snip0057.yellow .position {
		background: #bf6516;
	}
	figure.snip0057:hover figcaption,
	figure.snip0057.hover figcaption {
		bottom: 40px;
	}
	figure.snip0057:hover .icons i,
	figure.snip0057.hover .icons i {
		opacity: 1;
		-webkit-transition-delay: 0.2s;
		transition-delay: 0.2s;
	}
	figure.snip0057:hover:before,
	figure.snip0057.hover:before {
		-webkit-animation: shadow 0.6s ease-in-out;
		animation: shadow 0.6s ease-in-out;
	}
	@-webkit-keyframes shadow {
		0% {
			left: 0px;
		}
		50% {
			left: -5px;
		}
		100% {
			left: 0px;
		}
	}
	@keyframes shadow {
		0% {
			left: 0px;
		}
		50% {
			left: -5px;
		}
		100% {
			left: 0px;
		}
	}
	/* img {
		max-width: none !important;
	} */
	.user-picture {
		border-radius: 50%;
		/* margin-left: 45px; */
	}
</style>
