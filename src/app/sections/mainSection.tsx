
import styles from '@/app/page.module.css';
import skills from './skills';

export default function MainSection() {
    return (
        <div className={styles.mainSection}>
        <h1>
            Spec<span>tre</span>
        </h1>
        <p>
            Web <span>Developer</span>
        </p>
        {skills()}
    </div>
    
    );
}
