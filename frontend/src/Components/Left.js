import { IoCreateOutline, IoHelpCircleOutline, IoHomeOutline, IoNotificationsOutline, IoSearch, IoSettingsOutline } from 'react-icons/io5';
import styles from './Left.module.css';
import FolderStructure from './FolderStructure';

function Left(){
    return <>
        <div className={styles.main}>

            <div className={styles.nav}>
                <div className={styles.top}>
                    <div className={styles.left}>
                        <span>S</span>
                        <h2>Satish Singh</h2>
                    </div>
                    <div className={styles.right}>
                        <IoCreateOutline />
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.row}>
                        <span><IoSearch /></span>
                        <span>Search</span>
                    </div>
                    <div className={styles.row}>
                        <span><IoHomeOutline /></span>
                        <span>Home</span>
                    </div>
                    <div className={styles.row}>
                        <span><IoNotificationsOutline /></span>
                        <span>Inbox</span>
                    </div>
                </div>
            </div>

            <div className={styles.center}>
                <FolderStructure />
            </div>
            
            <div className={styles.footer}>
                <div className={styles.row}>
                    <div className={styles.left}>
                        <span><IoSettingsOutline /></span>
                        <span><IoNotificationsOutline /></span>
                    </div>
                    <div className={styles.right}>
                        <IoHelpCircleOutline />
                    </div>
                </div>
                
                <div className={`${styles.row} ${styles.copyright}`}>
                    <span>copyright &copy; 2025 @ Satish Satish</span>
                </div>
            </div>

        </div>
    </>
}

export default Left;