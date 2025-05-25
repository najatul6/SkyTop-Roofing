import { Roofing, Tool, Feather } from "lucide-react";

const services = [
  {
    icon: <Roofing className="w-10 h-10 text-blue-600" />,
    title: "Roof Installation",
    description: "Expert installation with top-quality materials and craftsmanship.",
  },
  {
    icon: <Tool className="w-10 h-10 text-blue-600" />,
    title: "Roof Repair",
    description: "Fast, reliable repairs to fix leaks, damage, and wear.",
  },
  {
    icon: <Feather className="w-10 h-10 text-blue-600" />,
    title: "Roof Inspection",
    description: "Comprehensive inspection to keep your roof healthy and long-lasting.",
  },
];

const ServicesList = () => (
  <section className="max-w-6xl mx-auto py-16 px-4">
    <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Our Services</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service, i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-xl transition-shadow duration-300"
        >
          <div className="mb-4 flex justify-center">{service.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesList;
