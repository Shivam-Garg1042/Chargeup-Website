import { useState } from "react";
import { X } from "lucide-react";
import LogoImage from '../assets/chargeup_logo_blue.jpg';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
import { Phone, Mail, MapPin } from "lucide-react";
import axios from 'axios';

const ConfirmationModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm" style={{ marginLeft: '0px' }}>
      <div className="bg-[#013c4c] text-white rounded-lg shadow-xl p-6 w-full max-w-md text-center">
        <p className="text-lg w-auto h-auto">Thank you! Your message has been sent.</p>
      </div>
    </div>
  );
};

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      await axios.post(`${API_URL}/api/contact`, formData);

      // Show confirmation modal
      setShowConfirmationModal(true);

      // Reset form and close modals after 3 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setShowConfirmationModal(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm"
        onClick={handleOverlayClick}
        style={{ marginLeft: '0px' }}
      >
        <div className="bg-[#013c4c] text-white rounded-lg shadow-xl p-6 w-full max-w-4xl h-auto max-h-[87vh] m-4 relative overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-3  right-6 p-1 text-white hover:text-gray-300 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors duration-200"
          >
            <X size={24} />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="hidden lg:flex flex-col justify-center pl-6 border-r border-gray-200">
              <div className="space-y-8">
                <div>
                  <img src={LogoImage} alt="chargeup Logo" />
                </div>

                <div className="space-y-2">
                  <p className="text-lg flex items-center gap-2"><Mail /> info@echargeup.com</p>
                </div>

                <div className="flex space-y-2">
                  <p className="text-lg flex items-center gap-2"> <Phone /> 18001230181</p>
                </div>

                <div className="space-y-2">
                  <p className="text-lg">E‐Chargeup Solutions Private Limited</p>
                  <br />
                  <p className="text-lg">
                    <span>300/3, 1st Floor,<br />
                      MG Road, Sultanpur,<br />
                      New Delhi – 110030</span></p>
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

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* <h2 className="text-3xl font-bold text-white">Get in touch.</h2> */}

              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-white">
                  <p className="flex gap-1">Name<p className="text-red-600">*</p></p>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-[#6f7476] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:border-white"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm mb-2 text-white">
                  <p className="flex gap-1">Phone <p className="text-red-600">*</p></p>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-[#6f7476] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:border-white"
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
                  className="w-full px-3 py-2 bg-[#6f7476] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:border-white"
                />
              </div>
              <div>
                <label htmlFor="querytype" className="block text-sm mb-2 text-white">
                <p className="flex gap-1">Query Type <p className="text-red-600">*</p></p>
                </label>
                <select
                  id="titleCategory"
                  name="titleCategory"
                  value={formData.titleCategory}
                  onChange={handleChange}
                  required
                  
                  className="w-full px-2 py-2 bg-[#6f7476] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:border-white"
                >
                  <option value="" disabled selected>Select query type</option>
                  <option value="investment">Investment</option>
                  <option value="b2b">B2B Partner</option>
                  
                  <option value="distributor">Distributor/Dealer</option>
                  <option value="driver">Driver</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-white">
                  <p className="flex gap-1">Comment or message <p className="text-red-600">*</p></p>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Details are great, if you have them."
                  className="w-full px-3 py-2 bg-[#6f7476] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:border-white"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-auto px-6 py-2 text-white border border-white rounded hover:bg-gray-400 transition-colors inline-block"
              >
                {loading ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {showConfirmationModal && <ConfirmationModal onClose={() => setShowConfirmationModal(false)} />}
    </>
  );
};

export default ContactModal;