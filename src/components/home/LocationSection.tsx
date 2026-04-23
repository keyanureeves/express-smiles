
import React from "react";

const LocationSection = () => {
  return (
    <section id="location" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Location
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visit Express Smiles Dental Suite
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find us easily with Google Maps directions to our dental clinic in Nairobi.
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">Express Smiles Dental Suite - Nairobi</h3>
            <div className="rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7902974064828!2d36.82510510000001!3d-1.300684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11e038503ef1%3A0x8003c1a26f9c286!2sEXPRESS%20SMILES%20DENTAL%20SUITE!5e0!3m2!1sen!2ske!4v1776336299914!5m2!1sen!2ske"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Express Smiles Dental Suite location - Google Maps"
                className="w-full hover:opacity-95 transition-opacity"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
