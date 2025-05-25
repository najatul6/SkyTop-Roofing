import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const serviceDetails = [
  {
    title: "Roof Installation",
    description:
      "We install new roofs using the highest quality materials and expert craftsmanship to ensure durability and protection for years to come.",
    highlights: [
      "Custom fit to your home",
      "Energy-efficient materials",
      "Strong warranty options",
    ],
  },
  {
    title: "Roof Repair",
    description:
      "Quick and reliable repairs for leaks, storm damage, and general wear to extend the life of your roof.",
    highlights: [
      "Emergency leak fixes",
      "Storm damage assessment",
      "Affordable repair options",
    ],
  },
  {
    title: "Maintenance & Inspection",
    description:
      "Regular inspections and maintenance to prevent costly repairs and keep your roof in top shape.",
    highlights: [
      "Detailed roof inspections",
      "Cleaning and debris removal",
      "Preventative maintenance plans",
    ],
  },
];

const ServiceDetails = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
        Service Details & Highlights
      </h2>
      <div className="space-y-6">
        {serviceDetails.map((service, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center px-6 py-4 bg-blue-100 hover:bg-blue-200 focus:outline-none"
              >
                <h3 className="text-xl font-semibold text-blue-700">
                  {service.title}
                </h3>
                {isOpen ? (
                  <ChevronUp className="w-6 h-6 text-blue-700" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-blue-700" />
                )}
              </button>

              <div
                className={`px-6 pb-6 text-gray-700 transition-max-height duration-500 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-96 pt-4" : "max-h-0"
                }`}
                style={{ transitionProperty: "max-height" }}
              >
                <p className="mb-3">{service.description}</p>
                <ul className="list-disc list-inside space-y-1">
                  {service.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceDetails;
