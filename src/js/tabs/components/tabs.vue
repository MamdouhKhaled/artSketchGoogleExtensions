<template>
  <div class="h-full rounded">
    <div class="row">
      <div class="col-6 offset-3">
        <form action="http://www.google.com/search" method="get" target="_blank" accept-charset="utf-8">
          <div class="group ">
            <input class="animate" type="text" name="q" placeholder="Google Search ...">
            <button type="submit">Search..</button>
          </div>
        </form>
      </div>
    </div>
    <div class="flex py-5 gap-4 h-[90%] flex-row">
      <div class="basis-1/3 p-5 bg-slate-50 rounded shadow-md">
        <h2>Favourite Web Page </h2>
        <div class="fav-page">
          <a href="http://www.google.com">Google</a>
          <a href="http://www.youtube.com">YouTube</a>
          <a href="http://www.facebook.com">FaceBook</a>
        </div>
      </div>
      <div class="basis-1/3 p-5 bg-slate-50 rounded shadow-md">
        <h2>ToDO List</h2>

        <div id="tasks" class="todo">
          <div class="addTask">
            <form id="add-task" action="#index" method="post" accept-charset="utf-8">
              <div class="group">
                <input type="text" name="item" id="item" autocomplete="off" placeholder="Add New Task..">
                <button type="submit">+</button>
              </div>
            </form>
          </div>
          <div id="tasks-list">
            <ul class="list-items">
            </ul>
          </div>
        </div>

      </div>
      <div class="basis-1/3 p-5 bg-slate-50 rounded shadow-md">

        <h2>Learning List</h2>
        <ul id="mostVisited">

        </ul>
        <ul id="bookmarks">

        </ul>
      </div>
    </div>
    <div class="row">
      <div class="footer">
        Copyright & Powered by &copy; <a href="http://www.fb.com/Mamdouhkha">Mamdouh Khaled</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>