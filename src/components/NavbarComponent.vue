<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
  <nav class="nav_menu px-4 flex items-center justify-center fixed h-screen">
    <ul class="flex flex-col gap-2">
      <li>
        <RouterLink to="/" :class="{ active: $route.path === '/' }">
          <img v-if="$route.path === '/'" src="https://img.icons8.com/ios/ffffff/100/home--v1.png" alt="home--v1" />
          <img v-else src="https://img.icons8.com/ios/000000/100/home--v1.png" alt="home--v1" />
          <span class="text-[16px]">Home</span>
        </RouterLink>
      </li>

      <li>
        <RouterLink to="/about" :class="{ active: $route.path === '/about' }">
          <img v-if="$route.path === '/about'" src="https://img.icons8.com/ios/ffffff/50/guest-male.png" alt="home--v1" />
          <img v-else src="https://img.icons8.com/ios/50/guest-male.png" />
          <span class="text-[16px]">About</span>
        </RouterLink>
      </li>

      <li>
        <RouterLink to="/projects" :class="{ active: $route.path === '/projects' }">
          <img v-if="$route.path === '/projects'" src="https://img.icons8.com/ios/ffffff/50/google-sites.png" alt="home--v1" />
          <img v-else src="https://img.icons8.com/ios/50/google-sites.png" alt="home--v1" />
          <span class="text-[16px]">Projects</span>
        </RouterLink>
      </li>

      <li>
        <RouterLink to="/contact" :class="{ active: $route.path === '/contact' }">
          <img v-if="$route.path === '/contact'" src="https://img.icons8.com/ios/ffffff/50/new-post--v1.png" alt="home--v1" />
          <img v-else src="https://img.icons8.com/ios/50/new-post--v1.png" alt="home--v1" />
          <span class="text-[16px]">Contact</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>


<style scoped>
.nav_menu * {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav_menu>ul>li {
  position: relative;
  white-space: nowrap;
}

.nav_menu a,
.nav_menu a:focus {
  display: flex;
  align-items: center;
  color: #45505b;
  padding: 10px 18px;
  margin-bottom: 8px;
  transition: 0.3s;
  font-size: 15px;
  border-radius: 50px;
  background: #f2f3f5;
  height: 56px;
  width: 100%;
  overflow: hidden;
  transition: 0.3s;
}

img {
  width: 20px;
}
.nav_menu a:hover img {
  display: none;
}

.nav_menu a span,
.nav_menu a:focus span {
  padding: 0 5px 0 7px;
  color: #45505b;
}

.nav_menu a:hover,
.nav_menu .active,
.nav_menu .active:focus,
.nav_menu li:hover>a {
  color: #fff;
  background: #00adb5;
}

.nav_menu a:hover span,
.nav_menu .active span,
.nav_menu .active:focus span,
.nav_menu li:hover>a span {
  color: #fff;
}

.nav_menu a:hover,
.nav_menu li:hover>a {
  width: 100%;
  color: #fff;
}

.nav_menu a:hover span,
.nav_menu li:hover>a span {
  display: block;
}

.nav_menu a,
.nav_menu a:focus {
  width: 56px;
}

.nav_menu a span,
.nav_menu a:focus span {
  display: none;
  color: #fff;
}</style>
