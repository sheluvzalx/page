
import Link from 'next/link';
import styles from '@/app/page.module.css';

export default function Navbar() {
  return (
    <div className={styles.bar}>
      <Link href='/'>HOME</Link>
      <Link href='#about'>ABOUT</Link>
      <Link href='#contact'>CONTACT</Link>
    </div>
  );
}
