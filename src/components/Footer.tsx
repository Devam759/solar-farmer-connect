
import { Mail, Phone, MapPin, FileText, Info } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-5">
              <img src="/media/logo.webp" alt="Logo" className="h-10 mr-3" />
              <div>
                <h3 className="text-xl font-semibold">
                  <span className="text-secondary-light">Solar</span>Sarthi
                </h3>
                <p className="text-sm text-green-100">Government of Rajasthan</p>
              </div>
            </div>
            <p className="text-base text-green-100 leading-relaxed">
              A flagship initiative of the Government of Rajasthan to promote solar energy adoption in agriculture, enhancing farmer livelihoods and sustainable development.
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Important Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#schemes" className="text-base text-green-100 hover:text-white transition-colors flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Scheme Guidelines
                </a>
              </li>
              <li>
                <a href="#implementation" className="text-base text-green-100 hover:text-white transition-colors flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Implementation Process
                </a>
              </li>
              <li>
                <a href="#impact" className="text-base text-green-100 hover:text-white transition-colors flex items-center">
                  <Info className="w-5 h-5 mr-2" />
                  Impact Assessment
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-green-100 hover:text-white transition-colors flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Download Forms
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Helpline & Support</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-base text-green-100">
                <MapPin className="w-5 h-5 mr-2 mt-1 shrink-0" />
                <span>Energy Department, Government of Rajasthan<br />Jaipur, Rajasthan - 302005</span>
              </li>
              <li className="flex items-center text-base text-green-100">
                <Phone className="w-5 h-5 mr-2 shrink-0" />
                <span>Toll Free: 1800-XXX-XXXX</span>
              </li>
              <li className="flex items-center text-base text-green-100">
                <Mail className="w-5 h-5 mr-2 shrink-0" />
                <span>solarsarthi@rajasthan.gov.in</span>
              </li>
            </ul>
          </div>

          {/* Related Schemes */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Related Schemes</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-base text-green-100 hover:text-white transition-colors">
                  PM-KUSUM Scheme
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-green-100 hover:text-white transition-colors">
                  Solar Pump Yojana
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-green-100 hover:text-white transition-colors">
                  Green Energy Mission
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-green-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-green-100">
              | {new Date().getFullYear()} Government of Rajasthan. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-base text-green-100 hover:text-white transition-colors">
                RTI
              </a>
              <a href="#" className="text-base text-green-100 hover:text-white transition-colors">
                Terms of Use
              </a>
              <a href="#" className="text-base text-green-100 hover:text-white transition-colors">
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
