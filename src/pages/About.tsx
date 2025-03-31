
import SectionHeader from "@/components/SectionHeader";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About EduLearn</h1>
            <p className="text-xl">
              Transforming lives through accessible, high-quality online education.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Our Story" centered />
          <div className="prose prose-lg max-w-none">
            <p>
              EduLearn was founded in 2018 with a simple mission: to make high-quality education accessible to everyone, 
              regardless of geographic or economic barriers. What started as a small collection of courses has grown 
              into a comprehensive platform offering thousands of courses across numerous disciplines.
            </p>
            <p className="mt-4">
              Our team consists of passionate educators, technologists, and lifelong learners who believe in the 
              transformative power of education. We work tirelessly to create an engaging learning environment 
              that helps our students achieve their personal and professional goals.
            </p>
            <p className="mt-4">
              We partner with industry-leading experts and organizations to ensure our curriculum remains 
              relevant and practical in today's rapidly changing world. Our commitment to excellence has 
              helped thousands of students advance their careers and pursue their passions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h2>
              <p className="text-gray-700">
                To empower individuals worldwide by providing accessible, affordable, and high-quality educational 
                experiences that foster personal growth and professional development.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Vision</h2>
              <p className="text-gray-700">
                To be the world's leading online learning platform, recognized for our commitment to educational 
                excellence, innovation, and positive impact on learners' lives and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <SectionHeader 
          title="Our Leadership Team" 
          subtitle="Meet the passionate individuals behind EduLearn" 
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Team Member 1 */}
          <div className="text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300"
                alt="Emily Chen"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Emily Chen</h3>
            <p className="text-blue-600">Founder & CEO</p>
            <p className="mt-2 text-gray-600">
              Former education technology executive with a passion for making learning accessible to all.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
                alt="David Rodriguez"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">David Rodriguez</h3>
            <p className="text-blue-600">Chief Academic Officer</p>
            <p className="mt-2 text-gray-600">
              Education innovator with 15+ years experience developing cutting-edge curriculum.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300"
                alt="Sarah Johnson"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Sarah Johnson</h3>
            <p className="text-blue-600">Chief Technology Officer</p>
            <p className="mt-2 text-gray-600">
              Tech visionary focused on creating intuitive and engaging learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Our Core Values" 
            subtitle="The principles that guide everything we do" 
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">We are committed to providing the highest quality educational content and experiences.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">We continuously explore new ways to improve how people learn and grow.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Accessibility</h3>
              <p className="text-gray-600">We believe education should be accessible to everyone, regardless of background.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Community</h3>
              <p className="text-gray-600">We foster a supportive community of learners and educators who help each other grow.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
