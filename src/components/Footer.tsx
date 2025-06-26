import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <div style={styles.footerLeft}>
          <div style={styles.footerBrand}>
            <h2 style={styles.brandName}>MARKET NOW</h2>
            <p style={styles.brandTagline}>Stock analysis and screening tool</p>
          </div>

          <div style={styles.footerInfo}>
            <p style={styles.companyInfo}>Mittal Analytics Private Ltd © 2025</p>
            <p style={styles.madeIn}>Made with ❤ in India.</p>
          </div>

          <div>
            <p style={styles.dataProvider}>Data provided </p>
            <p style={styles.terms}>Terms & Privacy.</p>
          </div>
        </div>

        <div style={styles.footerRight}>
          <div style={styles.footerSection}>
            <h3 style={styles.sectionTitle}>Product</h3>
            <ul style={styles.sectionLinks}>
              <li><a href="#" style={styles.footerLink}>Premium</a></li>
              <li><a href="#" style={styles.footerLink}>What's new?</a></li>
              <li><a href="#" style={styles.footerLink}>Learn</a></li>
            </ul>
          </div>

          <div style={styles.footerSection}>
            <h3 style={styles.sectionTitle}>Team</h3>
            <ul style={styles.sectionLinks}>
              <li><a href="#" style={styles.footerLink}>About us</a></li>
              <li><a href="#" style={styles.footerLink}>Support</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ---------- Styles ---------- //
const styles: Record<string, React.CSSProperties> = {
  footer: {
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    padding: '60px 0 40px',
    borderTop: '1px solid #e0e0e0',
    width: '100%',
  },
  footerContainer: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    gap: 80,
    flexWrap: 'wrap',
  },
  footerLeft: {
    flex: 1,
    maxWidth: 400,
  },
  footerBrand: {
    marginBottom: 30,
  },
  brandName: {
    fontSize: 32,
    fontWeight: 600,
    color: '#2c3e50',
    margin: '0 0 8px 0',
    letterSpacing: -0.5,
  },
  brandTagline: {
    fontSize: 16,
    color: '#64748b',
    margin: 0,
    fontWeight: 400,
  },
  footerInfo: {
    marginBottom: 25,
  },
  companyInfo: {
    fontSize: 14,
    color: '#475569',
    margin: '0 0 8px 0',
    fontWeight: 500,
  },
  madeIn: {
    fontSize: 14,
    color: '#64748b',
    margin: 0,
  },
  dataProvider: {
    fontSize: 13,
    color: '#64748b',
    margin: '0 0 8px 0',
  },
  terms: {
    fontSize: 13,
    color: '#64748b',
    margin: 0,
  },
  footerRight: {
    display: 'flex',
    gap: 60,
    flex: 1,
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  },
  footerSection: {
    minWidth: 120,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 600,
    color: '#2c3e50',
    margin: '0 0 20px 0',
  },
  sectionLinks: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  footerLink: {
    fontSize: 14,
    color: '#64748b',
    textDecoration: 'none',
    display: 'inline-block',
    marginBottom: 12,
    transition: 'color 0.2s ease',
  },
};

export default Footer;
