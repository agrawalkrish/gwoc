// pages/about.js
import Head from 'next/head';

export default function AboutUs() {
  return (
    <div style={styles.container}>
      <Head>
        <title>About Us - My Next.js App</title>
        <meta name="description" content="Learn more about our company and our mission." />
      </Head>

      <main style={styles.main}>
        <h1 style={styles.title}>About Us</h1>

        {/* Mission and Story Section */}
        <div style={styles.missionStoryContainer}>
          <section style={styles.missionStorySection}>
            <h2 style={styles.sectionHeading}>Our Mission</h2>
            <p style={styles.sectionText}>
              At My Next.js App, our mission is to deliver high-quality web solutions that empower businesses and individuals to achieve their goals. We believe in innovation, creativity, and the power of technology to transform lives.
            </p>
          </section>

          <section style={styles.missionStorySection}>
            <h2 style={styles.sectionHeading}>Our Story</h2>
            <p style={styles.sectionText}>
              Founded in 2023, My Next.js App started as a small team of passionate developers. Over the years, we have grown into a full-service web development agency, serving clients from various industries. Our journey has been marked by a commitment to excellence and a focus on customer satisfaction.
            </p>
          </section>
        </div>

        {/* Contact Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionHeading1}>Contact Us</h2>
          <p style={styles.sectionText1}>
            We would love to hear from you! Whether you have a question about our services, need technical support, or just want to say hello, feel free to reach out.
          </p>
          <ul style={styles.contactList}>
            <li style={styles.contactListItem}>
              <strong>Email:</strong> <a href="mailto:info@mynextjsapp.com" style={styles.link}>info@mynextjsapp.com</a>
            </li>
            <li style={styles.contactListItem}>
              <strong>Phone:</strong> +1 (123) 456-7890
            </li>
            <li style={styles.contactListItem}>
              <strong>Address:</strong> 123 Main St, Suite 100, Anytown, USA
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

// Dark theme styles
const styles = {
  container: {
    minHeight: '100vh',
    padding: '0 2rem',
    backgroundColor: '#ffffff', // Dark background
    color: '#121212', // Light text
  },
  main: {
    padding: '4rem 0',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    margin: 0,
    lineHeight: 1.15,
    fontSize: '3rem',
    textAlign: 'center',
    color: '#121212', // Light text
  },
  missionStoryContainer: {
    display: 'flex',
    gap: '2rem',
    width: '100%',
    margin: '2rem 0',
  },
  missionStorySection: {
    flex: 1,
    padding: '1rem',
    border: '1px solid #333', // Darker border
    borderRadius: '8px',
    backgroundColor: '#1e1e1e', // Dark background for sections
    color: '#ffffff', // Light text
  },
  sectionHeading: {
    fontSize: '2rem',
    marginBottom: '1rem',
    textAlign: 'center',
    color: '#ffffff', // Light text
  },
  sectionText: {
    fontSize: '1.2rem',
    lineHeight: 1.6,
    textAlign: 'center',
    color: '#ffffff', // Light text
  },
  sectionHeading1: {
    fontSize: '2rem',
    marginBottom: '1rem',
    textAlign: 'center',
    color: '#121212', // Light text
  },
  sectionText1: {
    fontSize: '1.2rem',
    lineHeight: 1.6,
    textAlign: 'center',
    color: '#121212', // Light text
  },
  contactList: {
    listStyleType: 'none',
    padding: 0,
    textAlign: 'center',
  },
  contactListItem: {
    margin: '0.5rem 0',
    fontSize: '1.1rem',
    color: '#121212', // Light text
  },
  link: {
    color: '#121211', // Bright blue for links
    textDecoration: 'none',
  },
  linkHover: {
    textDecoration: 'underline',
  },
};