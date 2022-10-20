<template>
  <div>
    <div v-if="styleHidden === 'translate'">
      <div class="modal translate" :class="{ 'translate-none': visible }">
        <div :class="['modal-dialog', classes]">
          <!--content-->
          <div :class="`close${styleButton}`" @click="close">
            <img v-show="closeButton" src="/icons/close.svg" alt="close-icon" />
          </div>
          <div
            :class="
              name === 'criteria'
                ? 'border-0 bg-white shadow-lg relative flex flex-col items-center w-full outline-none focus:outline-none round'
                : 'modal-body'
            "
          >
            <slot :payload="payload"></slot>
          </div>
        </div>
      </div>
      <div v-show="visible" class="fade"></div>
    </div>
    <div v-else v-show="visible">
      <div class="modal">
        <div :class="['modal-dialog', classes]">
          <!--content-->
          <div :class="`close${styleButton}`" @click="close">
            <img v-show="closeButton" src="/icons/close.svg" alt="close-icon" />
          </div>
          <div
            :class="[
              name === 'criteria'
                ? 'border-0 bg-white shadow-lg relative flex flex-col items-center w-full outline-none focus:outline-none round'
                : 'modal-body',
              styleBody,
            ]"
          >
            <slot :payload="payload"></slot>
          </div>
        </div>
      </div>
      <div class="fade"></div>
    </div>
  </div>
</template>

<script>
import VModal from './handle'

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    styleHidden: {
      type: String,
      default: '',
    },
    styleBody: {
      type: String,
      default: '',
    },
    classes: {
      type: String,
      required: true,
    },
    styleButton: {
      type: Number,
      default: 1,
    },
    closeButton: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      visible: false,
      payload: null,
    }
  },
  beforeMount() {
    VModal.EventBus.$on('open', (params) => {
      if (this.name === params.name) {
        this.open(params)
      }
    })
    VModal.EventBus.$on('close', (params) => {
      if (this.name === params.name) {
        this.close(params)
      }
    })
  },
  methods: {
    open(params) {
      this.visible = true
    },
    close(params) {
      this.visible = false
    },
  },
}
</script>

<style scoped>
.modal {
  @apply max-w-[1000px] mx-auto overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex;
}

.modal-dialog {
  @apply absolute rounded-lg;
}

.close1 {
  @apply absolute right-2 -top-7 z-10 cursor-pointer;
}

.close2 {
  @apply absolute -right-[18px] -top-[18px] z-10 cursor-pointer p-[18px] bg-[#ff8181] rounded-full;
}

.modal-body {
  @apply border-0 rounded-lg shadow-lg relative flex flex-col items-center w-full bg-white outline-none focus:outline-none;
}

.fade {
  @apply opacity-25 fixed inset-0 z-40 bg-black;
}

.round {
  @apply rounded-t-[2rem];
}

.translate {
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out 0s;
}

.translate-none {
  transform: none;
}
</style>
