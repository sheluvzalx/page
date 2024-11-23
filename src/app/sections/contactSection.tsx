import styles from '@/app/page.module.css'
import links from '@/app/utils/links.json'
export default function contactSection() {
    return (
        <div id='contact' className={styles.contactCard}>
           <h2>CONTACT</h2>
           <a href={links.discord.link} target="_blank" rel="noopener noreferrer">Discord</a>
        <div>Spam Not ALLOWED.</div>
        </div>
    )
}