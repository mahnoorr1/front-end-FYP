import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { useState, useEffect, useRef } from "react";

const CustomBox = styled(Box)(({ clicked, clickable, color}) => ({
  width: 250,
  height: 35,
  border: `2px solid ${clicked ? "#FF0000" : color }`,
  borderRadius: 20,
  color: clicked ? "#FF0000" : "#6F8C92",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "15px",
  cursor: clickable ? "pointer" : "default",
}));

export default function RoundedInput({ label, clickable, colorr }) {
  const [clicked, setClicked] = useState(false);
  const boxRef = useRef(null);

  const handleClick = () => {
    if (clickable) {
      setClicked(!clicked);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (clickable && boxRef.current && !boxRef.current.contains(event.target)) {
        setClicked(false);
      }
    };

    if (clickable) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      if (clickable) {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    };
  }, [clickable]);

  return (
    <CustomBox color = {colorr} clicked={clicked} onClick={handleClick} ref={boxRef} clickable={clickable}>
      {label}
    </CustomBox>
  );
}
