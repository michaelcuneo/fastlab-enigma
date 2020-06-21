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

import Sig2 from 'images/scribbles_mark-2-white.svg';

import OverlayContainer from 'containers/OverlayContainer';
import VideoHeader from 'containers/VideoHeader';
import RelatedProjectsContainer from 'containers/RelatedProjectsContainer';

import { Flex, Box, Text, Image } from 'rebass';

import Button from 'components/Button';

import messages from './messages';

function ProgramsPage({ width, height }) {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  const menuItems = [
    {
      id: 0,
      title: 'Rapid',
      link: 'rapid',
      details:
        '<p>Rapid is a fast-moving initiative to encourage cross-disciplinary research, innovation and industry engagement</p><p>RAPID is series of research ‘sprints’ conducted over a 3-6 month period.</p><p>Each RAPID sprint is a research project carried out between FASTLab researchers and an external partner (a community, business or NGO). RAPID provides financial, human and technological resources to enable partners to work together on user-driven real-world problems.</p>',
    },
    {
      id: 1,
      title: 'Transmission',
      link: 'transmission',
      details:
        '<p>Transmission is a research programme at the University of Newcastle’s Future Arts, Science and Technology Laboratory (FASTLab) employing the latest creative innovation methods fostering active university-industry collaboration.</p><p>Our research students develop a strong set of skills, enabling them to conduct agile, people centred research and development applied creatively in a business context.</p><p>Transmission offers organisations a new avenue for improving their competitive position and renewing their business.</p><p>Transmission builds bridges between academia, industry and community providing organisations with access to the latest research knowledge and the opportunity to address research questions that are the key to developing their organisations.',
    },
    {
      id: 2,
      title: 'Accelerator',
      link: 'accelerator',
      details:
        '<p>Accelerator is FASTLab’s gas-pedal for artists and entrepreneurs graduating from any School of Creative Industries program.</p<p>It enables emerging creative industry professionals to make money doing what they love, launching them to reach their full creative potential by providing access to</p><p><ul><li>paid projects commissioned by major creative companies</li><li>Workshops covering, sales and marketing, brand strategy and digital media.</li><li>Coaching from creative sector experts in areas such as Animation, Design, Film and TV, Music etc.</li><li>Introductions to our industry networks and investment partners.</li><li>Great publicity and PR opportunities.</li><li>Opportunities to present at Festival X</li><li>Hot-desking space</li><li>Access to FASTLab tools and facilities</li></ul><p>Creative small businesses founded by SOCI alumni will receive business mentoring, commercial training and advice, plus access to hot-desking facilities in University House and the Honeysuckle 1a</p>',
    },
    {
      id: 3,
      title: 'ZED Studio',
      link: 'zed',
      details:
        'Studio ZED is the School of Creative Industries Work Integrated Learning full service design studio at the University of Newcastle.</p><p>Established in response to market demand for student designers Studio ZED matches student designers with clients to work on live-briefs for course-work credits.</p><p>Clients range from University departments and services to NGO’s and charities who otherwise may not be in a position to commission quality brochures, websites or presentations.</p><p>Studio ZED provides students with relevant industry appropriate experience so that when they graduate they are better prepared for their careers in Visual Communication.</p><p>If you are a potential client wishing to support our students learning journey through commissioning students at Studio ZED please contact us HERE (ZED URL)</p><p>If you are a student designer wishing to build your portfolio or improve your skills working on live briefs for real world clients speak to any member of the VisComm design team or drop into the studio on the 2nd floor of University House, Auckland Street and introduce yourself.</p><p>And if you’re planning on postgraduate studies in Design, Studio ZED provides a studio environment and community of practice for design research that will help you in establishing professional relationships with practitioners in other creative fields.</p>',
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

  return (
    <React.Fragment>
      <Helmet key="Helmet">
        <title>Programs Page</title>
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
            />
          )}
          <Flex
            height="auto"
            flexDirection="column"
            pl={['0px', '0px', width * 0.0802]}
            sx={{ position: 'relative', minWidth: width * 0.4229 }}
          >
            <React.Fragment>
              <DetailHeader pt="10px" pb="30px">
                {menuItems[currentMenuItem].title}
              </DetailHeader>
              <DetailText pr={['0px', '0px', width * 0.1432]}>
                <ParsedContent content={menuItems[currentMenuItem].details} />
              </DetailText>
            </React.Fragment>
          </Flex>
        </Flex>
        <Flex sx={{ position: 'relative' }}>
          <Image
            sx={{
              position: 'absolute',
              right: `${(width * 0.1292) / 2}px !important`,
              top: 0,
            }}
            width={width * 0.1292}
            src={Sig2}
          />
        </Flex>
        <Flex
          width="100%"
          flexDirection="row"
          justifyContent="flex-end"
          pt={[32]}
          pb={['40px', '40px', '182px']}
          pr={
            menuItems[currentMenuItem].link === 'researchers'
              ? width * 0.0729
              : width * 0.2167
          }
        >
          {!isTabletMobile && (
            <Button
              color="dark"
              to="/programs"
              onClick={() => {
                if (currentMenuItem === 3) {
                  setCurrentMenuItem(0);
                } else {
                  setCurrentMenuItem(currentMenuItem + 1);
                }
              }}
              arrow="right"
            >
              {currentMenuItem === 3
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

ProgramsPage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ProgramsPage;
