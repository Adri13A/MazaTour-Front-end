'use client';

import { GenericTab } from "@/app/interfaces/tabs";
import { useEffect, useRef, useState } from "react";

interface NavTabsProps<T> {
  tabs: GenericTab<T>[];
  defaultTabId: T;
  onTabChange: (tabId: T) => void;
}

export default function NavTabs<T>({
  tabs,
  defaultTabId,
  onTabChange
}: Readonly<NavTabsProps<T>>) {
  const [activeTab, setActiveTab] = useState<T>(defaultTabId);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: "0px", width: "0px" });

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const index = tabs.findIndex(tab => tab.id === activeTab);
    const currentTab = tabRefs.current[index];

    if (currentTab) {
      setIndicatorStyle({
        left: `${currentTab.offsetLeft}px`,
        width: `${currentTab.offsetWidth}px`,
      });
    }
  }, [activeTab, tabs]);

  const handleTabClick = (tab: GenericTab<T>) => {
    setActiveTab(tab.id);
    onTabChange(tab.id);
  };

  return (
    <div className="relative flex space-x-6 border-b border-gray-300 px-4 sm:px-6 overflow-x-auto">
      <div
        className="absolute bottom-0 h-[3px] rounded-full transition-all duration-300"
        style={{ left: indicatorStyle.left, width: indicatorStyle.width, background: "var(--color-accent2)" }}
      />
      {tabs.map((tab, index) => (
        <button
          key={`${tab.id}`}
          ref={(el) => { tabRefs.current[index] = el; }}
          onClick={() => handleTabClick(tab)}
          className={`relative pt-4 pb-4 text-sm transition-colors ${
            activeTab === tab.id
              ? "text-[var(--color-accent2)] font-semibold"
              : "text-gray-500 hover:text-[var(--color-accent2)]"
          }`}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
}
