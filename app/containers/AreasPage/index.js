import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Helmet } from 'react-helmet';

import { FormattedMessage } from 'react-intl';

import { useMediaQuery } from 'react-responsive';

import H2 from 'components/H2';
import ParsedContent from 'components/ParsedContent';
import SideMenu from 'components/SideMenu';
import Footer from 'components/Footer';

import Sig1 from 'images/scribbles_mark-1-white.svg';

import OverlayContainer from 'containers/OverlayContainer';
import RelatedProjectsContainer from 'containers/RelatedProjectsContainer';

import { Flex, Box, Text, Image } from 'rebass';

import Culture from 'images/culture_community.jpg';
import FutureWorks from 'images/future_works.jpg';
import HumanBehaviour from 'images/human_behaviour.jpg';
import NarrativePossibilities from 'images/narrative_possibilities.jpg';
import TransmediaArts from 'images/transmedia_arts.jpg';

import Button from 'components/Button';

import messages from './messages';
import ResearchersContainer from '../ResearchersContainer';

function AreasPage({ width, height }) {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  const menuItems = [
    {
      id: 0,
      title: 'Culture and Community',
      link: 'culture',
      image: Culture,
      details: '...',
    },
    {
      id: 1,
      title: 'Future Works',
      link: 'future',
      image: FutureWorks,
      details: '...',
    },
    {
      id: 2,
      title: 'Human Behaviour',
      link: 'human',
      image: HumanBehaviour,
      details: '...',
    },
    {
      id: 3,
      title: 'Narrative Possibilities',
      link: 'narrative',
      image: NarrativePossibilities,
      details: '...',
    },
    {
      id: 4,
      title: 'Transmedia Arts',
      link: 'transmedia',
      image: TransmediaArts,
      details: '...',
    },
  ];

  const [currentMenuItem, setCurrentMenuItem] = useState(0);

  const DetailHeader = styled(Box)`
    font-family: 'archia', sans-serif;
    font-size: 40px;
    line-height: 25px;
    color: #ec184a;
  `;

  const DetailText = styled(Text)`
    font-family: 'archia', sans-serif;
    font-size: 16px;
    line-height: 25px;
  `;

  const StyledGradientHeader = styled(Flex)`
    position: absolute;
    top: 144px;
    left: 0px;
    right: 0px;
    background-image: linear-gradient(rgba(0, 0, 0, 0), #151417);
    height: 256px;
    z-index: 2;
  `;

  const StyledFlexHeader = styled(Flex)`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 400px;
    align-items: center;
    padding: 0px 0px 0px ${isTabletMobile ? width * 0.096 : width * 0.2167}px;
    z-index: 3;
  `;

  const StyledImageHeader = styled(Image)`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
    height: 400px;
    align-items: center;
  `;

  return (
    <React.Fragment>
      <Helmet key="Helmet">
        <title>Rabbit Hole</title>
        <meta name="description" content="Fastlab Contact Page" />
      </Helmet>
      <StyledImageHeader src={menuItems[currentMenuItem].image} />
      <StyledFlexHeader>
        <H2>
          <FormattedMessage {...messages.header} />
          <span className="blink_me">_</span>
        </H2>
      </StyledFlexHeader>
      <StyledGradientHeader />
      <Flex
        width={width}
        flexDirection="column"
        sx={{
          position: 'absolute',
          height: 'auto',
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
          {!isTabletMobile && (
            <SideMenu
              width={width}
              height={height}
              menuItems={menuItems}
              currentMenuItem={currentMenuItem}
              setCurrentMenuItem={setCurrentMenuItem}
              isTabletMobile={isTabletMobile}
            />
          )}
          <Flex
            height="auto"
            flexDirection="column"
            pl={['0px', '0px', width * 0.0802]}
            sx={{ position: 'relative', minWidth: width * 0.4229 }}
          >
            {menuItems[currentMenuItem].link === 'researchers' ? (
              <ResearchersContainer width={width} />
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
          width="100%"
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
          {!isTabletMobile && (
            <Button
              color="dark"
              to="/about"
              onClick={() => {
                if (currentMenuItem === 4) {
                  setCurrentMenuItem(0);
                } else {
                  setCurrentMenuItem(currentMenuItem + 1);
                }
              }}
              arrow="right"
            >
              {currentMenuItem === 4
                ? menuItems[0].title
                : menuItems[currentMenuItem + 1].title}
            </Button>
          )}
        </Flex>
        <RelatedProjectsContainer width={width} height={height} />
        <Footer height={height} width={width} />
      </Flex>
      <OverlayContainer width={width} />
    </React.Fragment>
  );
}

AreasPage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default AreasPage;
