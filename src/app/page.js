import HeroBanner from "@/components/section/Banner";
import Link from 'next/link';
import { Zap, Users, Shield, Repeat, StepForward, Aperture, MessageSquare, Briefcase, Code, BookOpen, ArrowRight } from 'lucide-react';

// --- Data for Sections ---

const featureData = [
  { icon: Zap, title: "Zero Cost Learning", description: "Trade your knowledge, not your savings. All exchanges are based on mutual learning value." },
  { icon: Users, title: "Verified Community", description: "Connect with authenticated users and view transparent ratings and skill history." },
  { icon: Shield, title: "Secure Matching", description: "Our algorithm finds the best skill-swap partners based on your needs and offerings." },
];

const stepsData = [
  { step: 1, title: "List Your Skill", description: "Document what you can teach, from Python to photography, in your profile." },
  { step: 2, title: "Search for Needs", description: "Browse the Exchange for skills you want to learn or partners for collaboration." },
  { step: 3, title: "Propose an Exchange", description: "Send a swap proposal detailing the scope and timeline of your mutual mentorship." },
  { step: 4, title: "Start Learning", description: "Connect with your partner via chat and begin your knowledge exchange!" },
];

const skillPreviewData = [
  { icon: Code, title: "Advanced React Hooks", offeredBy: "Alice Johnson", rating: 4.9, tags: ["Frontend", "JavaScript", "WebDev"] },
  { icon: BookOpen, title: "Creative Writing Workshop", offeredBy: "Ben Smith", rating: 4.7, tags: ["Art", "Literature", "Mentorship"] },
  { icon: Aperture, title: "Landscape Photography 101", offeredBy: "Clara Lee", rating: 4.8, tags: ["Visual Arts", "Hobby"] },
  { icon: Briefcase, title: "Pitch Deck Review & Strategy", offeredBy: "David Chen", rating: 5.0, tags: ["Business", "Startup", "Finance"] },
];

const testimonialData = [
  { quote: "I traded an hour of Spanish lessons for someone reviewing my resume. SkillSync is genius!", author: "Maria K.", role: "Recent Graduate" },
  { quote: "The quality of the coding mentorship I received was better than most paid bootcamps. Highly recommended.", author: "Jake R.", role: "Junior Developer" },
  { quote: "Found a local partner to swap guitar lessons for SEO tips. The community is supportive and focused.", author: "Lena S.", role: "Small Business Owner" },
];


/**
 * Main application homepage.
 */
export default function Home() {
  return (
    <div className="pt-16">

      {/* 1. Hero Banner Section */}
      <HeroBanner />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 2. Key Features Section */}
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why SkillSync?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              The simplest, fairest way to expand your personal and professional toolkit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureData.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-xl shadow-lg border border-gray-100 transform hover:shadow-2xl hover:scale-[1.02] transition duration-300 group cursor-pointer"
              >
                <feature.icon className="w-10 h-10 text-indigo-600 mb-4 group-hover:text-indigo-700 transition" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. How It Works Section */}
        <section id="how-it-works" className="py-20 bg-indigo-50 rounded-2xl mb-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-indigo-900 sm:text-4xl">
              How the Exchange Works
            </h2>
            <p className="mt-4 text-xl text-indigo-700">
              Four simple steps to start your journey of mutual growth.
            </p>
          </div>

          <div className="relative flex flex-col items-center">
            {/* Timeline Line (Hidden on small device) */}
            <div className="hidden md:block absolute top-10 bottom-10 w-0.5 bg-indigo-300"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 w-full">
              {stepsData.map((stepItem, index) => (
                <div
                  key={index}
                  className={`flex items-start ${index % 2 === 0 ? 'md:col-start-1 md:text-right md:justify-end' : 'md:col-start-2 md:text-left md:justify-start'}`}
                >
                  <div className="relative grow max-w-sm">
                    {/* Step Content Card */}
                    <div className={`p-6 bg-white rounded-xl shadow-xl border border-indigo-200 transform hover:shadow-2xl hover:scale-[1.02] transition duration-300 group cursor-default w-full`}>
                      <h3 className="text-2xl font-bold text-indigo-700 mb-2 flex items-center justify-start md:justify-end">
                        <span className={`text-4xl mr-3 font-extrabold text-indigo-400 opacity-70 ${index % 2 === 0 ? 'hidden md:inline' : 'inline md:hidden'}`}>
                          0{stepItem.step}
                        </span>
                        {stepItem.title}
                        <span className={`text-4xl ml-3 font-extrabold text-indigo-400 opacity-70 ${index % 2 === 0 ? 'inline md:hidden' : 'hidden md:inline'}`}>
                          0{stepItem.step}
                        </span>
                      </h3>
                      <p className="text-gray-600">{stepItem.description}</p>
                    </div>
                  </div>

                  {/* Step Marker Circle */}
                  <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white z-10 mx-4 shrink-0 mt-3">
                    <span className="font-bold">{stepItem.step}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/register" passHref>
              <button className="inline-flex items-center px-8 py-3 text-lg font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-xl transition duration-300">
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </Link>
          </div>
        </section>

        {/* 4. Skill Exchange Preview Section */}
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Hot Skills on the Exchange
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              A sample of the exciting learning opportunities available right now.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillPreviewData.map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col justify-between 
                           transform hover:shadow-2xl hover:-translate-y-1 transition duration-300 cursor-pointer group"
              >
                <div>
                  <skill.icon className="w-8 h-8 text-indigo-500 mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">{skill.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">Offered by {skill.offeredBy}</p>
                </div>

                {/* Footer and Rating */}
                <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
                  <div className="flex items-center text-yellow-500 text-sm font-semibold">
                    {/* Star icon */}
                    <svg className="w-4 h-4 mr-1 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 15l-5.878 3.09 1.123-6.545L.487 7.575l6.561-.955L10 1l2.952 5.62 6.561.955-4.758 4.66.123 6.545z" /></svg>
                    {skill.rating}
                  </div>
                  <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full group-hover:bg-indigo-100 transition">
                    {skill.tags[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/exchange" passHref>
              <button className="inline-flex items-center px-8 py-3 text-lg font-semibold rounded-xl text-indigo-600 border border-indigo-600 bg-white hover:bg-indigo-50 shadow-md transition duration-300">
                Browse All Skills
              </button>
            </Link>
          </div>
        </section>

        {/* 5. Community Testimonials Section*/}
        <section id="testimonials" className="py-20 bg-gray-50 rounded-2xl mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Hear From Our Users
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Real stories of successful skill exchanges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialData.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-indigo-400 
                           transform hover:shadow-2xl transition duration-300"
              >
                <MessageSquare className="w-6 h-6 text-indigo-500 mb-4" />
                <p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-indigo-600">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center text-sm text-gray-500 border-t border-gray-100 mt-12">
          © {new Date().getFullYear()} SkillSync. All rights reserved.
        </footer>

      </main>
    </div>
  );
}