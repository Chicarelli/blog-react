import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background: #321e4b;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    margin: 0 40px;
    transition: 0.2s;
  }

  a:hover {
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
  cursor: pointer;
  position: absolute;
  right: 60px;
  top: 12px;
  width: 20px;
  weight: bold;

  &:hover .dropdown-content {
    display: block;
  }

  label {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  span:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + span {
    background-color: #2196f3;
  }

  input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + span:before {
    -webkit-transform: translateX(24px);
    -ms-transform: translateX(24px);
    transform: translateX(24px);
  }

  span {
    border-radius: 20px;
  }

  span:before {
    border-radius: 50%;
  }
`;
