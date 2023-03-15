const apiAgentGroups = process.env.API_ROUTE + 'agents/groups';

export async function getAgentGroups() {
    if (true)
        return getAgentsGroupsStatic();
    const promise = await fetch(apiAgentGroups, { cache: false });
    return await promise.json();
}

const getAgentsGroupsStatic = () => {
    let data = ['Group1', 'Group2', 'Group3'];
    return data;
}