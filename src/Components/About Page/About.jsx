import React from "react";
import testimage from "../Home/HomeCards/image/card-1.jpg"
import '@fortawesome/fontawesome-free/css/all.min.css';


function About() {
  return (
    <section className="bg-theme-light py-16">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-theme-dark">
            The Team Behind Algora
          </h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
            <div className="bg-theme-light text-center p-8 rounded-lg transition duration-300 ease-in-out hover:bg-theme-green hover:text-theme-dark">
              <img
                src={testimage}
                className="mx-auto mb-4 rounded-full bg-gray-300 p-2"
                alt="Vidit Maheshwari"
              />
              <h3 className="text-lg font-bold uppercase mb-2">Vidit Maheshwari</h3>
              <div className="text-[#acacac] italic mb-2">Student</div>
              <p className="text-gray-700">
                Vidit is a student of RGIPT and pursuing B.Tech in Mathematics And Computing. He is a full stack MERN developer.
              </p>
              {/* <ul className="flex justify-center mt-4 space-x-3">
                <li>
                  <a href="#" className="bg-[#4099ff] p-2 rounded-full text-white">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="bg-[#c92228] p-2 rounded-full text-white">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="bg-[#3b5998] p-2 rounded-full text-white">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="bg-[#ea4c89] p-2 rounded-full text-white">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
            <div className="bg-theme-light text-center p-8 rounded-lg transition duration-300 ease-in-out hover:bg-theme-green hover:text-theme-dark">
              <img
                src={testimage}
                className="mx-auto mb-4 rounded-full bg-gray-300 p-2"
                alt="Mukesh Ambani"
              />
              <h3 className="text-lg font-bold uppercase mb-2">Aayush Kharbanda</h3>
              <div className="text-[#acacac] italic mb-2">Student</div>
              <p className="text-gray-700">
                Aayush is a student of RGIPT and pursuing B.Tech in Computer Science. He is a machine learning developer.
              </p>
              {/* <ul className="flex justify-center mt-4 space-x-3">
                <li>
                  <a href="#" className="bg-[#4099ff] p-2 rounded-full text-white">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="bg-[#c92228] p-2 rounded-full text-white">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="bg-[#3b5998] p-2 rounded-full text-white">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="bg-[#ea4c89] p-2 rounded-full text-white">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
            <div className="bg-theme-light text-center p-8 rounded-lg transition duration-300 ease-in-out hover:bg-theme-green hover:text-theme-dark">
              <img
                src= {testimage}
                className="mx-auto mb-4 rounded-full bg-gray-300 p-2"
                alt="Ratan Tata"
              />
              <h3 className="text-lg font-bold uppercase mb-2">MD Salique</h3>
              <div className="text-[#acacac] italic mb-2">Student</div>
              <p className="text-gray-700">
                MD Salique is a student of RGIPT and pursuing B.Tech in Computer Science. He is a machine learning developer and UI Designer.
              </p>
              {/* <ul className="flex justify-center mt-4 space-x-3">
                <li>
                  <a href="#" className="bg-[#4099ff] p-2 rounded-full text-white">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="bg-[#c92228] p-2 rounded-full text-white">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="bg-[#3b5998] p-2 rounded-full text-white">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="bg-[#ea4c89] p-2 rounded-full text-white">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
