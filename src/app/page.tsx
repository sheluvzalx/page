import styles from "./page.module.css";
import luz from "./utils/luz";
import aboutSection from "./sections/aboutSection";
import mainSection from "./sections/mainSection";
import contactSection from "./sections/contactSection";
import extension from './sections/extension'


export default function Home() {
  return (
    <div className={styles.page}>

      <main className={styles.main}>
        <div className="">
          {luz()}
          {extension()}
          {mainSection()}
          {aboutSection()}
          {contactSection()}
        </div>
      </main>

      <footer className={styles.footer}>
        👾
      </footer>
    </div>
  );
}
