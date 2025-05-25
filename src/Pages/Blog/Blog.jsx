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
        image: "https://plus.unsplash.com/premium_photo-1710282122654-604457e6cc95?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 5,
        title: "Preparing Your Roof for Storm Season",
        date: "January 5, 2025",
        excerpt:
          "Tips and tricks to protect your roof from damage during stormy weather.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 6,
        title: "How to Spot Roof Damage Early",
        date: "December 15, 2024",
        excerpt:
          "Learn the key signs of roof damage before they turn into costly repairs.",
        image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 7,
        title: "DIY Roof Maintenance: What You Can Do Safely",
        date: "November 10, 2024",
        excerpt:
          "Simple, safe roof maintenance tasks homeowners can perform themselves.",
        image: "https://images.unsplash.com/photo-1721493707262-0fc9e5794c27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 8,
        title: "Understanding Roof Warranties",
        date: "October 1, 2024",
        excerpt:
          "What you need to know about roofing warranties and how they protect you.",
        image: "https://plus.unsplash.com/premium_photo-1678293088678-5eb08b9c283e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 9,
        title: "Common Roofing Myths Debunked",
        date: "September 10, 2024",
        excerpt:
          "Separating fact from fiction to help you make informed roofing decisions.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 10,
        title: "How Weather Affects Your Roof's Lifespan",
        date: "August 20, 2024",
        excerpt:
          "Understanding the impact of climate and weather patterns on your roofing investment.",
        image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
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
              style={{ animationDelay: `${id * 200}ms`, animationFillMode: "both" }}
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
  