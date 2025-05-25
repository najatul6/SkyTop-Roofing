const posts = [
    {
      id: 1,
      title: "How to Maintain Your Roof Year-Round",
      date: "May 1, 2025",
      excerpt:
        "Learn easy and effective ways to keep your roof in top shape throughout the year...",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Signs You Need a Roof Replacement",
      date: "April 15, 2025",
      excerpt:
        "Discover the warning signs that mean it’s time to replace your roof and protect your home...",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Benefits of Energy Efficient Roofing",
      date: "March 20, 2025",
      excerpt:
        "Explore how energy-efficient roofing can save you money and help the environment.",
      image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Choosing the Right Roofing Material",
      date: "February 10, 2025",
      excerpt:
        "A comprehensive guide to the pros and cons of different roofing materials for your home.",
      image: "https://images.unsplash.com/photo-1560448204-200f5e542f92?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Preparing Your Roof for Storm Season",
      date: "January 5, 2025",
      excerpt:
        "Tips and tricks to protect your roof from damage during stormy weather.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
  ];
  
  const Blog = () => {
    return (
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-10 text-center text-blue-800 animate__animated animate__fadeInDown">
          Latest Roofing Tips & News
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map(({ id, title, date, excerpt, image }) => (
            <article
              key={id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow animate__animated animate__fadeInUp"
              style={{ animationDelay: `${id * 300}ms`, animationFillMode: "both" }}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-t-xl"
                loading="lazy"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-blue-700">{title}</h2>
                <p className="text-sm text-gray-500 mb-4">{date}</p>
                <p className="text-gray-700">{excerpt}</p>
                <button className="mt-4 text-blue-600 hover:underline font-semibold">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  };
  
  export default Blog;
  