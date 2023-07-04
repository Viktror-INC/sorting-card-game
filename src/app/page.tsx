import { getNewDeckData } from "@/shared/requests";
import MainPageView from "@/views/main-page-view";
import RootLayout from "./layout";

export default async function Home() {
  const { data } = await getNewDeckData()


  return (
    <RootLayout>
      <MainPageView newDeck={data} />
    </RootLayout>
  );
}
