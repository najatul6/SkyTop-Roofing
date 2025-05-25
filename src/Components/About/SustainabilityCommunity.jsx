import { Leaf, Users } from "lucide-react";

const SustainabilityCommunity = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          alt="Sustainability"
          className="rounded-2xl shadow-lg w-full h-auto animate__animated animate__fadeInLeft"
          style={{ animationFillMode: "both" }}
        />
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-800 animate__animated animate__fadeInRight" style={{ animationFillMode: "both" }}>
            Commitment to Sustainability & Community
          </h2>
          <p className="text-gray-600 mb-6 animate__animated animate__fadeInRight" style={{ animationFillMode: "both", animationDelay: "300ms" }}>
            We prioritize eco-friendly materials and methods to minimize environmental impact while giving back to our local communities through volunteer work and sponsorships.
          </p>
          <div className="flex space-x-6">
            <div className="flex flex-col items-center text-blue-600 animate__animated animate__fadeInRight" style={{ animationDelay: "500ms", animationFillMode: "both" }}>
              <Leaf className="w-10 h-10 mb-2" />
              <span>Eco Materials</span>
            </div>
            <div className="flex flex-col items-center text-blue-600 animate__animated animate__fadeInRight" style={{ animationDelay: "700ms", animationFillMode: "both" }}>
              <Users className="w-10 h-10 mb-2" />
              <span>Community Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityCommunity;
