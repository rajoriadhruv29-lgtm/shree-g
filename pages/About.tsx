import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-blue mb-4">About Us</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Leading the industry with precision-engineered hardware solutions.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-16 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-brand-blue mb-6">Who We Are</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We are a specialized manufacturer of <strong>M.S. Hinges</strong>, focused on providing high-quality products. 
                With a strong emphasis on quality, efficiency, and customer satisfaction, we have established ourselves as a 
                trusted name in the hinge manufacturing sector.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our range of products include Rivet hinges, bolt hinges, Butt Hinges, Lorry Hinges, Washer and shutter kunda.
                Our dedication to precision ensures that every piece of hardware that leaves our facility meets rigorous 
                industry standards.
              </p>
              <div className="bg-brand-yellow/10 p-6 rounded-lg border-l-4 border-brand-yellow">
                <h4 className="font-bold text-brand-blue mb-2">Our Mission</h4>
                <p className="text-sm text-gray-700">
                  To deliver superior hardware solutions that enhance the durability and functionality of residential and commercial structures globally.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 h-64 lg:h-auto relative">
              <img 
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Hinge on a door" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-brand-blue mb-8 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow border-t-4 border-brand-yellow">
              <h3 className="font-bold text-lg mb-2">Expertise</h3>
              <p className="text-gray-600 text-sm">Decades of experience in metal fabrication and hinge manufacturing technologies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-t-4 border-brand-blue">
              <h3 className="font-bold text-lg mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">Continuously upgrading our machinery and processes to deliver better products faster.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-t-4 border-brand-yellow">
              <h3 className="font-bold text-lg mb-2">Reliability</h3>
              <p className="text-gray-600 text-sm">Trusted by contractors, builders, and wholesalers across the region.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;