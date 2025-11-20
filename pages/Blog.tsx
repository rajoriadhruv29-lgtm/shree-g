import React from 'react';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "Choosing the Right Hinge for Heavy Industrial Doors",
      excerpt: "When it comes to industrial applications, the strength of the hinge determines the longevity of the door. Here is how to choose between Rivet and Bolt hinges.",
      date: "Oct 15, 2023",
      image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Maintenance Tips for Mild Steel Hinges",
      excerpt: "To prevent rust and ensure smooth operation, M.S. hinges require periodic maintenance. Learn the best lubricants and cleaning techniques.",
      date: "Sep 22, 2023",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Understanding Hinge Specifications: Width vs Thickness",
      excerpt: "What matters more for load bearing? We break down the technical specifications found in our catalogue to help you make informed decisions.",
      date: "Aug 05, 2023",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-blue mb-4">Industry Insights</h1>
          <p className="text-gray-600">Latest news, tips, and guides from the world of hardware manufacturing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-brand-yellow uppercase tracking-wider">{post.date}</span>
                <h3 className="text-xl font-bold text-brand-blue mt-2 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <a href="#" className="text-brand-blue font-medium hover:underline">Read Full Article &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;