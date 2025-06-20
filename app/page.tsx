import HomeNavbar from "@/components/HomeNavbar";
import InfoSection from "@/components/InfoSection";
import KeyMetrics from "@/components/KeyMetrics";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-600">
      <HomeNavbar></HomeNavbar>
      <div className="flex flex-col items-center justify-center gap-10">
        <InfoSection></InfoSection>
        <KeyMetrics></KeyMetrics>
      </div>
    </div>
  );
}
