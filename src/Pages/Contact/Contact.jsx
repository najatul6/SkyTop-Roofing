import { Mail, PhoneCall, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-800 mb-10 text-center animate__animated animate__fadeInDown">
        Get in Touch
      </h1>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8 animate__animated animate__fadeInLeft">
          <div className="flex items-center space-x-4">
            <MapPin className="w-6 h-6 text-blue-600" />
            <p>1234 Roofing St., Austin, TX 78701</p>
          </div>
          <div className="flex items-center space-x-4">
            <PhoneCall className="w-6 h-6 text-blue-600" />
            <p>(123) 456-7890</p>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-blue-600" />
            <p>info@skytoproofing.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="space-y-6 animate__animated animate__fadeInRight"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for your message!");
            e.target.reset();
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 border border-gray-300 rounded-md resize-none"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
