import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Helmet } from 'react-helmet';

import { FormattedMessage } from 'react-intl';

import { useMediaQuery } from 'react-responsive';

import { Flex, Box, Text } from 'rebass';
import H2 from 'components/H2';
import ParsedContent from 'components/ParsedContent';
import SideMenu from 'components/SideMenu';
import Footer from 'components/Footer';

import OverlayContainer from 'containers/OverlayContainer';
import VideoHeader from 'containers/VideoHeader';
import RelatedProjectsContainer from 'containers/RelatedProjectsContainer';

import messages from './messages';
import ResearchersContainer from '../ResearchersContainer';

function AboutPage({ width, height }) {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  const menuItems = [
    {
      id: '1',
      title: 'About Fastlab',
      link: 'about',
      details:
        '<p>Housed in the School of Creative Industries and Innovation Hub’s Honeysuckle building FASTLab carries out research and development at the intersection of Art, Science and Technology.</p><p>FASTLab is a Gateway to the University of Newcastle’s internationally recognised research centres, the expertise of staff, students and graduates, and the outstanding facilities the University has to offer.</p><p>Across its themes of Human Behaviour, Future Work, Transmedia Arts, Narrative possibilities and Connected Communities the FASTLab team thinks - among other things - about Innovation and enterprise; Technology (AI & Robotics); globalization; migration; aging; (in-work) poverty and inequality; macro-economic instability. FASTLab’s transdisciplinary team pursues a broad range of projects, from exhibitions and installations, performances and prototypes, to cooperation with the private sector, NGO’s and universities.',
    },
    {
      id: '2',
      title: 'FastLab and your business',
      link: 'business',
      details: 'Nothing',
    },
    {
      id: '3',
      title: 'Funding and Support',
      link: 'funding',
      details: 'Nothing',
    },
    {
      id: '4',
      title: 'Fastlab Researchers',
      link: 'researchers',
      details: 'Nothing',
    },
    {
      id: '5',
      title: 'Join the FastLab team',
      link: 'join',
      details: 'Nothing',
    },
    {
      id: '6',
      title: 'Media information',
      link: 'media',
      details: 'Nothing',
    },
    {
      id: '7',
      title: 'FAQ',
      link: 'faq',
      details: 'Nothing',
    },
  ];

  const [currentMenuItem, setCurrentMenuItem] = useState(menuItems[0]);

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

  return (
    <React.Fragment>
      <Helmet key="Helmet">
        <title>About Page</title>
        <meta name="description" content="Fastlab Contact Page" />
      </Helmet>
      <VideoHeader width={width} height={height} />
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
          borderTop: '1px solid rgba(255, 255, 255, 0.4)',
        }}
      >
        <Flex
          sx={{
            position: 'relative',
          }}
          justifyContent="flex-begin"
          alignItems="flex-begin"
          py="182px"
          px={width * 0.0729}
        >
          <SideMenu
            width={width}
            height={height}
            menuItems={menuItems}
            currentMenuItem={currentMenuItem}
            setCurrentMenuItem={setCurrentMenuItem}
          />
          <Flex
            height="auto"
            flexDirection="column"
            pl={width * 0.0802}
            sx={{ position: 'relative', minWidth: width * 0.4229 }}
          >
            {currentMenuItem.link === 'researchers' ? (
              <ResearchersContainer width={width} />
            ) : (
              <React.Fragment>
                <DetailHeader pt="10px" pb="30px">
                  {currentMenuItem.title}
                </DetailHeader>
                <DetailText pr={width * 0.1432}>
                  <ParsedContent content={currentMenuItem.details} />
                </DetailText>
              </React.Fragment>
            )}
          </Flex>
        </Flex>
        <RelatedProjectsContainer width={width} height={height} />
        <Footer height={height} width={width} />
      </Flex>
      <OverlayContainer width={width} />
    </React.Fragment>
  );
}

AboutPage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default AboutPage;
