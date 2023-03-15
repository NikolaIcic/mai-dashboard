const apiAgentGroups = process.env.API_ROUTE + 'agents/groups';
const staticData = process.env.STATIC_DATA;

export async function getAgentGroups() {
    if (staticData)
        return getAgentGroupsStatic();
    const promise = await fetch(apiAgentGroups);
    return await promise.json();
}

function getAgentGroupsStatic() {
    let data = ['Group1', 'Group2', 'Group3'];
    return data;
}