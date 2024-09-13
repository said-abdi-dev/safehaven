<template>
    <section
    id="testimony" class="testimonials py-20 bg-gray-100">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center text-gray-800">What Our Clients Say</h2>
        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div class="testimonial" v-for="testimonial in testimonials" :key="testimonial.name">
            <p class="text-lg text-gray-700 italic">"{{ testimonial.quote }}"</p>
            <h3 class="mt-4 text-gray-900 font-semibold">- {{ testimonial.name }}</h3>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'TestimonialsSection',
    data() {
      return {
        testimonials: [
          {
            name: 'John Doe',
            quote: 'Safe Haven helped me find stable housing and meaningful work. I couldn’t be more grateful.',
          },
          {
            name: 'Jane Smith',
            quote: 'The support I received from Safe Haven was invaluable. They truly care about their clients.',
          },
        ],
      };
    },
  };
  </script>
  