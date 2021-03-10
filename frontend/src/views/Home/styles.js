import styled from 'styled-components';


export const ContainerPostagem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 150px);
    background: ${props => props.theme.tema.background};
    padding-top: 50px;
    padding-bottom: 20px;
`;
