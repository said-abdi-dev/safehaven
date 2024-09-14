<template>
  <section id="home" class="about-us py-20">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div class="content">
        <h2 class="text-3xl font-bold text-gray-800">About Twins HomeCare</h2>
        <p class="text-gray-700 mt-4">
          At <strong>Twins HomeCare</strong>, we are more than just a service—we are a lifeline. We are dedicated to supporting individuals and families facing physical, developmental, and mental health challenges. Our mission is to restore hope and dignity, one person at a time.
        </p>
        <p class="text-gray-700 mt-4">
          <strong>Twins HomeCare</strong> is a sanctuary, offering not only affordable housing but also meaningful employment opportunities and vital community connections. Our services range from life skills coaching to crisis prevention, empowering individuals to reclaim their lives and thrive. 
        </p>
        <p class="text-gray-700 mt-4">
          Here, you’re not just another client; you’re family. We believe that everyone deserves a place to call home—where they feel safe, supported, and valued. We work tirelessly to uplift, protect, and empower each individual we serve.
        </p>
        <p class="text-gray-700 mt-4">
          At <strong>Twins HomeCare</strong>, we offer a variety of essential services, including:
        </p>
        <ul class="list-disc list-inside text-gray-700 mt-4">
          <li>Integrated Community Support (ICS) – personalized support and life skills training.</li>
          <li>Health, Safety, and Wellness programs – addressing physical, mental, and emotional health.</li>
          <li>Crisis Respite – short-term, intensive support during moments of crisis.</li>
          <li>Household Management – training in budgeting, meal planning, and home safety.</li>
          <li>Adaptive Skills – developing resilience and self-sufficiency through specialized programs.</li>
        </ul>
        <p class="text-gray-700 mt-4">
          Whether you need assistance with daily living, emotional support, or simply a compassionate environment to grow, <strong>Twins HomeCare</strong> is here to serve as your haven in times of need.
        </p>
      </div>
      <div class="image">
        <img :src="require('@/assets/Cheerful group of elderly friends during barbeque at garden of family home.jpeg')" alt="Our Team" class="w-full rounded-lg shadow-md">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUsSection',
};
</script>

<style scoped>
.about-us {
  background-color: #f8f9fa;
}

h2 {
  color: #2d3748;
}

p {
  color: #4a5568;
}
</style>
