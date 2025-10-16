<template>
  <div class="flex flex-col items-center text-center space-y-12 dark:text-white justify-center py-20 px-4">
    <!-- Cím -->
    <h1 class="text-3xl sm:text-5xl md:text-6xl tracking-widest">
      <RouterLink to="/" class="no-underline hover:underline decoration-2">Martin</RouterLink>'s contact<br> information.<span class="blinking-cursor">_</span>
    </h1>

    <!-- Leírás -->
    <p class="max-w-xl text-center text-gray-400">
      Have a question or want to collaborate? Send me a message and I'll get back to you.
    </p>

    <!-- Kontakt űrlap -->
    <form ref="contactForm" @submit.prevent="sendEmail" class="w-full max-w-md flex flex-col space-y-4">
      <input 
        type="email" 
        name="user_email"
        placeholder="Your Email" 
        required
        class="p-3 rounded-md border border-gray-400 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-1 focus:ring-white"
      />
      <textarea 
        name="message"
        rows="5" 
        placeholder="Your Message" 
        required
        class="p-3 rounded-md border border-gray-400 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-1 focus:ring-white"
      ></textarea>
      <button 
        type="submit" 
        class="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 rounded-md transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: "Contact",
  methods: {
    sendEmail() {
      const serviceID = 'service_3mkizzh';   // a saját EmailJS service ID-d
      const templateID = 'template_3ueb0el'; // a saját template ID-d
      const publicKey = 'X3G55jdN-IIdFPuuI';      // a saját Public Key-d

      emailjs.sendForm(serviceID, templateID, this.$refs.contactForm, publicKey)
        .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          this.$refs.contactForm.reset();
        }, (error) => {
          console.log(error.text);
          alert("Failed to send message. Check your EmailJS configuration.");
        });
    }
  }
};
</script>

<style scoped>
.blinking-cursor {
  display: inline-block;
  margin-left: 2px;
  width: 10px;
  animation: blink 2s steps(1) infinite;
}

@keyframes blink {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
}
</style>
