import img from '../../assets/HeroSection/heroSection.jpg'

const HeroSection = () => {
    return (
        <section className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">

                {/* Left: Text with inline animation delay */}
                <div
                    className="md:w-1/2 text-center md:text-left space-y-4 animate__animated animate__fadeInLeft"
                    style={{ animationDelay: '100ms', animationFillMode: 'both' }}
                >
                    <h1
                        className="text-4xl font-bold text-gray-800 animate__animated animate__fadeInUp"
                        style={{ animationDelay: '120ms', animationFillMode: 'both' }}
                    >
                        Protect Your Home with Quality Roofing
                    </h1>
                    <p
                        className="text-gray-600 text-lg animate__animated animate__fadeInUp"
                        style={{ animationDelay: '160ms', animationFillMode: 'both' }}
                    >
                        Fast, reliable, and affordable roofing services. Serving your area with pride.
                    </p>
                    <button
                        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition animate__animated animate__fadeInUp"
                        style={{ animationDelay: '200ms', animationFillMode: 'both' }}
                    >
                        Get a Free Estimate
                    </button>
                </div>

                {/* Right: Image with delay */}
                <div
                    className="md:w-1/2 mt-10 md:mt-0 flex justify-center animate__animated animate__fadeInRight"
                    style={{ animationDelay: '240ms', animationFillMode: 'both' }}
                >
                    <img
                        src={img}
                        alt="Roofing Service"
                        className="w-full max-w-md rounded-lg shadow-lg"
                    />
                </div>

            </div>
        </section>
    )
}

export default HeroSection