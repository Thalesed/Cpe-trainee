import React from "react";
import logo from "./cpe_logo.svg";
import { HeaderStyle1, DivHeader } from "./style";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const HeaderVoltar = () => {
  const navigate = useNavigate();
  return (
    <HeaderStyle1>
      <DivHeader>
        <img className="cpe-logo" src={logo} alt="logo" />
        <RiArrowGoBackFill
          onClick={() => navigate(-1)} //customizar aqui para onde volta
          style={{
            color: "black",
            display: "flex",
            scale: "2",
            cursor: "pointer",
          }}
        />
      </DivHeader>
    </HeaderStyle1>
  );
};

export default HeaderVoltar;
