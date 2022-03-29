  <template>


  <form @submit.prevent="loginStudent" class="form new-border">


    <em><h3 class="text-info"> Are you a tutor ?</h3></em>
             <router-link to="/login-tutor">  <button type="button" class="btn btn-warning text-center text-dark me-2"> Login here</button> </router-link>

    <br>
    <h2 class="form-heading">Student Login</h2>
    <input
      class="form-input new-border-inset"
      type="username"
      v-model="username"
      placeholder="username"
      required
    />
    <input
      class="form-input new-border-inset"
      type="password"
      v-model="password"
      placeholder="Password"
      required
    />
    <button type="submit" class="form-btn neu-border">Sign in</button>
    <!-- <div class="form-social-login">
      <button class="form-btn neu-border form-social-btn">
        <i class="fab fa-google"></i>
      </button>
      <button class="form-btn neu-border form-social-btn">
        <i class="fab fa-facebook-f"></i>
      </button>
    </div> -->

    <p>
      Not a registered tutor?
      <router-link :to="{ name: 'RegisterStudent' }">Create an account</router-link>
    </p>
    <br>
  </form>
</template>


<script>
export default {
  data() {
    return {
      username: "",
      password: "",

    };

  },

  methods: {
    // logout() {console.log("You are logged out")
    // localStorage.clear();
    // alert("Logged out")},
    loginStudent() {
            console.log(this.username, this.password);

      fetch("https://thuto-backend.herokuapp.com/auth2/login-student", {
        method: "POST",
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
        // mode: 'no-cors',
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(async(json) => {
          if(json.accessToken){
            console.log(json.accessToken)
            alert("Tutor logged in");
             this.$router.push({ name: "Tutors" });
            return await localStorage.setItem("jwt", json.accessToken);
          }
          console.log(json);
          alert("Wrong Credentials")
           this.$router.push({ name: "Home" });
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};

</script>

<style>
.new-border {
  border-radius: 30px;
  background: #f5f5f5;
  box-shadow: 8px 8px 15px #e4e4e4, -8px -8px 15px #ffffff;
}
.new-border-inset {
  border-radius: 30px;
  background: #e7e2e2;
  box-shadow: inset 8px 8px 15px #e4e4e4, inset -8px -8px 15px #ffffff;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  gap: 20px;
  width: 100%;
  margin-inline: auto;
  max-width: 600px;
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
  color: #333;
}
</style>