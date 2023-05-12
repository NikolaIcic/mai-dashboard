import PercentBar from '../../../Global/PercentBar/PercentBar'
import styles from './AgentItem.module.css'
import { useRouter } from 'next/router'

const AgentItem = ({ agent, index, group }) => {
    const router = useRouter();

    const handleSelectAgent = () => {
        router.push({
            pathname: '/agents/' + agent.Name,
            query: {index:index,group:group}
        }, '/agents/' + agent.Name);
    }

    return (
        <div onClick={handleSelectAgent} className={styles.container}>
            <div className={styles.col5}>#{index}</div>
            <div className={styles.col20}>{agent.Name}</div>
            <div className={styles.col20}><PercentBar won={agent.CorrectTicketsPredicted} total={agent.TotalTicketsPlayed} /></div>
            <div className={styles.col20 + ' ' + styles.money}>{agent.Money.toFixed(0)} RSD</div>
        </div>
    )
}

export default AgentItem