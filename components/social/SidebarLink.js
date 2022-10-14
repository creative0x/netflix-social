import React from "react";

export default function SidebarLink({ Icon, text, active }) {
  return (
    <div
      // the active prop allows to add the styling if true
      className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${
        active && "font-bold"
      }`}
    >
      <Icon className="h-7" />
      {/* Keep the side bar hidden on bigger screens */}
      <span className="hidden xl:inline">{text}</span>
    </div>
  );
}
