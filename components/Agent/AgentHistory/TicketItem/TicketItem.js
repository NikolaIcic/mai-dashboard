import Accordian from '../../../Global/Accordian/Accordian'
import GameItem from './GameItem/GameItem';
import styles from './TicketItem.module.css'
import { useState } from 'react'

const TicketItem = ({ ticket, index }) => {
    console.log(ticket);

    return (
        <div>
            <Accordian headerText={'Ticket' + (index+1)} onOpen={()=>console.log(ticket)}>
                <table>
                    <thead>
                        <tr>
                            <th>Game</th>
                            <th>Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ticket.ticket.Games.map((game,index)=>(
                            <GameItem key={'Game' + index} game={game} index={index} />
                        ))}
                    </tbody>
                </table>
            </Accordian>
        </div>
    )
}

export default TicketItem