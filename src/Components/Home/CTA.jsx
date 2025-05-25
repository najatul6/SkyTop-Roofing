import { PhoneCall } from "lucide-react";

const CTA = () => {
  return (
    <section className="bg-blue-600 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold animate__animated animate__fadeInLeft" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
            Need Reliable Roofing Services?
          </h2>
          <p className="text-lg animate__animated animate__fadeInLeft" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
            Call us today or get a free estimate online. We're fast, affordable, and trusted.
          </p>
        </div>
        <a
          href="tel:+8801773827414"
          className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-100 transition animate__animated animate__fadeInRight"
          style={{ animationDelay: '1000ms', animationFillMode: 'both' }}
        >
          <PhoneCall className="w-5 h-5 mr-2" />
          Get a Free Estimate
        </a>
      </div>
    </section>
  );
};

export default CTA;
