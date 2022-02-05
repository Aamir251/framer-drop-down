import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { liVariants, spanVariants, ulVariants } from "./animations/menuItems";
import { MenuData } from "./menuData";

const MenuItems = ({ isMenuOpen, isExpanded, setIsExpanded }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {isMenuOpen && (
        <motion.ul
          key="ul"
          variants={ulVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`relative ${isExpanded && "expand"}`}
        >
          {MenuData.map((item) => (
            <MenuItem key={item.id} item={item} isExpanded={isExpanded} />
          ))}
          <ExpandButton setIsExpanded={setIsExpanded} isExpanded={isExpanded} />
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default MenuItems;

const MenuItem = ({ item, isExpanded }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.li
      key="1"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={liVariants}
      className={`${isExpanded && isHovered && "hovered"}`}
    >
      <img src={item.url} alt="" />
      {isExpanded && (
        <motion.span initial={{ opacity: 0.3 }} animate={{ opacity: 1 }}>
          {" "}
          {item.name}{" "}
        </motion.span>
      )}
      <AnimatePresence>
        {isHovered && !isExpanded && (
          <motion.span
            className="absolute hovered"
            variants={spanVariants}
            initial="initial"
            exit="exit"
          >
            {item.name}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

const ExpandButton = ({ setIsExpanded, isExpanded }) => {
  return (
    <img
      src="/icons/expand-button.svg"
      alt="expand menu"
      className="absolute expand-button"
      onClick={() => setIsExpanded(!isExpanded)}
    />
  );
};
