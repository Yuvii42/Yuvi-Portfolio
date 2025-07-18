import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#103e27] to-[#062d1a] text-white p-8 md:p-16 rounded-3xl m-6 flex flex-col md:flex-row items-center justify-between shadow-xl transition-all duration-300">
      
      {/* Text Section */}
      <div className="max-w-xl md:max-w-2xl text-center md:text-left animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          👋 Hey, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-400">Yuvraj</span>
          <br />
          <span className="text-white">Full-Stack Developer</span>
        </h1>

        <p className="text-gray-300 text-md md:text-lg mb-6 leading-relaxed">
          I'm a Full Stack Frontend Developer & Content Writer from India. I
          specialize in <span className="text-yellow-400 font-semibold">Bug Fixing</span>,{" "}
          <span className="text-yellow-400 font-semibold">Responsive Web Design</span>, and{" "}
          <span className="text-yellow-400 font-semibold">Visual Development</span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="mailto:yuvviirajput@gmail.com"
            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-300 hover:scale-105 transition-transform duration-300"
          >
            🚀 HIRE ME
          </a>

          <a
            href="https://drive.google.com/file/d/1EW5jqMIda9CGvg6Js-y8kIgX2ekDE60C/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black hover:scale-105 transition-transform duration-300"
          >
            📄 RESUME
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="mt-10 md:mt-0 animate-fade-in">
        <img
          src="/src/assets/profile.png"
          alt="developer"
          className="w-[250px] md:w-[350px] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default Hero;
