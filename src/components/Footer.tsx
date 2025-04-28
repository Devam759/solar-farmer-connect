
import { Mail, Phone, MapPin, FileText, Info } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-6">
              <img src="/media/logo.webp" alt="Logo" className="h-14 mr-3" />
              <div>
                <h3 className="text-2xl font-semibold">
                  <span className="text-secondary-light">Solar</span>Sarthi
                </h3>
                <p className="text-lg text-green-100">Government of Rajasthan</p>
              </div>
            </div>
            <p className="text-xl text-green-100 leading-relaxed">
              A flagship initiative of the Government of Rajasthan to promote solar energy adoption in agriculture, enhancing farmer livelihoods and sustainable development.
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Important Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#schemes" className="text-xl text-green-100 hover:text-white transition-colors flex items-center group">
                  <FileText className="w-6 h-6 mr-3 group-hover:text-secondary-light transition-colors" />
                  <span className="border-b border-transparent group-hover:border-secondary-light transition-all">Scheme Guidelines</span>
                </a>
              </li>
              <li>
                <a href="#implementation" className="text-xl text-green-100 hover:text-white transition-colors flex items-center group">
                  <FileText className="w-6 h-6 mr-3 group-hover:text-secondary-light transition-colors" />
                  <span className="border-b border-transparent group-hover:border-secondary-light transition-all">Implementation Process</span>
                </a>
              </li>
              <li>
                <a href="#impact" className="text-xl text-green-100 hover:text-white transition-colors flex items-center group">
                  <Info className="w-6 h-6 mr-3 group-hover:text-secondary-light transition-colors" />
                  <span className="border-b border-transparent group-hover:border-secondary-light transition-all">Impact Assessment</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-xl text-green-100 hover:text-white transition-colors flex items-center group">
                  <FileText className="w-6 h-6 mr-3 group-hover:text-secondary-light transition-colors" />
                  <span className="border-b border-transparent group-hover:border-secondary-light transition-all">Download Forms</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Helpline & Support</h3>
            <ul className="space-y-5">
              <li className="flex items-start text-xl text-green-100">
                <MapPin className="w-6 h-6 mr-3 mt-1 shrink-0 text-secondary-light" />
                <span>Energy Department, Government of Rajasthan<br />Jaipur, Rajasthan - 302005</span>
              </li>
              <li className="flex items-center text-xl text-green-100">
                <Phone className="w-6 h-6 mr-3 shrink-0 text-secondary-light" />
                <span>Toll Free: 0141-4920602</span>
              </li>
              <li className="flex items-center text-xl text-green-100">
                <Mail className="w-6 h-6 mr-3 shrink-0 text-secondary-light" />
                <span>solarsarthi@rajasthan.gov.in</span>
              </li>
            </ul>
          </div>

          {/* Related Schemes */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Related Schemes</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-xl text-green-100 hover:text-white transition-colors block pb-1 border-b border-transparent hover:border-secondary-light">
                  PM-KUSUM Scheme
                </a>
              </li>
              <li>
                <a href="#" className="text-xl text-green-100 hover:text-white transition-colors block pb-1 border-b border-transparent hover:border-secondary-light">
                  Solar Pump Yojana
                </a>
              </li>
              <li>
                <a href="#" className="text-xl text-green-100 hover:text-white transition-colors block pb-1 border-b border-transparent hover:border-secondary-light">
                  Green Energy Mission
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-green-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xl text-green-100">
              © {new Date().getFullYear()} Government of Rajasthan. All rights reserved.
            </p>
            <div className="flex space-x-10 mt-6 md:mt-0">
              <a href="#" className="text-lg text-green-100 hover:text-white transition-colors border-b border-transparent hover:border-secondary-light">
                RTI
              </a>
              <a href="#" className="text-lg text-green-100 hover:text-white transition-colors border-b border-transparent hover:border-secondary-light">
                Terms of Use
              </a>
              <a href="#" className="text-lg text-green-100 hover:text-white transition-colors border-b border-transparent hover:border-secondary-light">
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
