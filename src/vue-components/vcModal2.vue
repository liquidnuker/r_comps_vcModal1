<template>
<div>
  <button @click="toggleModal(true)">vcModal2</button>
  <!-- vcModal2 -->
  <div :class="{
    'bs4modal vcmodal_hide': !vcModal2_active,
    'bs4modal vcmodal2 vcmodal_show':  vcModal2_active}"
    data-backdrop="static" tabindex="-1" role="dialog"
    id="bs4modal"
    aria-labelledby="bs4modal_title" aria-hidden="true"
    @click="toggleMainModal($event)">
    <div class="bs4modal-dialog bs4modal-md" role="document">
      <div :class="{
        'bs4modal-content': !vcModal2_animateEntry,
        'bs4modal-content animated bounceIn': vcModal2_animateEntry}">
        <div class="bs4modal-header">
          <h5 class="bs4modal-title">vcModal2 title</h5>
          <button type="button" class="btn btn1-01" data-dismiss="bs4modal" aria-label="Close" @click="toggleModal(false)">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="bs4modal-body">
          <div class="vcmodal2_prevholder">
            <div class="vcmodal2_svgholder">
             <svg xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
            </div>
          </div>
          <p>modal content...
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div class="vcmodal2_nextholder">
            <div class="vcmodal2_svgholder">
              <svg xmlns="http://www.w3.org/2000/svg"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
            </div>
          </div>
        </div>
        <div class="bs4modal-footer">
          <button type="button" class="btn btn1-01" data-dismiss="bs4modal" @click="toggleModal(false)">Close</button>
          <button type="button" class="btn btn1-01">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <!-- end vcModal2 -->
</div>
</template>
<script>
  export default {
    data() {
      return {
        vcModal2_active: false,
        vcModal2_animateEntry: true
      }
    },
    mounted: function () {
      console.log("vcModal2.vue mounted");
    },
    methods: {
      toggleModal: function (isActive) {
        this.vcModal2_active = isActive;
      },
      toggleMainModal: function (event) {
        if (event.target.id === "bs4modal") {
          this.toggleModal(false);
        }
      }
    }
  }
</script>