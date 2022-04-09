<script>
export default {
  props: {
    show: Boolean,
    favs:Array
  }
}
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
             <h3>My favs</h3>
          </div>

          <div class="no-favs" v-if="favs.length < 1">No favs yet!</div>

          <div class="modal-body" v-for="fav in favs" :key="fav.id">
            <slot name="body">name: {{fav.name}}</slot>
            <br>
            <slot name="body">alc: {{ fav.abv }} %</slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button
                class="modal-default-button"
                @click="$emit('close')"
              >Close</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: rgb(243, 152, 32);
}

.modal-body {
  margin: 20px 0;
  border-bottom: 1px solid rgb(243, 152, 32);
}
.no-favs{
  text-align: center;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: bold;
  color: rgb(158, 0, 0);
}
.modal-footer{
  margin-bottom: 40px;
}

.modal-default-button {
  float: right;
}


/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>