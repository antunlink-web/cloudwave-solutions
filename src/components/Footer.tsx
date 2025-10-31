const Footer = () => {
  return (
    <footer className="glass border-t border-primary/20 py-8 shadow-[0_-8px_32px_hsl(var(--primary)/0.1)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
            APCO360
          </div>
          <p className="text-muted-foreground text-center md:text-left">
            © 2025 APCO360. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
