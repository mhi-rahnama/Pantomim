import { useEffect, useState } from "react";
import "../App.css";
// const colors = ["#5C9FF5", "#2C42EB", "#1464DB", "#4630EB", "#4669EB"];

const colors = [
  "#00E2FF",
  "#F5D40C",
  "#00E2FF",
  "#F5D40C",
  "#00E2FF",
  "#F5D40C",
];

function Header() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v === 20 ? 0 : v + 1));
    }, 1000);
  }, []);
  return (
    <div className="header" style={{ backgroundColor: colors[value] }}>
      <p className="headerText">پانتومیم</p>
    </div>
  );
}

export default Header;
