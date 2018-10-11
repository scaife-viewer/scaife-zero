<template>
  <div class="skeleton">

    <div :class="['sidebar', { collapsed: !sidebarLeftOpened, 'both-opened': bothOpened }]" id="left-sidebar">
      <sidebar-button v-if="sidebarLeftOpened" :is-open="sidebarLeftOpened" :is-left="true"></sidebar-button>
      <div>
        <slot name="left"></slot>
      </div>
    </div>

    <sidebar-button v-if="!sidebarLeftOpened" :is-open="sidebarLeftOpened" :is-left="true"></sidebar-button>

    <section id="content_body">
      <slot name="body"></slot>
    </section>

    <sidebar-button v-if="!sidebarRightOpened" :is-open="sidebarRightOpened" :is-left="false"></sidebar-button>

    <div :class="['sidebar', { collapsed: !sidebarRightOpened, 'both-opened': bothOpened }]" id="right-sidebar">
      <sidebar-button v-if="sidebarRightOpened" :is-open="sidebarRightOpened" :is-left="false"></sidebar-button>
      <div>
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarButton from './SidebarButton.vue';

export default {
  name: 'skeleton',
  components: {
    SidebarButton
  },
  computed: {
    bothOpened() {
      return this.sidebarLeftOpened && this.sidebarRightOpened;
    },
    sidebarLeftOpened() {
      return this.$store.state.sidebarLeftOpened;
    },
    sidebarRightOpened() {
      return this.$store.state.sidebarRightOpened;
    },
  }
};
</script>
