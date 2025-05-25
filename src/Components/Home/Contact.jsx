import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-6" id="contact">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Let's Connect</h2>
          <p className="text-gray-600 text-lg">
            We’re here to help with all your roofing needs. Give us a call, send a message, or just say hello.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <p className="text-gray-700 font-medium">(123) 456-7890</p>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <p className="text-gray-700 font-medium">hello@skytoproofing.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <p className="text-gray-700 font-medium">123 Rooftop Ave, Austin, TX</p>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <form className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
