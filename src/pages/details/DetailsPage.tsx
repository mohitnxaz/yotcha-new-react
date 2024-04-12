import WithLayout from "../../components/WithLayout";
import HomeLayout from "../../layouts/home/user";
import DetailsView from "../../views/details/DetailsView";

export default function DetailsPage() {
  return <WithLayout component={DetailsView} layout={HomeLayout} />;
}
