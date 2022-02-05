import { useState } from "react";
import MenuItems from "./components/MenuItems";
import ToggleButton from "./components/ToggleButton";
import "./main.scss";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="App">
      <nav className="relative">
        <div className="toggle-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <ToggleButton isMenuOpen={isMenuOpen} setIsExpanded={setIsExpanded} />
        </div>

        <div className="menu-items-wrapper absolute">
          <MenuItems
            isMenuOpen={isMenuOpen}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />
        </div>
      </nav>
    </div>
  );
}
