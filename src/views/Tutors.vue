<template>

<!-- CODE for hiding this if not logged in -->

<!-- ---- -->


<!-- --- -->


  <div class="tutors">

    <h1 class="tutors-title text-success">Tutors</h1>

  <div>
      <h2  class="grade text-dark "> For grade 10 - 12</h2>

<section id="gallery" style="padding-bottom: 16px">
      <div class="container">
        <div class="row" v-if="tutors">
          <div
            v-for="(tutor, index) of tutors"
            :key="index"
            class="col-lg-4 mb-4"
          >
            <div class="card">
              <img src="https://i.postimg.cc/2SSFM2nG/avatar.png" alt="" class="card-img-top" />
              <div class="card-body">
                <br />
                <h5 class="card-title text-primary">{{ tutor.fullname }}</h5>

                <!-- <router-link to="/login">  <button type="button" class="btn btn-success text-dark me-2">  <i class="bi bi-whatsapp">W/app Me</i> </button> </router-link> -->
                <router-link to="/book-me">  <button type="button" class="btn btn-warning text-dark me-2"> Book Me </button> </router-link>
                <router-link class="btn btn-warning text-dark me-2" :to="{name:'Tutor', params: {id: tutor._id}}">  Tutor </router-link>

               <p class="card-text">Grades : {{ tutor.grades }}</p>
               <!-- <p class="text-info card-text">Availability : {{ tutor.availability }}</p> -->

                <!-- <p class="card-text">{{ tutor._id }}</p> -->
              </div>
              <div class="card-footer">
                
                <small class="text-muted text-success">Subject : {{ tutor.subject }}</small>
                <br>
               <small class="text-muted">Location : {{ tutor.location }}</small>

              </div>
              
              <br>
              
            </div>
          </div>
         
        </div>
      </div>
    </section>

    </div>

 


  </div>
</template>

<script >
export default {
// POST TUTORS HERE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  data() {
    return {
      tutors: null
      


    };
  },
  
// GETTING SERVICES

  mounted() {
 if (!localStorage.getItem("jwt")) {
            alert("User not logged in");
            return this.$router.push({ name: "Home" });
        }

    fetch("http://thuto-backend.herokuapp.com/tutors")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.tutors=data;
      });
  },






          
}


</script>


<style scoped>

.card {
border: 1px solid ;
 border-radius: 30px;
}

</style>