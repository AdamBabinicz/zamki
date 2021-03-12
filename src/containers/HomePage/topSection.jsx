import { useState, useEffect } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { BrandLogo } from "../../components/brandLogo";
import { Marginer } from "../../components/marginer";
import { Button } from "../../components/button";
import { deviceSize } from "../../components/responsive";
import Popup from "../../components/popup/Popup";
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
    text-align: center;
  }
`;

export function TopSection(props) {
  const { children } = props;
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 3000);
  }, []);

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
            <p onClick={() => setButtonPopup(true)}>
              <Button>Info</Button>
            </p>
          </LogoContainer>
          {!isMobile && (
            <StandoutImage>
              <img src={TheBestSpecialistsImg} alt="..." />
            </StandoutImage>
          )}
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3>Ważne informacje!</h3>
            <p>
              U nas wynajmiesz urządzenia certyfikowane do zabawy na powietrzu i
              pod dachem dla dzieci w różnym wieku. Nasze dmuchańce są
              bezpieczne i w pełni sprawne technicznie, co potwierdzają
              odpowiednie atesty! Cały czas odnawiamy bazę urządzeń o nowe
              modele, aby Klienci mieli do dyspozycji pachnące świeżością zamki
              i zjeżdżalnie dmuchane.
            </p>
            <p>
              Korzystanie z dmuchańców objęte jest ubezpieczeniem OC, zaś nasz
              personel posiada zaświadczenia o ukończeniu kursu pedagogicznego,
              oraz wyczerpującą wiedzę teoretyczną i praktyczną z obsługi
              urządzeń rekreacyjnych.
            </p>
            <p>
              Zabawa dzieci na urządzeniach jest cały czas kontrolowana i
              nadzorowana. Pomimo nieskrępowanej atmosfery, wszędzie panuje
              porządek; troska o bezpieczeństwo jest najważniejsza! 😀
            </p>
          </Popup>
          <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
            <h3>Polityka prywatności i polityka cookies 🔒 🍪</h3>
            <p>
              Serwis zbiera informacje podane dobrowolnie przez użytkownika.
              Dane osobowe są pozyskiwane podczas kontaktu mailowego bądź
              telefonicznego oraz podczas składania zamówienia.
            </p>
            <p>
              Dane osobowe są wykorzystywane wyłącznie w celu wysyłania
              korespondencji oraz realizacji zamówienia, o ile wyraził na to
              zgodę. Zawartość strony internetowej można przeglądać bez
              podawania jakichkolwiek danych osobowych.
            </p>
            <p>
              Serwis korzysta z plików cookies. Pliki cookies (tzw.
              „ciasteczka”) stanowią dane informatyczne, w szczególności pliki
              tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika
              Serwisu i przeznaczone są do korzystania ze stron internetowych
              Serwisu.
            </p>
          </Popup>
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}
