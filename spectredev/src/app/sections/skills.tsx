import styles from '@/app/page.module.css' 
export default function skills() {
    return (
        <div className={styles.skillsMain}>
            <div>
            <h2 className={styles.white}>Skills</h2>
                
                <div className={styles.plainText}>
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>JS</div>
                    <div>PYTHON <code>(non pro)</code></div>
                    
            </div>
                
            </div>
            <div className={styles.frameworks}>
                <h2>Frameworks</h2>
               <div>NEXT.JS</div>
                <div>PYCORD</div>
            </div>

        </div>
    )
}
