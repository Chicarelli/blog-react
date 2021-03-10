import styled from 'styled-components';

export const Container = styled.div`
    align-item: center;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 80px); 
    margin: auto;
    width: 100%;
    background: ${props => props.theme.tema.background};

    h1{
        font-weight: bold;
        font-size: 3.5rem;
        font-family: Verdana;
        margin-top: 20px;
        text-align: center;
        color: ${props => props.theme.tema.textcolor};
    }

    h2{
        font-family: Verdana;
        font-weight: 700;
        margin-bottom: 20px;
        margin-top: 15px;
        text-align: center;
        color: ${props => props.theme.tema.textcolor};
    }

    section{
        text-align: justify;
        margin-left: 40px;
        margin-right: 40px;
        background: ${props=> props.theme.tema.background};
        color: ${props => props.theme.tema.textcolor};
    }

    p{
        border: none;
        font-family: Verdana;
        outline: none;
        resize: none;
        margin: 10px 0; 
    }

    a{
        align-self: flex-end;
        background: #321e4b;
        border: 1px solid ${props => props.theme.tema.textcolor};
        border-radius: 5px;
        color: #dfa837;
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 20px;
        margin-top: 20px;
        min-width: max-content;
        outline: none;
        padding: 10px;
        transition: .2s;
        text-decoration: none;
        text-align: center;
        width: 10%; 
        margin-right: 20px;

        &:hover{
            opacity: .7;
        }
    }
    
`;

