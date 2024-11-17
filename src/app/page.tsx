import styles from "./page.module.css";
import luz from "./utils/luz";
import aboutSection from "./sections/aboutSection";
import mainSection from "./sections/mainSection";
import contactSection from "./sections/contactSection";

export default function Home() {
  return (
    <div className={styles.page}>

      <main className={styles.main}>
        <div className="">
    
          {luz()}
          {mainSection()}
          {aboutSection()}
          {contactSection()}
        </div>
      </main>

      <footer className={styles.footer}>
        Spectre dev 👾
      </footer>
    </div>
  );
}
