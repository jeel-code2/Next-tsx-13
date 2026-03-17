import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/80 border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-sky-400 tracking-tighter">JEEL</h2>
            <p className="text-gray-400 leading-relaxed">
              Service at your Convenience <span className="text-sky-400/80">(Furahia Huduma)</span>. Bringing essential health, financial, and home services directly to you.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contacts" className="text-gray-400 hover:text-white transition-colors">Contacts</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/pharmacy" className="text-gray-400 hover:text-white transition-colors">Pharmacy & Cosmetics</Link></li>
              <li><Link href="/services/finance" className="text-gray-400 hover:text-white transition-colors">Financial Services</Link></li>
              <li><Link href="/services/insurance" className="text-gray-400 hover:text-white transition-colors">Insurance Agency</Link></li>
              <li><Link href="/services/tendering" className="text-gray-400 hover:text-white transition-colors">Tendering Services</Link></li>
              <li><Link href="/services/supplies" className="text-gray-400 hover:text-white transition-colors">Home Supplies</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4 text-sm">Stay updated with our latest news and offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-sky-400"
              />
              <button className="bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} JEEL Company Limited. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
