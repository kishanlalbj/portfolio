const Footer = () => {
  return (
    <footer className="bg-slate-950">
      <div className="container mx-auto px-4 max-w-6xl h-15 flex items-center justify-center">
        <p>
          &copy; {new Date().getFullYear()} | Developed by{" "}
          <a href="https://github.com/kishanlalbj" target="_blank">
            @kishanlalbj
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
