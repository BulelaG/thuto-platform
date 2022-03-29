<template>

<!-- CODE for hiding this if not logged in -->




  <div class="tutors">

    <h1 class="tutors-title text-success">My Profile</h1>

  <div>
      <h2  class="grade text-dark "> </h2>

<section id="gallery" style="padding-bottom: 16px">
      <div class="container">
        <div class="row" v-if="tutors">
          <div
            v-for="(tutor, index) of tutors"
            :key="index"
            class="col-lg-4 mb-4"
          >
            <div class="card">
              <img :src="tutor.img" alt="" class="card-img-top" />
              <div class="card-body">
                <br />
                <h5 class="card-title text-primary">{{ tutor.name }}</h5>

                <i class="bi bi-whatsapp"></i>
                <router-link to="/login">  <button type="button" class="btn btn-success text-dark me-2">  <i class="bi bi-whatsapp">W/app Me</i> </button> </router-link>
                <router-link to="/login">  <button type="button" class="btn btn-warning text-dark me-2"> Book Me </button> </router-link>

               <p class="card-text">Grades : {{ tutor.grades }}</p>
                <p class="card-text">{{ tutor._id }}</p>
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
    props: ["id"],
    data() {
        return {
            tutor: null
        }
    },
  mounted(){
        fetch('https://thuto-backend.herokuapp.com/tutors/find/'+ this.id)
        .then(res => res.json())
        .then(data => this.tutor = data)
        .catch(err=> console.log(err.message))
    }



    
}
</script>


<style scoped>

.card {
border: 1px solid ;
  border-radius: 30px;
}

</style>