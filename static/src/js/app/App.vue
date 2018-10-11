<template>
    <div class="app-container">
        <skeleton>
            <div slot="left">Left</div>
            <div slot="body">Body</div>
            <div slot="right">Right</div>
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

