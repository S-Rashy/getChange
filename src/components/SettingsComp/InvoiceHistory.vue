<script>
import HomeTable from '../dashboardComps/homeTable.vue';

    export default {
        components: {
            HomeTable
        }
    }
</script>

<template>
    <div>
         <div class="flex justify-end mr-8">
             <p class="flex items-center gap-2 text-[#013C61]">
                <span class="border border-[#013C611A] px-1 rounded-xs">1</span> of
                8
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="cursor-pointer hover:scale-110 transition-transform duration-150"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.94697 8.04924C0.94697 12.4947 4.55074 16.0985 8.99621 16.0985C13.4417 16.0985 17.0455 12.4947 17.0455 8.04924C17.0455 3.60377 13.4417 0 8.99621 0C4.55074 0 0.94697 3.60377 0.94697 8.04924Z"
                    fill="#2BDA53"
                  />
                  <path
                    d="M9.80131 4.82953L6.58162 8.04923L9.80131 11.2689"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="cursor-pointer hover:scale-110 transition-transform duration-150"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.0985 8.04924C16.0985 12.4947 12.4947 16.0985 8.04924 16.0985C3.60377 16.0985 0 12.4947 0 8.04924C0 3.60377 3.60377 0 8.04924 0C12.4947 0 16.0985 3.60377 16.0985 8.04924Z"
                    fill="#2BDA53"
                  />
                  <path
                    d="M7.24414 4.82953L10.4638 8.04923L7.24414 11.2689"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
         </div>
<HomeTable/>
    </div>
</template>


<style lang="scss" scoped>

</style>