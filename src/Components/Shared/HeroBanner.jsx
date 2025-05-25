
const HeroBanner = ({title,subtitle}) => {
  return (
    <section className="bg-blue-50 py-20 px-4 text-center">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4 animate__animated animate__fadeInDown">
        {title}
      </h1>
      <p className="text-lg text-gray-700 animate__animated animate__fadeInUp" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
        {subtitle}
      </p>
    </div>
  </section>
  
  )
}

export default HeroBanner