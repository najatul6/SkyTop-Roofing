import aboutImg from '../../assets/AboutSection/about-image.jpg'; 

const AboutSection = () => {
  return (
    <section className="w-full mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
      
      {/* Text content */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-gray-800 animate__animated animate__fadeInLeft" style={{ animationDelay: '300ms' }}>
          Who We Are
        </h2>
        <p className="text-gray-600 text-lg animate__animated animate__fadeInLeft" style={{ animationDelay: '300ms' }}>
          We specialize in delivering high-quality roofing and home improvement services with quick turnaround and competitive pricing. Our team is dedicated to customer satisfaction and quality craftsmanship.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold animate__animated animate__fadeInLeft" style={{ animationDelay: '900ms' }}>
          Learn More
        </button>
      </div>

      {/* Image */}
      <div className="md:w-1/2 animate__animated animate__zoomIn" style={{ animationDelay: '300ms' }}>
        <img src={aboutImg} alt="About Us" className="rounded-lg shadow-lg" />
      </div>

    </section>
  )
}

export default AboutSection;
