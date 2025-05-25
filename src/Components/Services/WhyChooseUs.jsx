const WhyChooseUs = () => (
    <section className="bg-blue-50 py-12 px-4 text-center">
        <h2
            className="text-2xl font-semibold mb-4 text-blue-700 animate__animated animate__fadeInDown"
            style={{ animationDelay: '300ms', animationFillMode: 'both' }}
        >
            Why Choose Our Services?
        </h2>
        <p
            className="max-w-xl mx-auto text-gray-700 mb-6 animate__animated animate__fadeInUp"
            style={{ animationDelay: '600ms', animationFillMode: 'both' }}
        >
            With years of experience and dedication, we provide reliable, affordable, and high-quality roofing services that protect your home and increase its value.
        </p>
        <button
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition animate__animated animate__fadeInUp"
            style={{ animationDelay: '900ms', animationFillMode: 'both' }}
        >
            Request a Free Quote
        </button>
    </section>
);

export default WhyChooseUs;