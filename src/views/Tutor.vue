<template>
  <h1>Tutor- {{tutor}}</h1>
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
        if(this.id){
            this.tutor = this.id
        }
    }
}
</script>

<style>

</style>