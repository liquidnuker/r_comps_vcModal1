<template>
<div class="row no-gutters">
  <div class="col-sm-12">
    <vcModal1 />
    <vcModal2 />
  </div>
</div>
</template>
<script>
const vcModal1 = () => import ('./vcModal1.vue');
const vcModal2 = () => import ('./vcModal2.vue');
  export default {
    data () {
      return {   
        
      }
    },
    components: {
      vcModal1: vcModal1,
      vcModal2: vcModal2
    },
    mounted: function () {
    },
    methods: {
    }
  }
</script>