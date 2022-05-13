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
    </div>
</template>

<script>
import Head from "./header";
import Foot from "./footer";
import Card from "./card";
import List from "./Tabs/list";
import MostVisit from "./Tabs/most-visit";

export default {
    components: {Head, Foot, Card, List, MostVisit},
}
</script>