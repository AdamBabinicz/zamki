import React from "react";
import styled from "styled-components";

import LogoImg from "../../images/4.png";
import { Link } from "react-router-dom";

const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "2em")};
  height: ${({ size }) => (size ? size + "px" : "2em")};
  img {
    width: 100%;
    height: 100%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const LogoTitle = styled.h2`
  margin: 0;
  font-size: ${({ size }) => (size ? size + "px" : "20px")};
  color: ${({ color }) => (color ? color : "#fff")};
  font-weight: 400;
  margin-left: 6px;
  text-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.21);
  /* font-family: "Bungee Inline", cursive;
  font-family: "Bungee Outline", cursive; */
  font-family: "Bungee Shade", cursive;
  /* font-family: "Emilys Candy", cursive;
  font-family: "Flavors", cursive;
  font-family: "Hanalei", cursive;
  font-family: "Ribeye Marrow", cursive;
  font-family: "Sancreek", cursive;
  font-family: "Stick", sans-serif; */
`;

export function BrandLogo(props) {
  const { logoSize, textSize, color, hideLogo } = props;
  return (
    <BrandLogoContainer>
      {!hideLogo && (
        <Link to="/">
          <LogoImage size={logoSize}>
            <img src={LogoImg} alt="..." />
          </LogoImage>
        </Link>
      )}
      <StyledLink to="/">
        <LogoTitle size={textSize} color={color}>
          dmuchańce
        </LogoTitle>
      </StyledLink>
    </BrandLogoContainer>
  );
}
