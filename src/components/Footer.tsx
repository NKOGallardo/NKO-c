import NkoLogo from "./NkoLogo";

const Footer = () => (
  <footer className="border-t border-border/50 px-6 md:px-12 lg:px-24 py-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3 text-foreground">
        <NkoLogo className="w-8 h-8" />
        <span className="font-semibold tracking-tight">NKO CODING</span>
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} NKO CODING. All rights reserved.
      </p>
      <div className="flex items-center gap-6">
        {["Services", "Pricing", "Projects", "Contact"].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {l}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
