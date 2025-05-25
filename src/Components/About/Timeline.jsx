const Timeline = () => {
    const events = [
      { year: 2010, text: "Founded with a mission to provide quality roofing." },
      { year: 2015, text: "Expanded to cover 3 major Texas cities." },
      { year: 2018, text: "Achieved 5-star rating on Google and Yelp." },
      { year: 2022, text: "Adopted eco-friendly roofing materials." },
      { year: 2024, text: "Awarded Best Roofing Company of the Year." },
    ];
  
    return (
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-700 animate__animated animate__fadeInDown" style={{ animationDelay: "200ms", animationFillMode: "both" }}>
            Our Journey & Milestones
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate__animated animate__fadeInUp" style={{ animationDelay: "400ms", animationFillMode: "both" }}>
            A timeline of key moments that shaped our company.
          </p>
        </div>
  
        <div className="max-w-4xl mx-auto relative">
          <div className="border-l-2 border-blue-600 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          <div className="space-y-10">
            {events.map(({ year, text }, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center ${i % 2 === 0 ? "md:justify-start md:pl-8" : "md:justify-end md:pr-8"} animate__animated animate__fadeInUp`} style={{ animationDelay: `${300 + i * 300}ms`, animationFillMode: "both" }}>
                <div className="bg-white rounded-full border-4 border-blue-600 w-12 h-12 flex items-center justify-center font-bold text-blue-600 z-10">
                  {year}
                </div>
                <div className="bg-white shadow-md rounded-xl p-6 max-w-md mt-4 md:mt-0 md:mx-6">
                  <p className="text-gray-700">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Timeline;
  