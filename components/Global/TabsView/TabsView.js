import styles from './TabsView.module.css'
import { useEffect, useState } from 'react';

const TabsView = ({ tabs, index = 0, callBack = () => { } }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const getTabClassName = (index) => {
        if (index === activeTabIndex)
            return styles.activeTab;
        return styles.inactiveTab;
    }

    useEffect(() => {
        setActiveTabIndex(index);
    }, [index])

    useEffect(() => {
        callBack(activeTabIndex);
    }, [activeTabIndex])

    return (
        <div>
            {(tabs && tabs.length > 0) &&
                <>
                    <div className={styles.tabs}>
                        {tabs.map((tab, index) => (
                            <div key={tab.name + index}
                                onClick={() => setActiveTabIndex(index)}
                                className={styles.tab + ' ' + getTabClassName(index)}>
                                <label>{tab.name}</label>
                            </div>
                        ))}
                    </div>
                    <div className={styles.childContent}>
                        {tabs[activeTabIndex].content}
                    </div>
                </>
            }
        </div>
    )
}

export default TabsView