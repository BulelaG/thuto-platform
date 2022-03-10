<template>
  <form @submit.prevent="GetATutor" class="form neu-border">
    <h2 class="form-heading">Register</h2>
    <input
      class="form-input neu-border-inset"
      type="text"
      v-model="fullname"
      placeholder="Full name"
      required
    />
    <input
      class="form-input neu-border-inset"
      type="email"
      v-model="email"
      placeholder="Email"
      required
    />

    <input
      class="form-input neu-border-inset"
      type="password"
      v-model="password"
      placeholder="Password"
      required
    />

    <input
      class="form-input neu-border-inset"
      type="text"
      v-model="contact"
      placeholder="Contact Number"
      required
    />
    <input
      class="form-input neu-border-inset"
      type="text"
      v-model="grade"
      placeholder="Grade"
      required
    />
     <input
      class="form-input neu-border-inset"
      type="text"
      v-model="location"
      placeholder="Location"
      required
    />
    
    <button type="submit" class="form-btn neu-border">Sign up</button>
    <!-- <div class="form-social-login">
      <button class="form-btn neu-border form-social-btn">
        <i class="fab fa-google"></i>
      </button>
      <button class="form-btn neu-border form-social-btn">
        <i class="fab fa-facebook-f"></i>
      </button>
    </div> -->

    <p>
      Already a member?
      <router-link :to="{ name: 'Login' }">Sign in</router-link>
    </p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      fullname: "",
      email: "",
      contact: "",
      password: "",
      grade: "",
      location: ""


    };
  },
  methods: {
    register() {
      console.log(this.fullname, this.email, this.contact, this.password, this.grade, this.location);
      fetch("https://arden-first-backend.herokuapp.com/users", {
        method: "POST",
        body: JSON.stringify({
          username: this.username,
          email: this.email,
          contact: this.contact,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          alert("Student registered");
          localStorage.setItem("jwt", json.jwt);
          this.$router.push({ name: "tutors" });
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>
<style>
.neu-border {
  border-radius: 30px;
  background: #f5f5f5;
  box-shadow: 8px 8px 15px #e4e4e4, -8px -8px 15px #ffffff;
}
.neu-border-inset {
  border-radius: 30px;
  background: #f5f5f5;
  box-shadow: inset 8px 8px 15px #e4e4e4, inset -8px -8px 15px #ffffff;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  margin-inline: auto;
}
.form-heading {
  text-align: center;
  text-transform: uppercase;
}
.form-input,
.form-btn {
  border: none;
  outline: none;
  padding: 20px;
}
.form-btn {
  cursor: pointer;
  transition: all 0.1s linear;
}
.form-btn:hover {
  transform: scale(1.05);
}
.form-social-login {
  display: flex;
  justify-content: space-between;
}
.form-social-btn {
  width: 45%;
  color: rgb(255, 190, 190);
}
</style>
