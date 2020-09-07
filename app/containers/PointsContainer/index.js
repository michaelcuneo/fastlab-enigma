import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Image } from 'rebass';
import { Link } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

import Point1 from 'images/Point_One.svg';
import Point2 from 'images/Point_Two.svg';
import Point3 from 'images/Point_Three.svg';
import Point4 from 'images/Point_Four.svg';

import { PointText } from './PointText';
import { PointHeader } from './PointHeader';

import { MobilePointText } from './MobilePointText';
import { MobilePointHeader } from './MobilePointHeader';

import messages from './messages';

const PointsContainer = ({ width, height, isTabletMobile }) => {
  const mobileHeaderPadding = '0px';
  const headerPadding = '52px';

  return isTabletMobile ? (
    <Flex
      pt={['60px', '60px', '114px']}
      pb="60px"
      px={width * 0.0827}
      justifyContent="space-between"
      flexDirection="column"
      style={{ position: 'relative', background: '#151417' }}
    >
      <Link to="/projects">
        <Flex
          flexDirection="row"
          alignItems="flex-begin"
          width="100%"
          pb="60px"
        >
          <Box width={width * 0.1813} px="15px">
            <Image
              height={width * 0.1813}
              width={width * 0.1813}
              src={Point1}
              alt="Point One"
            />
          </Box>
          <Box width={width * 0.5973}>
            <MobilePointHeader pt={mobileHeaderPadding} pb={height * 0.0102}>
              <FormattedMessage {...messages.pointone} />
            </MobilePointHeader>
            <MobilePointText>
              <FormattedMessage {...messages.point1message} />
            </MobilePointText>
          </Box>
        </Flex>
      </Link>
      <Link to="/about">
        <Flex
          flexDirection="row"
          alignItems="flex-begin"
          width="100%"
          pb="60px"
        >
          <Box width={width * 0.1813} px="15px">
            <Image
              height={width * 0.1813}
              width={width * 0.1813}
              src={Point2}
              alt="Point Two"
            />
          </Box>
          <Box width={width * 0.5973}>
            <MobilePointHeader pt={mobileHeaderPadding} pb={height * 0.0102}>
              <FormattedMessage {...messages.pointtwo} />
            </MobilePointHeader>
            <MobilePointText>
              <FormattedMessage {...messages.point2message} />
            </MobilePointText>
          </Box>
        </Flex>
      </Link>
      <Link to="/">
        <Flex
          flexDirection="row"
          alignItems="flex-begin"
          width="100%"
          pb="60px"
        >
          <Box width={width * 0.1813} px="15px">
            <Image
              height={width * 0.1813}
              width={width * 0.1813}
              src={Point3}
              alt="Point Three"
            />
          </Box>
          <Box width={width * 0.5973}>
            <MobilePointHeader pt={mobileHeaderPadding} pb={height * 0.0102}>
              <FormattedMessage {...messages.pointthree} />
            </MobilePointHeader>
            <MobilePointText>
              <FormattedMessage {...messages.point3message} />
            </MobilePointText>
          </Box>
        </Flex>
      </Link>
      <Link to="/areas">
        <Flex
          flexDirection="row"
          alignItems="flex-begin"
          width="100%"
          pb="60px"
        >
          <Box width={width * 0.1813} px="15px">
            <Image
              height={width * 0.1813}
              width={width * 0.1813}
              src={Point4}
              alt="Point Four"
            />
          </Box>
          <Box width={width * 0.5973}>
            <MobilePointHeader pt={mobileHeaderPadding} pb={height * 0.0102}>
              <FormattedMessage {...messages.pointfour} />
            </MobilePointHeader>
            <MobilePointText>
              <FormattedMessage {...messages.point4message} />
            </MobilePointText>
          </Box>
        </Flex>
      </Link>
    </Flex>
  ) : (
    <Flex
      pt={['80px', '80px', '114px']} // Distance from Landing Container to first image.
      pb="80px" // Distance from Point Container to first image in showcase.
      px={width * 0.0827}
      alignItems="baseline"
      justifyContent="space-between"
      style={{ position: 'relative', background: '#151417' }}
    >
      <Link to="/projects">
        <Flex flexDirection="column" width={width * 0.1302}>
          <Image
            height={width * 0.0677}
            width={width * 0.0677}
            src={Point1}
            alt="Point One"
          />
          <PointHeader pt={headerPadding} pb={height * 0.0102}>
            <FormattedMessage {...messages.pointone} />
          </PointHeader>
          <PointText>
            We carry out research at the intersection of Art, Science and
            Technology.
          </PointText>
        </Flex>
      </Link>
      <Link to="/about">
        <Flex flexDirection="column" width={[width * 0.1302]}>
          <Image
            height={width * 0.0677}
            width={width * 0.0677}
            src={Point2}
            alt="Point Two"
          />
          <PointHeader pt={headerPadding} pb={height * 0.0102}>
            <FormattedMessage {...messages.pointtwo} />
          </PointHeader>
          <PointText>
            We offer organisations insights, analysis, and tools to help them
            tackle the constantly evolving challenge of change.
          </PointText>
        </Flex>
      </Link>
      <Link to="/">
        <Flex flexDirection="column" width={[width * 0.1302]}>
          <Image
            height={width * 0.0677}
            width={width * 0.0677}
            src={Point3}
            alt="Point Three"
          />
          <PointHeader pt={headerPadding} pb={height * 0.0102}>
            <FormattedMessage {...messages.pointthree} />
          </PointHeader>
          <PointText>
            We help forward-thinking organisations build a framework within
            their teams to support consistent creativity and innovation.
          </PointText>
        </Flex>
      </Link>
      <Link to="/areas">
        <Flex flexDirection="column" width={[width * 0.1302]}>
          <Image
            height={width * 0.0677}
            width={width * 0.0677}
            src={Point4}
            alt="Point Four"
          />
          <PointHeader pt={headerPadding} pb={height * 0.0102}>
            <FormattedMessage {...messages.pointfour} />
          </PointHeader>
          <PointText>
            We help organisations engrain brilliant thinking into their culture.
          </PointText>
        </Flex>
      </Link>
    </Flex>
  );
};

PointsContainer.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  isTabletMobile: PropTypes.bool,
};

export default PointsContainer;
