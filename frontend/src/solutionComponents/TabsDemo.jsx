
import { Tabs } from "./ui/tabs.jsx";

export function TabsDemo() {
  const tabs = [
    {
      title: "Finance",
      value: "product",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-green-700 to-[#16c4e0] to-900">
          <p>Finance</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Tech",
      value: "services",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Tech</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Finetech",
      value: "playground",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Finetech</p>
          <DummyContent />
        </div>
      ),
    },
  ];
  return (
    <div
      className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-6xl mx-auto w-full items-center justify-start">
      <Tabs tabs={tabs} containerClassName="justify-center" />
    </div>
  );
}

const DummyContent = () => {
  return (
    <img
      src="src\components\benefits\linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" 
    />
  );
};