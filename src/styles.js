import styled from 'styled-components';


export const ContainerPostagem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 160px);
`;


export const FilterCategories = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;   

    button{
        border: 2px solid #2e1a47;
        border-radius: 10px;

    }
    button:active{
        border-radius: 10px;
    }
`;