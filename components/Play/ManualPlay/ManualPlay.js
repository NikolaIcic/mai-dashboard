import SelectAgents from "../SelectAgents/SelectAgents"

const ManualPlay = ({ groups }) => {
    return (
        <div className="p-5 d-flex">
            <div className="w-50">
                <SelectAgents groups={groups} />
            </div>
            <div className="w-50">

            </div>
        </div>
    )
}

export default ManualPlay