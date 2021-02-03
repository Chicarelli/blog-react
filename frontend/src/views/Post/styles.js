import styled from 'styled-components';

export const Container = styled.div`
    align-item: center;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 80px); 
    margin: auto;
    width: 90%;

    h1{
        font-weight: bold;
        font-size: 3.5rem;
        font-family: Verdana;
        margin-top: 20px;
        text-align: center;
    }

    h2{
        font-family: Verdana;
        font-weight: 700;
        margin-bottom: 20px;
        margin-top: 15px;
        text-align: center;
    }

    section{
        text-align: justify;
    }

    p{
        background: #fff;
        border: none;
        color: black;
        font-family: Verdana;
        outline: none;
        resize: none;
        margin: 10px 0; 
    }
    
`;

