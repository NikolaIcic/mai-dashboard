import styles from './MasterCheckbox.module.css';
import { useState } from 'react'

const MasterCheckbox = ({ name, data, callBack }) => {
    const [open, setOpen] = useState(false);
    const [groupChecked, setGroupChecked] = useState(false);
    const [checked, setChecked] = useState(() => {
        return data.map(x => false);
    });

    const handleCheckGroup = (e) => {
        if (e.currentTarget.checked) {
            setGroupChecked(true);
            setChecked([true, true, true, true, true]);
            return callBack([true, true, true, true, true]);
        }
        setGroupChecked(false);
        setChecked([false, false, false, false, false]);
        callBack([false, false, false, false, false]);
    }

    const handleCheckAgent = (e,index) => {
        let isChecked = e.currentTarget.checked;
        let temp = [...checked];
        temp[index] = isChecked;
        setChecked(temp);
        callBack(temp);
        if(temp.find(x=>x===true))
            return setGroupChecked(true);
        setGroupChecked(false);
    }

    return (
        <>
            <div className={styles.group} >
                <input checked={groupChecked} onChange={handleCheckGroup} type='checkbox' />
                <span onClick={() => setOpen(!open)}>{name}</span>
            </div>
            {open &&
                <div className={styles.items}>
                    {data.map((item, index) =>
                        <div key={item} className={styles.item}>
                            <input checked={checked[index]} onChange={(event) => handleCheckAgent(event, index)} type='checkbox' />
                            <span>{item}</span>
                        </div>)}
                </div>
            }
        </>
    )
}

export default MasterCheckbox