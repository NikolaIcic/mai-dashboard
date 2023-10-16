import AgentList from '../../components/Agents/AgentList/AgentList'
import MidArea from '../../components/Global/MidArea/MidArea'
import AgentGroups from '../../components/AgentsGroup/AgentGroups'

const Agents = () => {

    return (
        <div>
            <AgentGroups />
            <MidArea>
                <AgentList />
            </MidArea>
        </div>
    )
}

export default Agents