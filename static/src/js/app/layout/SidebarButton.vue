<template>
    <button class="btn btn-link" :class="className" @click.prevent="toggle">
        <icon :name="iconName"></icon>
    </button>
</template>
<script>
import { TOGGLE_SIDEBAR_LEFT, TOGGLE_SIDEBAR_RIGHT } from '../constants';

export default {
    name: 'sidebar-button',
    props: {
        isOpen: Boolean,
        isLeft: Boolean
    },
    computed: {
        iconName() {
            if ((this.isOpen && this.isLeft) || (!this.isOpen && !this.isLeft)) {
                return 'arrow-left';
            }
            else if ((this.isOpen && !this.isLeft) || (!this.isOpen && this.isLeft)) {
                return 'arrow-right';
            }
        },
        className() {
            if (this.isOpen && this.isLeft) {
                return 'close-left';
            }
            else if (!this.isOpen && this.isLeft) {
                return 'open-left';
            }
            else if (this.isOpen && !this.isLeft) {
                return 'close-right';
            }
            else if (!this.isOpen && !this.isLeft) {
                return 'open-right';
            }
        }
    },
    methods: {
        toggle() {
            const action = this.isLeft ? TOGGLE_SIDEBAR_LEFT : TOGGLE_SIDEBAR_RIGHT;
            this.$store.dispatch(action);
        }
    }
}
</script>
