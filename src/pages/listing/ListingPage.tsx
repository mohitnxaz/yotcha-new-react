import WithLayout from "../../components/WithLayout";
import HomeLayout from "../../layouts/home/user";
import ListingView from "../../views/listing/ListingView";

export default function ListingPage() {
    return <WithLayout component={ListingView} layout={HomeLayout} />;
  }
  