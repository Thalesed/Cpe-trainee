import styled from "styled-components";

export const InputDiv = styled.div`
    margin: 20px;
    
    textarea{
        text-align: left;
        vertical-align: top;
        border: none;
        color: white;
        background-color: rgba(37, 35, 35);
        width: 100%;
        height: 30%;
        min-height: 100px;
    }
    textarea:hover{
        border: 1px solid gold;
    }

    textarea:active{
        border: 2px solid gold;
    }

    .text{
        margin-bottom: 5px;
    }

    @media (max-width: 600px) {
        textarea{
            min-height: 50px;
            height: 50px;
        }
    }
   
`