import styles from './AgentHistory.module.css'
import TicketItem from './TicketItem/TicketItem';

const AgentHistory = ({ tickets }) => {

    return (
        <div className={styles.container}>
            {tickets.map((ticket, index) => (
                <TicketItem key={'ticket' + index} ticket={ticket} index={index} />
            ))}
        </div>
    )
}

export default AgentHistory