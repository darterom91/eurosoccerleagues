<template>
  <div>
    <div class="footer container-fluid">
      <div class="row p-2">
        <div class="titleFooter col-7 col-sm-7 col-md-7">
          EuroSoccerLeague
        </div>
        <div class="footerImg col-5 col-sm-5 col-md-5">
          <img src="@/assets/img/ESL.png" alt="">
        </div>
      </div>
      <div class="row border-top border-light pt-2 pb-3">
       <div class="copy col-12">
         © pagina realizada por dam en 2020
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
  .footer{
    background-color: black;
    color: rgb(203, 193, 84);
  }

  .titleFooter{
    padding: 0;
    margin: auto;
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-align: end;

  }

  .copy{
    color: white;
    text-align: center;
    font-size: 12px;
  }

  .footerImg {
    text-align: start;
    padding: 0;
  }

  .footerImg img{
    display: inline-block;
    max-width: 30%;
  }
  
  @media (min-width: 300px) {
    .titleFooter {
    font-size: 15px;
    }
  }

  @media (min-width: 540px) {
    .titleFooter {
      font-size: 15px;
    }
  }

  @media (min-width: 720px) {
    .titleFooter {
      font-size: 20px;
    }
  }

  @media (min-width: 960px) {
    .titleFooter {
      font-size: 25px;
    }
  }

</style>