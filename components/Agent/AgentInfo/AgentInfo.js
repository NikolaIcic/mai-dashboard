import styles from './AgentInfo.module.css'

const AgentInfo = ({ agent }) => {
    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <h4>Tickets</h4>
                <div>Total played: {agent.TotalTicketsPlayed}</div>
                <div>Correct predicted: {agent.CorrectTicketsPredicted}</div>
                <div>Not played: {agent.TicketsNotPlayed}</div>
            </div>
            <div className={styles.section}>
                <h4>Games</h4>
                <div>Total played: {agent.TotalGamesPlayed}</div>
                <div>Correct predicted: {agent.CorrectGamesPredicted}</div>
                <div>Not played: {agent.GamesNotPlayed}</div>
                <div>Average games played per ticket: ?</div>
            </div>
            <div className={styles.section}>
                <h4>Money</h4>
                <div>Bet per game: {agent.Bet}</div>
                <div>Invested: {(agent.TotalTicketsPlayed - agent.TicketsNotPlayed) * agent.Bet}</div>
                <div>Earnings: {agent.Money.toFixed()}</div>
            </div>
            <div className={styles.section}>
                <h4>Quotes</h4>
                <div>Average quote per ticket: {agent.AverageQuote.toFixed(2)}</div>
                <div>Highest quote played: {agent.HighestQuotePredicted.toFixed(2)}</div>
            </div>
            <div className={styles.section}>
                <h4>Predictions</h4>
                
            </div>
        </div>
    )
}

export default AgentInfo