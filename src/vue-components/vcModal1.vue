<template>
<div>
  <button @click="toggleModal(true)">vcModal1</button>
  <!-- vcModal1 -->
  <div :class="{
    'bs4modal vcmodal_hide': !vcModal1_active,
    'bs4modal vcmodal_show':  vcModal1_active}"
    data-backdrop="static" tabindex="-1" role="dialog"
    id="bs4modal"
    aria-labelledby="bs4modal_title" aria-hidden="true"
    @click="toggleMainModal($event)">
    <div class="bs4modal-dialog bs4modal-md" role="document">
      <div :class="{
        'bs4modal-content': !vcModal1_animateEntry,
        'bs4modal-content animated bounceIn': vcModal1_animateEntry}">
        <div class="bs4modal-header">
          <h5 class="bs4modal-title">vcModal1 title</h5>
          <button type="button" class="btn btn1-01" data-dismiss="bs4modal" aria-label="Close" @click="toggleModal(false)">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="bs4modal-body">
          <p>modal content...</p>
        </div>
        <div class="bs4modal-footer">
          <button type="button" class="btn btn1-01" data-dismiss="bs4modal" @click="toggleModal(false)">Close</button>
          <button type="button" class="btn btn1-01">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <!-- end vcModal1 -->
</div>
</template>
<script>
  export default {
    data() {
      return {
        vcModal1_active: false,
        vcModal1_animateEntry: true
      }
    },
    mounted: function () {
      console.log("vcModal1.vue mounted");
    },
    methods: {
      toggleModal: function (isActive) {
        this.vcModal1_active = isActive;
      },
      toggleMainModal: function (event) {
        if (event.target.id === "bs4modal") {
          this.toggleModal(false);
        }
      }
    }
  }
</script>