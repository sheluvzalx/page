
import styles from '@/app/page.module.css';
import skills from './skills';
import profilePic from '../utils/profile.jpg';

export default function MainSection() {
    return (

        <div className={styles.mainSection}>
            <h1>
                Spectre <span>♂</span>
            </h1>
            <p>
                Web <span>Developer</span>
            </p>
            {skills()}
        </div>
    );
}
