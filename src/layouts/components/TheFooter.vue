<template functional>
    <footer class="the-footer flex-wrap justify-between" :class="classes">        
        <span>COPYRIGHT @ {{ new Date().getFullYear() }} <a href="https://sabertoothweb.com" target="_blank" rel="nofollow">Sabertooth Technology Group, LLC.</a>, All rights Reserved</span>        
    </footer>
</template>

<script>
export default {
    name: "the-footer",
    props: {
        classes: {
            type: String,
        },
    },
}
</script>
