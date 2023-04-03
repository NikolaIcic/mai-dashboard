import AgentItem from './AgentItem/AgentItem';
import styles from './AgentList.module.css'

const AgentList = ({ agents }) => {
    console.log(agents);

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.col5}>Pos</div>
                <div className={styles.col20}>Name</div>
                <div className={styles.col20}>W/L</div>
                <div className={styles.col20}>Earnings</div>
            </div>
            {agents.map((agent, index) => (
                <AgentItem key={'Agent' + index} agent={agent} index={index + 1} />
            ))}
        </div>
    )
}

export default AgentList