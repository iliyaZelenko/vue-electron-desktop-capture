<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted () {
    // function errorCallback (e) {
    //   console.log('Error', e)
    // }

    // камера
    // navigator.getUserMedia({ video: true, audio: true }, (localMediaStream) => {
    //   var video = document.querySelector('video')
    //   video.src = window.URL.createObjectURL(localMediaStream)
    //   video.onloadedmetadata = (e) => {
    //     // Ready to go. Do some stuff.
    //   }
    // }, errorCallback)
  }
}
</script>
