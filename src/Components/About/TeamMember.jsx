
const teamMembers = [
  {
    name: "John Smith",
    role: "Lead Roofer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Maria Lopez",
    role: "Project Manager",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Lee",
    role: "Estimator",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Sophia Chen",
    role: "Customer Support",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-800">Meet Our Expert Team</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Dedicated professionals committed to quality, safety, and your satisfaction.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-6 text-center animate__animated animate__fadeInUp"
            style={{ animationDelay: `${idx * 300}ms`, animationFillMode: "both" }}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
            />
            <h3 className="text-xl font-semibold text-blue-800">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
