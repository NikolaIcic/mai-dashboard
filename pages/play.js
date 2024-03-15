import React, { useContext } from 'react'
import AgentGroups from '../components/AgentsGroup/AgentGroups'
import MidArea from '../components/Global/MidArea/MidArea'
import AgentsContext from '../context/AgentsContext'

const Play = () => {
    const { agents, selectedGroup } = useContext(AgentsContext);

    return (
        <div>
            <AgentGroups />
            <MidArea>

            </MidArea>
        </div>
    )
}

export default Play