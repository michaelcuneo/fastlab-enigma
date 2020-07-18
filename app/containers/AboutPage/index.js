import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import { FormattedMessage } from 'react-intl';

import { useMediaQuery } from 'react-responsive';

import H2 from 'components/H2';
import ParsedContent from 'components/ParsedContent';
import SideMenu from 'components/SideMenu';
import Footer from 'components/Footer';

import Sig1 from 'images/scribbles_mark-1-white.svg';

import OverlayContainer from 'containers/OverlayContainer';
import VideoHeader from 'containers/VideoHeader';
import RelatedProjectsContainer from 'containers/RelatedProjectsContainer';

import { Flex, Image } from 'rebass';

import useWindowDimensions from 'utils/getWindowDimensions';

import Button from 'components/Button';

import { DetailHeader } from './DetailHeader';
import { DetailText } from './DetailText';
import { StyledFlexHeader } from './StyledFlexHeader';
import { StyledGradientHeader } from './StyledGradientHeader';

import { menuItems } from './MenuItems';

import messages from './messages';
import ResearchersContainer from '../ResearchersContainer';

function AboutPage() {
  const { width } = useWindowDimensions();
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  const [currentMenuItem, setCurrentMenuItem] = useState(0);

  return (
    <React.Fragment>
      <Helmet key="Helmet">
        <title>About Page</title>
        <meta name="description" content="Fastlab Contact Page" />
      </Helmet>
      <VideoHeader />
      <StyledFlexHeader isTabletMobile={isTabletMobile} width={width}>
        <H2>
          <FormattedMessage {...messages.header} />
          <span className="blink_me">_</span>
        </H2>
      </StyledFlexHeader>
      <StyledGradientHeader />
      <OverlayContainer />
      <Flex
        flexDirection="column"
        sx={{
          position: 'absolute',
          height: 'auto',
          maxWidth: '100%',
          top: '400px',
          background: '#151417',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <Flex
          sx={{
            position: 'relative',
          }}
          justifyContent="flex-begin"
          alignItems="flex-begin"
          pt={['40px', '40px', '182px']}
          px={[width * 0.0933, width * 0.0933, width * 0.0729]}
        >
          <SideMenu
            menuItems={menuItems}
            currentMenuItem={currentMenuItem}
            setCurrentMenuItem={setCurrentMenuItem}
            isTabletMobile={isTabletMobile}
          />
          <Flex
            height="auto"
            flexDirection="column"
            pl={['0px', '0px', width * 0.0802]}
            sx={{ position: 'relative', minWidth: width * 0.4229 }}
          >
            {menuItems[currentMenuItem].link === 'researchers' ? (
              <ResearchersContainer />
            ) : (
              <React.Fragment>
                <DetailHeader pt="10px" pb="30px">
                  {menuItems[currentMenuItem].title}
                </DetailHeader>
                <DetailText pr={['0px', '0px', width * 0.1432]}>
                  <ParsedContent content={menuItems[currentMenuItem].details} />
                </DetailText>
              </React.Fragment>
            )}
          </Flex>
        </Flex>
        <Flex sx={{ position: 'relative' }}>
          <Image
            sx={{
              position: 'absolute',
              right: `${(width * 0.1292) / 2}px !important`,
              bottom: 0,
            }}
            width={['25%', '25%', width * 0.1292]}
            src={Sig1}
          />
        </Flex>
        <Flex
          flexDirection="row"
          justifyContent="flex-end"
          pt={[32]}
          pb={['20px', '20px', '182px']}
          pr={
            menuItems[currentMenuItem].link === 'researchers'
              ? width * 0.0729
              : width * 0.2167
          }
        >
          <Button
            color="dark"
            to="/about"
            onClick={() => {
              if (currentMenuItem === 5) {
                setCurrentMenuItem(0);
              } else {
                setCurrentMenuItem(currentMenuItem + 1);
              }
            }}
            arrow="right"
          >
            {currentMenuItem === 5
              ? menuItems[0].title
              : menuItems[currentMenuItem + 1].title}
          </Button>
        </Flex>
        <RelatedProjectsContainer />
        <Footer />
      </Flex>
    </React.Fragment>
  );
}

export default AboutPage;
