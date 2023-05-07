<template>
  <div class="container">
    <div class="text-center">
     <div class="frontSign">
      <p class="title">Island Craft Shop</p>
      <p class="tagline">A Coopertative Community</p>
      <p>Located in South Hero</p>
      <p>The oldest artisan cooperative in the Lake Champlain Region</p>
      </div>
      <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators img-width="1024" img-height="480">
        <b-carousel-slide
          caption=""
          img-src="https://res.cloudinary.com/doammukzv/image/upload/v1682682860/Art/Halstrom6_zdisrz.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption=""
          img-src="https://res.cloudinary.com/doammukzv/image/upload/v1682931111/Little_Guys_1_twdlmj.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption=""
          img-src="https://res.cloudinary.com/doammukzv/image/upload/v1682682859/Art/Halstrom4_a5hsb9.jpg"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    
    <hello-world msg="This is a update" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
