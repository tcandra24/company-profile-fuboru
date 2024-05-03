<template>
  <transition name="fadeslide">
    <div
      v-show="opened || openOnServerSide"
      ref="modal"
      class="fixed inset-0 z-[999] h-full w-full overflow-y-auto overflow-x-hidden bg-[#343434]/60"
      @click="closeByBackdrop"
    >
      <div
        class="modal-popup-container absolute inset-0 h-full w-full text-center before:inline-block before:h-full before:align-middle"
        :class="[full ? 'px-0 sm:px-3' : 'px-3']"
      >
        <div class="inline-block w-full text-left align-middle">
          <div
            class="relative mx-auto max-w-full overflow-hidden rounded bg-white p-8 text-sm text-gray shadow-lg"
            :class="[full ? 'my-0 sm:my-8' : 'my-8', contentClass]"
            :style="{ width: width + 'px' }"
            @click="$event.stopPropagation()"
          >
            <button
              v-if="closeBtn"
              class="absolute top-2.5 right-2.5 z-10 flex h-8 w-8 items-center justify-center text-base text-black !no-underline opacity-100 hover:opacity-70"
              :class="[closeBtnClass]"
              @click="close"
            >
              ✕
            </button>
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      full: {
        type: Boolean,
        default: false,
      },
      closeBtn: {
        type: Boolean,
        default: false,
      },
      modal: {
        type: Boolean,
        default: false,
      },
      width: {
        type: String,
        default: '550',
      },
      isOpen: {
        type: Boolean,
        default: false,
      },
      openOnServerSide: {
        type: Boolean,
        default: false,
      },
      contentClass: {
        type: String,
        default: '',
      },
      closeBtnClass: {
        type: String,
        default: '',
      },
    },

    data() {
      return {
        opened: false,
      };
    },

    mounted() {
      if (this.isOpen) {
        this.open();
      }
    },

    methods: {
      scrollbarWidth() {
        const scrollDiv = document.createElement('div');
        scrollDiv.style.cssText = 'width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px';
        document.body.appendChild(scrollDiv);
        const result = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return result;
      },

      open() {
        document.querySelector('html').classList.add('overflow-hidden');
        document.querySelector('html').style.marginRight = this.scrollbarWidth() + 'px';

        this.opened = true;

        this.$emit('onopen');
      },
      closeByBackdrop() {
        if (!this.modal) {
          this.close();
        }
      },
      close() {
        document.querySelector('html').style.marginRight = '';
        document.querySelector('html').classList.remove('overflow-hidden');

        this.opened = false;

        this.$emit('onclose');
      },
    },
  };
</script>
