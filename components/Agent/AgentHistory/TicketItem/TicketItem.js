import Accordian from '../../../Global/Accordian/Accordian'
import GameItem from './GameItem/GameItem';
import styles from './TicketItem.module.css'
import { useState } from 'react'

const TicketItem = ({ ticket, index }) => {

    const getTicketResult = () => {
        for (let i = 0; i < ticket.predictions.length; i++)
            if (!ticket.predictions[i].Result)
                return '❌';
        return '✅';
    }

    return (
        <div>
            <Accordian headerText={'Ticket' + (index + 1)} onOpen={() => console.log(ticket)}>
                <div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Game</th>
                                <th>Prediction</th>
                                <th>Quote</th>
                                <th>Status</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ticket.ticket.Games.map((game, index) => (
                                <GameItem key={'Game' + index} game={game} prediction={ticket.predictions[index]} index={index} />
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='p-5'>
                    <p className='d-inline-block me-3'>Games played: {ticket.ticket.Games.length}</p>
                    <p className='d-inline-block ms-3 me-3'>Total Quote: {ticket.ticket.Quote.toFixed(2)}</p>
                    <p className='d-inline-block ms-3'>Passed: {getTicketResult()}</p>
                </div>
            </Accordian>
        </div>
    )
}

export default TicketItem