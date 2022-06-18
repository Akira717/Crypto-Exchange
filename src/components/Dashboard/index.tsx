import React, {useState} from 'react';
// import { animateScroll as scroll } from 'react-scroll';
import {ACg,NavBtn,NetcoinsDiv,CoinSmartDiv,NdaxDiv, TrustWalletDiv, KrakenDiv,CryptoDiv, CoinBaseDiv, ArrowForward,ArrowRight, LabelBg, ImgCg,VirgocxDiv,ServicesH1,LineHR,DashboardBody, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP, CoverContainer,DashFavourite, DashboardSpan,   DashboardOrder} from './DashboardElements';
import { Button } from '../ButtonElements';
import Icon1 from '../../image/USDT.png';
import Icon2 from '../../image/BTC.png';
import Icon3 from '../../image/ETH.png';
import { FiArrowRight } from "react-icons/fi";
import CIcon1 from '../../image/CIcon/CIcon1.png';
import CIcon2 from '../../image/CIcon/CIcon2.png';
import CIcon3 from '../../image/CIcon/CIcon3.png';
import CIcon4 from '../../image/CIcon/CIcon4.png';
import CIcon5 from '../../image/CIcon/CIcon5.png';
import CIcon6 from '../../image/CIcon/CIcon6.png';
import CIcon7 from '../../image/CIcon/CIcon7.png';
import CIcon8 from '../../image/CIcon/CIcon8.png';

const Dashboard = () => {
  return (
    <CoverContainer>
      <DashFavourite>
        <ServicesWrapper>
          <ServicesCard>  
            <ServicesIcon src={Icon1} />
            <ServicesH2>USDT Recharge</ServicesH2>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>BTC Recharge</ServicesH2>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>ETH Recharge</ServicesH2>
          </ServicesCard>
        </ServicesWrapper>
        <LineHR/>
      </DashFavourite>
      <DashboardBody>  
        <VirgocxDiv>
          <ImgCg src={CIcon5}/>
          <LabelBg>virgocx Official Recharge Channel</LabelBg>
          <NavBtn >
            <ACg href="http://virgocx.com/">
            <FiArrowRight/>
            </ACg>
          </NavBtn>
        </VirgocxDiv>
        <CoinBaseDiv>
          <ImgCg src={CIcon1}/>
          <LabelBg>coinbase Official Recharge Channel</LabelBg>
          <NavBtn >
            <ACg href="http://coinbase.com/"><FiArrowRight/></ACg>
          </NavBtn>
        </CoinBaseDiv>

        <CryptoDiv>
          <ImgCg src={CIcon2}/>
          <LabelBg>crypto Official Recharge Channel</LabelBg>
          <NavBtn > 
            <ACg href="http://crypto.com/"><FiArrowRight/></ACg>
          </NavBtn>
        </CryptoDiv>
        <KrakenDiv>
          <ImgCg src={CIcon6}/>
          <LabelBg>kraken Official Recharge Channel</LabelBg>
          <NavBtn >
            <ACg href="http://kraken.com/"><FiArrowRight/></ACg>
          </NavBtn>
        </KrakenDiv>
        <TrustWalletDiv>
          <ImgCg src={CIcon3}/>
          <LabelBg>trustwallet Official Recharge Channel</LabelBg>
          <NavBtn >
            <ACg href="http://trustwallet.com/"><FiArrowRight/></ACg>
          </NavBtn>
        </TrustWalletDiv>
        <NdaxDiv>
          <ImgCg src={CIcon7}/>
          <LabelBg>ndax Official Recharge Channel</LabelBg>
          <NavBtn >
            <ACg href="http://ndax.com/"><FiArrowRight/></ACg>
          </NavBtn>
        </NdaxDiv>
        <CoinSmartDiv>
          <ImgCg src={CIcon4}/>
          <LabelBg>coinsmart Official Recharge Channel</LabelBg>
          <NavBtn >
            <ACg href="http://coinsmart.com/"><FiArrowRight/></ACg>   
          </NavBtn>
        </CoinSmartDiv>
        <NetcoinsDiv>
          <ImgCg src={CIcon8}/>
          <LabelBg>netcoins Official Recharge Channel</LabelBg>
          <NavBtn >
            <ACg href="http://netcoin.com/"><FiArrowRight/></ACg>
          </NavBtn>
        </NetcoinsDiv>
      </DashboardBody>
    </CoverContainer>
  );
};

export default Dashboard;
