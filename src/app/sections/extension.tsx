import styles from "@/app/page.module.css"
import links from "@/app/utils/links.json"
export default function ext() {
    return(
        <div className={styles.ext}>
            <p>do u wanna test my snipp extension and give feed back? here's the link:</p>
            <a href={links.extension.link} target="_blank">test</a>
            <p>isn't complete soo i may need ur help to complete it!</p>
        </div>
    )
}