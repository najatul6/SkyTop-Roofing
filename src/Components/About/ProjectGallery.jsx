const ProjectGallery = () => {
    const projects = [
      {
        title: "Modern Roof Replacement",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        description: "A sleek modern roof installed with durable materials.",
      },
      {
        title: "Emergency Leak Repair",
        img: "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=800&q=80",
        description: "Fast and reliable emergency leak fix.",
      },
      {
        title: "Traditional Shingle Roof",
        img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
        description: "Classic asphalt shingles for long-lasting protection.",
      },
      {
        title: "Commercial Flat Roof",
        img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
        description: "Professional commercial flat roofing services.",
      },
    ];
  
    return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-800 mb-2 animate__animated animate__fadeInDown" style={{ animationFillMode: 'both' }}>
            Our Projects
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto animate__animated animate__fadeInUp" style={{ animationFillMode: 'both', animationDelay: '300ms' }}>
            Take a look at some of our recent roofing projects. Quality workmanship and attention to detail on every job.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer animate__animated animate__fadeInUp`}
              style={{ animationDelay: `${idx * 300}ms`, animationFillMode: 'both' }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-blue-800">{project.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ProjectGallery;
  