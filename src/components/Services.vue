<template>
	<div class="main-box">
		<Search
			@filter-category="filterCategory"
			@filter-city="filterCity"
		/>
		<div class="services-conainer">
			<div	class="service-conainer" v-for="service in services" :key="service._id" >
				<Service :service="service" />
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios';
	import Service from "./Service.vue";
	import Search  from "./Search.vue" ;

	export default {
		name: "Services",
		components: { Service, Search },
		data() {
			return {
				services: [],
			};
		},
		created() {
			axios.get("http://localhost:8000/user/service")
				.then(({ data }) => (this.services = data));
		},
		methods: {
			filterCategory(category) {
				console.log(category);
				axios
					.get("http://localhost:8000/user/service")
					.then(
						({ data }) =>
							(this.services = data.filter(
								(service) => service.specialty === category
							))
					);
			},
			filterCity(city) {
				console.log(city);
				axios
					.get("http://localhost:8000/user/service")
					.then(
						({ data }) =>
							(this.services = data.filter(
								(service) => service.city === city
							))
					);
			},
		},
	};
</script>
<style scoped>
	.services-conainer {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 10px;
		grid-row-gap: 20px;
		/* background-size: cover;
		background-image: url("https://images.unsplash.com/photo-1590467590164-c75b94a98575?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
		background-attachment: fixed;
		background-repeat: no-repeat; */
		padding: 0 200px;
	}
	.main-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
