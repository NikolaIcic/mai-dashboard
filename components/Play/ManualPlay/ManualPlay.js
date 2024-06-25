import SelectAgents from "../SelectAgents/SelectAgents"

const ManualPlay = ({ agents }) => {

    return (
        <div className="p-5 d-flex">
            <div className="w-50">
                <SelectAgents groups={agents} />
            </div>
            <div className="w-50">

            </div>
        </div>
    )
}

export default ManualPlay