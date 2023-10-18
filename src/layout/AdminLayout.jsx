import GetProjects from "../features/Projects/GetProject"
import Data from "../features/User/Data"
import GetSkills from "../features/Skills/GetSkills"

function AdminLayout() {
    return (
        <div>
            <GetSkills />
            <GetProjects />
            <Data />
        </div>
    )
}

export default AdminLayout
