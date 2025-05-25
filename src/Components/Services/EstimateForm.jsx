import { useState } from "react";

const EstimateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "Roof Repair",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Estimate request submitted!");
    // Here you can add logic to send data to backend or email service
  };

  return (
    <section className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md my-16">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
        Request a Free Estimate
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          required
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="Full Name"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          required
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Email Address"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          required
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          type="tel"
          placeholder="Phone Number"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        >
          <option>Roof Installation</option>
          <option>Roof Repair</option>
          <option>Maintenance & Inspection</option>
        </select>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          placeholder="Additional details (optional)"
          className="w-full border border-gray-300 rounded px-4 py-2"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          Submit Estimate Request
        </button>
      </form>
    </section>
  );
};

export default EstimateForm;
