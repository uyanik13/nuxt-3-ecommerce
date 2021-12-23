<template>
  <div class="bg-gray-200">
    <StaticHeader />
    <div class="main-content">
      <slot />
    </div>
    <StaticFooter />
  </div>
</template>

<script setup>
const meta = useMeta({
  meta: [
    {
      name: "description",
      content: "e-commerce starter Nuxt.js ",
    },
  ],
});
</script>
