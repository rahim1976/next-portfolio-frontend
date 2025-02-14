"use client"
export const Header = () => {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#hero"
          onClick={(e) => handleSmoothScroll(e, "hero")}
          className="nav-item"
        >
          Home
        </a>
        <a
          href="#projects"
          onClick={(e) => handleSmoothScroll(e, "projects")}
          className="nav-item"
        >
          Projects
        </a>
        <a
          href="#about"
          onClick={(e) => handleSmoothScroll(e, "about")}
          className="nav-item"
        >
          About
        </a>
        <a
          href="#contact"
          onClick={(e) => handleSmoothScroll(e, "contact")}
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
