import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import Left from './Components/Left';
import Movable from './Components/Movable';
import Editor from './Components/Editor';
import { IoSettingsOutline, IoStarOutline } from 'react-icons/io5';
import { BiLockAlt } from 'react-icons/bi';
import { CgMoreAlt } from 'react-icons/cg';

function Home(){
    
    const [title, setTitle] = useState('New Page');
    const [content, setContent] = useState(`Welcome to NotesBolt 📝
<p>This is your first document. You can edit, format, and structure your content however you like. Here are some things you can do:</p>
<h2>✨ Cool Features</h2>
<ul><li><b>Bold text</b> for emphasis</li><li><i>Italic text</i> for style</li><li><s>Strikethrough</s> for mistakes</li>
</ul>
<h2>📌 Notes & Reminders</h2>
<blockquote><i>"The secret of getting ahead is getting started."</i> – Mark Twain</blockquote>
<p>Start writing your ideas below! 🚀</p>`);
    const [layout, setLayout] = useState(250);
    
    const titleRef = useRef(null);
    const contentRef = useRef(null);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        // setTitle(e.target.innerText);
    }

    const handleContentChange = (e) => {
        setContent(e.target.innerHTML);
    }

    return <>
        <div className={styles.main} style={{gridTemplateColumns:`${layout}px 1fr`}}>
            <div className={styles.left} style={{width:`${layout}px`}}>
                <Left />
                <Movable min={250} max={500} direction='v' target={layout} setTarget={setLayout} />
            </div>

            <div className={styles.right} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>

                <div className={styles.top}>
                    <div className={styles.left}>
                        <h2>{title==''?'New Page':title}</h2>
                        <span><BiLockAlt />Private</span>
                    </div>

                    <div className={styles.right}>
                        <span><IoStarOutline /></span>
                        <span><IoSettingsOutline /></span>
                        <span><CgMoreAlt /></span>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.image}></div>
                    {/* <div ref={titleRef} className={styles.title} contentEditable='true' onInput={handleTitleChange}>{title}</div> */}
                    <input placeholder='New Page' value={title} className={styles.title} onChange={handleTitleChange}/>
                    <pre ref={contentRef} onInput={handleContentChange} className={styles.content} contentEditable="true">
Welcome to NotesBolt 📝<br/>

<p>This is your first document. You can edit, format, and structure your content however you like. Here are some things you can do:</p>
<br />
<h2>✨ Cool Features</h2>
<ul>
    <li><b>Bold text</b> for emphasis</li>
    <li><i>Italic text</i> for style</li>
    <li><s>Strikethrough</s> for mistakes</li>
</ul>
<br /><br />
<h2>📌 Notes & Reminders</h2>
<blockquote><i>"The secret of getting ahead is getting started."</i> – Mark Twain</blockquote>
<br /><br />
<p>Start writing your ideas below! 🚀</p>
                    </pre>
                    <div className={styles.space}></div>
                </div>

            </div>
        </div>
    </>
}

export default Home;