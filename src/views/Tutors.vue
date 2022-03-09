<template>

<!-- CODE for hiding this if not logged in -->




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

 iv>


  </div>
</template>

<script >
export default {

// GETT tutor CODE HERE !!!!!!!!!!!!!!!!!!!!!!!


   data() {
    return {
      tutors: [
        {
        img: "https://i.postimg.cc/2SSFM2nG/avatar.png",
        name: "John Don",
        grades:"10-12",
        subject: "Maths",
        location: "Khayelitsha"

      },
       {
        img: "https://i.postimg.cc/2SSFM2nG/avatar.png",
        name: "Cole Davison",
        grades:"10-12",
        subject: "Maths",
        location: "Mitchells Plain"
      }, {
        img: "https://i.postimg.cc/2SSFM2nG/avatar.png",
        name: "Sean Denver",
        grades:"10-12",
        subject: "Physical Sciences",
        location: "Cape Town CBD"


      }, {
        img: "https://i.postimg.cc/2SSFM2nG/avatar.png",
        name: "Peter Mallone",
        grades:"10-12",
        subject: "Life Sciences",
        location: "Delft"

      }, {
        img: "https://i.postimg.cc/2SSFM2nG/avatar.png",
        name: "Donald Jefferson ",
        grades:"10-12",
        subject: "Life Sciences",
        location: "Manenberg"


      }, {
        img: "https://i.postimg.cc/2SSFM2nG/avatar.png",
        name: "Khulani Hlabathi",
        grades:"10-12",
        subject: "Geography",
        location: "Lansdowne"

      }, {
        img: "https://i.postimg.cc/2SSFM2nG/avatar.png",
        name: "John Don",
        grades:"10-12",
        subject: "History",
        location: "Stellenbosch"


      }, {
        img: "https://i.postimg.cc/2SSFM2nG/avatar.png",
        name: "John Don",
        grades:"10-12",
        subject: "Maths",
        location: "Ocean View"

      }, {
        img: "https://i.postimg.cc/2SSFM2nG/avatar.png",
        name: "John Don",
        grades:"10-12",
        subject: "Maths",
        location: "Wynberg"

      },
      
      // {
      //   img: "https://i.postimg.cc/2SSFM2nG/avatar.png",
      //   name: "John Don",
      //   grades:"10-12",
      //   subject: "Maths",
      //   location: "Claremont"

      // }, 
      
      // {
      //   img: "https://i.postimg.cc/2SSFM2nG/avatar.png",
      //   name: "John Don",
      //   grades:"10-12",
      //   subject: "Maths",
      //   location: "Belville"

      // },
      
      // {
      //   img: "https://i.postimg.cc/2SSFM2nG/avatar.png",
      //   name: "John Don",
      //   grades:"10-12",
      //   subject: "English",
      //   location: "Hout Bay"

      // },
     
       
      ],
    };
  }



    
}
</script>


<style scoped>

.card {
border: 1px solid ;
  border-radius: 30px;
}

</style>