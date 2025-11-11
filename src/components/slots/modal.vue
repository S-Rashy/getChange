<script>
export default {
    methods: {
        closeModal(){
            this.$emit('close')
        }
    }
};
</script>

<template>
  <div
    class="w-full h-full inset-0 fixed flex items-center justify-center bg-black/30"
  >
    <div class="bg-white h-95 w-120 py-3 px-10">
      <div class="w-full flex justify-end mb-5">
        <svg @click="closeModal"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 21.7724C17.0751 21.7724 22 17.0173 22 11.1517C22 5.28605 17.0751 0.531006 11 0.531006C4.92487 0.531006 0 5.28605 0 11.1517C0 17.0173 4.92487 21.7724 11 21.7724Z"
            fill="#6A7E8A"
          />
          <path
            d="M14.9284 7.35864L7.07129 14.9448"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.07129 7.35864L14.9284 14.9448"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
