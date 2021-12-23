export const useProductById = async () => {
  const config = useRuntimeConfig();
  const route = useRoute();

  const { data, error } = await useFetch(
    `${config.STORE_URL}/products/${route.params.id}`
  );
  const product = data;

  const customFields = computed(() => {
    return product.value["Custom_field"]
      .map(({ title, required, options }) => ({
        name: title,
        required,
        options,
      }))
      .map((x, index) =>
        Object.entries(x).map(([key, value]) => ({
          [`data-item-custom${index + 1}-${key.toString().toLowerCase()}`]:
            value,
        }))
      )
      .reduce((acc, curr) => acc.concat(curr), [])
      .reduce((acc, curr) => ({
        ...acc,
        ...curr,
      }));
  });
  return {
    product,
    error,
    customFields,
  };
};
