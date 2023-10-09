import { useState } from 'react';
import styles from './Accordian.module.css';

const Accordian = ({ children, headerText, onOpen = () => { } }) => {
    const [display, setDisplay] = useState('none');
    const [headerClassName, setHeaderClassName] = useState(styles.accordianHeaderClosed);
    const [arrow, setArrow] = useState('⮞');

    const changeDisplay = (event) => {
        event.preventDefault();
        if (display == 'block') {
            setDisplay('none');
            setHeaderClassName(styles.accordianHeaderClosed);
            setArrow('⮞');
        }
        else {
            setDisplay('block');
            setHeaderClassName(styles.accordianHeaderOpened);
            setArrow('⮟');
            onOpen();
        }
    }

    return (
        <div className={styles.accordianContainer}>
            <div className={`${styles.accordianHeader} ` + headerClassName} onClick={changeDisplay}>
                <div className={styles.arrow}>{arrow}</div>
                <div className={styles.headerText}>{headerText}</div>
            </div>
            <div className={styles.accordianChilderContainer} style={{ display: display }}>{children}</div>
        </div>
    )
}

export default Accordian