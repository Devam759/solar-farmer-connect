
import { Mail, Phone, MapPin, FileText, Info } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-solar-800 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/media/logo.webp" alt="Logo" className="h-8 mr-2" />
              <div>
                <h3 className="text-lg font-semibold">
                  <span className="text-earth-300">Solar</span>Sarthi
                </h3>
                <p className="text-sm text-solar-300">Government of Rajasthan</p>
              </div>
            </div>
            <p className="text-solar-300 text-sm">
              A flagship initiative of the Government of Rajasthan to promote solar energy adoption in agriculture, enhancing farmer livelihoods and sustainable development.
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-earth-300">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#schemes" className="text-solar-300 hover:text-white text-sm transition-colors flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Scheme Guidelines
                </a>
              </li>
              <li>
                <a href="#implementation" className="text-solar-300 hover:text-white text-sm transition-colors flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Implementation Process
                </a>
              </li>
              <li>
                <a href="#impact" className="text-solar-300 hover:text-white text-sm transition-colors flex items-center">
                  <Info className="w-4 h-4 mr-2" />
                  Impact Assessment
                </a>
              </li>
              <li>
                <a href="#" className="text-solar-300 hover:text-white text-sm transition-colors flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Forms
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-earth-300">Helpline & Support</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-solar-300 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Energy Department, Government of Rajasthan<br />Jaipur, Rajasthan - 302005</span>
              </li>
              <li className="flex items-center text-solar-300 text-sm">
                <Phone className="w-4 h-4 mr-2" />
                <span>Toll Free: 1800-XXX-XXXX</span>
              </li>
              <li className="flex items-center text-solar-300 text-sm">
                <Mail className="w-4 h-4 mr-2" />
                <span>solarsarthi@rajasthan.gov.in</span>
              </li>
            </ul>
          </div>

          {/* Related Schemes */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-earth-300">Related Schemes</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-solar-300 hover:text-white text-sm transition-colors">
                  PM-KUSUM Scheme
                </a>
              </li>
              <li>
                <a href="#" className="text-solar-300 hover:text-white text-sm transition-colors">
                  Solar Pump Yojana
                </a>
              </li>
              <li>
                <a href="#" className="text-solar-300 hover:text-white text-sm transition-colors">
                  Green Energy Mission
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-solar-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-solar-300 text-sm">
              &copy; {new Date().getFullYear()} Government of Rajasthan. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-solar-300 hover:text-white text-sm transition-colors">
                RTI
              </a>
              <a href="#" className="text-solar-300 hover:text-white text-sm transition-colors">
                Terms of Use
              </a>
              <a href="#" className="text-solar-300 hover:text-white text-sm transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
