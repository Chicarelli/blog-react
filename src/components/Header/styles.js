import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    background: #321e4b;
    align-items: center;

    a{
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        margin: 0 40px;
        transition: 0.2s;
    }

    a:hover{
        color: gray;
    }
`;


export const Logo = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    color: #dfa837;
    margin-left: 20px;
    margin-right: 40px;

`;