



export default function () {
  let windowWidth = ref(null);

  if (process.client) {
       windowWidth.value = window.innerWidth
  }


 onMounted(() => window.addEventListener('resize', onWidthChange))
 onUnmounted(() => window.removeEventListener('resize', onWidthChange))
 const onWidthChange = () => windowWidth.value = window.innerWidth

      const type = computed(() => {
        if (windowWidth.value < 550) return 'xs'
        if (windowWidth.value >= 550 && windowWidth.value < 1200) return 'md'
        if (windowWidth.value >= 1200) return 'lg'
        return null; // This is an unreachable line, simply to keep eslint happy.
      })

  const width = computed(() => windowWidth.value)


  return { width, type }
}
