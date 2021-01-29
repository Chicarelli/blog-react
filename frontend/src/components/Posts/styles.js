import styled from 'styled-components';


export const Container = styled.div`
    margin: auto;
    border-radius: 10px;
    margin-top: 30px;
    margin-bottom: 10px;
    width: 80%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h1{
        font-size: 3rem;
        font-weight: bold;
        padding: 15px;
        font-family: Lucida Console;
    }

    h3{
        font-size: 1.2rem;
        padding: 10px;
        margin-top: 10px;
        font-family: Lucida Console;
        color: #333;
    }

    p{
        margin: 20px 70px;
        text-align: justify;
        font-family: Arial;
        line-height: 1.4rem;
    }
    a{
        text-decoration: none;
        color: #321e4b;
        font-size: 1.2rem;
        font-weight: bold;
        align-content: right;
        align-self: flex-end;
        margin-right: 70px;
        transition: .2s;

        &:hover{
            opacity: .7;
        }
    }
`;
