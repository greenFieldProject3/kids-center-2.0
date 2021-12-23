<template>
  <div>
    {{getUser()}}
    {{user}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Profile',
  data() {
      return {
          user : {}
      }
  },
    methods : {
        getUser() {
            axios.get("http://localhost:8000/user/admin")
                .then(response => this.user = response.data[0])
                .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error!", error);
                });
        },
    }
}
</script>
