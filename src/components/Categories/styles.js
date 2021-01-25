import styled from 'styled-components';


export const Button = styled.div`
    min-width: 150px;
    padding: 20px;
    color: #333;
    border-radius: 10px;
    background: ${props => props.actived ? '#dfa837' : '#fff'};
    cursor: pointer;
    font-weight: bold;
    font-family: Arial;
`;