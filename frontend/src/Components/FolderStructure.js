import { FaRegFileAlt } from 'react-icons/fa';
import styles from './FolderStructure.module.css';
import { BiChevronRight } from 'react-icons/bi';
import { CgMoreAlt } from 'react-icons/cg';
import { IoAdd } from 'react-icons/io5';

function FolderStructure(){
    return <div className={styles.main}>
        <div className={styles.title}>
            <b>PRIVATE</b>
            <span><IoAdd /></span>
        </div>
        <div className={styles.files}>
            <div className={styles.row}>
                <div className={styles.left}>
                    <div>
                        <span><BiChevronRight /></span>
                        <span><FaRegFileAlt /></span>
                    </div>
                    <span className={styles.filename}>Your First Note</span>
                </div>
                <span className={styles.more}><CgMoreAlt /></span>
            </div>
            
            <div className={styles.row}>
                <div className={styles.left}>
                    <div>
                        <span><BiChevronRight /></span>
                        <span><FaRegFileAlt /></span>
                    </div>
                    <span className={styles.filename}>Progress</span>
                </div>
                <span className={styles.more}><CgMoreAlt /></span>
            </div>
            
            <div className={styles.row}>
                <div className={styles.left}>
                    <div>
                        <span><BiChevronRight /></span>
                        <span><FaRegFileAlt /></span>
                    </div>
                    <span className={styles.filename}>Third Note</span>
                </div>
                <span className={styles.more}><CgMoreAlt /></span>
            </div>
            
            <div className={styles.row}>
                <div className={styles.left}>
                    <div>
                        <span><BiChevronRight /></span>
                        <span><FaRegFileAlt /></span>
                    </div>
                    <span className={styles.filename}>Journal</span>
                </div>
                <span className={styles.more}><CgMoreAlt /></span>
            </div>
        </div>
    </div>
}

export default FolderStructure;