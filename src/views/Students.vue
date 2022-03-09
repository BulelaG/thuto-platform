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
              <img :src="student.img" alt="" class="card-img-top" />
              <div class="card-body">
                <br />
                <h5 class="card-title">{{ student.title }}</h5>
                <em><p class="card-text">{{ student.description }}</p></em>
                <p class="card-text">{{ student.category }}</p>

              </div>
              <div class="card-footer">
                <br>
                <small class="text-muted">R{{ student.price }}</small>
                <br>
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
// export default {
//    data() {
//     return {
//        title: "",
//       category: "",
//       description: "",
//       img: "",
//       price: "",
//     };
//   },
//   // fetching product
//   mounted() {
//     if (localStorage.getItem("jwt")) {
//       fetch("https://arden-first-backend.herokuapp.com/products", {
//         method: "GET",
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//           Authorization: `Bearer ${localStorage.getItem("jwt")}`,
//         },
//       })
//         .then((response) => response.json())
//         .then((json) => {
//           this.products = json;
//           this.products.forEach(async (product) => {
//             await fetch(
//               "https://arden-first-backend.herokuapp.com/products" + product.created_by,
//               {
//                 method: "GET",
//                 headers: {
//                   "Content-type": "application/json; charset=UTF-8",
//                   Authorization: `Bearer ${localStorage.getItem("jwt")}`,
//                 },
//               }
//             )
//               .then((response) => response.json())
              
//               .then((json) => {
//                 product.author = json._id;
//               });
//           });
//         })
//         .catch((err) => {
//           alert("Not logged in");
//           this.$router.push({ name: "Login" })
//         });
//     } else {
//       alert("Login failed");
//       this.$router.push({ name: "Login" });
//     }
    
//   },

// }
</script>

<style scoped>
#products {
  flex-wrap: wrap;
}

#products img {
  height: 300px;
  object-fit: contain;
}



</style>
   // products: [
      //   {
      //     id: "1",
      //   title: "Off-White™ x Nike Air Jordan 3",
      //   category: "Nike",
      //   price: 3500,
      //   img: "https://i.postimg.cc/RVwWvkmR/A-Ma-Maniere-x-Nike-Air-Jordan-3.jpg",
      // },
      // {
      //    id: "1",
      //   title: "Auralee x New Balance 550",
      //   category: "New Balance",
      //   price:3090 ,
      //   img: "https://i.postimg.cc/m2Wrpm9F/Auralee-x-New-Balance-550.jpg",
      // },
      // {
      //   title: "YEEZY Foam Runner",
      //   category: "Adidas",
      //   price: 4000,
      //   img: "https://i.postimg.cc/3RNS2j1L/adidas-YEEZY-Foam-Runner.jpg",
      // },
      // {
      //   title: "Kiko Kostadinov ASICS GEL-Quantum Levitrack",
      //   category: "Asics",
      //   price: 1200,
      //   img: "https://i.postimg.cc/XNfGwr1W/Kiko-Kostadinov-ASICS-GEL-Quantum-Levitrack.jpg",
      // },
      // {
      //   title: "Patta x Nike Air Max 1",
      //   category: "Nike",
      //   price: 2589,
      //   img: "https://i.postimg.cc/Prz8WCxZ/Patta-x-Nike-Air-Max-1.jpg",
      // },
      // {
      //   title: "A Ma Maniere x Nike Air Jordan 2.",
      //   category: "Nike",
      //   price: 10000,
      //   img: "https://i.postimg.cc/CKTnGw49/Off-White-x-Nike-Air-Jordan-2.jpg ",
      // },
      // ],


 <!-- category
    <div class="container d-flex justify-content-end mb-3 mt-5 pt-4">
      <div class="d-flex w-25 ms-3">
        <label for="" class="form-label">Sort by category</label>
        <select
          class="form-select"
          name=""
          id="sortCategory"
          onchange="sortCategory()"
        >
        <option  style="color: goldenrod;" value="Nike">Nike</option>
        <option style="color: goldenrod;" value="Adidas">Adidas</option>
        <option style="color: goldenrod;" value="New Balance">New Balance</option>
        <option style="color: goldenrod;" value="Asics">Asics</option>
        </select>
      </div>
      <div class="d-flex w-25 ms-3">
        <label for="" class="form-label">Sort name</label>
        <select class="form-select" name="" id="sortName" onchange="sortName()">
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <div class="d-flex w-25 ms-3">
        <label for="" class="form-label">Sort price</label>
        <select
          class="form-select"
          name=""
          id="sortPrice"
          onchange="sortPrice()"
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
    </div>
    <div id="products" class="container d-flex"></div> -->