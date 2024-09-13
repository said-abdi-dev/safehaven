<template>
  <section id="contact" class="contact-us py-20 bg-gray-50">
    <div class="container mx-auto max-w-6xl">
      <h2 class="text-3xl font-semibold text-center text-gray-800 mb-8">Contact Us</h2>

      <!-- Two-column layout: Typeform on the left, Contact info on the right -->
      <div class="flex flex-wrap -mx-4">
        <!-- Typeform Embed Section -->
        <div class="w-full md:w-2/3 px-4 mb-8 md:mb-0">
          <div class="typeform-container bg-white p-8 rounded-lg shadow-sm">
            <div data-tf-live="01J7MV56X1RX169Y640AP4HCGH"></div>
          </div>
        </div>

        <!-- Get in Touch Section -->
        <div class="w-full md:w-1/3 px-4">
          <div class="get-in-touch bg-white p-8 rounded-lg shadow-sm">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
            <p class="text-gray-600 mb-6">You can contact us here:</p>
            <ul class="text-gray-700 space-y-4">
              <li><strong>Phone:</strong> 614-599-5138</li>
              <li><strong>Email Address:</strong> info@twinshcmn.com</li>
              <li><strong>Address Line:</strong> 2233 University Ave W, St. Paul, MN 55114</li>
              <li><strong>24/7 Support:</strong> Your Trusted 24 Hours Service Provider!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactUsSection',
  mounted() {
    // Dynamically load the Typeform embed script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);
  },
};
</script>

<style scoped>
/* General styling for the contact section */
.container {
  padding: 0 1rem;
}

/* Typeform container */
.typeform-container {
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
}

/* Get in Touch section styling */
.get-in-touch {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
}

h3 {
  font-size: 1.75rem;
}

ul {
  list-style: none;
  padding: 0;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .container {
    padding: 0 1rem;
  }
  .typeform-container,
  .get-in-touch {
    padding: 1.5rem;
  }
}
</style>
