<template>
  <header class="bg-gray-800 shadow">
    <nav class="container mx-auto p-6 flex justify-between items-center">
     
      <!-- Navigation Links -->
      <ul class="nav-links hidden lg:flex space-x-8">
        <li><a href="#home" class="text-gray-400 hover:text-white">Home</a></li>
        <li><a href="#about" class="text-gray-400 hover:text-white">About Us</a></li>
        <li><a href="#services" class="text-gray-400 hover:text-white">Services</a></li>
        <li><a href="#contact" class="text-gray-400 hover:text-white">Contact</a></li>
      </ul>

      <!-- Call to Action Button -->
      <div class="flex items-center space-x-5">
        <a class="cta bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700" href="#contact">Get Started</a>

        <!-- Mobile Menu Button -->
        <button type="button" class="lg:hidden p-2 -m-2 text-white transition-all duration-200 hover:text-gray-200">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
/* Custom styles if needed */
</style>
