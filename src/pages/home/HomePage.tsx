import WithLayout from "../../components/WithLayout";
import HomeLayout from "../../layouts/home/user";
import HomeView from "../../views/home/HomeView";


export default function HomePage() {
  return <WithLayout component={HomeView} layout={HomeLayout} />;
}
