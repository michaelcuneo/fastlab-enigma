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
import VideoHeader from 'containers/VideoHeader';
import RelatedProjectsContainer from 'containers/RelatedProjectsContainer';

import { Flex, Box, Text, Image } from 'rebass';

import Button from 'components/Button';

import messages from './messages';
import ResearchersContainer from '../ResearchersContainer';

function AboutPage({ width, height }) {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  const menuItems = [
    {
      id: 0,
      title: 'About Fastlab',
      link: 'about',
      details:
        '<p>Housed in the School of Creative Industries and Innovation Hub’s Honeysuckle building FASTLab carries out research and development at the intersection of Art, Science and Technology.</p><p>FASTLab is a Gateway to the University of Newcastle’s internationally recognised research centres, the expertise of staff, students and graduates, and the outstanding facilities the University has to offer.</p><p>Across its themes of Human Behaviour, Future Work, Transmedia Arts, Narrative possibilities and Connected Communities the FASTLab team thinks - among other things - about Innovation and enterprise; Technology (AI & Robotics); globalization; migration; aging; (in-work) poverty and inequality; macro-economic instability. FASTLab’s transdisciplinary team pursues a broad range of projects, from exhibitions and installations, performances and prototypes, to cooperation with the private sector, NGO’s and universities.',
    },
    {
      id: 1,
      title: 'FastLab and your business',
      link: 'business',
      details:
        '<p>New and emerging technologies and innovative business models are rapidly transforming life, business and the global economy. As digital technologies reshape and disrupt our world, businesses established in less turbulent times need to make complex and critical decisions to navigate this changed landscape.</p><p>We offer organisations real insights, analysis, and tools to help them tackle the constantly evolving challenge of change.</p>',
    },
    {
      id: 2,
      title: 'Funding and Support',
      link: 'funding',
      details:
        '<p>FASTLAB is the creative industries vehicle for connecting across the Australian Government’s nine STEM focused research priority centres.</p><p>FASTLAB recognises that STEM Research is key to discovery and that this is associated with Practical Quantitative Research Challenges However, the socialization of human behaviour that enables these discoveries to be usedeffectively, and impact society are part of our unique approach in the creativeindustries.</p><p>In a post-industrial era, competition is not just about the pursuit of efficiency. To attainsustainable economic growth and balanced social and environmental developments,we need a paradigm shift on how businesses, the government and the NGOs cancreate value through creativity and innovation. We need talents with new mind setsand skill sets to meet the opportunities and challenges of the 21st century.</p><p>Our Research focuses on human centred interactions, it harnesses human imagination, empathy, cooperation, co-design, design thinking, visualization, playfulness and creativity. This approach compliments and enhances the STEM Research. It enables a better understanding of the underlying systems of creativity, and motivations of humans. It provides new opportunities to solve Australia’s most important challenges.</p>',
    },
    {
      id: 3,
      title: 'Humans of FastLab',
      link: 'researchers',
      details: 'Nothing',
    },
    {
      id: 4,
      title: 'Join the FastLab team',
      link: 'join',
      details:
        '<p>There are a number of ways to work with FASTLab.</p><strong>You can take part in RAPID</strong><p>RAPID is series of research ‘sprints’ conducted over a 3-6 month period. EachRAPID sprint is a research project carried out between FASTLab researchers and anexternal partner (a community, business or NGO). RAPID provides financial,human and technological resources to enable partners to work together on user-driven real-world problems.</p><strong>You can enrol a research student</strong><p>Transmission offers organisations   a   new   avenue   for   improving   their   competitiveposition   and   renewing   their   business.Transmission   is   a   research   program   thatpresents an opportunity for organisations to design projects for our students, who aresupervised by FASTLab researchers in tandem with industry professionals.</p><strong>You can be a research student</strong>Transmission offers<ul><li>Masters and PhD</li><li>students a unique opportunity to undertake practice based research, gain a thorough understanding of innovation methods, tackle real-world business challenges and expand their professional networks.</li></ul><strong>You can commission workshops</strong><p>If   you’re   tired   of   consultants   wielding   post-it-notes   and   maker-pens   we   can   offer   acompletely   different   and   dynamic   format   for   your   next   workshop.   Our   playfulprocesses   deliver   results   and   a   high   level   of   participant   satisfaction.   FromHackathons   to   one-day   games   we   design   sessions   that   engage   all   your   staffensuring that everyone’s ideas are liberated. Whether you’re innovating, strategizing,team building or problem solving   – use our creative talent to get you to where youneed to be and enjoy the journey to get you there!</p><strong>You can contract us for research and consultancy</strong><p>This one doesn’t really need much more describing but our staff team have researchexpertise to help you evaluate the success of a current project or co-design a newone using (for example) innovation and Human-Centered Design research methodsthrough Visual Storytelling, Design Thinking, Design Ethnography, User Experiences(UX), Service Design, Co- & Participatory Design.You can ask us to build and test prototypes and pretotypes.....We can help you innovate your product as a service provider, help you reinvent yourrole and support it with digital frameworks and platforms, adding the customerexperience and your client ownership.</p><strong>You can come to a talk or a networking session</strong><p>We run keynotes and interactive talks to provoke and promote discussion about thethings that have been exercising us at any given time.</p><p>Sign up to our newsfeed for regular updates and come and introduce yourself.</p>',
    },
    {
      id: 5,
      title: 'Media information',
      link: 'media',
      details: 'There are currently no media releases at this stage',
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
          )}
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
