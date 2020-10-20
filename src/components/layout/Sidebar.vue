<template>
  <div class="sidebar-menu">
    <ul class="sidebar__items">
        <li class="">
          <router-link to="/categories">Categories</router-link>
        </li>
        <li class="">
          <router-link to="/random">Surprise me</router-link>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>