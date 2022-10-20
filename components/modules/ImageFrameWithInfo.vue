<template>
  <div>
    <div v-if="type == 1" class="relative">
      <base-image-frame
        image-src=""
        :type="mobile ? 'thumbnail-mobile' : 'thumbnail'"
      />
      <div
        class="absolute flex items-center justify-center top-[4px] left-[6px] text-[12px] text-white bg-[#00000060] rounded-full border-white border py-[1px] px-[8px]"
      >
        <img
          src="/icons/pink-like.svg"
          class="mr-[3px]"
          :class="mobile ? 'h-[16px]' : ''"
        />
        <div :class="{ 'text-[19px]': mobile }">
          {{ info.likes.toLocaleString() }}
        </div>
      </div>
      <div class="absolute bottom-[6px] left-[7px] flex items-end">
        <base-image-frame
          type="avatar"
          :classes="mobile ? 'small-avatar-mobile' : 'small-avatar'"
        />
        <div
          class="text-white ml-[4px]"
          :class="mobile ? 'text-[21px]' : 'text-sm'"
        >
          {{ info.name + '(' + info.age + ')' }}
        </div>
      </div>
    </div>
    <div v-else-if="type == 2" class="relative">
      <base-image-frame type="avatar" classes="work-avatar" />
      <div
        class="absolute bg-black opacity-50 rounded-b-lg bottom-0 w-full text-white py-[4px] pl-[9px]"
      >
        <div class="font-bold">
          {{
            ('0' + info.start.getUTCHours()).slice(-2) +
            ':' +
            ('0' + info.start.getUTCMinutes()).slice(-2) +
            '~' +
            ('0' + info.end.getUTCHours()).slice(-2) +
            ':' +
            ('0' + info.end.getUTCMinutes()).slice(-2)
          }}
        </div>
        <div class="text-[15px]">
          {{ info.name + '(' + info.age + ')' }}
        </div>
        <div class="text-[9px]">
          {{
            'T.' +
            info.t +
            ' W.' +
            info.w +
            ' ' +
            'B.' +
            info.b +
            ' H.' +
            info.h
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
    mobile: {
      type: Boolean,
      default: false,
    },
    type: {
      type: Number,
      default: 1,
    },
  },
  data: () => {
    return {
      value: '',
    }
  },
}
</script>
