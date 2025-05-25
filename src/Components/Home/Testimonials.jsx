import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Mitchell",
    feedback: "SkyTop Roofing was quick, clean, and professional. They replaced our roof in just two days. Highly recommend!",
    location: "Austin, TX"
  },
  {
    name: "James Carter",
    feedback: "We had a leak emergency and they fixed it the same day. Very responsive and trustworthy team.",
    location: "San Antonio, TX"
  },
  {
    name: "Linda Gomez",
    feedback: "Amazing quality and customer service. The new roof looks fantastic. Thank you!",
    location: "Dallas, TX"
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800 animate__animated animate__fadeInDown">
          What Our Customers Say
        </h2>
        <p className="text-lg text-gray-600 mb-12 animate__animated animate__fadeInUp animate__delay-1s">
          Real feedback from homeowners we’ve proudly served.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-lg relative animate__animated animate__fadeInUp"
              style={{ animationDelay: `${i * 300}ms`, animationFillMode: 'both' }}
            >
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-gray-700 italic mb-4">"{t.feedback}"</p>
              <div className="text-sm font-semibold text-gray-900">{t.name}</div>
              <div className="text-xs text-gray-500">{t.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
