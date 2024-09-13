<template>
  <section>
    <!-- Header Section with Background Image -->
    <header class="relative bg-cover bg-center bg-no-repeat bg-black shadow-lg" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <nav class="container mx-auto p-6 flex justify-between items-center">
       
        <!-- Mobile Menu Button -->
        <button type="button" class="lg:hidden p-2 -m-2 text-white transition-all duration-200 hover:text-gray-300">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="CurrentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      <!-- Hero Content -->
      <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl py-36">
        <div class="max-w-lg mx-auto text-center lg:mx-0 lg:max-w-md lg:text-left">
          <p class="text-base font-bold text-white">Where Safety Meets Serenity: Your Haven in Times of Need.</p>
          <h1 class="mt-3 text-4xl font-bold text-white sm:mt-8 sm:text-5xl xl:text-7xl">Twins HomeCare</h1>

          <div class="mt-8 sm:mt-12">
            <router-link to="/contact" title="Contact Us Now" class="inline-flex items-center justify-center px-8 py-3 text-base font-bold leading-7 text-white transition-all duration-200 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:bg-white hover:text-black">Contact Us Now</router-link>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6 sm:px-8 max-w-7xl">
        <!-- About Us Summary -->
        <div class="mb-16 flex flex-col lg:flex-row items-center">
          <div class="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
            <img :src="require('@/assets/Costs Of Aging In Place Vs_ Assisted Living.jpeg')" alt="About Us" class="image-constant rounded-lg shadow-lg">
          </div>
          <div class="lg:w-1/2">
            <h2 class="text-3xl font-extrabold text-gray-900 mb-6">About Us</h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              Twins HomeCare is committed to providing essential support and training to adults 18 and older. Our services focus on community participation, health, safety, and life skills, ensuring everyone has a stable place to call home and the opportunity to achieve their full potential.
            </p>
            <router-link to="/about" class="mt-4 inline-block text-blue-500 font-medium hover:text-blue-700 transition-colors duration-200">
              Learn more about us
            </router-link>
          </div>
        </div>

        <!-- Services Summary -->
        <div class="mb-16 flex flex-col lg:flex-row-reverse items-center">
          <div class="lg:w-1/2 mb-8 lg:mb-0 lg:pl-12">
            <img :src="require('@/assets/Download premium image of Group of diverse people holding hands up in the air by Felix about workshop, therapy, class, people circle, and recovery 2027953.jpeg')" alt="Our Services" class="image-constant rounded-lg shadow-lg">
          </div>
          <div class="lg:w-1/2">
            <h2 class="text-3xl font-extrabold text-gray-900 mb-6">Our Services</h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              We offer a range of services designed to meet the unique needs of each individual. From skill maintenance and guidance to assistance with daily living activities, our integrated community support services help you live independently and with confidence.
            </p>
            <router-link to="/services" class="mt-4 inline-block text-blue-500 font-medium hover:text-blue-700 transition-colors duration-200">
              Explore our services
            </router-link>
          </div>
        </div>

        <!-- FAQ Summary -->
        <div class="mb-16 flex flex-col lg:flex-row items-center">
          <div class="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
            <img :src="require('@/assets/Premium Vector _ Faq or frequently asked questions for website, blogger helpdesk, clients assistance, helpful information, guides_ background vector illustration.jpeg')" alt="FAQ" class="image-constant rounded-lg shadow-lg">
          </div>
          <div class="lg:w-1/2">
            <h2 class="text-3xl font-extrabold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              Have questions about our services? Visit our FAQ section to find answers to common inquiries, including eligibility, service coverage, and more.
            </p>
            <router-link to="/faq" class="mt-4 inline-block text-blue-500 font-medium hover:text-blue-700 transition-colors duration-200">
              Visit FAQ
            </router-link>
          </div>
        </div>

        <!-- Contact Section with Typeform Embed -->
        <div class="flex flex-col lg:flex-row-reverse items-center">
          <div class="lg:w-1/2 mb-8 lg:mb-0 lg:pl-12">
            <img :src="require('@/assets/vonecia-carswell-0aMMMUjiiEQ-unsplash.jpg')" alt="Contact Us" class="image-constant rounded-lg shadow-lg">
          </div>
          <div class="lg:w-1/2">
            <h2 class="text-3xl font-extrabold text-gray-900 mb-6">Get in Touch</h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              We're here to help. Whether you have questions, need support, or want to learn more about our services, don't hesitate to reach out.
            </p>
            <!-- Typeform Embed -->
            <div data-tf-live="01J7NTFPTAVWEF9S06F2YDSNQJ"></div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      backgroundImage: require('@/assets/matt-bennett-78hTqvjYMS4-unsplash.jpg'), // Ensure this path matches your project structure
    };
  },
  mounted() {
    // Dynamically load the Typeform script when the component is mounted
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
  },
};
</script>

<style scoped>
/* Ensure the background covers the entire header */
header {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Constant image size */
.image-constant {
  width: 600px; /* Adjust to your desired width */
  height: 400px; /* Adjust to your desired height */
  object-fit: cover; /* Maintain aspect ratio and ensure the image covers the container */
}

/* Section styling */
section {
  padding: 1rem 0;
}

/* Responsive layout for images and text */
@media (min-width: 1024px) {
  .flex-row-reverse {
    flex-direction: row-reverse;
  }
  .lg\:pr-12 {
    padding-right: 3rem;
  }
  .lg\:pl-12 {
    padding-left: 3rem;
  }
}

/* Headings and paragraph styles */
h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1rem;
  line-height: 1.5;
}

/* Link styles */
a {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  color: white;
  transition: color 0.2s ease-in-out;
}

a:hover {
  color: black;
}
</style>
