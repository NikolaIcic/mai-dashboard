import AgentHistory from "../../../components/Agent/AgentHistory/AgentHistory";
import AgentInfo from "../../../components/Agent/AgentInfo/AgentInfo";
import AgentPredictions from "../../../components/Agent/AgentPredictions/AgentPredictions";
import AgentProfile from "../../../components/Agent/AgentProfile/AgentProfile";
import MidArea from "../../../components/Global/MidArea/MidArea";
import Sidebar from "../../../components/Global/Sidebar/Sidebar";
import TabsView from "../../../components/Global/TabsView/TabsView";
import { redirectPage } from "../../../functions/pageAuth";
import { getAgent } from "../../../services/agents"

const Agent = ({ agent, index, group }) => {

    return (
        <div>
            <Sidebar>
                <AgentProfile name={agent.Name} index={index} group={group} />
            </Sidebar>
            <MidArea>
                <TabsView tabs={[
                    { name: 'Info', content: <AgentInfo agent={agent} /> },
                    { name: 'Predictions', content: <AgentPredictions predictions={agent.PredictionRates} /> },
                    { name: 'History', content: <AgentHistory tickets={agent.TicketsPlayed} /> }
                ]} />
            </MidArea>
        </div>
    )
}

export default Agent

export const getServerSideProps = async (ctx) => {
    let index = ctx.query.index;
    let name = ctx.query.name;
    let group = ctx.query.group;

    if (index == undefined || group == undefined)
        return redirectPage('/agents');

    const agent = await getAgent(group, index);
    if (agent.Name != name)
        return redirectPage('/agents');

    return {
        props: {
            agent: agent,
            index: index,
            group: group
        }
    }
}