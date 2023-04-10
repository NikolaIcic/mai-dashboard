import styles from './TabsView.module.css'
import { useState } from 'react';

const TabsView = ({ tabs }) => {

    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const getTabClassName = (index) => {
        if (index === activeTabIndex)
            return styles.activeTab;
        return styles.inactiveTab;
    }

    return (
        <div>
            {tabs.length > 0 &&
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