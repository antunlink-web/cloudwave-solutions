const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            TechSolutions
          </div>
          <p className="text-muted-foreground text-center md:text-left">
            © 2025 TechSolutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
