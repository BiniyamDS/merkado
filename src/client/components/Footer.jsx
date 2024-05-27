const Footer = () => {
  return (
    <footer className="hidden flex fixed bottom-0 w-full bg-blue-900 text-white py-4 px-6">
      <p className="mx-auto">&copy; {new Date().getFullYear()} Merkado. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
