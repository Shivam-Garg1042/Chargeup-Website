


import { useState } from "react";
import { X } from "lucide-react";

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  if (!isOpen) return null; // Prevent rendering when modal is closed

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
    setFormData({ name: "", email: "", number: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      className="fixed inset-0  flex items-center justify-center z-50"
      onClick={onClose} // Close when clicking on the blurred backdrop
    >
      <div
        className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md m-4"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside it
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Contact Us</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e7295]"
            />
          </div>

          <div>
            <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="number"
              name="number"
              value={formData.number}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                if (value.length <= 10) {
                  handleChange({ target: { name: "number", value } });
                }
              }}
              pattern="\d{10}"
              maxLength={10}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e7295]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e7295]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e7295]"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-[#003444] text-white rounded-lg hover:bg-[#1e7295] transition-colors"
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
