import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Github",
    href: "https://github.com/rahim1976/",
  },
  {
    title: "Threads",
    href: "https://www.threads.net/@code_xtm",
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/realrahimali/",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/rahim-ali-89b7b9279/",
  },
];

export const Footer = () => {
  return (
    // Remove the -z-10 from here as it's pushing content behind other elements
    <footer className="relative overflow-x-clip">
      {/* Keep -z-10 only on the background element */}
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};