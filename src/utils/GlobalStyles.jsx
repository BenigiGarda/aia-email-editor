import { createGlobalStyle } from "styled-components";
import AIABoldEOT from "../assets/fonts/AIAEverest-Bold.eot";
import AIABoldWOFF from "../assets/fonts/AIAEverest-Bold.woff";
import AIABoldWOFF2 from "../assets/fonts/AIAEverest-Bold.woff2";
import AIABoldTTF from "../assets/fonts/AIAEverest-Bold.ttf";

import AIACondensedEOT from "../assets/fonts/AIAEverest-Condensed.eot";
import AIACondensedWOFF from "../assets/fonts/AIAEverest-Condensed.woff";
import AIACondensedWOFF2 from "../assets/fonts/AIAEverest-Condensed.woff2";
import AIACondensedTTF from "../assets/fonts/AIAEverest-Condensed.ttf";

import AIACondensedMediumEOT from "../assets/fonts/AIAEverest-CondensedMedium.eot";
import AIACondensedMediumWOFF from "../assets/fonts/AIAEverest-CondensedMedium.woff";
import AIACondensedMediumWOFF2 from "../assets/fonts/AIAEverest-CondensedMedium.woff2";
import AIACondensedMediumTTF from "../assets/fonts/AIAEverest-CondensedMedium.ttf";

import AIAExtraBoldEOT from "../assets/fonts/AIAEverest-ExtraBold.eot";
import AIAExtraBoldWOFF from "../assets/fonts/AIAEverest-ExtraBold.woff";
import AIAExtraBoldWOFF2 from "../assets/fonts/AIAEverest-ExtraBold.woff2";
import AIAExtraBoldTTF from "../assets/fonts/AIAEverest-ExtraBold.ttf";

import AIAMediumEOT from "../assets/fonts/AIAEverest-Medium.eot";
import AIAMediumWOFF from "../assets/fonts/AIAEverest-Medium.woff";
import AIAMediumWOFF2 from "../assets/fonts/AIAEverest-Medium.woff2";
import AIAMediumTTF from "../assets/fonts/AIAEverest-Medium.ttf";

import AIARegularEOT from "../assets/fonts/AIAEverest-Regular.eot";
import AIARegularWOFF from "../assets/fonts/AIAEverest-Regular.woff";
import AIARegularWOFF2 from "../assets/fonts/AIAEverest-Regular.woff2";
import AIARegularTTF from "../assets/fonts/AIAEverest-Regular.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'AIABold';
    src: url('${AIABoldEOT}');
    src: url('${AIABoldEOT}?#iefix') format('embedded-opentype'),
        url('${AIABoldWOFF}') format('woff'),
        url('${AIABoldWOFF2}') format('woff2'),
        url('${AIABoldTTF}') format('truetype');
       
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'AIACondensed';
    src: url('${AIACondensedEOT}');
    src: url('${AIACondensedEOT}?#iefix') format('embedded-opentype'),
        url('${AIACondensedWOFF}') format('woff'),
        url('${AIACondensedWOFF2}') format('woff2'),
        url('${AIACondensedTTF}') format('truetype');
       
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'AIACondensedMedium';
    src: url('${AIACondensedMediumEOT}');
    src: url('${AIACondensedMediumEOT}?#iefix') format('embedded-opentype'),
        url('${AIACondensedMediumWOFF}') format('woff'),
        url('${AIACondensedMediumWOFF2}') format('woff2'),
        url('${AIACondensedMediumTTF}') format('truetype');

    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'AIAExtraBold';
    src: url('${AIAExtraBoldEOT}');
    src: url('${AIAExtraBoldEOT}?#iefix') format('embedded-opentype'),
        url('${AIAExtraBoldWOFF}') format('woff'),
        url('${AIAExtraBoldWOFF2}') format('woff2'),
        url('${AIAExtraBoldTTF}') format('truetype');
       
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'AIAMedium';
    src: url('${AIAMediumEOT}');
    src: url('${AIAMediumEOT}?#iefix') format('embedded-opentype'),
        url('${AIAMediumWOFF}') format('woff'),
        url('${AIAMediumWOFF2}') format('woff2'),
        url('${AIAMediumTTF}') format('truetype');
     
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'AIARegular';
    src: url('${AIARegularEOT}');
    src: url('${AIARegularEOT}?#iefix') format('embedded-opentype'),
        url('${AIARegularWOFF}') format('woff'),
        url('${AIARegularWOFF2}') format('woff2'),
        url('${AIARegularTTF}') format('truetype');
    
    font-weight: 400;
    font-style: normal;
  }
`;

export default GlobalStyle;
