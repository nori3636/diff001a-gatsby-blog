import React from "react"
import styled from "styled-components"
import { rgba } from "polished"

const Wrapper = styled.div`
  background: #cccccc;
  width: calc(100% / 4 - 10px);
  padding: 7px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  font-size: 0.95rem;
  opacity: 0.8;
  &:last-child {
    margin-right: 0;
  }
  a {
    text-decoration: none;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    svg,
    b {
      margin-right: 10px;
      font-size: 1.2rem;
    }
  }
  &.twitter {
    background: linear-gradient(0deg, #1da1f2, ${rgba("#1DA1F2", 0.7)});
    text-shadow: 0 1px 1px #1b98e4;
    box-shadow: 0 3px 8px -1px rgba(0, 0, 0, 0.1),
      0 3px 16px -1px ${rgba("#1DA1F2", 0.6)};
  }
  &.facebook {
    background: linear-gradient(0deg, #3c5a99, ${rgba("#3C5A99", 0.8)});
    text-shadow: 0 1px 1px #334d83;
    box-shadow: 0 3px 8px -1px rgba(0, 0, 0, 0.1),
      0 3px 16px -1px ${rgba("#3C5A99", 0.6)};
  }
  &.hatena {
    background: linear-gradient(0deg, #00a4dd, ${rgba("#00A4DD", 0.8)});
    text-shadow: 0 1px 1px #018cbc;
    box-shadow: 0 3px 8px -1px rgba(0, 0, 0, 0.1),
      0 3px 16px -1px ${rgba("#00A4DD", 0.6)};
  }
  &.pocket {
    background: linear-gradient(0deg, #ee4056, ${rgba("#ee4056", 0.7)});
    text-shadow: 0 1px 1px #d13b4e;
    box-shadow: 0 3px 8px -1px rgba(0, 0, 0, 0.1),
      0 3px 16px -1px ${rgba("#ee4056", 0.6)};
  }
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 780px) {
    width: calc(100% / 2 - 5px);
    margin-bottom: 10px;
    height: 38px;
  }
`

const Button = props => {
  return (
    <Wrapper className={props.className}>
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    </Wrapper>
  )
}

export default Button