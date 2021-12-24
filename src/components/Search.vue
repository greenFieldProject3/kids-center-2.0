<template>
	<div class="select">
		<label for="categories">Service categorie</label>
		<select name="categories" id="cat" v-model="categorie" @change="filterCategorie" >
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
		<select name="adress" v-model="adress" @change="filterAdress">
			<option value="Ariana Ville">Ariana Ville</option>
			<option value="Ettadhamen">Ettadhamen</option>
			<option value="Kalaat Landlous">Kalaat Landlous</option>
			<option value="La Soukra">La Soukra</option>
			<option value="Mnihla">Mnihla</option>
			<option value="Raoued<">Raoued</option>
			<option value="Sidi Thabet">Sidi Thabet</option>
			<option value="Ben Arous">Ben Arous</option>
			<option value="Bou Mhel El Bassatine">Bou Mhel El Bassatine</option>
			<option value="El Mourouj">El Mourouj</option>
			<option value="Ezzahra">Ezzahra</option>
			<option value="Fouchana">Fouchana</option>
			<option value="Hammam Chatt">Hammam Chatt</option>
			<option value="Megrine">Megrine</option>
			<option value="Rades">Rades</option>
			<option value="Mannouba">Mannouba</option>
			<option value="Mornaguia">Mornaguia</option>
			<option value="Carthage">Carthage</option>
			<option value="Cite El Khadra">Cite El Khadra</option>
			<option value="El Menzah">El Menzah</option>
			<option value="La Goulette">La Goulette</option>
			<option value="La Marsa">La Marsa</option>
			<option value="Le Bardo">Le Bardo</option>
		</select>
	</div>
</template>
<script>
	export default {
		name: "Search",
		data() {
			return {
				categorie: "",
				adress: "",
			};
		},
		methods: {
			filterCategorie() {
				// console.log(this.categorie);
				this.$emit("filter-categorie", this.categorie);
			},
			filterAdress() {
				console.log(this.adress);
				this.$emit("filter-adress", this.adress);
			},
		},
		emits: ["filter-categorie", "filter-adress"],
	};
</script>
<style scoped>
	.select {
		/* position: relative; */
		margin: 20px auto 20px auto;
		width: 100%;
		display: flex;
		align-items: center;
	}
	.select select {
		font-family: "Arial";
		width: 250px;
		cursor: pointer;
		padding: 10px 20px;
		outline: 0;
		border: 1px solid #000000;
		border-radius: 9px;
		background: #efeaea;
		color: #0e0404;
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
	}
	.select select::-ms-expand {
		display: none;
	}
	.select select:hover,
	.select select:focus {
		color: #000000;
		background: #f1eaea;
	}
	.select select:disabled {
		opacity: 0.4;
		pointer-events: none;
	}
	.select_arrow {
		position: absolute;
		top: 19px;
		right: 15px;
		pointer-events: none;
		border-style: solid;
		border-width: 8px 5px 0px 5px;
		border-color: #7b7b7b transparent transparent transparent;
	}
	.select select:hover ~ .select_arrow,
	.select select:focus ~ .select_arrow {
		border-top-color: #000000;
	}
	.select select:disabled ~ .select_arrow {
		border-top-color: #cccccc;
	}
</style>
