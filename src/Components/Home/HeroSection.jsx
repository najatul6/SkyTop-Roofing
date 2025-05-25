import img from '../../assets/HeroSection/heroSection.jpg'

const HeroSection = () => {
    return (
      <section
        className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center"
        style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'fixed',
          }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
  
        {/* Content container */}
        <div className="relative max-w-7xl mx-auto px-4 text-white space-y-6 md:max-w-2xl">
          <h1 className="text-5xl font-bold animate__animated animate__fadeInDown" style={{ animationDelay: '500ms', animationFillMode: 'both' }}>
            Protect Your Home with Quality Roofing
          </h1>
          <p className="text-lg animate__animated animate__fadeInUp" style={{ animationDelay: '1000ms', animationFillMode: 'both' }}>
            Fast, reliable, and affordable roofing services. Serving your area with pride.
          </p>
          <button
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold animate__animated animate__fadeInUp"
            style={{ animationDelay: '1500ms', animationFillMode: 'both' }}
          >
            Get a Free Estimate
          </button>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  