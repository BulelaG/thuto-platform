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

                <router-link to="/login">  <button type="button" class="btn btn-success text-dark me-2">  <i class="bi bi-whatsapp">W/app Me</i> </button> </router-link>
                <router-link to="/book-me">  <button type="button" class="btn btn-warning text-dark me-2"> Book Me </button> </router-link>
                <router-link class="btn btn-warning text-dark me-2" :to="{name:'Tutor', params: {id: tutor._id}}">  Tutor </router-link>

               <p class="card-text">Grades : {{ tutor.grades }}</p>
               <p class="text-info card-text">Availability : {{ tutor.availability }}</p>

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

// GETT tutor CODE HERE !!!!!!!!!!!!!!!!!!!!!!!


   data() {
    return {
      tutors: [
       {
          _id: "1",
        img: "https://i.postimg.cc/2SSFM2nG/avatar.png",
        name: "John Don",
        grades:"10-12",
        subject: "Maths",
        location: "Khayelitsha",
        availability: "Weekend(9am - 3pm)"
      },
       {
        _id: "2",
        img: "https://i.postimg.cc/2SSFM2nG/avatar.png",
        name: "Cole Davison",
        grades:"10-12",
        subject: "Maths",
        location: "Mitchells Plain",
        availability: "W/days(9am - 3pm)"

      }, {
       _id: "3",
        img: "https://i.postimg.cc/2SSFM2nG/avatar.png",
        name: "Sean Denver",
        grades:"10-12",
        subject: "Physical Sciences",
        location: "Cape Town CBD",
        availability: "W/days Online -(9am - 8pm)"


      }, {
        _id: "4",
        img: "https://i.postimg.cc/2SSFM2nG/avatar.png",
        name: "Peter Mallone",
        grades:"10-12",
        subject: "Life Sciences",
        location: "Delft",
        availability: "Weekend(9am - 3pm)"

      }, {
        _id: "5",
        img: "https://i.postimg.cc/2SSFM2nG/avatar.png",
        name: "Donald Jefferson ",
        grades:"10-12",
        subject: "Life Sciences",
        location: "Manenberg",
        availability: "Weekend Online(12pm-8pm)"


      }, {
       _id: "6",
        img: "https://i.postimg.cc/2SSFM2nG/avatar.png",
        name: "Khulani Hlabathi",
        grades:"10-12",
        subject: "Geography",
        location: "Lansdowne",
        availability: "Weekend(9am - 3pm)"

      }

      
      
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