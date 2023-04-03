import PercentBar from '../../../Global/PercentBar/PercentBar'
import styles from './AgentItem.module.css'

const AgentItem = ({agent,index}) => {
    return (
        <div className={styles.container}>
            <div className={styles.col5}>#{index}</div>
            <div className={styles.col20}>{agent.Name}</div>
            <div className={styles.col20}><PercentBar won={agent.CorrectTicketsPredicted} total={agent.TotalTicketsPlayed} /></div>
            <div className={styles.col20 + ' ' + styles.money}>{agent.Money.toFixed(0)} RSD</div>
        </div>
    )
}

export default AgentItem