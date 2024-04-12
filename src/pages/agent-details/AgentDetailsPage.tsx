import WithLayout from "../../components/WithLayout";
import FormLayout from "../../layouts/home/agent/FormLayout";
import AddPropertyView from "../../views/addProperty/AddPropertyView";
import AgentDetailsView from "../../views/agentDetails/AgentDetailsView";


export default function AgentDetailsPage() {
  return <WithLayout component={AgentDetailsView} layout={FormLayout} />;
}
