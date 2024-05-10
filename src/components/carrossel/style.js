import styled from "styled-components";

export const SlideBox = styled.div`
    width: 50%; 
    margin: 8px auto;
    .slick-dots li.slick-active button:before {
    color: #ffffff; /* Cor do botão ativo */
  }
  .slideBox img{
    width: 50%; /* Define a largura da div */
    margin: 0 auto;
    }
    .slick-dots li button:before {
        color: rgba(190, 182, 182, 0.932); /* Cor dos pontos */
    }
`;


export const TabelaH = styled.h3`
   margin-left: 0 auto;
`;