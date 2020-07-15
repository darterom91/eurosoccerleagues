<template>
  <div>
    <div class="header">
      <div class="fondo2 d-flex">
        <div class="logo text-center col-2 col-sm- col-md-2 col-lg-2 p-2">
          <router-link class="text-light text-wrap" :to="{name: 'Home'}">
            <img class="imglogo" src="@/assets/img/ESL.png" alt="">
          </router-link>
        </div>
        <div class="fondoTitulo w-100 col-8 col-sm-8 col-md-8 col-lg-8 p-1">
          <div class="titulo text-center p-2 ">EuroSoccerLeagues</div>
        </div>
        <div class="logo text-center col-2 col-sm- col-md-2 col-lg-2 p-2">
          <router-link class="text-light text-wrap" :to="{name: 'Home'}">
            <img class="imglogo" src="@/assets/img/ESL.png" alt="">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .header{
    margin: 0;
    padding: 0;
    background-color: black;
    background-image: url("../assets/img/futebol.jpg");
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
    border: 3px solid rgb(203, 193, 84);
  }
  .fondoTitulo{
    background-color: rgb(0, 0, 0, 0.8);
  }
  .fondo2{
    background-image: url("../assets/img/fondobanderas.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .titulo{
    font-size: 60px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: rgb(203, 193, 84);
  }
  .logo{
    padding: 0;
    background-color: rgb(0, 0, 0, 0.8);
  }
  .imglogo{
    width: 100px;
  }

  @media (min-width: 300px) {
    .titulo {
      font-size: 20px;
    }
    .imglogo{
      width: 50px;
    }
  }

  @media (min-width: 400px) {
    .titulo {
      font-size: 25px;
    }
    .imglogo{
      width: 60px;
    }
  }

  @media (min-width: 540px) {
    .titulo {
      font-size: 35px;
    }
    .imglogo{
      width: 100px;
    }
  }

  @media (min-width: 720px) {
    .titulo {
      font-size: 45px;
    }
    .imglogo{
      width: 125px;
    }
  }

  @media (min-width: 960px) {
    .titulo {
      font-size: 60px;
    }
    .imglogo{
      width: 150px;
    }
  }

  @media (min-width: 1200px) {
    .titulo {
      font-size: 90px;
    }
    .imglogo{
      width: 175px;
    }
  }
</style>