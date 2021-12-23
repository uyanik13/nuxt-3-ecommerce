<template>
  <Products :products="category.products" :error="error" />
</template>

<script setup>
const config = useRuntimeConfig();
const route = useRoute();

const { data: category, error } = await useAsyncData(
  `categories/${route.params.id}`,
  () => $fetch(`${config.STORE_URL}/categories/${route.params.id}`)
);
</script>
