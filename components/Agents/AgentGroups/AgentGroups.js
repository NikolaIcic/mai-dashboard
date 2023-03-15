import styles from './AgentGroups.module.css'

const AgentGroups = ({ agentGroups,callBack }) => {
    const handleSelect = (group) => {
        callBack(group);
    }

    return (
        <div className={styles.container}>
            <h5>Agent groups</h5>
            {agentGroups.map(group => (
                <div onClick={()=>handleSelect(group)} key={group} className={styles.agentGroupItem}>{group}</div>
            ))}
            <button className='mt-3'>Add New</button>
        </div>
    )
}

export default AgentGroups