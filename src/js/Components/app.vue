<template>
    <div class="h-full rounded dark">
        <Head/>
        <div class="flex gap-4 p-2  bg-gray-200 rounded-md h-[90%] shadow-md flex-row">
            <Card card-title="favourite web Site">
                <MostVisit/>
            </Card>
            <Card card-title="todo List">
                <list/>
            </Card>
            <Card card-title="Learning List">
                <ul id="mostVisited">
                </ul>
                <ul id="bookmarks">
                </ul>
            </Card>
        </div>
        <Foot/>
        <button @click="isOpen = !isOpen">asdasdas</button>
        <Modal :Open=isOpen />
    </div>
</template>

<script>
import Head from "./header";
import Foot from "./footer";
import Card from "./card";
import List from "./Tabs/list";
import MostVisit from "./Tabs/most-visit";
import Modal from "./modal";

export default {
    components: {Modal, Head, Foot, Card, List, MostVisit},
    data(){
        return {
            isOpen : false
        }
    }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 2s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>