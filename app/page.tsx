import ActivityTimeline from "@/components/sections/ActivityTimeline";
import Advantages from "@/components/sections/Advantages";
import CustomerManagment from "@/components/sections/CustomerManagment";
import HomeNavbar from "@/components/navbars/HomeNavbar";
import InfoSection from "@/components/sections/InfoSection";
import KeyMetrics from "@/components/cards/KeyMetrics";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-600 max-w-screen pb-8">
      <HomeNavbar></HomeNavbar>
      <div className="flex flex-col items-center justify-center gap-10">
        <InfoSection></InfoSection>
        <KeyMetrics></KeyMetrics>
        <div className="mt-3 flex gap-8 items-center justify-center">
          <CustomerManagment></CustomerManagment>
          <ActivityTimeline></ActivityTimeline>
        </div>
        <Advantages></Advantages>
      </div>
    </div>
  );
}
