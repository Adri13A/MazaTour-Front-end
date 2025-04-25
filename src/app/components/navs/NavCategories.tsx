import { useState, useRef, useEffect } from "react";

const tabs = ["Historia & Cultura", "Parques", "Museos", "Playas", "Naturaleza", "Ver Todas"];

export default function NavCategories() {
  const [activeTab, setActiveTab] = useState("Historia & Cultura");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: "0px", width: "0px" });

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const currentIndex = tabs.findIndex((t) => t === activeTab);
    const currentTab = tabRefs.current[currentIndex];

    if (currentTab) {
      const { offsetLeft, offsetWidth } = currentTab;
      setIndicatorStyle({ left: `${offsetLeft}px`, width: `${offsetWidth}px` });
    }
  }, [activeTab]);

  return (
    <div className="relative flex space-x-6 border-b border-gray-300 px-4 sm:px-6 overflow-x-auto">
      {/* Línea negra animada */}
      <div
        className="absolute bottom-0 h-[4px] bg-black rounded-full transition-all duration-300"
        style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
      />

      {tabs.map((tab, index) => (
        <button
          key={tab}
          ref={(el) => { tabRefs.current[index] = el; }} // No return value here
          onClick={() => setActiveTab(tab)}
          className={`relative pt-4 pb-4 text-sm transition-colors ${
            activeTab === tab ? "text-black font-semibold" : "text-gray-500 hover:text-black"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
