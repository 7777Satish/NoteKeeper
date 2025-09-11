import { FaRegFileAlt } from 'react-icons/fa';
import styles from './FolderStructure.module.css';
import { BiChevronRight } from 'react-icons/bi';
import { CgMoreAlt } from 'react-icons/cg';
import { IoAdd } from 'react-icons/io5';

function FolderStructure({ files, createFile, fetchFile }) {
    return <div className={styles.main}>
        <div className={styles.title}>
            <b>PRIVATE</b>
            <span onClick={() => createFile("New Page", "")}><IoAdd /></span>
        </div>
        <div className={styles.files}>
            {
                files.length ?
                    files.map((file) => (
                        <div onClick={() => fetchFile(file.id)} className={styles.row} key={file.id}>
                            <div className={styles.left}>
                                <div>
                                    <span><BiChevronRight /></span>
                                    <span><FaRegFileAlt /></span>
                                </div>
                                <span className={styles.filename}>{file.title}</span>
                            </div>
                            <span className={styles.more}><CgMoreAlt /></span>
                        </div>
                    ))

                    :
                    <div className={styles.row} key={"new-page"}>
                        <div className={styles.left}>
                            <div>
                                <span><BiChevronRight /></span>
                                <span><FaRegFileAlt /></span>
                            </div>
                            <span className={styles.filename}>New Page</span>
                        </div>
                        <span className={styles.more}><CgMoreAlt /></span>
                    </div>
            }
        </div>
    </div>
}

export default FolderStructure;