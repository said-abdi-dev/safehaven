<template>
  <section>
    <!-- Header Section with Background Image -->
    <header class="relative bg-cover bg-center bg-no-repeat bg-black shadow-lg" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <!-- Hero Content -->
      <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl py-20 sm:py-28 lg:py-36">
        <div class="max-w-lg mx-auto text-center lg:mx-0 lg:max-w-md lg:text-left">
          <p class="text-sm sm:text-base font-bold text-white">Where Safety Meets Serenity: Your Haven in Times of Need.</p>
          <h1 class="mt-3 text-3xl sm:text-4xl font-bold text-white sm:mt-5 lg:text-5xl xl:text-6xl">Twins HomeCare</h1>
          <div class="mt-6 sm:mt-8">
            <router-link to="/contact" title="Contact Us Now" class="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-6 text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">Contact Us Now</router-link>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content Section -->
    <main class="bg-gray-50">
      <!-- About Us Summary -->
      <section class="py-12 sm:py-16">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
              <img :src="aboutImage" alt="About Us" class="rounded-lg shadow-lg w-full h-auto object-cover">
            </div>
            <div class="lg:w-1/2">
              <h2 class="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 sm:mb-6">About Twins HomeCare</h2>
              <p class="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                At <strong>Twins HomeCare</strong>, we are more than just a service—we are a lifeline. We provide essential support and training to adults, ensuring community participation, health, and life skills development, so everyone has a stable place to call home.
              </p>
              <p class="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                We offer personalized services that empower individuals to reclaim their lives and thrive. Whether you need help with daily living, emotional support, or guidance in crisis situations, Twins HomeCare is here for you.
              </p>
              <router-link to="/about" class="inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200">
                Learn more about us →
              </router-link>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Summary -->
      <section class="py-12 sm:py-16 bg-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div class="flex flex-col lg:flex-row-reverse items-center">
            <div class="lg:w-1/2 mb-8 lg:mb-0 lg:pl-12">
              <img :src="servicesImage" alt="Our Services" class="rounded-lg shadow-lg w-full h-auto object-cover">
            </div>
            <div class="lg:w-1/2">
              <h2 class="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 sm:mb-6">Our Services</h2>
              <ul class="space-y-3 sm:space-y-4 mb-6">
                <li v-for="service in services" :key="service" class="flex items-start">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  <span class="text-base sm:text-lg text-gray-700">{{ service }}</span>
                </li>
              </ul>
              <router-link to="/services" class="inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200">
                Explore our services →
              </router-link>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Summary -->
      <section class="py-12 sm:py-16 bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
              <img :src="faqImage" alt="FAQ" class="rounded-lg shadow-lg w-full h-auto object-cover">
            </div>
            <div class="lg:w-1/2">
              <h2 class="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 sm:mb-6">Frequently Asked Questions</h2>
              <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
                <h3 class="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{{ faq.question }}</h3>
                <p class="text-base sm:text-lg text-gray-700">{{ faq.answer }}</p>
              </div>
              <router-link to="/faq" class="inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200">
                View all FAQs →
              </router-link>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section with Typeform Embed -->
      <section class="py-12 sm:py-16 bg-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div class="flex flex-col lg:flex-row-reverse items-center">
            <div class="lg:w-1/2 mb-8 lg:mb-0 lg:pl-12">
              <img :src="contactImage" alt="Contact Us" class="rounded-lg shadow-lg w-full h-auto object-cover">
            </div>
            <div class="lg:w-1/2">
              <h2 class="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 sm:mb-6">Get in Touch</h2>
              <p class="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                Whether you have questions, need support, or want to learn more about our services, don't hesitate to reach out. We are here to assist and guide you in every step.
              </p>
              <!-- Typeform Embed -->
              <div data-tf-live="01J7NTFPTAVWEF9S06F2YDSNQJ"></div>
            </div>
          </div>
        </div>
      </section>
    </main>

  </section>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      backgroundImage: require('@/assets/matt-bennett-78hTqvjYMS4-unsplash.jpg'),
      aboutImage: require('@/assets/Costs Of Aging In Place Vs_ Assisted Living.jpeg'),
      servicesImage: require('@/assets/Download premium image of Group of diverse people holding hands up in the air by Felix about workshop, therapy, class, people circle, and recovery 2027953.jpeg'),
      faqImage: require('@/assets/Premium Vector _ Faq or frequently asked questions for website, blogger helpdesk, clients assistance, helpful information, guides_ background vector illustration.jpeg'),
      contactImage: require('@/assets/vonecia-carswell-0aMMMUjiiEQ-unsplash.jpg'),
      menuItems: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
        { name: 'Referral', path: '/referral' },
        { name: 'FAQ', path: '/faq' },
      ],
      services: [
        'Integrated Community Support',
        'Daily Living Assistance',
        'Household Management',
        'Adaptive Skills Training',
        'Health and Wellness Support',
      ],
      faqs: [
        { 
          question: 'What services do you offer?',
          answer: 'We offer a range of services including integrated community support, daily living assistance, and more. Visit our Services page for a full list.'
        },
        {
          question: 'How do I know if I am eligible for your services?',
          answer: 'Eligibility varies depending on the specific service. We recommend contacting us for a personalized assessment of your needs and eligibility.'
        },
      ],
    };
  },
  mounted() {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
  },
};
</script>

<style scoped>
/* Add any additional styles here */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
