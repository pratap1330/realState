import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-8 rounded-t-3xl shadow-md" style={{ marginBottom: '10px' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Contact Information */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="mb-2">123 Real Estate St.</p>
            <p className="mb-2">City, State, 12345</p>
            <p className="mb-2">Email: <a href="mailto:info@realtor.com" className="text-red-600 hover:underline">info@realtor.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="text-red-600 hover:underline">+1 (234) 567-890</a></p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-red-600 hover:underline">Home</Link></li>
              <li><Link to="/" className="text-red-600 hover:underline">About Us</Link></li>
              <li><Link to="/" className="text-red-600 hover:underline">Services</Link></li>
              <li><Link to="/" className="text-red-600 hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-4 text-center rounded-b-3xl">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Realtor. All rights reserved.</p>
      </div>
    </footer>
  );
}

