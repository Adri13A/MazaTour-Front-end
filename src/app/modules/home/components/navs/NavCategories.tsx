import { useState, useRef, useEffect } from "react";
import { Categoria, Tab } from "../../utils/enums/categories";

const tabs: Tab[] = [
  { id: Categoria.HISTORIA_CULTURA, nombre: "Historia & Cultura" },
  { id: Categoria.PARQUES, nombre: "Parques" },
  { id: Categoria.MUSEOS, nombre: "Museos" },
  { id: Categoria.PLAYAS, nombre: "Playas" },
  { id: Categoria.NATURALEZA, nombre: "Naturaleza" },
  { id: Categoria.TODAS, nombre: "Ver Todas" }
];

interface NavCategoriesProps {
  onCategoryChange: (categoryId: Categoria) => void;
}

export default function NavCategories({ onCategoryChange }: Readonly<NavCategoriesProps>) {
  const [activeTab, setActiveTab] = useState<Categoria>(Categoria.HISTORIA_CULTURA);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: "0px", width: "0px" });

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const currentIndex = tabs.findIndex((t) => t.id === activeTab);
    const currentTab = tabRefs.current[currentIndex];

    if (currentTab) {
      const { offsetLeft, offsetWidth } = currentTab;
      setIndicatorStyle({ left: `${offsetLeft}px`, width: `${offsetWidth}px` });
    }
  }, [activeTab]);

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab.id);
    onCategoryChange(tab.id);
  };

  return (
    <div className="relative flex space-x-6 border-b border-gray-300 px-4 sm:px-6 overflow-x-auto" 
    >
      <div
        className="absolute bottom-0 h-[3px] rounded-full transition-all duration-300"
        style={{ left: indicatorStyle.left, width: indicatorStyle.width,  background: "var(--color-accent2)"  }}
      />

      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          ref={(el) => { tabRefs.current[index] = el; }}
          onClick={() => handleTabClick(tab)}
          className={`relative pt-4 pb-4 text-sm transition-colors ${
            activeTab === tab.id
              ? "text-[var(--color-accent2)] font-semibold"
              : "text-gray-500 hover:text-[var(--color-accent2)]"
          }`}
        >
          {tab.nombre}
        </button>

      ))}
    </div>
  );
}