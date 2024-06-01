import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  background-color: gold;
  max-height: 70px;

  .cpe-logo {
    width: 140px;
    height: 140px;
    padding: 5px auto;
    margin: 0 auto;
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
