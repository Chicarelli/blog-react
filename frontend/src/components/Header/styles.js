import styled from 'styled-components';
import configImage from './assets/settings.svg';

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


export const Config = styled.div`
    background: url(${configImage}) no-repeat;
    cursor: pointer;
    filter: invert(1);
    -webkit-filter: invert(1);
    position: absolute; 
    right: 60px;
    top: 12px;
    width: 20px;
    weight: bold;

    &:hover .dropdown-content{
        display: block;
    }
`;

export const Dropdown = styled.div`
    position: relative;
    top: 8px;
    left: -50px;
    width: 50px;
    display: inline-block;
    fiter: invert(1);
    -webkit-filter: invert(1);
    opacity: .9;

    ul{
        background: #321e4b;
        color: white;
        display: none;
        margin-top: 30px;
        min-width: 98px;
        box-shadow: 0px 8px 16px 0px rgba(255,255,255,0.2);
        padding: 12px 16px;
        z-index: 1;
        list-style-type: none;
        text-align: left: 
    }

    li{
        line-height: 1.8rem;

        &:hover{
            opacity: .3;
        }
    }
`;
