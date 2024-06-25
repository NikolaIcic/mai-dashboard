import MidArea from '../components/Global/MidArea/MidArea'
import Sidebar from '../components/Global/Sidebar/Sidebar';
import TabsView from '../components/Global/TabsView/TabsView';
import ManualPlay from '../components/Play/ManualPlay/ManualPlay';
import { getAllAgents } from '../services/agents';

const Play = ({ agents }) => {

    return (
        <div>
            <Sidebar>
            </Sidebar>
            <MidArea>
                <div>
                    <TabsView tabs={[
                        { name: 'Manual', content: <ManualPlay agents={agents} /> },
                        { name: 'Live', content: <div>Live</div> },
                        { name: 'Automated', content: <div>Automated</div> }
                    ]} />
                </div>
            </MidArea>
        </div>
    )
}

export default Play

export const getServerSideProps = async (ctx) => {
    const agents = await getAllAgents();

    return {
        props: {
            agents: agents
        }
    }
}