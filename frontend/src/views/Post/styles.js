import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    margin: auto;
    height: calc(100vh - 80px); 
    display: flex;
    flex-direction: column;
    align-item: center;

    h1{
        font-weight: bold;
        font-size: 3.5rem;
        text-align: center;
        font-family: Verdana;
    }

    h2{
        font-weight: 700;
        text-align: center;
        margin-bottom: 20px;
        font-family: Verdana;
    }
    textarea{
        font-family: Verdana;
        background: #fff;
        resize: none;
        border: none;
        outline: none;
        color: black;
    }
`;

