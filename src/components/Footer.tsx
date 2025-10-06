const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">New Star Construction</h3>
            <p className="text-white/80 text-sm">
              Building dreams with quality and excellence for over 25 years in Pondicherry.
            </p>
          </div>
          <nav aria-label="Footer Quick Links">
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="/#home" className="hover:text-primary transition-colors" aria-label="Go to Home page">Home</a></li>
              <li><a href="/#about" className="hover:text-primary transition-colors" aria-label="Learn about New Star Construction">About Us</a></li>
              <li><a href="/#services" className="hover:text-primary transition-colors" aria-label="View our construction services">Services</a></li>
              <li><a href="/blog" className="hover:text-primary transition-colors" aria-label="Read our blog">Blog</a></li>
              <li><a href="/#team" className="hover:text-primary transition-colors" aria-label="Meet our team">Team</a></li>
            </ul>
          </nav>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Building Construction</li>
              <li>House Renovation</li>
              <li>Architecture Design</li>
              <li>Interior Design</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>123 Construction Lane</li>
              <li>Pondicherry, India 605001</li>
              <li>+91 413 234 5678</li>
              <li>info@newstarconstruction.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2025 New Star Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
