import {
    Hammer,
    Wrench,
    Droplets,
    AlertCircle
  } from 'lucide-react';
  
  const services = [
    {
      title: "Roof Installation",
      description: "Expert roof installations using high-quality materials.",
      icon: <Hammer className="text-blue-600 w-10 h-10 mb-4" />
    },
    {
      title: "Roof Repair",
      description: "Quick and affordable repair for all types of roof damage.",
      icon: <Wrench className="text-blue-600 w-10 h-10 mb-4" />
    },
    {
      title: "Gutter Cleaning",
      description: "Prevent water damage with professional gutter cleaning.",
      icon: <Droplets className="text-blue-600 w-10 h-10 mb-4" />
    },
    {
      title: "Emergency Leak Repair",
      description: "24/7 emergency service to fix critical leaks fast.",
      icon: <AlertCircle className="text-blue-600 w-10 h-10 mb-4" />
    }
  ];
  
  const Services = () => {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 mb-12">Quality roofing solutions for every need.</p>
  
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate__animated animate__zoomIn"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {service.icon}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  