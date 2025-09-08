import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Brand */}
        <div className={styles.footerBrand}>
          <h2>NotesBolt</h2>
          <p>Simplify your ideas. Organize your notes.</p>
        </div>

        {/* Links */}
        <div className={styles.footerLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className={styles.footerSocial}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="LinkedIn">💼</a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} NotesBolt. All rights reserved.</p>
      </div>
    </footer>
  );
}
