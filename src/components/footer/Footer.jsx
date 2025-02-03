import LogoImage from '../../assets/chargeup_logo_blue.jpg';
import { FaInstagram, FaTwitter, FaYoutube , FaFacebook } from 'react-icons/fa'; // Importing icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-[#013c4c] text-[#F6F4F0]">
      {/* Footer content */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 py-8">
        {/* Logo Section */}
        <div>
          <img src={LogoImage} alt="chargeup Logo" className="mb-2 w-40" />
          
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul>
            <li className="mb-2 hover:text-secondary cursor-pointer">Home</li>
            <li className="mb-2 hover:text-secondary cursor-pointer">About Us</li>
            <li className="mb-2 hover:text-secondary cursor-pointer">Careers</li>
            <li className="mb-2 hover:text-secondary cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Company Address */}
        <div>
          <h4 className="font-semibold mb-2">E‐Chargeup Solutions Private Limited</h4>
          <p className="text-sm">
            300/3, 1st Floor, 
            <br />
            MG Road, Sultanpur,
            <br />
            New Delhi – 11003
          </p>
        </div>

        {/* Contact Us Section */}
        <div>
          <h4 className="font-semibold mb-2">Contact us</h4>
          <p className="text-sm">
            📞 Ph No. 18001230181
            <br />
            📧 E-Mail: info@echargeup.com
          </p>
          <div className="flex gap-4 mt-4">
          {/* <h4 className="font-semibold mb-2">Follow us on:</h4> */}
          
          
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
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-200 py-4 px-6 text-center">
        <p className="text-sm mb-4">
          Copyright © 2024 E-Chargeup Solutions Pvt Ltd. All rights reserved.
        </p>
        <ul className="flex justify-center gap-6 text-sm flex-wrap">
          
          <a href = "https://echargeup.com/privacy-policy/" className="hover:text-secondary cursor-pointer" target="_blank">
          Privacy Policy
          </a>
          <a href = "https://echargeup.com/refund-and-cancellation-policy/" target="_blank" className="hover:text-secondary cursor-pointer">
          Refund & Cancellation Policy
          </a>
          <a href = "https://echargeup.com/refund-and-cancellation-policy/" target="_blank" className="hover:text-secondary cursor-pointer">
          Terms & Conditions
          </a>
          <a href = "https://echargeup.com/corporate-governance/" target="_blank" className="hover:text-secondary cursor-pointer">
          Corporate Governance
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
