import { redirectPage } from "../../../functions/pageAuth";
import { getAgent } from "../../../services/agents"

const Agent = ({agent}) => {
    console.log(agent);

    return (
        <div></div>
    )
}

export default Agent

export const getServerSideProps = async (ctx) => {
    let index = ctx.query.index;
    let name = ctx.query.name;
    let group = ctx.query.group;

    if(index == undefined || group == undefined)
        return redirectPage('/agents');
        
    const agent = await getAgent(group,index);
    if(agent.Name != name)
        return redirectPage('/agents');

    return {
        props:{
            agent:agent
        }
    }
}