import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-xl">MATHRU</span>
                <span className="text-xs text-primary-foreground/70">
                  ICU Palliative Care Research
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              A clinical research initiative by the Department of Palliative Medicine 
              and Supportive Care, Kasturba Medical College, Manipal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  About the Study
                </Link>
              </li>
              <li>
                <Link
                  to="/outputs"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Research Outputs
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Research Team
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
            <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="w-4 h-4 text-secondary" />
                <a
                  href="mailto:arun.ghoshal@manipal.edu"
                  className="hover:text-primary-foreground transition-colors"
                >
                  arun.ghoshal@manipal.edu
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="w-4 h-4 text-secondary" />
                <a
                  href="tel:+918202922221"
                  className="hover:text-primary-foreground transition-colors"
                >
                  0820 292 2221
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-secondary mt-1" />
                <span>
                  Manipal Hospice and Respite Centre
                  <br />
                  Kollalagiri-Bhandsalley Road
                  <br />
                  Banabettu, Havanje, Udupi
                  <br />
                  Karnataka 576124, India
                </span>
              </li>
            </ul>
          </div>

          {/* Institution */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Institution</h4>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Department of Palliative Medicine and Supportive Care
              <br />
              Kasturba Medical College, Manipal
              <br />
              Manipal Academy of Higher Education (MAHE)
            </p>
            <p className="text-primary-foreground/50 text-xs">
              Principal Investigator: Dr. Naveen Salins
            </p>
          </div>
        </div>

        {/* Compliance Disclaimer */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="bg-primary-foreground/5 rounded-lg p-4 mb-6">
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              <strong className="text-primary-foreground">Disclaimer:</strong> The content 
              on this website is for academic and informational purposes only. It does not 
              replace clinical judgment, medical advice, or institutional policy. All research 
              activities are conducted in accordance with ethical approvals and institutional guidelines.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-primary-foreground/50 text-sm">
            <p>© {new Date().getFullYear()} MATHRU Research Project. All rights reserved.</p>
            <p>Manipal Academy of Higher Education (MAHE)</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
