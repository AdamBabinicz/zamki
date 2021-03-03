import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { BrandLogo } from "../../components/brandLogo";
import { Marginer } from "../../components/marginer";
import { Button } from "../../components/button";
import { deviceSize } from "../../components/responsive";

import TopSectionBackgroundImg from "../../images/15.jpg";
import TheBestSpecialistsImg from "../../images/10.png";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 800px;
  background: url(${TopSectionBackgroundImg}) center/cover fixed;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 700px;
    /* background-position: 0px 0px; */
  }
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StandoutImage = styled.div`
  width: 40em;
  /* height: 34em; */

  img {
    width: 100%;
    /* height: 100%; */
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #fff;
  line-height: 1.7;
  font-family: "Bungee Outline", cursive;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
  }
`;

const SloganText = styled.h3`
  margin: 0;
  line-height: 1.4;
  color: #fff;
  font-weight: 500;
  font-size: 25px;
  font-family: "Ribeye Marrow", cursive;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 24px;
  }
`;

export function TopSection(props) {
  const { children } = props;
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  return (
    <TopSectionContainer>
      <BackgroundFilter>
        {children}
        <TopSectionInnerContainer>
          <LogoContainer>
            <BrandLogo
              logoSize={isMobile ? 40 : 65}
              textSize={isMobile ? 35 : 55}
            />
            <Marginer direction="vertical" margin={8} />
            <SloganText>Firma eventova</SloganText>
            <SloganText>
              zamki i zjeżdżalnie dmuchane, popcorn, wata cukrowa
            </SloganText>
            <Marginer direction="vertical" margin={15} />
            <Button>Zobacz</Button>
          </LogoContainer>
          {!isMobile && (
            <StandoutImage>
              <img src={TheBestSpecialistsImg} alt="..." />
            </StandoutImage>
          )}
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}
