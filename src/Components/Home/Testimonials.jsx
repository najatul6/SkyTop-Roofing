import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    feedback:
      "SkyTop Roofing was quick, clean, and professional. They replaced our roof in just two days. Highly recommend!",
    location: "Austin, TX",
  },
  {
    name: "James Carter",
    feedback:
      "We had a leak emergency and they fixed it the same day. Very responsive and trustworthy team.",
    location: "San Antonio, TX",
  },
  {
    name: "Linda Gomez",
    feedback:
      "Amazing quality and customer service. The new roof looks fantastic. Thank you!",
    location: "Dallas, TX",
  },
  {
    name: "Linda Gomez",
    feedback:
      "Amazing quality and customer service. The new roof looks fantastic. Thank you!",
    location: "Dallas, TX",
  },
];

// Autoplay plugin for Keen Slider
function AutoplayPlugin(slider) {
  let timeout;
  let mouseOver = false;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 3000); // autoplay delay in ms
  }

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });

  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
}

const Testimonials = () => {
  const [sliderRef] = useKeenSlider(
    {
    //   loop: true,
      mode: "snap",
      slides: {
        perView: 1,
        spacing: 10,
      },
      breakpoints: {
        "(min-width: 768px)": {
          slides: { perView: 2, spacing: 10 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 10 },
        },
      },
    },
    [AutoplayPlugin] // <-- pass autoplay plugin here
  );

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          What Our Customers Say
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Real feedback from homeowners we’ve proudly served.
        </p>

        <div ref={sliderRef} className="keen-slider overflow-hidden w-full">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="keen-slider__slide bg-white rounded-2xl p-4 shadow-md "
            >
              <Quote className="w-5 h-5 text-blue-600 mb-4" />
              <p className="text-gray-700 italic mb-4">"{t.feedback}"</p>
              <div className="text-sm font-semibold text-gray-900">{t.name}</div>
              <div className="text-xs text-gray-500">{t.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
