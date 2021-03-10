import styled from 'styled-components';


export const Container = styled.div`
    align-items: center;
    border-bottom: 1px solid grey;
    cursor: grab;
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 10px;
    background: ${props => props.theme.tema.background};
    margin-bottom: 30px;
    padding: 0px;
    width: 70%;
    
    h1{
        font-size: 3rem;
        font-weight: bold;
        font-family: Lucida Console;
        color: ${props => props.theme.tema.textcolor};
        padding: 5px;
        text-align: center;
    }

    h3{
        color: #333;
        font-size: 1.2rem;
        font-family: Lucida Console;
        color: ${props => props.theme.tema.textcolor};
        padding: 5px;
    }

    p{
        line-height: 1.4rem;
        margin: 20px 70px;
        text-align: justify;
        font-family: Arial;
        color: ${props => props.theme.tema.textcolor};
        
    }

    section{
        max-height: 110px; 
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    a{
        align-content: right;
        align-self: flex-end;
        color: #321e4b;
        font-size: 1.2rem;
        font-weight: bold;
        margin-right: 70px;
        text-decoration: none;
        transition: .2s;
        color: ${props => props.theme.tema.textcolor};

        &:hover{
            opacity: .7;
        }
    }

    img{
        border-radius: 4px;
        max-width: 100%;
    }

    span {
        text-align: right;
        width: 70%;
        opacity: .7;
        margin-bottom: 3px;
        color: ${props => props.theme.tema.textcolor};
    }
`;
