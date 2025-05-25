import { ShieldCheck, Hammer, HeartHandshake } from "lucide-react";
import "animate.css";

const OurMission = () => {
    const values = [
        {
            icon: <ShieldCheck className="w-8 h-8 text-blue-600 mb-3" />,
            title: "Honesty",
            text: "Transparent pricing and no hidden fees.",
            delay: "300ms",
        },
        {
            icon: <Hammer className="w-8 h-8 text-blue-600 mb-3" />,
            title: "Quality",
            text: "Only the best materials, always.",
            delay: "600ms",
        },
        {
            icon: <HeartHandshake className="w-8 h-8 text-blue-600 mb-3" />,
            title: "Customer First",
            text: "We treat your home like it's our own.",
            delay: "900ms",
        },
    ];

    return (
        <section className="bg-blue-50 py-16 px-4">
            <div className="max-w-6xl mx-auto text-center mb-10">
                <h2 className="text-3xl font-bold text-blue-700 animate__animated animate__fadeInDown" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
                    Our Mission & Values
                </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {values.map((val, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-6 rounded-xl shadow-md text-center animate__animated animate__fadeInUp"
                        style={{
                            animationDelay: val.delay,
                            animationFillMode: "both",
                        }}
                    >
                        <div className="flex justify-center items-center">{val.icon}</div>
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">{val.title}</h3>
                        <p className="text-gray-600">{val.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurMission;
