import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useMediaQuery } from 'react-responsive';

import { Storage, Logger } from 'aws-amplify';

import { Flex, Text } from 'rebass';

import { useSpring, animated as a } from 'react-spring';

const logger = new Logger('Storage.S3Image');

function ProjectContainer({
  item,
  height,
  width,
  screenWidth,
  screenHeight,
  top,
  left,
  staggered,
}) {
  const [project, setProject] = useState(item);
  const [image, setImage] = useState('');

  const [hoverState, setHoverState] = useState(false);

  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  const CustomAnimation = useSpring({
    opacity: !hoverState ? '0' : '1',
    right: !hoverState ? '-200px' : '0px',
  });

  const resetState = () => {
    setHoverState(false);
  };

  useEffect(() => {
    resetState();
    setupProject();
  }, []);

  const CustomAnimatedFlex = styled(a.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    bottom: 0;
    background: #ffffff;
    border-left: 4px solid red;
    margin: 5px 0px 0px 0px;
    overflow: hidden;
    padding: 34px;
  `;

  let PX;
  let PB;
  let SX;
  let PT;
  let WIDTH;
  let HEIGHT;

  if (staggered) {
    PX = [screenWidth * 0.0933, screenWidth * 0.0933, screenWidth * 0.0078];
    PB = isTabletMobile ? '10px' : screenHeight * 0.0324;
    PT = isTabletMobile ? '10px' : screenHeight * 0.0324;
    SX = {
      overflow: 'hidden',
    };
    HEIGHT = isTabletMobile ? '450px' : screenHeight * 0.5926;
    WIDTH = isTabletMobile ? '100%' : screenWidth * 0.2792;
  } else {
    PX = [];
    PB = [];
    PT = [];
    SX = {
      position: 'absolute',
      minWidth: width,
      minHeight: height,
      overflow: 'hidden',
      top,
      left,
    };
    HEIGHT = height;
    WIDTH = width;
  }

  const setupProject = async () => {
    if (item !== undefined) {
      setProject(item);
      getImageSource(item.featuredImage.key, null, null, null);
    }
  };

  const getImageSource = (key, newLevel, track, identityId) => {
    Storage.get(key, { level: newLevel || 'public', track, identityId })
      .then(url => {
        setImage(url);
      })
      .catch(err => logger.debug(err));
  };

  return (
    <Flex
      key={project ? project.id : 'Box'}
      px={PX}
      pt={PT}
      pb={PB}
      sx={SX}
      maxWidth="100vw"
      height="auto"
      flexDirection="row"
      flexWrap="wrap"
    >
      <Link
        onMouseOver={() => setHoverState(true)}
        onFocus={() => {}}
        onMouseLeave={() => setHoverState(false)}
        style={{ textDecoration: 'none' }}
        to={`/project/${project ? project.id : null}`}
      >
        <Flex
          sx={{
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            minWidth: WIDTH,
            minHeight: HEIGHT,
            width: WIDTH,
            height: HEIGHT,
          }}
        >
          <CustomAnimatedFlex style={CustomAnimation}>
            <Text
              sx={{
                color: '#151417',
                fontSize: '24px',
                lineHeight: '28px',
                fontFamily: 'archia',
              }}
            >
              {project ? project.title : 'Error'}
            </Text>
            <Text
              sx={{
                color: '#868686',
                fontSize: '16px',
                lineHeight: '25px',
                fontFamily: 'archia',
              }}
              my="14px"
            >
              {project ? project.category.label : 'Error'}
            </Text>
          </CustomAnimatedFlex>
        </Flex>
      </Link>
    </Flex>
  );
}

ProjectContainer.propTypes = {
  item: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  screenWidth: PropTypes.number,
  screenHeight: PropTypes.number,
  top: PropTypes.string,
  left: PropTypes.string,
  staggered: PropTypes.bool,
};

export default ProjectContainer;
