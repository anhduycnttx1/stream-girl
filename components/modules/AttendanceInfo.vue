<template>
  <div
    class="grid justify-items-center w-full rounded-[0.625rem] drop-shadow-[0_0_2px_rgba(120,120,120,54%)] bg-white pt-3"
  >
    <base-span text="出勤情報" class="text-[#343434] font-bold mb-3" />
    <div
      class="grid grid-cols-2 w-[78%] min-h-[2.25rem] text-[0.875rem] border border-solid border-[rgba(126,126,126,0.99)] rounded-[0.4375rem] mb-[0.375rem]"
    >
      <div class="flex items-center justify-center">
        <base-span class="mr-2" text="7/4" />
        <div
          class="w-6 h-6 rounded-xl bg-[#ff7da1] flex items-center justify-center text-white"
        >
          月
        </div>
      </div>
      <base-span class="flex items-center" text="8:00〜16:00" />
    </div>
    <div
      class="grid grid-cols-2 w-[78%] min-h-[2.25rem] text-[0.875rem] border border-solid border-[rgba(126,126,126,0.99)] rounded-[0.4375rem] mb-[0.375rem]"
    >
      <div class="flex items-center justify-center">
        <base-span class="mr-2" text="7/5" />
        <div
          class="w-6 h-6 rounded-xl bg-[#ff7da1] flex items-center justify-center text-white"
        >
          火
        </div>
      </div>
      <base-span class="flex items-center" text="8:00〜16:00" />
    </div>
    <div
      class="grid grid-cols-2 w-[78%] min-h-[2.25rem] text-[0.875rem] border border-solid border-[rgba(126,126,126,0.99)] rounded-[0.4375rem] mb-[0.375rem]"
    >
      <div class="flex items-center justify-center">
        <base-span class="mr-2" text="7/6" />
        <div
          class="w-6 h-6 rounded-xl bg-[#ff7da1] flex items-center justify-center text-white"
        >
          水
        </div>
      </div>
      <base-span class="flex items-center" text="8:00〜16:00" />
    </div>
    <div
      class="grid grid-cols-2 w-[78%] min-h-[2.25rem] text-[0.875rem] border border-solid border-[rgba(126,126,126,0.99)] rounded-[0.4375rem] mb-[0.375rem]"
    >
      <div class="flex items-center justify-center">
        <base-span class="mr-2" text="7/6" />
        <div
          class="w-6 h-6 rounded-xl bg-[#ff7da1] flex items-center justify-center text-white"
        >
          水
        </div>
      </div>
      <base-span class="flex items-center" text="8:00〜16:00" />
    </div>
    <base-button
      text="さらに見る"
      class="mt-3 mb-5"
      :classes="['btn__more', classes]"
      @clicked="openAttendanceInfoModal"
    />
  </div>
</template>

<script>
export default {
  props: {
    classes: { type: String, default: '' },
  },
  methods: {
    openAttendanceInfoModal() {
      this.$modal.open({ name: 'attendance-info' })
    },
  },
}
</script>
