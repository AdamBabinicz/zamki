import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import {
  faFacebook,
  faTwitter,
  faPinterest,
  faYoutube,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";

const FooterContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 3em;
  padding-bottom: 0;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 2em 12px;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1em;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:not(:last-of-type) {
    margin-right: 3%;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);
  padding: 0 10px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 0;
  }
`;

const RightBottomContainer = styled.div`
  display: flex;
`;

const LeftBottomContainer = styled.div`
  display: flex;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 13px;
  color: #000;
  font-weight: 600;
  font-size: 20px;
`;

const FLink = styled.a`
  text-decoration: none;
  color: #6f6f6f;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

const PrivacyText = styled.h6`
  color: #a3a3a3;
  font-size: 11px;
  /* margin-left: 10px; */
  display: flex;
  margin-bottom: 2rem;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 8px;
    margin-bottom: 0.1rem;
  }
`;

const SocialIcon = styled.div`
  font-size: 20px;
  cursor: pointer;
  transition: all, 200ms ease-in-out;

  a {
    color: #8a8a8a;
  }

  a:hover {
    color: #777777;
  }

  &:not(:last-of-type) {
    margin-right: 10px;
  }

  &:hover {
    color: #777777;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 17px;
  }
`;

const Scroll = styled.div`
  font-size: 3rem;
  color: #8a8a8a;
  transition: all, 200ms ease-in-out;
  text-align: center;

  &:hover {
    color: #777777;
    cursor: pointer;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 1.5rem;
  }
`;

export function Footer(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <FooterContainer id="footer">
      <TopContainer>
        <ContentContainer>
          <Title>Linki ⬇</Title>
          <FLink href="//www.slodkolandia.cba.pl" target="_blank">
            Słodkolandia wita:
          </FLink>
          <FLink href="//www.fontanny.slodkolandia.cba.pl" target="_blank">
            Fontanny czekoladowe
          </FLink>
          <FLink href="//foto-budka.netlify.app" target="_blank">
            Fotobudka
          </FLink>
          <FLink href="//grama.netlify.app" target="_blank">
            Ciasteczkowa GRAMA
          </FLink>
          <FLink href="//pranie-dywanow.j.pl" target="_blank">
            Super Pucuś
          </FLink>
        </ContentContainer>
        <ContentContainer>
          <Title>Filmy 🎬</Title>
          <FLink
            href="//www.youtube.com/watch?v=4KwvhaRcH3I&list=LL&index=21"
            target="_blank"
          >
            Dmuchańce
          </FLink>
          <FLink
            href="https://www.youtube.com/watch?v=c27U-aW28YI&list=LL&index=30"
            target="_blank"
          >
            Fontanny
          </FLink>
          <FLink
            href="//www.youtube.com/watch?v=Ms-oVE1CiF8&list=LL&index=28&t=19s"
            target="_blank"
          >
            Impreza
          </FLink>
          <FLink href="//www.youtube.com/watch?v=0DKZPNV80Ik" target="_blank">
            Pralnia
          </FLink>
        </ContentContainer>
      </TopContainer>
      <BottomContainer>
        <LeftBottomContainer>
          <BrandLogo hideLogo color="#8A8A8A" textSize={isMobile ? 20 : 25} />
        </LeftBottomContainer>

        <RightBottomContainer>
          <SocialIcon>
            <a href="//www.facebook.com/wata.cukrowa.popcorn" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a href="//twitter.com/popcorn_wata" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a href="https://pl.pinterest.com/watapopcorn" target="_blank">
              <FontAwesomeIcon icon={faPinterest} />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a
              href="//www.youtube.com/channel/UCau05zZiK3kpTe06XtKXNKA"
              target="_blank"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a
              href="https://www.google.pl/maps/place/S%C5%81ODKOLANDIA+wita/@51.399863,21.1651462,17z/data=!3m1!4b1!4m5!3m4!1s0x4718f76aaaaaaaab:0xe5f5c98b6b743863!8m2!3d51.399863!4d21.167335?hl=pl"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </SocialIcon>
        </RightBottomContainer>
      </BottomContainer>
      <Scroll>
        <FaArrowAltCircleUp onClick={() => scroll.scrollToTop()} />
        <PrivacyText>2014 - {new Date().getFullYear()}.</PrivacyText>
      </Scroll>
    </FooterContainer>
  );
}
