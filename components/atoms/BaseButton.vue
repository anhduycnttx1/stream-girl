<template>
  <button :type="type" :class="classes" :disabled="disabled" @click="clicked">
    <slot /> {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'button',
    },
    classes: {
      type: [String, Array],
      default: 'base-button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    clicked() {
      this.$emit('clicked')
    },
  },
}
</script>

<style scoped>
.base-button {
  @apply bg-purple-600
  text-white
  rounded-full
  shadow-xl
  transition-colors duration-150;
}

.base-button:hover {
  @apply bg-purple-800;
}

.blue-gradient {
  @apply bg-gradient-to-t from-[#a1c3fd] to-[#c1e9fb]
  w-[172px]
  h-[49px] rounded-full
  text-[18px] font-bold;
}

.dark-blue-gradient {
  @apply bg-gradient-to-t from-[#4fabfd] to-[#00f1fd]
  text-white
  w-[216px]
  h-[58px] rounded-full
  text-[24px] font-bold shadow-md;
}

.pink-btn {
  @apply bg-[#ff25ba] w-[165px] h-[34px] text-white font-bold rounded-lg;
}

.step-btn {
  @apply pb-3 border-b-4 border-[#ff7c7c];
}

.btn__edit-email,
.btn__edit-password {
  @apply w-[7.5625rem] h-[2rem] rounded-[0.3125rem] bg-[#7ebfff] hover:bg-[#6cb4fc] text-[#ffffff] text-[0.875rem];
}

.btn__delete-account {
  @apply w-[8.8125rem] h-[2.25rem] rounded-[0.625rem] bg-[#ffa1a1] hover:bg-[#f18c8c] text-[#ffffff] text-[0.875rem];
}

.btn__follow {
  @apply min-h-[2rem] rounded-2xl bg-[#ff25ba] text-[0.875rem] text-[#fff] font-bold;
}

.btn__follow--pink {
  @apply bg-[#ffa2a2];
}

.btn__follow-twitter {
  @apply min-h-[2rem] rounded-[0.9375rem] bg-[#2199eb] text-[0.9375rem] text-[#fff] font-bold;
}

.btn__more {
  @apply w-[30%] rounded-xl drop-shadow-[0_0_2px_rgba(120,120,120,54%)] text-[0.875rem] text-[#ff638f] font-bold border border-solid border-[#ff638f] py-[0.2rem] bg-white;
}

.btn__more--longer {
  @apply w-[40%];
}

.btn__more--bg-pink {
  @apply bg-[#ffa2a2] text-white border-none rounded-2xl font-normal;
}

.btn__follow-phone {
  @apply w-36 h-8 rounded-md text-white text-xs;

  background-image: linear-gradient(
    17deg,
    rgba(255 37 185 / 99.6%) 0%,
    #f886af 100%
  );
}

.btn__send-comment {
  @apply w-[4.75rem] h-11 rounded-[0.625rem] bg-[#d9f9ff] text-[0.875rem] text-[#1b1b1b] font-medium;
}

.btn__charge {
  @apply w-[6.9375rem] h-[1.8125rem] rounded-[0.625rem] bg-[#8d6bf5] text-white text-[0.875rem];
}

.btn__charge-phone {
  @apply px-6 py-4 rounded-[0.625rem] bg-[#8d6bf5] text-white text-[0.75rem] font-bold;
}

.btn__support {
  @apply w-[20.625rem] h-[3.0625rem] rounded-3xl text-white text-[0.875rem];

  background-image: linear-gradient(
    17deg,
    rgba(253 83 145 / 99%) 0%,
    #f76f64 100%
  );
}

.btn__talking {
  @apply w-[10.4375rem] h-[4.8125rem] rounded-[0.625rem] drop-shadow-[0_0_3px_rgba(0,0,0,0.59)] text-white font-bold;

  background-image: linear-gradient(46deg, #577fff 0%, #49d3ff 100%);
}

.btn__voice {
  @apply w-[10.4375rem] h-[4.8125rem] rounded-[0.625rem] drop-shadow-[0_0_2.5px_rgba(0,0,0,0.68)] text-white font-bold;

  background-image: linear-gradient(
    17deg,
    rgba(255 99 143 / 99.6%) 0%,
    #ffafc5 100%
  );
}

.btn__present {
  width: 91px;
  height: 92px;
  border-radius: 45px;
  filter: drop-shadow(0 0 2px rgba(120 120 120 / 54%));
  background-image: linear-gradient(
    17deg,
    rgba(237 110 159 / 99.6%) 0%,
    #eb8b6b 100%
  );
}

.btn__officialHP {
  @apply px-2 h-11 font-Nikumaru text-white text-[0.6875rem] rounded-[0.3125rem];

  background-image: linear-gradient(17deg, #209bff 0%, #68dfcf 100%);
}
</style>
