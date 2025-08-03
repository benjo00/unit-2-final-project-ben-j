function Footer() {
  const today = new Date();
  const date = today.toLocaleDateString();
// the above code holds the "today's date" functionality for the footer
  return (
    <footer className="footer" >
      <p>© 2025 Ben J | Today is: {date}</p>
    </footer>
  );
}

export default Footer;
