import { useEffect, useState } from 'react'
import styles from './Switch.module.css'

const Switch = ({ switchState = false, callBack }) => {
    const [isOn, setIsOn] = useState(switchState);

    const handleOnClick = () => {
        callBack(!switchState);
    }

    useEffect(() => {
      setIsOn(switchState);
    }, [switchState])

    return (
        <div onClick={handleOnClick} className={styles.container + ' ' + (isOn ? styles.containerOn : styles.containerOff)}>
            <div className={styles.circle + ' ' + (isOn ? styles.circleRight : styles.circleLeft)}></div>
            <div className={styles.text + ' ' + (isOn ? styles.textLeft : styles.textRight)}>{isOn ? 'ON' : 'OFF'}</div>
        </div>
    )
}

export default Switch