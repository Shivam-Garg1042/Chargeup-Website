
import { useState } from "react";
import { X } from "lucide-react";
import LogoImage from '../assets/chargeup_logo_blue.jpg';
import { FaInstagram, FaTwitter, FaYoutube , FaFacebook } from 'react-icons/fa';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm ">
  <div className="bg-[#013c4c] text-white rounded-lg shadow-xl p-6 w-full max-w-4xl h-auto max-h-[87vh] m-4 relative overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        {/* Modal Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        <div className="hidden lg:flex flex-col justify-center pl-6 border-r border-gray-200">
          <div className="space-y-6 ">
          <div >
              <img src={LogoImage} alt="chargeup Logo"/>
              
            </div>

          <div className="space-y-2">
              <p className="text-lg">📧 info@echargeup.com</p>
            </div>
            
            <div className="space-y-2">
              <p className="text-lg"> 📞 18001230181</p>
              
            </div>
            
            <div className="space-y-2">
              <p className="text-lg">E‐Chargeup Solutions Private Limited</p>
              <br/>
              
              <p className="text-lg">300/3, 1st Floor,</p>
              <p className="text-lg">MG Road, Sultanpur,</p>
              <p className="text-lg">New Delhi – 110030</p>
            </div>

            <div className="flex space-x-4">
            <a href="https://www.instagram.com/e_chargeup/" target="_blank" rel="noopener noreferrer" className="text-[#F6F4F0] hover:text-secondary text-2xl">
              <FaInstagram />
            </a>
            <a href="https://x.com/echargeup" target="_blank" rel="noopener noreferrer" className="text-[#F6F4F0] hover:text-secondary text-2xl">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com/channel/UCCSxPy0TYszJseg2j-a7m0g" target="_blank" rel="noopener noreferrer" className="text-[#F6F4F0] hover:text-secondary text-2xl">
              <FaYoutube />
            </a>
            <a href="https://www.facebook.com/echargeup" target="_blank" rel="noopener noreferrer" className="text-[#F6F4F0] hover:text-secondary text-2xl">
              <FaFacebook />
            </a>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>Copyright © 2024  </p>
              <p>E-Chargeup Solutions Pvt Ltd.</p>
              <p>All rights reserved.</p>
              
            </div>
          </div>
        </div>
          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-4  ">
            <h2 className="text-3xl font-bold text-white">Get in touch.</h2>

            <div>
              <label htmlFor="name" className="block text-sm mb-2 text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-[#6f7476]  border  border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:border-white"
              /> 
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm mb-2 text-white">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2   bg-[#6f7476] border  border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:border-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-2 text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                
                className="w-full px-3 py-2 bg-[#6f7476] border  border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:border-white"
              />
            </div>

            

            <div>
              <label htmlFor="message" className="block text-sm mb-2 text-white">
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Details are great, if you have them."
                className="w-full px-3 py-2 bg-[#6f7476] border  border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:border-white"
              />
            </div>

            <button
              type="submit"
              className="w-auto px-6 py-2  text-white border border-white rounded hover:bg-gray-400 transition-colors inline-block " 
            >
              Submit
            </button>
          </form>

          {/* Right-Side Lines Design */}
          
      </div>
    </div>
    </div>
  );
};

export default ContactModal;

