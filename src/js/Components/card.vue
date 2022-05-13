<template>
    <div class="basis-1/3 p-5 bg-white shadow-md rounded-lg relative">
        <h2 class="border-b-red-700 border-b-2 text-2xl first-letter:uppercase mb-4">{{ this.$props.cardTitle }}</h2>
        <slot>

        </slot>
    </div>
</template>

<script>
export default {
    props: ['cardTitle'],
    name: "card",
    data() {
        return {
            tasks: []
        }
    }
}
</script>

<style scoped>

</style>