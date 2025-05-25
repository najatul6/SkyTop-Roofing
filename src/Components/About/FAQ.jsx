import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How long does a roof replacement take?",
    answer:
      "Typically, a roof replacement takes 2 to 5 days depending on the size and complexity of the project.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes, we provide free, no-obligation estimates to help you plan your roofing project.",
  },
  {
    question: "What types of roofing materials do you use?",
    answer:
      "We use high-quality asphalt shingles, metal roofing, tile, and flat roofing materials, tailored to your needs.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. SkyTop Roofing is fully licensed and insured to protect you and your property.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-blue-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2
          className="text-3xl font-bold text-blue-800 animate__animated animate__fadeInDown"
          style={{ animationFillMode: "both" }}
        >
          Frequently Asked Questions
        </h2>
        <p
          className="text-gray-700 mt-2 animate__animated animate__fadeInUp"
          style={{ animationFillMode: "both", animationDelay: "300ms" }}
        >
          Answers to some of the most common questions about our roofing services.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-blue-800">{faq.question}</h3>
              {openIndex === index ? (
                <ChevronUp className="w-6 h-6 text-blue-600" />
              ) : (
                <ChevronDown className="w-6 h-6 text-blue-600" />
              )}
            </div>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              style={{
                maxHeight: openIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : "0px",
                overflow: "hidden",
                transition: "max-height 0.4s ease",
              }}
            >
              <p className="mt-4 text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
