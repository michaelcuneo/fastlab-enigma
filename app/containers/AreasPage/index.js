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
      details:
        '<p>This group focuses on creating cultural assets and creative works in order to develop a broader understanding of social, cultural and symbolic capital (including sustainable economic capital).</p><p>These are the ambodiment and accumulation of knowledge, behaviours, pedagogies and skills which enrich the cultural environment and social networks of Australia. This includes the work of diverse communities and their creative traditions expressed through words, music, performance and visual art. The development of intercultural knowledge systems, intellectual property and IP rights in collaboration with indigenous people and communities are also key to this research group.</p>',
    },
    {
      id: 1,
      title: 'Future Works',
      link: 'future',
      image: FutureWorks,
      details:
        '<p>This group focuses on the future of work across the creative industries in a manner that moves beyond economic analyses and includes an examination of human interaction and creativity, empathy and wisdom as it relats to existing, new and emerging work envionments</p><p>The potential of artificial intelligence and robotics to assist and support humanity in meaningful and sustainable ways is key to this research, as is the crucual role of entrepreneurship, creative pedagogies, creative imagination and innovation.</p>',
    },
    {
      id: 2,
      title: 'Human Behaviour',
      link: 'human',
      image: HumanBehaviour,
      details:
        '<p>This group uses practise based research methods alongside traditional approaches to develop a deeper understanding of how humanity makes decisions to take actions toward positive, organisational, socio-cultural and political change.</p><p>It promotes mindfulness, empathy, health and well-being and improves and supports society, the environment and micro and macro economies. Intergenerational and intercultural research is important to these investigations.</p>',
    },
    {
      id: 3,
      title: 'Narrative Possibilities',
      link: 'narrative',
      image: NarrativePossibilities,
      details:
        '<p>This research group explores multi-sensoral approaches to narrative, framing and interpretation, encompassing linear as well as non-sequential and exprimental form. Spanning a divers range of media - from cartoons and illustrations to music, films, animation, games, smartphone apps, AR/VR data visualisation, projection and sonification.</p><p>This ground investigates the use and reception of these mediam as well as designing, deploying and evaluating new sensory experiences through revealing stories created within data by filters and algorithms to produce new narratives on existing and emerging platforms.</p>',
    },
    {
      id: 4,
      title: 'Transmedia Arts',
      link: 'transmedia',
      image: TransmediaArts,
      details: `<p>This theme expands our understanding of art, site, narrative, aesthetics and ethics, through diverse approaches to making. This research area draws on discursive histories, dynamic cultural traditions and contemporary creative expression across all forms of immersive media and technology, performance and material practices.</p><p>Through digital domains and new and existing archives, transmedia researchers bring audiences and creators together across 'exhibitionary complex' to explore and curate the creative 'contact zones' of the future.</p>`,
    },
  ];

  const [currentMenuItem, setCurrentMenuItem] = useState(0);

  const DetailHeader = styled(Box)`
    font-family: 'archiaregular', sans-serif;
    font-size: 40px;
    line-height: 25px;
    color: #ec184a;
  `;

  const DetailText = styled(Text)`
    font-family: 'archiaregular', sans-serif;
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
          <SideMenu
            width={width}
            height={height}
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
          <Button
            color="dark"
            to="/areas"
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
