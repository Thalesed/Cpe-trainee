import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  display: inline-flex;
  align-items: center;
  background-color: gold;
  max-height: 70px;

  .cpe-logo {
    width: 140px;
    height: 140px;
    float: left;
    left: 90%;
    cursor: pointer;
  }

  a {
    text-align: right;
    margin: 0 auto;
  }
`;

export const HeaderStyle1 = styled.header`
  display: flex;

  background-color: gold;
  max-height: 70px;

  .cpe-logo {
    width: 140px;
    height: 140px;
    padding: 5px auto;
  }

  a {
    text-align: right;
    margin: 0 auto;
  }
`;

export const DivHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  //background-color: gray;
`;

export const ContainerU = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`

export const LogoContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`

export const LadoEsquerdo = styled.div`
  position: absolute;
  top: 0;
  width: 25%;
  height: 100%;
  left: 0;
  top: 0;
`
export const LadoDireito = styled.div`
  position: absolute;
  top: 0;
  width: 25%;
  height: 100%;
  padding: 2px;
  right: 0;
  top: 0;
`

export const Logos = styled.img`
  float: right;
  cursor: pointer;
  display: block;
`
