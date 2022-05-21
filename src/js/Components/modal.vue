<template>
    <transition name="fade">
        <div v-show="Open"
             class="absolute  top-0 right-0 left-0 bottom-0 flex items-center justify-center bg-transparent">
            <div class="bg-white relative shadow-lg w-3/6 h-3/6 rounded-md overflow-hidden">
                <div class="h-10  bg-cyan-600 flex p-3">
                    <h1 class="w-full">Title</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"/>
                    </svg>
                </div>
                <div class="p-3">Body</div>
                <div class="p-3 absolute bottom-0 w-full bg-cyan-600">footer</div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        Open: {
            type: Boolean,
            default: false
        }
    },
    name: "modal"
}
</script>

<style scoped>

</style>