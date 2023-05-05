<template>
  <div class="container">
    <h4>Horizontal Flip</h4>
    <div v-for="(artist, index) in artists" :key="index" class="flip">
      <div class="front">
        <h3 class="text-shadow">{{ artist.name }}</h3>
        <img style="height: 150px" :src="artist.photo1" />
      </div>
      <div class="back">
        <!-- Title -->
        <p style="font-size: 12px">
          {{ artist.name }}

          <!-- Business name -->
        </p>

        <p v-if="artist.dba">{{ artist.dba }}</p>

        <!-- About me -->
        <p class="artisttext">{{ artist.artistStatement }}</p>

        <!-- Website -->
        <a v-if="artist.website" :href="artist.website" alt="homepage" style="color: black; padding-right: 10px">
          <b-icon-house></b-icon-house
        ></a>

        <!-- Twitter Link -->
        <a v-if="artist.twitter" :href="artist.twitter" alt="twitter" style="color: black; padding-right: 10px"
          ><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"
        /></a>

        <!-- Facebook Link -->
        <a v-if="artist.facebook" class="link-light" :href="artist.facebook" alt="FB" style="color: black; padding-right: 10px"
          ><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"
        /></a>

        <!-- Squarestore Link 
                        <a class="link-light" :href="artist.SquareStore" alt="squareB" style="color:black; padding-right: 10px;"><font-awesome-icon :icon="{ prefix: 'fa', iconName: 'square'}"/></a>
                    -->

        <!-- Instragram Link -->
        <a v-if="artist.Instagram" :href="artist.Instagram" alt="insta" style="color: black; padding-right: 10px"
          ><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"
        /></a>

        <!-- Esty Store -->
        <a v-if="artist.EtsayStore" :href="artist.EtsayStore" alt="etsy" style="color: black; padding-right: 10px"
          ><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'etsy' }"
        /></a>

        <!-- Email -->
        <a :href="'mailto:' + artist.email"> <i style="color: black" class="fa fa-paper-plane" aria-hidden="true"></i> </a>
      </div>
    </div>

    <br />
    <br />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'Artists',
  components: {},

  data() {
    return {
      artists: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  async created() {
    try {
      const response = await axios.get('https://sheet.best/api/sheets/06fc3b51-300c-40ce-a5ef-76c218e62cdd')

      console.log(response.data[1])
      this.artists = response.data
    } catch (error) {
      this.errors.push(error)
    }
  }
}
</script>
