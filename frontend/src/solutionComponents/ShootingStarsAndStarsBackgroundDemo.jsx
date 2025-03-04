
import ShootingStars from "./ui/shooting-stars.jsx"; // Update the import path to match your file structure
import StarsBackground from "./ui/stars-background.jsx"; // Update the import path to match your file structure
import { TabsDemo } from "./TabsDemo.jsx";
import { LampDemo } from "./LampDemo.jsx";

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div
      className="h-[40rem] rounded-md bg-slate-950 flex flex-col items-center justify-center relative w-full"
      style={{
        height: "250vh",
        borderRadius: "0.375rem",
        // backgroundColor: "#171717", // neutral-900
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        width: "100%"
      }}
    >
        <LampDemo/>
        
      
      <ShootingStars />
      <StarsBackground />
      <TabsDemo/>
    </div>
  );
}

// Default export for easier importing
export default ShootingStarsAndStarsBackgroundDemo;