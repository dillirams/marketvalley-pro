import Image from "next/image";
import Statistics from "../components/statistics";
import { Weight, ChartNoAxesCombined } from "lucide-react";
import DataCharts from "../components/dataCharts";
import AdminHeaderClient from "./adminHeaderClient";

export default function Page() {
  return (
    <main className="flex flex-col items-center min-h-screen p-24 justify-center">
      <AdminHeaderClient />
      <h1>Hello world</h1>
      <div className="flex w-full">
        <Statistics
          title="sales"
          type="money"
          value={100}
          StartIcon={Weight}
          EndIcon={ChartNoAxesCombined}
          time="weekly"
          percent={12}
        />
      </div>
      <div className="w-full h-full md:h-[50%] md:w-[50%]">
        <DataCharts />
      </div>
    </main>
  );
}
