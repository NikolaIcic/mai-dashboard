import AgentItem from './AgentItem/AgentItem';
import styles from './AgentList.module.css'

const AgentList = ({ agents,group }) => {
    console.log(agents);

    return (
        <>
            {agents.length > 0 ? (
                <div className={styles.container}>
                    <div>
                        <div className={styles.col5}>Pos</div>
                        <div className={styles.col20}>Name</div>
                        <div className={styles.col20}>W/L</div>
                        <div className={styles.col20}>Earnings</div>
                    </div>
                    {agents.map((agent, index) => (
                        <AgentItem key={'Agent' + index} agent={agent} index={index + 1} group={group} />
                    ))}
                </div>
            ):(
                <h2 className='text-center mt-2'>Select agent group</h2>
            )}
        </>

    )
}

export default AgentList