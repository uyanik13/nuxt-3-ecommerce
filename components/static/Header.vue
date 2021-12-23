<template>
  <header class="bg-white">
    <div id="header" class="bg-white h-15 w-full border-b border-gray-200">
      <div
        class="
          container
          mx-auto
          sm:px-2
          lg:px-24
          h-16
          mb-2
          flex
          items-center
          justify-around
          border-b-default
          lg:border-none
          border-gray-300
        "
      >
        <!-- LOGO -->
        <nuxt-link to="/">
          <div id="logo" class="flex w-24 lg:w-64">
            <img class="w-32" src="/assets/img/logo.png" />
          </div>
        </nuxt-link>

        <div
          id="search"
          style="z-index: 30"
          class="lg:w-5/12 sm:w-full text-4 font-sans-pro"
        >
          <!-- SEARCH INPUT -->
          <div
            style="z-index: 20"
            class="relative text-gray-600 focus-within:text-orange-500"
          >
            <span class="absolute inset-y-0 right-0 mr-6 flex items-center p-2">
              <IconsSearch />
            </span>
            <input
              class="
                bg-gray-200
                text-sm
                rounded-full
                py-2
                px-5
                w-full
                border-1 border-gray-400
                focus:outline-none focus:ring-1 focus:ring-primary
                placeholder-gray-700
              "
              placeholder="Aradığınız ürün, kategori veya markayı yazınız"
              maxlength="50"
              type="text"
              @mouseover="showHistory = true"
              autocomplete="off"
            />
          </div>

          <!-- SEARCH HISTORY -->
          <div
            id="search-history"
            @mouseleave="showHistory = false"
            v-show="showHistory"
            style="z-index: 10"
            class="
              bg-white
              fixed
              w-96
              -mt-5
              px-4
              py-5
              border-r-default border-b-default border-l-default border-gray-400
            "
          >
            <div class="flex items-center justify-between">
              <span class="text-sm font-bold text-orange-500 mt-2"
                >Geçmiş Aramalar</span
              >
              <a @click="searchHistory = []" href="#">Temizle</a>
            </div>

            <div id="history">
              <ul class="grid list-none">
                <li class="mx-3" v-for="item in searchHistory" :key="item.id">
                  <div class="grid items-center hover:text-orange-500">
                    <a
                      :href="item.slug"
                      class="
                        text-sm text-gray-700
                        my-2
                        border-b-1
                        hover:border-transparent
                        border-gray-300
                        hover:bg-secondary
                        p-2
                      "
                      >{{ item.title }}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- QUICK MENU -->
        <div id="quick-menu" class="w-3/12 hidden sm:hidden md:hidden lg:block">
          <ul class="flex list-none pb-1">
            <li class="mx-3" v-for="item in quickMenu" :key="item.id">
              <div
                class="grid items-center text-gray-800 hover:text-orange-500"
              >
                <nuxt-link :to="item.slug" class="text-xs">{{
                  item.title
                }}</nuxt-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- MAIN MENU -->
    <div
      id="menu"
      class="
        relative
        h-10
        hidden
        justify-between
        items-center
        border-default border-gray-600
        sm:block
        md:block
        lg:flex
      "
    >
      <ul class="flex list-none pb-1 container mx-auto px-24">
        <li class="mx-3" v-for="item in Menu" :key="item.id">
          <div class="grid items-center hover:text-orange-500">
            <a
              href="#"
              style="z-index: 20"
              class="
                text-4
                uppercase
                text-gray-900
                font-bold
                hover:text-orange-600
                border-b-2 border-white
                hover:border-orange-600
              "
              >{{ item.title }}
            </a>
          </div>
        </li>
      </ul>
    </div>

    <div>
      <StaticMobileBottomMenu />
    </div>
  </header>
</template>
<script setup>
const showHistory = ref(false);
const quickMenu = ref([
  {
    id: 1,
    title: "Giriş Yap",
    slug: "login",
  },
  {
    id: 2,
    title: "Favorilerim",
    slug: "my-favorites",
  },
  {
    id: 3,
    title: "Sepetim",
    slug: "basket",
  },
]);
const Menu = ref([
  {
    id: 1,
    title: "KADIN",
    slug: "/",
  },
  {
    id: 2,
    title: "ERKEK",
    slug: "/",
  },
  {
    id: 3,
    title: "ÇOCUK",
    slug: "/",
  },
]);
</script>
