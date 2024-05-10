import styled from "styled-components";

export const SlideBox = styled.div`
  width: 30%;
  margin: 8px auto;
  @media (max-width: 768px) {
    width: 70%; 
  }
  .slick-dots li.slick-active button:before {
    color: #ffffff;
  }
  .slideBox img {
    width: 80%;
    display: block;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    width: 70%; 
    .slideBox img {
    width: 100%;
    }
  }
  .slick-dots li button:before {
    color: rgba(190, 182, 182, 0.932);
  }
`;