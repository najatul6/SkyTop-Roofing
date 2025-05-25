const pricingPlans = [
    {
      title: "Basic Roof Inspection",
      price: "$99",
      features: [
        "Complete roof assessment",
        "Minor repairs included",
        "Detailed report",
      ],
    },
    {
      title: "Standard Roof Repair",
      price: "$499",
      features: [
        "Repair leaks and damaged shingles",
        "Material and labor included",
        "Warranty up to 1 year",
      ],
    },
    {
      title: "Full Roof Replacement",
      price: "$5,000+",
      features: [
        "Remove old roof",
        "Install new roofing materials",
        "Extended warranty",
        "Energy efficient options",
      ],
    },
  ];
  
  const Pricing = () => {
    return (
      <section className="max-w-7xl mx-auto px-4 py-16 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-10">
          Pricing & Estimates
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-4xl font-bold text-blue-600 mb-6">{plan.price}</p>
              <ul className="text-gray-700 mb-6 list-disc list-inside space-y-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
                Get Estimate
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Pricing;
  