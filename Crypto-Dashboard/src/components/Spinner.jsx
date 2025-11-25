import { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";

const override = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Spinner = ({ color = "blue", size = "150" }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div>
      <CircleLoader color={color} size={size} cssOverride={override} />
    </div>
  );
};

export default Spinner;
