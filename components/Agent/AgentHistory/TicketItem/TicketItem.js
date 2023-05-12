import styles from './TicketItem.module.css'
import { useState } from 'react'

const TicketItem = ({ ticket, index }) => {
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
        }
    }

    return (
        <div className={styles.accordianContainer}>
            <div className={`${styles.accordianHeader} ` + headerClassName} onClick={changeDisplay}>
                <div className={styles.arrow}>{arrow}</div>
                <div className={styles.headerText}>Ticket {index + 1}</div>
            </div>
            <div className={styles.accordianChilderContainer} style={{ display: display }}>Hello world</div>
        </div>
    )
}

export default TicketItem