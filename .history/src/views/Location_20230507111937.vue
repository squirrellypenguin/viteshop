<template>
  <div class="map">
    <div class="contact-card">
    <h2>Island Craft Shop</h2>
    <h3>329 US Route 2</h3>
    <h3>South Hero, Vermont 05486</h3>
    <a href="tel:8023723945">802 . 372 . 3945</a>
    <div v-if="new Date().getMonth() > 4">
              <h2>{{new Date()}} WE ARE OPEN</h2>
              <ul class="list-unstyled list-hours mb-5 text-left mx-auto">
                                <li class="list-unstyled-item list-hours-item d-flex">
                                    Sunday
                                    <span class="ml-auto">10:00 AM to 4:00 PM</span>
                               </li>
                                <li class="list-unstyled-item list-hours-item d-flex">
                                    Monday
                                    <span class="ml-auto">10:00 AM to 4:00 PM</span>
                                </li>
                                <li class="list-unstyled-item list-hours-item d-flex">
                                    Tuesday
                                    <span class="ml-auto">10:00 AM to 4:00 PM</span>
                                </li>
                                <li class="list-unstyled-item list-hours-item d-flex">
                                    Wednesday
                                    <span class="ml-auto">10:00 AM to 4:00 PM</span>
                                </li>
                                <li class="list-unstyled-item list-hours-item d-flex">
                                    Thursday
                                    <span class="ml-auto">10:00 AM to 4:00 PM</span>
                                </li>
                                <li class="list-unstyled-item list-hours-item d-flex">
                                    Friday
                                    <span class="ml-auto">10:00 AM to 4:00 PM</span>
                                </li>
                                <li class="list-unstyled-item list-hours-item d-flex">
                                    Saturday
                                    <span class="ml-auto">10:00 AM to 4:00 PM</span>
                                </li>
                            </ul>
                            </div>
                            <div v-else-if="new Date().getMonth() === 12">
                              This is for the holiday
                            </div>
                            <div v-else>
                            Dead of winter
                            </div>
    </div>

    <GmapMap
       
      :center='center'
      :zoom='15'
      style='width:100%;  height: 400px;'
   ><GmapMarker :position="places" @click="linkToOtherWindow('https://goo.gl/maps/xWNdTk3kcDtcxFaW8')"/> </GmapMap>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data() {
    return {
      center: { lat: 44.645, lng: -73.307 },
      places: { lat: 44.645, lng: -73.307 }
    }
  },
    methods: {
    linkToOtherWindow(url) {
       
      window.open(url, '_blank');
    }
  },
};
</script>