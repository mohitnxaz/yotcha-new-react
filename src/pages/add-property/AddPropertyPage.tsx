import WithLayout from "../../components/WithLayout";
import FormLayout from "../../layouts/home/agent/FormLayout";
import AddPropertyView from "../../views/addProperty/AddPropertyView";


export default function AddPropertyPage() {
  return <WithLayout component={AddPropertyView} layout={FormLayout} />;
}
