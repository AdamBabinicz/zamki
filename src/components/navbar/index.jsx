import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button";
import { Marginer } from "../marginer";

import { Link } from "react-router-dom";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";
import { animateScroll as scroll } from "react-scroll";

const NavbarContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;
  /* z-index: 20;
  position: fixed; */

  background: ${({ useTransparent }) =>
    useTransparent ? "transparent" : "#333"};
`;

const AccessibilityContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const AnchorLink = styled(Link)`
  font-size: 12px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: contrast(0.6);
  }
`;

const Seperator = styled.div`
  min-height: 35%;
  width: 1px;
  background-color: #fff;
`;

export function Navbar(props) {
  const { useTransparent } = props;

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <NavbarContainer useTransparent={useTransparent}>
      <BrandLogo />
      <AccessibilityContainer>
        {!isMobile && (
          <a href="#slider" className="navb">
            Galeria
          </a>
        )}
        {!isMobile && <Marginer direction="horizontal" margin={10} />}
        {!isMobile && <Seperator />}
        <Marginer direction="horizontal" margin={10} />
        <a href="#special">
          <Button size={11}>Kontakt</Button>
        </a>
        <Marginer direction="horizontal" margin={8} />
        <a href="#footer" className="navb">
          Linki
        </a>
      </AccessibilityContainer>
    </NavbarContainer>
  );
}
