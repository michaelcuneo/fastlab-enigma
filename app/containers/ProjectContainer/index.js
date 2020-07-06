import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useMediaQuery } from 'react-responsive';

import { Flex, Text } from 'rebass';

import Displacement from 'images/1.jpg';

import { useSpring, animated as a } from 'react-spring';

import Image from './Image';

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
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
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
    position: absolute;
    flex-direction: column;
    justify-content: center;
    // position: relative;
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
      zIndex: 3,
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
      zIndex: 3,
    };
    HEIGHT = height;
    WIDTH = width;
  }

  const setupProject = async () => {
    if (item !== undefined) {
      setProject(item);
      getImageSource1(`public/${item.featuredImage.key}`);
      getImageSource2(`public/${item.featuredImage.key}`);
    }
  };

  const getImageSource1 = imgKey => {
    const domain = 'https://d3l78fpbbpsayf.cloudfront.net/';

    const request = {
      bucket: 'fastlab-master-20190705141744-storage164059-master',
      key: imgKey,
      edits: {
        normalize: true,
        sharpen: true,
        resize: {
          width: 512,
          height: 512,
          fit: 'cover',
        },
      },
    };

    const strRequest = JSON.stringify(request);
    const encRequest = btoa(strRequest);
    const url = `${domain}${encRequest}`;

    setImage1(url);
  };

  const getImageSource2 = imgKey => {
    const domain = 'https://d3l78fpbbpsayf.cloudfront.net/';

    const request = {
      bucket: 'fastlab-master-20190705141744-storage164059-master',
      key: imgKey,
      edits: {
        normalize: true,
        sharpen: true,
        grayscale: true,
        resize: {
          width: 512,
          height: 512,
          fit: 'cover',
        },
      },
    };

    const strRequest = JSON.stringify(request);
    const encRequest = btoa(strRequest);
    const url = `${domain}${encRequest}`;

    setImage2(url);
  };

  return (
    <Flex
      key={project.id}
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
        to={`/project/${project.id}`}
      >
        <Flex
          sx={{
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            minWidth: WIDTH,
            minHeight: HEIGHT,
            width: WIDTH,
            height: HEIGHT,
          }}
        >
          <Image
            width={WIDTH}
            height={HEIGHT}
            url1={image1}
            url2={image2}
            disp={Displacement}
            intensity={0.1}
            hover={hoverState}
          />
          <CustomAnimatedFlex style={CustomAnimation}>
            <Text
              sx={{
                color: '#151417',
                fontSize: '24px',
                lineHeight: '28px',
                fontFamily: 'archiaregular',
              }}
            >
              {project.title}
            </Text>
            <Text
              sx={{
                color: '#868686',
                fontSize: '16px',
                lineHeight: '25px',
                fontFamily: 'archiaregular',
              }}
              my="14px"
            >
              {project.category.label}
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
