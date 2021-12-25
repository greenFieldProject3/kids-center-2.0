<template>
	<div class="select">
		<label for="categories">Service categorie</label>
		<select name="category" v-model="category" @change="filterCategorie">
			<option value="Teacher">Teacher</option>
			<option value="Health care">Health care</option>
			<option value="Mental care">Mental care</option>
			<option value="School Transportation">School Transportation</option>
			<option value="Healthy food">Healthy food</option>
			<option value="Sport activities">Sport activities</option>
			<option value="Entertainment activities">
				Entertainment activities
			</option>
			<option value="Birthday and parties">Birthday and parties</option>
			<option value="Prepare Gifts">Prepare Gifts</option>
			<option value="Baby siting">Baby siting</option>
		</select>
		<label for="adress">City</label>
		<select name="city" v-model="city" @change="filterCity">
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
</template>
<script>
	export default {
		name: "Search",
		data() {
			return {
				category: "",
				city: "",
			};
		},
		methods: {
			filterCategorie() {
				// console.log(this.categorie);
				this.$emit("filter-category", this.category);
			},
			filterCity() {
				console.log(this.adress);
				this.$emit("filter-city", this.city);
			},
		},
		emits: ["filter-category", "filter-city"],
	};
</script>
<style scoped>
	.select {
		font-family: "Raleway", Arial, sans-serif;
		height: 50px;
		width: 100%;
		max-width: 700px;
		font-family: "Raleway", Arial, sans-serif;
		position: relative;
		overflow: hidden;
		margin: 20px;
		background: #ffffff;
		color: #000000;
		/* -------------- */
		-webkit-border-radius: 23px;
		border-radius: 23px;
		background: #e5e8f0;
		-webkit-box-shadow: 10px 10px 42px #bec7da, -10px -10px 42px #fbffff;
		box-shadow: 10px 10px 42px #a7adbd, -10px -10px 42px #fbffff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px;
	}
	.select select {
		border-radius: 10px;
	}
	.select select:hover {
		background-color: rgb(206, 206, 205);
	}
</style>
