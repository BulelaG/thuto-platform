<template>




   <div>
     <h1>Students</h1>

<br>

    <section id="gallery" style="padding-bottom: 16px">
      <div class="container">
        <div class="row" v-if="students">
          <div
            v-for="(student, index) of students"
            :key="index"
            class="col-lg-4 mb-4"
          >
            <div class="card">
              <img width="100" height="200"  :src="student.img" alt="" class="card-img-top" />
              <div class="card-body">
                <br />
                <h5 class="card-title">{{ student.name }}</h5>
                <em><p class=" text-warning card-text">{{ student.grade }}</p></em>
                <p class=" text-success card-text">{{ student.subject }}</p>

              </div>
              <div class="card-footer">
                <br>
                <small class="text-muted">{{ student.location }}</small>
                
                <h6></h6>
              </div>
              
              <br>
              <br>
              
            </div>
          </div>
         
        </div>
      </div>
    </section>
    

    </div>
</template>

<script >
export default {

// GETT tutor CODE HERE !!!!!!!!!!!!!!!!!!!!!!!

data() {
    return {
      students: [],
    };
  },
  mounted() {
    fetch("http://localhost:4000/students")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.students = data;
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