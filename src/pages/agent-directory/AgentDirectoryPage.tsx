import WithLayout from "../../components/WithLayout";
import FormLayout from "../../layouts/home/agent/FormLayout";
import AgentDirectoryView from "../../views/AgentDirectory/AgentDirectoryView";
import AddPropertyView from "../../views/addProperty/AddPropertyView";


export default function AgentDirectoryPage() {
  return <WithLayout component={AgentDirectoryView} layout={FormLayout} />;
}
