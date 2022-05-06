<template>
  <div class="h-full rounded">
    <Header/>
    <div class="flex gap-4 p-2 bg-gray-200 rounded-md h-[90%] shadow-md flex-row">
      <Card title="favourite web Site">
        <MostVisit/>
      </Card>
      <Card title="todo List">
        <list/>
      </Card>
      <Card title="Learning List">
        <ul id="mostVisited">
        </ul>
        <ul id="bookmarks">

        </ul>
      </Card>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "./header";
import Footer from "./footer";
import Card from "./card";
import List from "./Tabs/list";
import MostVisit from "./Tabs/most-visit";

export default {
  components: {Header, Footer, Card, List, MostVisit}
}
</script>