"use client";

import { motion } from "framer-motion";

const blogs = [
  {
    title: "Healthy Heart Tips",
    date: "Sep 10, 2025",
    image: "/blog1.png",
    excerpt:
      "Discover ways to keep your heart healthy with expert advice and preventive measures.",
    link: "https://www.heartfoundation.org.au/healthy-living/keeping-your-heart-healthy",
  },
  {
    title: "Mental Health Awareness",
    date: "Sep 5, 2025",
    image: "/blog2.png",
    excerpt:
      "Learn how to manage stress, anxiety, and boost your mental well-being effectively.",
    link: "https://www.cartercenter.org/health/mental_health/index.html?utm_source=google&utm_medium=cpc&utm_campaign=NonBrand_TCC_Search_Health&utm_term=mental%20health%20awareness&utm_content=mental_health&s_src=peace&amp;s_subsrc=search&gad_source=1&gad_campaignid=26336342&gbraid=0AAAAAD_jeJ4kjDUshaya4WYPPWRQAfTFc&gclid=Cj0KCQjwovPGBhDxARIsAFhgkwQoX2FrnoGfv7YqMhKYxGFa7Hm-7CRTBOgi9Hts_Jrd7QAFQEVZHdkaAp-vEALw_wcB",
  },
  {
    title: "Vaccination Importance",
    date: "Aug 30, 2025",
    image: "/blog3.png",
    excerpt:
      "Understand why timely vaccinations are crucial for you and your family’s health.",
    link: "https://www.nfid.org/immunization/10-reasons-to-get-vaccinated/",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="relative py-28 bg-gradient-to-r from-blue-950 via-cyan-900 to-indigo-950 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Floating Gradient Circles */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-cyan-400/20 blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-10 right-12 w-24 h-24 rounded-full bg-indigo-500/20 blur-3xl animate-pulse pointer-events-none"></div>

        {/* Section Header */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-cyan-400 text-center mb-12 drop-shadow-[0_0_25px_rgba(59,130,246,0.7)]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Latest Blog Posts
        </motion.h2>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl hover:scale-105 hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="relative h-56 w-full overflow-hidden rounded-t-3xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 rounded-t-3xl"></div>
              </div>

              <div className="p-6 flex flex-col justify-between h-[220px]">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{blog.date}</p>
                  <p className="text-gray-200 text-sm">{blog.excerpt}</p>
                </div>

                <a
                  href={blog.link}
                  className="mt-4 inline-block text-cyan-300 font-semibold hover:text-blue-400 transition-colors text-sm"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
