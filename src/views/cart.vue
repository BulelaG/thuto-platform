<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a style="color: goldenrod;" class="navbar-brand" href="#">FLY SHOES</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mb-2 mb-lg-0 mr-auto">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="./index.html"
              style="color: goldenrod;" >Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="./cart.html"><i style="color: goldenrod;" class="material-icons ">shopping_cart</i><span id="badge"></span>
                </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        <div id="cart"></div>

</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>