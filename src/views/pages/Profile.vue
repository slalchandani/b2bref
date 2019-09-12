
<template>
    <div>
        
    </div>  
</template>

<script>
export default {
    name: 'profile',
    methods: {        
        mounted() {
            this.wasSidebarOpen = this.$store.state.reduceButton;
            this.$store.commit('TOGGLE_REDUCE_BUTTON', true)
        },
        beforeDestroy() {
            if (!this.wasSidebarOpen) this.$store.commit('TOGGLE_REDUCE_BUTTON', false)
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/vuesax/pages/profile.scss";
</style>