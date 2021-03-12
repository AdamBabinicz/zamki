import React from "react";
import styled from "styled-components";
import { Navbar } from "../../components/navbar";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";
import { TopSection } from "./topSection";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import { SliderData } from "../../components/imageSlider/SliderData";
import { deviceSize } from "../../components/responsive";
import { SpecialistAd } from "../../components/specialistAd";
import { Marginer } from "../../components/marginer";
import { Footer } from "../../components/footer";
import ScrollToTop from "../../ScrollToTop";

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;
  }
`;

export function HomePage(props) {
  return (
    <>
      <ScrollToTop />
      <PageContainer>
        <TopSection>
          <Navbar useTransparent />
        </TopSection>
        <InnerPageContainer>
          <Marginer direction="vertical" margin="2em" />
          <ContentContainer>
            <ImageSlider slides={SliderData} />
          </ContentContainer>
          <Marginer direction="vertical" margin="2em" />
          <SpecialistAd />
          <Marginer direction="vertical" margin="5em" />
        </InnerPageContainer>
        <Footer />
      </PageContainer>
    </>
  );
}
