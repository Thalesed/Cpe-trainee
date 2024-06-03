import styled from "styled-components";

export const InputDiv = styled.div`
    margin: 20px;
    select{
        background-color: rgba(37, 35, 35);
        width: 100%;
        height: 35px;
        border: none;
        color: white;
        border: 0.3px solid rgba(80, 80, 80, 0.1);
    }
    select:hover{
        border: 1px solid gold;
    }
    select:active{
        border: 2px solid gold;
    }
    select:invalid{
        color: gray;
    }
    .text{
        margin-bottom: 10px;
    }
   
`

export const PlaceHolder = styled.option`
    color: green;
`