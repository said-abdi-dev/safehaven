<template>
  <div id="app">
    <header class="bg-transparent z-20">
      <nav class="container mx-auto p-6 flex justify-between items-center">
        <!-- Logo -->
        <div class="logo">
          <img :src="require('@/assets/TenderCareLogo.jpg')" alt="Safe Haven Logo" class="h-20 ml-4">
        </div>

        <!-- Navigation Links -->
        <ul class="wsite-menu-default flex space-x-8 ml-auto">
          <li><router-link to="/" class="wsite-menu-item text-black hover:text-gray-300">Home</router-link></li>
          <li><router-link to="/services" class="wsite-menu-item text-black hover:text-gray-300">Services</router-link></li>
          <li><router-link to="/contact" class="wsite-menu-item text-black hover:text-gray-300">Contact</router-link></li>
          <li><router-link to="/faq" class="wsite-menu-item text-black hover:text-gray-300">FAQ</router-link></li>
          <li><router-link to="/referral" class="wsite-menu-item text-black hover:text-gray-300">Referral</router-link></li> <!-- New menu item -->
        </ul>
      </nav>
    </header>

    <router-view />

    <!-- Footer -->
    <footer class="bg-black text-white py-8">
      <div class="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div class="flex flex-col lg:flex-row justify-between items-center">
          <div class="mb-6 lg:mb-0">
            <ul class="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6">
              <li><router-link to="/" class="hover:underline">Home</router-link></li>
              <li><router-link to="/services" class="hover:underline">Services</router-link></li>
              <li><router-link to="/contact" class="hover:underline">Contact</router-link></li>
              <li><router-link to="/faq" class="hover:underline">FAQ</router-link></li>
              <li><router-link to="/referral" class="hover:underline">Referral</router-link></li> <!-- New menu item in footer -->
            </ul>
          </div>
          
          <div class="text-center lg:text-right">
            <p>&copy; 2024 Twins HomeCare. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
/* Adjust logo and navigation styles */
.logo img {
  margin-left: 1rem; /* Adjust left margin as needed */
}

.wsite-menu-default li {
  margin-left: 1rem;
}

/* Ensure spacing and alignment is consistent across different screen sizes */
@media (min-width: 1024px) {
  .logo img {
    margin-left: 0; /* Reset margin on larger screens if needed */
  }

  .wsite-menu-default {
    margin-left: auto;
  }
}
</style>
