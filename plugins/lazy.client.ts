import { defineNuxtPlugin } from "#app";

function createObserver(el) {
  return new IntersectionObserver((entries, observer) => {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        let lazyImage = entry.target as HTMLImageElement;
        lazyImage.src = lazyImage.dataset.src;
        observer.unobserve(el);
      }
    });
  });
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("lazy", {
    created(el) {
      const observer = createObserver(el);
      observer.observe(el);
    },
  });
});
