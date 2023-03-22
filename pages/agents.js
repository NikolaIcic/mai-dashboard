import { useState } from 'react'
import AgentGroups from '../components/Agents/AgentGroups/AgentGroups'
import AgentList from '../components/Agents/AgentList/AgentList'
import MidArea from '../components/Global/MidArea/MidArea'
import Sidebar from '../components/Global/Sidebar/Sidebar'
import { getAgentGroups } from '../services/agents'

const Agents = ({agentGroups}) => {

    const [agents,setAgents] = useState([]);

    const handleSelectAgentGroup = (group) => {
        console.log(group);
    }

    return (
        <div>
            <Sidebar>
                <AgentGroups agentGroups={agentGroups} callBack={(group)=>handleSelectAgentGroup(group)} />
            </Sidebar>
            <MidArea>
                <AgentList agents={agents} />
            </MidArea>
        </div>
    )
}

export default Agents

export const getServerSideProps = async (ctx) => {
    const agentGroups = await getAgentGroups();

    return {
        props: {
            agentGroups: agentGroups
        }
    }
}