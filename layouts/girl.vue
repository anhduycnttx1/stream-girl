<template>
  <div>
    <main>
      <Nuxt class="w-[751px] max-sm:text-sm max-md:w-full mx-auto" />
    </main>
  </div>
</template>

<script>
export default {
  name: 'GirlLayout',
  middleware: 'check-token',
}
</script>
