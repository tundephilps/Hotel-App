import React from "react";
import Nav from "./Nav";

const Contact = () => {
  return (
    <>
      <Nav />
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87690.04466922798!2d8.53166346786506!3d46.62056049739522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4785722d97e91c73%3A0xbc8cd6deadd8518b!2sAndermatt%2C%20Switzerland!5e0!3m2!1sen!2snp!4v1682507333021!5m2!1sen!2snp"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="min-h-[480px] w-full"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
