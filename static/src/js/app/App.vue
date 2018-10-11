<template>
  <div class="app-container">
    <skeleton>
      <div slot="left">The left sidebar</div>
      <div slot="body">The main body of content</div>
      <div slot="right">The right sidebar</div>
    </skeleton>
  </div>
</template>
<script>
import { Skeleton } from './layout';

export default {
  name: 'app',
  components: {
    Skeleton
  }
}
</script>
