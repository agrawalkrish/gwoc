import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const blogs = [
  {
    id: 1,
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=458,fit=crop,trim=0;0;164.0084388185654;0/AzGeNv8QxRTqXJan/office-cleaning-1-YX4a51DklJuBp3RY.webp',
    title: 'Looking for Cleaning Services in Surat?',
    description: 'Choose Helper Buddy for a Cleaner, Healthier Home',
    author: 'Yash Rawal',
    time: '1 min read',
    details: 'When searching for cleaning services in Surat, finding a reliable and affordable option can be overwhelming. Whether it\'s a one-time deep clean or regular housekeeping, Helper Buddy offers top-notch cleaning solutions that cater to your every need. Our professional team is trained to deliver efficient, eco-friendly cleaning services, ensuring your home or office is spotless and safe. We pride ourselves on offering transparent pricing, flexible scheduling, and a customer-first approach. Why search elsewhere when you can book cleaning services with ease through Helper Buddy? Our expert team is just a click away, ready to provide you with hassle-free and affordable cleaning services in Surat. Book Now and Experience the Best Cleaning Services in Surat with Helper Buddy!',
  },
  {
    id: 2,
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=458,fit=crop,trim=0;0;164.0084388185654;0/AzGeNv8QxRTqXJan/office-cleaning-1-YX4a51DklJuBp3RY.webp',
    title: 'Professional Office Cleaning in Surat',
    description: 'Keep Your Workspace Spotless with Helper Buddy',
    author: 'Yash Rawal',
    time: '2 min read',
    details: 'A clean office is essential for productivity and employee well-being. Helper Buddy offers professional office cleaning services in Surat, tailored to meet the unique needs of your workspace. From daily cleaning to deep cleaning, we ensure your office remains pristine and hygienic. Our team uses eco-friendly products and advanced cleaning techniques to deliver exceptional results. Trust Helper Buddy for a cleaner, healthier office environment.',
  },
  {
    id: 3,
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=458,fit=crop,trim=0;0;164.0084388185654;0/AzGeNv8QxRTqXJan/office-cleaning-1-YX4a51DklJuBp3RY.webp',
    title: 'Carpet Cleaning Services in Surat',
    description: 'Revive Your Carpets with Helper Buddy',
    author: 'Yash Rawal',
    time: '3 min read',
    details: 'Dirty carpets can harbor allergens and bacteria, affecting your indoor air quality. Helper Buddy offers professional carpet cleaning services in Surat to restore the beauty and hygiene of your carpets. Using state-of-the-art equipment and eco-friendly solutions, we remove deep-seated dirt, stains, and odors. Whether it\'s your home or office, trust Helper Buddy to keep your carpets fresh and clean.',
  },
  {
    id: 4,
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=458,fit=crop,trim=0;0;164.0084388185654;0/AzGeNv8QxRTqXJan/office-cleaning-1-YX4a51DklJuBp3RY.webp',
    title: 'Window Cleaning Services in Surat',
    description: 'Crystal Clear Views with Helper Buddy',
    author: 'Yash Rawal',
    time: '4 min read',
    details: 'Streak-free windows can transform the look of your home or office. Helper Buddy offers professional window cleaning services in Surat, ensuring your windows are spotless and sparkling. Our team uses safe and effective cleaning methods to remove dirt, grime, and hard water stains. Enjoy crystal clear views and a brighter space with Helper Buddy.',
  },
  {
    id: 5,
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=458,fit=crop,trim=0;0;164.0084388185654;0/AzGeNv8QxRTqXJan/office-cleaning-1-YX4a51DklJuBp3RY.webp',
    title: 'Kitchen Cleaning Services in Surat',
    description: 'Deep Clean Your Kitchen with Helper Buddy',
    author: 'Yash Rawal',
    time: '5 min read',
    details: 'A clean kitchen is essential for a healthy home. Helper Buddy offers professional kitchen cleaning services in Surat, targeting grease, grime, and stubborn stains. Our team uses eco-friendly products and advanced techniques to ensure your kitchen is spotless and hygienic. From countertops to appliances, we leave no corner untouched. Trust Helper Buddy for a cleaner, healthier kitchen.',
  },
  {
    id: 6,
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=458,fit=crop,trim=0;0;164.0084388185654;0/AzGeNv8QxRTqXJan/office-cleaning-1-YX4a51DklJuBp3RY.webp',
    title: 'Bathroom Cleaning Services in Surat',
    description: 'Sanitize Your Bathroom with Helper Buddy',
    author: 'Yash Rawal',
    time: '6 min read',
    details: 'Bathrooms are prone to germs and bacteria, making regular cleaning essential. Helper Buddy offers professional bathroom cleaning services in Surat, ensuring your bathroom is spotless and sanitized. Our team tackles mold, mildew, and hard water stains, leaving your bathroom fresh and hygienic. Trust Helper Buddy for a cleaner, healthier bathroom.',
  },
  {
    id: 7,
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=458,fit=crop,trim=0;0;164.0084388185654;0/AzGeNv8QxRTqXJan/office-cleaning-1-YX4a51DklJuBp3RY.webp',
    title: 'Sofa Cleaning Services in Surat',
    description: 'Refresh Your Sofa with Helper Buddy',
    author: 'Yash Rawal',
    time: '7 min read',
    details: 'Over time, sofas accumulate dust, stains, and odors. Helper Buddy offers professional sofa cleaning services in Surat to restore the beauty and comfort of your furniture. Using advanced cleaning techniques and eco-friendly solutions, we remove dirt, stains, and allergens. Whether it\'s fabric or leather, trust Helper Buddy to keep your sofa looking and smelling fresh.',
  },
  {
    id: 8,
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=458,fit=crop,trim=0;0;164.0084388185654;0/AzGeNv8QxRTqXJan/office-cleaning-1-YX4a51DklJuBp3RY.webp',
    title: 'Car Cleaning Services in Surat',
    description: 'Keep Your Car Spotless with Helper Buddy',
    author: 'Yash Rawal',
    time: '8 min read',
    details: 'A clean car is a joy to drive. Helper Buddy offers professional car cleaning services in Surat, ensuring your vehicle is spotless inside and out. From exterior washing to interior detailing, we use premium products and techniques to deliver exceptional results. Trust Helper Buddy for a cleaner, fresher car.',
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Helper Buddy Blog</h1>
      <div className={styles.grid}>
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/details/${blog.id}`} passHref>
            <div className={styles.card}>
              <img src={blog.image} alt={blog.title} className={styles.image} />
              <h2 className={styles.cardTitle}>{blog.title}</h2>
              <p className={styles.cardDescription}>{blog.description}</p>
              <div className={styles.meta}>
                <span>{blog.author}</span>
                <span>{blog.time}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}