import { ShieldCheck, TimerReset, DollarSign, Smile } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Licensed & Insured",
    description: "Your safety and satisfaction are protected—always."
  },
  {
    icon: <TimerReset className="w-8 h-8 text-blue-600" />,
    title: "Fast Turnaround",
    description: "Emergency repair? Full replacement? We're on it, fast."
  },
  {
    icon: <DollarSign className="w-8 h-8 text-blue-600" />,
    title: "Transparent Pricing",
    description: "No hidden costs—just honest estimates and fair rates."
  },
  {
    icon: <Smile className="w-8 h-8 text-blue-600" />,
    title: "Customer First",
    description: "We’re not happy unless you’re 100% satisfied."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 animate__animated animate__fadeInUp">Why Choose SkyTop Roofing?</h2>
        <p className="text-lg text-gray-600 mb-12 animate__animated animate__fadeInUp" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
          Trusted by hundreds of homeowners for quality, speed, and value.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-2xl shadow-md text-left animate__animated animate__fadeInUp"
              style={{ animationDelay: `${300 + index * 200}ms`, animationFillMode: 'both' }}
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
