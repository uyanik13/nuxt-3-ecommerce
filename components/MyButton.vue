<template>
  <nuxt-link
    :to="to"
    class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 ml-2 border border-gray-400 rounded shadow"
  >
    <slot>sdf</slot>
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  to: String,
});
</script>
