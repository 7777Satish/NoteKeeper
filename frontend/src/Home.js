import { useState } from 'react';
import styles from './Home.module.css';
import Left from './Components/Left';
import Movable from './Components/Movable';

function Home(){

    // const [darkmore, setDarkmode] = useState(1);
    const [layout, setLayout] = useState(250);

    return <>
        <div className={styles.main} style={{gridTemplateColumns:`${layout}px 1fr`}}>
            <div className={styles.left} style={{width:`${layout}px`}}>
                <Left />
                <Movable min={250} max={500} direction='v' target={layout} setTarget={setLayout} />
            </div>

            <div className={styles.right}>

                <div className={styles.top}></div>
                <div className={styles.bottom}></div>

            </div>
        </div>
    </>
}

export default Home;