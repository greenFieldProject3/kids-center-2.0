const axios = require("axios");
const User = require("./server/models/user");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/kids-center");
let servises = [
	"Teacher",
	"Health care",
	"Mental care",
	"School Transportation",
	"Healthy food",
	"Sport activities",
	"Entertainment activities",
	"Birthday and parties",
	"Prepare Gifts",
	"Baby siting",
];
let cities = [
	"Tunis",
	"Ariana",
	"Ben arous",
	"Manouba",
	"Sousse",
	"Sfax",
	"Gabes",
	"Médenine",
	"Mahdia",
	"Béja",
	"Bizerte",
	"Gafsa",
	"Jendouba",
	"Kairouan",
	"Kasserine",
	"Le Kef",
	"Monastir",
	"Nabeul",
	"Sidi Bouzid",
	"Siliana",
	"Tozeur",
	"Zaghouan",
	"Kébili",
];
const generateMobile = () => {
	let start = ["2", "9", "5"];
	let num = start[Math.floor(Math.random() * 3)];
	while (num.length < 8) {
		num += Math.floor(Math.random() * 10);
	}
	return num;
};
let users = [
	{
		gender: "male",
		fullName: "Mr Leo Puro",
		userName: "crazyrabbit476",
		location: "Fouchana",
		email: "leo.puro@example.com",
		mobile: "25317227",
		picture: "https://randomuser.me/api/portraits/men/7.jpg",
		categorie: "service-provider",
		service: "Mental care",
		rating: 476,
		password: "arrowarrow",
	},
	{
		gender: "male",
		fullName: "Mr Austin Wagner",
		userName: "angryfish363",
		location: "Hammam Chatt",
		email: "austin.wagner@example.com",
		mobile: "98276218",
		picture: "https://randomuser.me/api/portraits/men/30.jpg",
		categorie: "service-provider",
		service: "Sport activities",
		rating: 682,
		password: "daphnedaphne",
	},
	{
		gender: "male",
		fullName: "Mr Eder Barbosa",
		userName: "yellowmeercat850",
		location: "La Goulette",
		email: "eder.barbosa@example.com",
		mobile: "57298698",
		picture: "https://randomuser.me/api/portraits/men/62.jpg",
		categorie: "service-provider",
		service: "Health care",
		rating: 937,
		password: "explorerexplorer",
	},
	{
		gender: "female",
		fullName: "Ms Aino Murto",
		userName: "lazyswan525",
		location: "Ariana Ville",
		email: "aino.murto@example.com",
		mobile: "20368256",
		picture: "https://randomuser.me/api/portraits/women/32.jpg",
		categorie: "service-provider",
		service: "Birthday and parties",
		rating: 572,
		password: "broncobronco",
	},
	{
		gender: "female",
		fullName: "Miss Peggy Fernandez",
		userName: "silvercat815",
		location: "Sidi Thabet",
		email: "peggy.fernandez@example.com",
		mobile: "27674535",
		picture: "https://randomuser.me/api/portraits/women/75.jpg",
		categorie: "service-provider",
		service: "Sport activities",
		rating: 504,
		password: "texastexas",
	},
	{
		gender: "female",
		fullName: "Madame Victoria Le Gall",
		userName: "bigtiger694",
		location: "Ezzahra",
		email: "victoria.legall@example.com",
		mobile: "25443364",
		picture: "https://randomuser.me/api/portraits/women/1.jpg",
		categorie: "service-provider",
		service: "Teacher",
		rating: 532,
		password: "8765432187654321",
	},
	{
		gender: "female",
		fullName: "Mrs Elif Akaydın",
		userName: "angrydog787",
		location: "Ariana Ville",
		email: "elif.akaydin@example.com",
		mobile: "91740920",
		picture: "https://randomuser.me/api/portraits/women/4.jpg",
		categorie: "service-provider",
		service: "Birthday and parties",
		rating: 763,
		password: "moremore",
	},
];
let methods = {
	async getUser() {
		const { data } = await axios.get("https://randomuser.me/api");
		// console.log(data.results[0]);
		let newUser = data.results[0];
		let user = {
			category: "provider",
			fullname: `${newUser.name.title} ${newUser.name.first} ${newUser.name.last}`,
			username: newUser.login.username,
			email: newUser.email,
			password: newUser.login.password + newUser.login.password,
			city: cities[Math.floor(Math.random() * cities.length)],
			specialty: servises[Math.floor(Math.random() * 10)],
			phone: generateMobile(),
			user_img: newUser.picture.large,
			gender: newUser.gender,
			rating: Math.floor(Math.random() * 1000),
		};
		console.log(user);
		let userToSave = new User(user);
		let doc = await userToSave.save();
		// console.log(doc);
	},
};

methods.getUser();
