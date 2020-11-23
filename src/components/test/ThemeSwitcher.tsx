import React from "react";
import { useTheme } from "~/components/test/Context";

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme()!;
  return (
    <>
      <div style={{ backgroundColor: theme }}>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="white">White</option>
          <option value="lightblue">Blue</option>
          <option value="lightgreen">Green</option>
        </select>
        <span>Hello!</span>
      </div>
    </>
  );
};

export default ThemeSwitcher;
