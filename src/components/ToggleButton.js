const ToggleButton = ({ isMenuOpen, setIsExpanded }) => {
  return (
    <svg
      onClick={() => setIsExpanded(false)}
      width="25"
      height="21"
      viewBox="0 0 25 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${isMenuOpen && "open"}`}
    >
      <line id="three" y1="20.5" x2="25" y2="20.5" stroke="#EDEDED" />
      <line id="two" y1="10.5" x2="25" y2="10.5" stroke="#EDEDED" />
      <line id="one" y1="0.5" x2="25" y2="0.5" stroke="#EDEDED" />
    </svg>
  );
};

export default ToggleButton;