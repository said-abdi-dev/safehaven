<template>
    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
          <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Find answers to common questions about our services and eligibility.
          </p>
        </div>
  
        <div class="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          <!-- FAQ Item 1 -->
          <div 
            class="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50" 
            @click="toggleFAQ(0)"
          >
            <button type="button" class="flex items-center justify-between w-full px-4 py-5 sm:p-6">
              <span class="flex text-lg font-semibold text-black">Who Can Access Our Services?</span>
              <svg 
                :class="{'rotate-180': faqs[0].isOpen, 'rotate-0': !faqs[0].isOpen}" 
                class="w-6 h-6 text-gray-400 transition-transform duration-200" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-if="faqs[0].isOpen" class="px-4 pb-5 sm:px-6 sm:pb-6">
              <p>
                Our services are available to individuals aged 18 and above who reside in an ICS environment and are enrolled in the following waivers:
              </p>
              <ul class="list-disc list-inside mt-2">
                <li>Brain Injury (BI)</li>
                <li>Community Access for Disability Inclusion (CADI)</li>
                <li>Community Alternative Care (CAC)</li>
                <li>Developmental Disabilities (DD)</li>
              </ul>
            </div>
          </div>
  
          <!-- FAQ Item 2 -->
          <div 
            class="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50" 
            @click="toggleFAQ(1)"
          >
            <button type="button" class="flex items-center justify-between w-full px-4 py-5 sm:p-6">
              <span class="flex text-lg font-semibold text-black">What Services Are Included?</span>
              <svg 
                :class="{'rotate-180': faqs[1].isOpen, 'rotate-0': !faqs[1].isOpen}" 
                class="w-6 h-6 text-gray-400 transition-transform duration-200" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-if="faqs[1].isOpen" class="px-4 pb-5 sm:px-6 sm:pb-6">
              <p>
                Our services do not cover transportation and nursing care. Additionally, individuals receiving ICS cannot simultaneously access state plan or waiver services that overlap with ICS, including:
              </p>
              <ul class="list-disc list-inside mt-2">
                <li>24-hour emergency support</li>
                <li>Adult foster care</li>
                <li>Community-based residential services</li>
                <li>Customized living arrangements (including around-the-clock customized living)</li>
                <li>Caregiver housing expenses</li>
                <li>Family residential services</li>
                <li>Personalized home support (with or without training, including family training)</li>
                <li>Overnight supervision</li>
                <li>Respite care</li>
              </ul>
            </div>
          </div>
  
          <!-- FAQ Item 3 -->
          <div 
            class="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50" 
            @click="toggleFAQ(2)"
          >
            <button type="button" class="flex items-center justify-between w-full px-4 py-5 sm:p-6">
              <span class="flex text-lg font-semibold text-black">Do You Offer Remote Support?</span>
              <svg 
                :class="{'rotate-180': faqs[2].isOpen, 'rotate-0': !faqs[2].isOpen}" 
                class="w-6 h-6 text-gray-400 transition-transform duration-200" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-if="faqs[2].isOpen" class="px-4 pb-5 sm:px-6 sm:pb-6">
              <p>
                Yes, our services can be provided remotely. All remote support services adhere to the standards and requirements set by the Department of Health Services.
              </p>
            </div>
          </div>
  
          <!-- FAQ Item 4 -->
          <div 
            class="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50" 
            @click="toggleFAQ(3)"
          >
            <button type="button" class="flex items-center justify-between w-full px-4 py-5 sm:p-6">
              <span class="flex text-lg font-semibold text-black">How Are Living Arrangements Managed or Assigned?</span>
              <svg 
                :class="{'rotate-180': faqs[3].isOpen, 'rotate-0': !faqs[3].isOpen}" 
                class="w-6 h-6 text-gray-400 transition-transform duration-200" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-if="faqs[3].isOpen" class="px-4 pb-5 sm:px-6 sm:pb-6">
              <p>
                We do not assign or manage who resides in our units. Instead, we empower individuals to select their roommates within the boundaries of rental guidelines or lease agreements. We also keep records to ensure that each resident, their case manager, and legal representative (if applicable) are informed of and have approved the living arrangements.
              </p>
            </div>
          </div>
  
          <!-- FAQ Item 5 -->
          <div 
            class="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50" 
            @click="toggleFAQ(4)"
          >
            <button type="button" class="flex items-center justify-between w-full px-4 py-5 sm:p-6">
              <span class="flex text-lg font-semibold text-black">Have More Questions?</span>
              <svg 
                :class="{'rotate-180': faqs[4].isOpen, 'rotate-0': !faqs[4].isOpen}" 
                class="w-6 h-6 text-gray-400 transition-transform duration-200" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-if="faqs[4].isOpen" class="px-4 pb-5 sm:px-6 sm:pb-6">
              <p>
                If you have any additional questions that aren't addressed here, please don't hesitate to reach out to us. We're here to help! Contact us by phone at <a href="tel:6124644210" class="text-blue-600 transition-all duration-200 hover:underline"> (612) 464-4210</a> or via email at <a href="mailto:info@inspiritmn.com" class="text-blue-600 transition-all duration-200 hover:underline">info@inspiritmn.com</a>.
              </p>
            </div>
          </div>
        </div>
  
        <p class="text-center text-gray-600 text-base mt-9">
          Didn’t find the answer you are looking for? 
          <a href="/contact" title="Contact our support" class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">
            Contact our support
          </a>
        </p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'FAQPage',
    data() {
      return {
        faqs: [
          { isOpen: false },
          { isOpen: false },
          { isOpen: false },
          { isOpen: false },
          { isOpen: false },
        ],
      };
    },
    methods: {
      toggleFAQ(index) {
        this.faqs[index].isOpen = !this.faqs[index].isOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Additional styling if needed */
  
  /* Example: Smooth transition for FAQ answers */
  div[ v-if="faqs[index].isOpen" ] {
    transition: max-height 0.3s ease;
  }
  </style>
  