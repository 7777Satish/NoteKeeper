import axios from 'axios';
import { useContext, useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import Left from './Components/Left';
import Movable from './Components/Movable';
// import Editor from './Components/Editor';
import { IoDocumentText, IoSettingsOutline, IoStarOutline, IoText } from 'react-icons/io5';
import { BiLockAlt } from 'react-icons/bi';
import { CgMoreAlt } from 'react-icons/cg';
import { RiText } from "react-icons/ri";
import { BsTextLeft, BsTextCenter, BsTextRight } from "react-icons/bs";
import { LuHeading1, LuHeading2, LuHeading3 } from "react-icons/lu";
import { MdOutlineFormatBold, MdOutlineFormatItalic, MdOutlineFormatUnderlined } from "react-icons/md";
import { AiOutlineUnorderedList, AiOutlineOrderedList } from "react-icons/ai";
import { supabase } from './supabaseClient';
import { AuthContext } from './App';
import { Navigate } from 'react-router-dom';



function Home() {
    const {user, loading} = useContext(AuthContext);

    if(!user) return <Navigate to="/login" />;

    const [title, setTitle] = useState('New Page');
    const [content, setContent] = useState(``);
    const [layout, setLayout] = useState(250);
    const [files, setFiles] = useState([]);
    const [file, setFile] = useState(null);

    const titleRef = useRef(null);
    const contentRef = useRef(null);

    const fetchFile = async (id) => {
        const {error, data} = await supabase.from('files').select("*").eq('id', id).single();
        if(error) {
            console.error("Error fetching file:", error);
            return;
        }
        setFile(data);
        setTitle(data.title);
        setContent(data.content);
    }

    const fetchFiles = async () => {
        const {error, data} = await supabase.from('files').select("title, id").eq('user_id', user.id).order('last_updated', { ascending: false });
        if(error) {
            console.error("Error fetching files:", error);
            return;
        }
        setFiles(data);
        fetchFile(data[0].id);
        console.log(data)
    }

    const createFile = async (title, content) => {
        const {error} = await supabase.from('files').insert([{ title, content, user_id: user.id }]);
        if(error) {
            console.error("Error creating file:", error);
            return;
        }
        fetchFiles();
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        // setTitle(e.target.innerText);
    }

    const handleContentChange = (e) => {
        setContent(e.target.value);
    }

    useEffect(() => {
        fetchFiles();
    }, []);

    return <>
        <div className={styles.main} style={{ gridTemplateColumns: `${layout}px 1fr` }}>
            <div className={styles.left} style={{ width: `${layout}px` }}>
                <Left files={files} createFile={createFile} fetchFile={fetchFile} />
                <Movable min={250} max={500} direction='v' target={layout} setTarget={setLayout} />
            </div>

            <div className={styles.right} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                <div className={styles.top}>
                    <div className={styles.left}>
                        <h2>{title == '' ? 'New Page' : title}</h2>
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
                    <input placeholder='New Page' value={title} className={styles.title} onChange={handleTitleChange} />
                    <textarea defaultValue={content} ref={contentRef} onInput={handleContentChange} className={styles.content} contentEditable="true" onChange={handleContentChange}>
                        
                        {/* Welcome to NotesBolt 📝<br />

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
                        <p>Start writing your ideas below! 🚀</p> */}
                    </textarea>
                    <div className={styles.space}></div>
                </div>

                <div className={styles.tools_container}>

                    <div className={styles.tools}>
                        
                        <div className={styles.tool}>
                            <span><BsTextLeft /></span>
                        </div>
                        
                        <div className={styles.tool}>
                            <span><BsTextCenter /></span>
                        </div>
                        
                        <div className={styles.tool}>
                            <span><BsTextRight /></span>
                        </div>
                        

                        <div className={styles.tool}>
                            <span><MdOutlineFormatBold /></span>
                        </div>

                        <div className={styles.tool}>
                            <span><MdOutlineFormatItalic /></span>
                        </div>

                        <div className={styles.tool}>
                            <span><MdOutlineFormatUnderlined /></span>
                        </div>

                        
                        <div className={styles.tool}>
                            <span><AiOutlineUnorderedList /></span>
                        </div>

                        <div className={styles.tool}>
                            <span><AiOutlineOrderedList /></span>
                        </div>

                        

                        <div className={styles.tool}>
                            <span><LuHeading1 /></span>
                        </div>
                        
                        <div className={styles.tool}>
                            <span><LuHeading2 /></span>
                        </div>
                        
                        <div className={styles.tool}>
                            <span><LuHeading3 /></span>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    </>
}

export default Home;