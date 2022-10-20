<template>
  <div>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  name: 'GirlPageBase',
  layout: 'girl',
  middleware: 'auth-girl',
}
</script>
