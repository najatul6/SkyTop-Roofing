import { Award } from "lucide-react";

const CertificationsAwards = () => {
  const awards = [
    { title: "Certified Roofing Experts", issuer: "National Roofing Association", year: 2023 },
    { title: "Best Local Roofing Company", issuer: "Austin Business Awards", year: 2024 },
    { title: "Eco-Friendly Installer", issuer: "Green Building Council", year: 2022 },
  ];

  return (
    <section className="bg-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-700 animate__animated animate__fadeInDown" style={{ animationDelay: "200ms", animationFillMode: "both" }}>
          Certifications & Awards
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto animate__animated animate__fadeInUp" style={{ animationDelay: "400ms", animationFillMode: "both" }}>
          We’re proud to have earned industry-leading certifications and recognition.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
        {awards.map(({ title, issuer, year }, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center animate__animated animate__fadeInUp" style={{ animationDelay: `${500 + i * 200}ms`, animationFillMode: "both" }}>
            <Award className="mx-auto w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
            <p className="text-gray-600 mb-1">{issuer}</p>
            <p className="text-gray-400 text-sm">{year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsAwards;
