import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Image } from 'rebass';

import { FormattedMessage } from 'react-intl';

import Point1 from 'images/Point_One.svg';
import Point2 from 'images/Point_Two.svg';
import Point3 from 'images/Point_Three.svg';
import Point4 from 'images/Point_Four.svg';

import { PointHeader, PointText } from './PointText';

import messages from './messages';

const PointsContainer = ({ width }) => {
  const image1Scale = width * 0.0677; // 130px as a percentage of full height (1080)
  const image2Scale = width * 0.0844; // 100px as a percentage of full height (1080)
  const image3Scale = width * 0.0646; // 100px as a percentage of full height (1080)
  const image4Scale = width * 0.0661; // 100px as a percentage of full height (1080)

  const headerPadding = '52px';

  return (
    <Flex
      pt="150px" // Distance from Landing Container to first image.
      pb="80px" // Distance from Point Container to first image in showcase.
      px={width * 0.0688}
      alignItems="baseline"
      justifyContent="space-between"
      flexWrap="wrap"
      style={{ position: 'relative', background: '#151417' }}
    >
      <Flex flexDirection="column" width={width * 0.1302}>
        <Image
          height={image1Scale}
          width={image1Scale}
          src={Point1}
          alt="Point One"
        />
        <PointHeader pt={headerPadding} pb={window.innerHeight * 0.0102}>
          <FormattedMessage {...messages.pointone} />
        </PointHeader>
        <PointText>
          Short description here. Links through to section on About page.
        </PointText>
      </Flex>
      <Flex flexDirection="column" width={width * 0.1302}>
        <Image
          height={image2Scale}
          width={image2Scale}
          src={Point2}
          alt="Point Two"
        />
        <PointHeader pt={headerPadding} pb={window.innerHeight * 0.0102}>
          <FormattedMessage {...messages.pointtwo} />
        </PointHeader>
        <PointText>
          Short description here. Links through to section on About page.
        </PointText>
      </Flex>
      <Flex flexDirection="column" width={width * 0.1302}>
        <Image
          height={image3Scale}
          width={image3Scale}
          src={Point3}
          alt="Point Three"
        />
        <PointHeader pt={headerPadding} pb={window.innerHeight * 0.0102}>
          <FormattedMessage {...messages.pointthree} />
        </PointHeader>
        <PointText>
          Short description here. Links through to section on About page.
        </PointText>
      </Flex>
      <Flex flexDirection="column" width={width * 0.1302}>
        <Image
          height={image4Scale}
          width={image4Scale}
          src={Point4}
          alt="Point Four"
        />
        <PointHeader pt={headerPadding} pb={window.innerHeight * 0.0102}>
          <FormattedMessage {...messages.pointfour} />
        </PointHeader>
        <PointText>
          Short description here. Links through to section on About page.
        </PointText>
      </Flex>
    </Flex>
  );
};

PointsContainer.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default PointsContainer;
