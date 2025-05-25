import { useState, useEffect } from "react";

const posts = [
  {
    id: 1,
    title: "How to Maintain Your Roof Year-Round",
    date: "May 1, 2025",
    excerpt:
      "Learn easy and effective ways to keep your roof in top shape throughout the year...",
  },
  {
    id: 2,
    title: "Signs You Need a Roof Replacement",
    date: "April 15, 2025",
    excerpt:
      "Discover the warning signs that mean it’s time to replace your roof and protect your home...",
  },
  {
    id: 3,
    title: "Benefits of Energy Efficient Roofing",
    date: "March 20, 2025",
    excerpt:
      "Explore how energy-efficient roofing can save you money and help the environment.",
  },
];

const Blog = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-10 text-center text-blue-800 animate__animated animate__fadeInDown">
        Latest Roofing Tips & News
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map(({ id, title, date, excerpt }) => (
          <article
            key={id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow animate__animated animate__fadeInUp"
            style={{ animationDelay: `${id * 300}ms`, animationFillMode: "both" }}
          >
            <h2 className="text-2xl font-semibold mb-2 text-blue-700">{title}</h2>
            <p className="text-sm text-gray-500 mb-4">{date}</p>
            <p className="text-gray-700">{excerpt}</p>
            <button className="mt-4 text-blue-600 hover:underline font-semibold">
              Read More →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
