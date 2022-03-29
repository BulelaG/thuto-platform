<template>
<div class="cardcontainer" v-if="tutor">
  <div class="card" style="width: 18rem;">

  <div class="grid-item ">
      <img src="https://i.postimg.cc/2SSFM2nG/avatar.png" alt="" class="-image">
    <h5 class="-name"> {{tutor.fullname}}</h5>
    <h4 class="-price"> {{tutor.subject}} </h4>

    <h3 class="=-price"> {{tutor.grades}} </h3>
        <h5 class="t-price"> {{tutor.location}}</h5>

    </div>
  </div>

  
    </div>

</template>

<script>
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

<style>


</style>