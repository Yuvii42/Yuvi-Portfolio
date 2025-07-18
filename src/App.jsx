import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans scroll-smooth">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <div className="bg-black text-white font-sans scroll-smooth">

   {/* My Projects */}
<section id="projects" className="px-6 py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-white mb-4">🚀 My Projects</h2>
    <p className="text-center text-gray-400 text-lg mb-16">
      Explore some of the best solutions I've built, from AI tools to full-stack platforms.
    </p>

    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {/* Reusable Card Component */}
      {[
        {
          title: "Karn- Blood and Organ Management",
          desc: "Karn is a comprehensive platform designed to connect blood and organ donors with recipients in need. The platform facilitates seamless donor registration, request management, and real-time matching to ensure timely assistance in life-saving situations.",
          url: "https://github.com/Yuvii42/Karn-Blood-bank-and-Organ-management",
        },
        {
          title: "Fit Fusion",
          desc: "Fit Fusion is a modern platform designed to promote healthy lifestyles by providing fitness enthusiasts with an engaging user interface to explore workout plans, trainer profiles, and a wide range of gym services seamlessly.",
          url: "https://fit-fusion-liart.vercel.app/",
        },
        {
          title: "Interview-AI",
          desc: "Interview-AI is a smart mock interview platform using React, Tailwind CSS, and OpenAI to simulate real interviews, generate domain-specific questions, and evaluate answers in real-time—boosting user confidence and skills.",
          url: "https://example.com/productivity-dashboard",
        },
        {
          title: "Unity Works",
          desc: "Unity Works is a community-focused initiative that empowers villagers by promoting mutual support and collaboration. Led by the panchayat, it organizes events, drives crowdfunding, and coordinates local efforts to foster unity, boost self-reliance, and strengthen the rural economy through collective action",
          url: "https://example.com/ecommerce-search",
        },
        {
          title: "Short URL",
          desc: "Short URL is a web-based tool that converts long URLs into short, shareable links. It simplifies link sharing, tracks click analytics, and improves user experience—ideal for social media, marketing, and quick access.",
          url: "https://example.com/network-analyzer",
        },
      ].map((project, index) => (
        <div
          key={index}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-yellow-500/30 hover:scale-[1.02]"
        >
          <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
          <p className="text-gray-300 mb-6">{project.desc}</p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-yellow-400 font-medium hover:underline hover:text-yellow-300 transition"
          >
            🔗 View Project
          </a>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Services */}
      <section id="services" className="px-6 py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
  <div className="max-w-7xl mx-auto text-center mb-16">
    <h2 className="text-4xl font-bold mb-4">🛠️ Services I Offer</h2>
    <p className="text-gray-400 text-lg">
      Bridging design, code, and data to deliver powerful solutions.
    </p>
  </div>

  <div className="grid gap-10 md:grid-cols-3 max-w-7xl mx-auto">
    {/* Service Card */}
    {[
      {
        icon: "🧩",
        title: "MERN Stack Development",
        desc: "End-to-end web apps using MongoDB, Express, React, and Node.js. Fast, secure & scalable.",
        points: ["RESTful APIs", "Admin Dashboards", "Authentication Systems"],
      },
      {
        icon: "📊",
        title: "Data Analytics",
        desc: "Transforming raw data into insights using Python, Pandas, Power BI, and modern visual tools.",
        points: ["Exploratory Data Analysis", "Interactive Dashboards", "Reporting & Visualization"],
      },
      {
        icon: "🎨",
        title: "UI/UX Design",
        desc: "Designing beautiful, accessible, and mobile-friendly interfaces using Figma and Tailwind CSS.",
        points: ["Wireframing & Prototyping", "Component-Based Design", "Mobile-First Approach"],
      },
    ].map((service, index) => (
      <div
        key={index}
        className="relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:shadow-yellow-500/30 hover:scale-[1.02]"
      >
        <div className="text-5xl mb-4">{service.icon}</div>
        <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
        <p className="text-gray-300 mb-6">{service.desc}</p>
        <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
          {service.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        <div className="absolute -bottom-1 -right-1 w-full h-full rounded-2xl bg-yellow-400 opacity-0 group-hover:opacity-5 blur-lg transition duration-300"></div>
      </div>
    ))}
  </div>
</section>


      {/* Certifications Section */}
<section id="certifications" className="px-6 py-24 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white">
  <h2 className="text-4xl font-extrabold mb-16 text-center tracking-tight" data-aos="fade-up">
    📜 Certifications
  </h2>

  <div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    
    {/* CARD TEMPLATE */}
    {[
      {
        logo: "/src/assets/certifications/SAPProfessional.png",
        title: "Becoming a SAP Professional",
        issued: "Coursera • March 2025",
        link: "https://www.coursera.org/account/accomplishments/verify/NC6M5O57RC4O",
        label: "Coursera"
      },
      {
        logo: "/src/assets/certifications/IBM.png",
        title: "Software Engineering Essential",
        issued: "IBM via Credly • Jan 14, 2025",
        link: "https://www.credly.com/earner/earned/badge/9d1ab07e-8b25-439a-a9c8-c4aca242ccaf",
        label: "Credly"
      },
      {
        logo: "/src/assets/certifications/IBM.png",
        title: "Software Programming and Database Essential",
        issued: "IBM via Credly • Jan 5, 2025",
        link: "https://www.credly.com/earner/earned/badge/c049d101-5987-400d-9ab3-6a29f03a68be",
        label: "Credly"
      },
      {
        logo: "/src/assets/certifications/SAPProfessional.png",
        title: "Implementing an SAP Solution",
        issued: "Coursera • Mar 18, 2025",
        link: "https://www.coursera.org/account/accomplishments/verify/7O6E8WR1LFQJ",
        label: "Coursera"
      },
      {
        logo: "/src/assets/certifications/IBM.png",
        title: "Software Developer Career Guide and Interview Preparation",
        issued: "IBM • Jun 2025",
        link: "https://www.coursera.org/account/accomplishments/records/Y47YD12LMRED",
        label: "Coursera"
      },
      {
        logo: "/src/assets/certifications/SAPProfessional.png",
        title: "Introduction to Software Engineering",
        issued: "Coursera • Jan 2025",
        link: "https://www.coursera.org/account/accomplishments/records/AK1Y7HCLP581",
        label: "Coursera"
      }
    ].map((cert, i) => (
      <div
        key={i}
        className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
        data-aos="fade-up"
        data-aos-delay={`${i * 100}`}
      >
        <div className="flex items-center gap-4 mb-4">
          <img src={cert.logo} alt="Certification Logo" className="w-14 h-14 rounded-lg" />
          <span className="bg-yellow-500 text-black text-xs font-semibold px-2 py-0.5 rounded-md">
            {cert.label}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{cert.issued}</p>
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-yellow-400 text-sm font-medium underline hover:text-yellow-300 transition-colors duration-200"
        >
          View Certificate →
        </a>
      </div>
    ))}
  </div>
</section>


     {/* Testimonials Section */}
  <section id="testimonials" className="px-6 py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
  <h2 className="text-4xl font-bold mb-16 text-center" data-aos="fade-up">
    💬 What Others Say
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
    
    {/* Testimonial 1 */}
    <div
      className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
      data-aos="fade-up"
    >
      <div className="text-yellow-400 text-4xl mb-4">“</div>
      <p className="italic text-lg text-gray-200 mb-6">
        His dedication to social responsibility during his time in NSS was truly inspiring.
        He played an active role in organizing environmental awareness drives and health camps that had a real community impact.
      </p>
      <p className="text-sm font-semibold text-yellow-400">— NSS Coordinator | Parul Institute of Technology</p>
    </div>

    {/* Testimonial 2 */}
    <div
      className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="text-yellow-400 text-4xl mb-4">“</div>
      <p className="italic text-lg text-gray-200 mb-6">
        Working with him during our Hackathon was a fantastic experience. He's not only technically strong but also a great team player.
      </p>
      <p className="text-sm font-semibold text-yellow-400">— Yash Shinde, Teammate | PU Hackathon Finalist</p>
    </div>

  </div>
</section>


           {/* About */}
<section
  id="about"
  className="px-6 py-28 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
>
  <div
    className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    data-aos="fade-up"
  >
    {/* Image Section */}
    <div className="flex justify-center">
      <div className="relative group">
        <img
          src="/src/assets/yuvi.png" // <-- Replace with your image path
          alt="Yuvraj Singh"
          className="w-72 h-72 rounded-full object-cover border-4 border-yellow-400 shadow-2xl transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute -inset-1 rounded-full bg-yellow-400 blur-xl opacity-1 group-hover:opacity-50 transition duration-500"></div>
      </div>
    </div>

    {/* Text Section */}
    <div>
      <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 drop-shadow-lg text-center md:text-left">
        About Me
      </h2>

      <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-xl transition-transform duration-300 hover:scale-[1.02]">
        <p className="text-lg leading-relaxed text-gray-200">
          I'm <span className="text-yellow-400 font-semibold">Yuvraj Singh</span>, a pre-final year B.Tech CSE student at
          <span className="text-yellow-400 font-semibold"> Parul University</span>, currently in my 7th semester.
          With a strong foundation in <span className="font-medium text-white">Data Structures and Algorithms</span>,
          I enjoy exploring complex problem-solving, especially in areas like <span className="italic text-amber-300">graphs</span> and
          <span className="italic text-amber-300"> statistics</span>.
          <br /><br />
          I’m passionate about crafting meaningful digital solutions and always eager to grow by taking on new challenges.
          Known as a <span className="text-green-300 font-semibold">dependable team player</span>, I believe collaboration fuels innovation.
          I'm currently seeking <span className="text-blue-300 font-semibold">exciting opportunities</span> where I can learn, contribute, and make a real impact in the tech world.
        </p>
      </div>
    </div>
  </div>
</section>



     {/* Contact */}
<section id="contact" className="px-6 py-28 bg-gradient-to-br from-black via-gray-900 to-black text-white">
  <div className="max-w-2xl mx-auto text-center" data-aos="fade-up">
    
    <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 drop-shadow-md">
      Contact Me
    </h2>

    <form
      action="https://formsubmit.co/yuvviirajput@gmail.com"
      method="POST"
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl space-y-6"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full px-4 py-3 rounded-lg bg-black/70 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 outline-none transition"
      />
      
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-3 rounded-lg bg-black/70 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 outline-none transition"
      />
      
      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        required
        className="w-full px-4 py-3 rounded-lg bg-black/70 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 outline-none transition resize-none"
      ></textarea>

      {/* Hidden fields */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://your-portfolio-domain.com/thank-you.html" />

      <button
        type="submit"
        className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-lg transition transform hover:scale-105"
      >
        Send Message
      </button>
    </form>
  </div>
</section>


    </div>

      <section>
        <Clients />
      </section>
    </div>
  );
};

export default App;
