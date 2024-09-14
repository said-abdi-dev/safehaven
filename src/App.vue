<template>
  <div id="app">
    <header class="bg-transparent z-20">
      <nav class="container mx-auto p-6 flex justify-between items-center">
        <!-- Logo wrapped in router-link to redirect to Home -->
        <router-link to="/">
          <div class="logo">
            <img :src="require('@/assets/TenderCareLogo.jpg')" alt="Twins HomeCare Logo" class="logo-img">
          </div>
        </router-link>

        <!-- Navigation Links (visible on all screen sizes) -->
        <ul class="wsite-menu-default flex space-x-8 ml-auto">
          <li><router-link to="/" class="wsite-menu-item text-black hover:text-gray-300">Home</router-link></li>
          <li><router-link to="/about" class="wsite-menu-item text-black hover:text-gray-300">About Us</router-link></li> 
          <li><router-link to="/services" class="wsite-menu-item text-black hover:text-gray-300">Services</router-link></li>
          <li><router-link to="/contact" class="wsite-menu-item text-black hover:text-gray-300">Contact</router-link></li>
          <li><router-link to="/referral" class="wsite-menu-item text-black hover:text-gray-300">Referral</router-link></li>
          <li><router-link to="/faq" class="wsite-menu-item text-black hover:text-gray-300">FAQ</router-link></li>
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
              <li><router-link to="/about" class="hover:underline">About Us</router-link></li>
              <li><router-link to="/services" class="hover:underline">Services</router-link></li>
              <li><router-link to="/contact" class="hover:underline">Contact</router-link></li>
              <li><router-link to="/referral" class="hover:underline">Referral</router-link></li>
              <li><router-link to="/faq" class="hover:underline">FAQ</router-link></li>
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
/* Ensure the logo is responsive */
.logo img {
  height: auto;
  max-width: 50%;
  width: 100px; /* Default logo width for mobile */
}

/* Adjust logo size for larger screens */
@media (min-width: 768px) {
  .logo img {
    width: 180px; /* Adjust logo width for tablets */
  }
}

@media (min-width: 1024px) {
  .logo img {
    width: 200px; /* Adjust logo width for desktop screens */
  }
}

/* Navigation menu styles */
.wsite-menu-default li {
  margin-left: 1rem;
}

.wsite-menu-default {
  margin-left: auto;
}

/* Ensure spacing and alignment is consistent across different screen sizes */
@media (min-width: 1024px) {
  .wsite-menu-default {
    margin-left: auto;
  }
}
</style>
