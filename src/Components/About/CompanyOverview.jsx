import TeamImage from '../../assets/AboutSection/teamImg.jpg'

const CompanyOverview = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src={TeamImage}
          alt="SkyTop Team"
          className="rounded-2xl shadow-lg w-full h-auto animate__animated animate__fadeInLeft"
          style={{ animationDelay: '300ms', animationFillMode: 'both' }}
        />
        <div className="animate__animated animate__fadeInRight" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
          <h2 className="text-3xl font-bold mb-4 text-blue-800">
            Built on Trust & Craftsmanship
          </h2>
          <p className="text-gray-600 mb-4">
            At SkyTop Roofing, we take pride in delivering high-quality roofing services that stand the test of time. From small repairs to full replacements, our team ensures every job is done right the first time.
          </p>
          <p className="text-gray-600">
            With decades of combined experience, we're more than just contractors—we're your neighbors, committed to protecting your home with care and excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
