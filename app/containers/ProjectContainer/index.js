import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useMediaQuery } from 'react-responsive';

import { Flex, Text } from 'rebass';

// import Displacement from 'images/1.jpg';

import { useSpring, animated as a } from 'react-spring';

// import Image from './Image';

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

  useEffect(() => {
    resetState();
    setupProject();
  }, []);

  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  const CustomAnimation = useSpring({
    opacity: !hoverState ? '0' : '1',
    right: !hoverState ? '-200px' : '0px',
  });

  const resetState = () => {
    setHoverState(false);
  };

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
      getImageSource(`public/${item.featuredImage.key}`);
    }
  };

  const getImageSource = imgKey => {
    const domain = 'https://d3l78fpbbpsayf.cloudfront.net/';

    const request = {
      bucket: 'fastlab-master-20190705141744-storage164059-master',
      key: imgKey,
      edits: {
        normalize: true,
        sharpen: true,
        resize: {
          width: 538,
          fit: 'cover',
        },
      },
    };

    const strRequest = JSON.stringify(request);
    const encRequest = btoa(strRequest);
    const url = `${domain}${encRequest}`;

    setImage(url);
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
          {/*
          <Image
            width={width}
            height={height}
            url1={image}
            url2={image}
            disp={Displacement}
            intensity={0.8}
          />
          */}
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
