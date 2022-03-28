<template>
  <div class="about">
    <!-- <h1>About Us</h1> -->
    

<main role="main">

  <section class="jumbotron text-center">
    <div class="container">
      <h1 class="text-success jumbotron-heading">About Us</h1><br>
      <p class="lead text-muted"><em>Personalised Tutoring
1000's of Vetted Private Tutors in SA
Our hand picked tutors travel to you and can even teach online aswell as host you in our offices. Highest rated tutors by students in South Africa.</em><p><br>
              
      </p>
    </div>
  </section>

  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row">
        <div  class="col-md-4">
          <div class="card mb-4 shadow-sm">
<img src="../assets/grade7-9.jpg" width="100%"  height="225" alt="">   

            <div id="card" class="card-body">
<h3 class="text-warning">Junior High School(Grades 7-9)</h3>
              <p class="card-text  text-dark">
While learning how to apply concepts, we clarify the “big picture”, help formulate ideas and stimulate curiosity.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <router-link to="/register-student"> <button type="button" class="btn btn-warning"><small>Get a tutor</small> </button> </router-link>   
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
<img src="../assets/tutors-posts.jpeg" width="100%"  height="225" alt="">            
            <div id="card" class="card-body">
              <h3 class="text-warning">Become one of our tutors</h3>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
      <router-link to="/register-tutor">  <button type="button" class="btn btn-success text-white me-2"><small> Become a tutor</small> </button> </router-link>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div  class="col-md-4">
          <div class="card mb-4 shadow-sm">
<img src="../assets/grade7-9.jpg" width="100%"  height="225" alt="">            

<div id="card" class="card-body">
              <h3 class="text-warning">Senior High School
(Grades 10-12)</h3>
              <p class="card-text text-dark">
We teach your child to think independently and be prepared, which reduces stress and solidifies ongoing success.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <router-link class=" " to="/register-student"> <button type="button" class="btn text-center btn-warning"><small>Get a tutor</small> </button> </router-link>   
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>

       

       
    
      </div>
    </div>
  </div>

</main>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img{
  border: 1px solid;
  border-radius:10%;
  object-fit: cover;
}
.card{
  color: transparent;
  border: 1px solid;
  border-radius:10%;
}
</style>
