<template>
  <div class="skeleton">

    <div :class="['sidebar', { collapsed: !sidebarLeftOpened, 'both-opened': sidebarLeftOpened && sidebarRightOpened }]" id="left-sidebar">
      <button class="close-left" v-if="sidebarLeftOpened" @click.prevent="toggleLeftSidebar">
          <icon name="arrow-left"></icon>
      </button>
      <div>
        <slot name="left"></slot>
      </div>
    </div>

    <button class="open-left" v-if="!sidebarLeftOpened" @click.prevent="toggleLeftSidebar">
        <icon name="arrow-right"></icon>
    </button>

    <section id="content_body">
      <slot name="body"></slot>
    </section>

    <button class="open-right" v-if="!sidebarRightOpened" @click.prevent="toggleRightSidebar">
        <icon name="arrow-left"></icon>
    </button>

    <div :class="['sidebar', { collapsed: !sidebarRightOpened, 'both-opened': sidebarLeftOpened && sidebarRightOpened }]" id="right-sidebar">
      <button class="close-right" v-if="sidebarRightOpened" @click.prevent="toggleRightSidebar">
          <icon name="arrow-right"></icon>
      </button>
      <div>
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { TOGGLE_SIDEBAR_LEFT, TOGGLE_SIDEBAR_RIGHT } from '../constants';

export default {
  name: 'skeleton',
  computed: {
    sidebarLeftOpened() {
      return this.$store.state.sidebarLeftOpened;
    },
    sidebarRightOpened() {
      return this.$store.state.sidebarRightOpened;
    },
  },
  methods: {
    toggleLeftSidebar() {
        this.$store.dispatch(TOGGLE_SIDEBAR_LEFT);
    },
    toggleRightSidebar() {
        this.$store.dispatch(TOGGLE_SIDEBAR_RIGHT);
    }
  },
};
</script>
