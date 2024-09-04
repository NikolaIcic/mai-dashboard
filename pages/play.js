import { useState } from 'react';
import MidArea from '../components/Global/MidArea/MidArea'
import Sidebar from '../components/Global/Sidebar/Sidebar';
import TabsView from '../components/Global/TabsView/TabsView';
import ManualPlay from '../components/Play/ManualPlay/ManualPlay';
import SelectAgents from '../components/Play/SelectAgents/SelectAgents';
import { getAllAgents } from '../services/agents';

const Play = ({ agents }) => {
    const [selected,setSelected] = useState();

    return (
        <div>
            <Sidebar>
                <h3 className='text-center p-5'>Select Agents</h3>
                <div className='w-90 mx-auto'>
                    <SelectAgents groups={agents} callBack={(data)=>setSelected(data)} />
                </div>
            </Sidebar>
            <MidArea>
                <div>
                    <TabsView tabs={[
                        { name: 'Manual', content: <ManualPlay selected={selected} /> },
                        { name: 'Live', content: <div className='p-5'>In development</div> },
                        { name: 'Automated', content: <div className='p-5'>In development</div> }
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