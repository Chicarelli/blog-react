import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 80px);
    *{
        box-sizing: border-box;
    }
`;

export const Form = styled.form`
    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
`;

export const Input = styled.div`
   display: flex;
   flex-direction: column;

   label{
       position: relative;
       top: 18px;
       width: max-content;
       padding: 0 10px;
       text-align: center;
       left: 25px;
       background: #fff;
       font-size: 1.1rem;
   }

   input{
        padding: 15px;
        margin-top: 10px;
        font-size: 1.1rem;
        outline: none;
        transition: .3s;
        border-radius: 8px;
        border: 1px solid black;
        overflow: hidden;

        &:focus{
            border: 2px solid black;
        } 
   }

    textarea{
        text-align: justify;
        border: 1px solid black;
        border-radius: 10px;
        padding: 10px;
        outline: none;
        resize: none;
        font-family: Times New Roman;
        transition: 0.2s;
        &:focus{
            border: 2px solid black;
        }
        spellcheck: true;
        font-size: 1.09rem;
    }

    #label-textarea{
        top: 8px;
    }

`;

export const Button = styled.button`
    width: 80%;
    margin: auto;
    margin-top: 10px;
    cursor: pointer;
    font-size: 1.4rem;
    padding: 5px;
    background: #dfa837;
    color: #321e4b;
    border-radius: 10px;
    border: 2px solid #321e4b;
    font-weight: bold;
    font-family: Arial Black;
    outline: none;
    transition: .3s;

    &:hover{
        opacity: .5;
    }
`;
