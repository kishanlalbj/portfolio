import data from "../../public/data.json";
import Home from "@/components/HomeClient";
import { Source } from "@/types";

export default function Page() {
  return <Home data={data as unknown as Source} />;
}
