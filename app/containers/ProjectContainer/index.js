import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Flex, Text } from 'rebass';

import Displacement from 'images/1.jpg';

import { CustomAnimatedFlex } from './CustomAnimatedFlex';
import { CustomAnimation } from './CustomAnimation';

import Image from './Image';

function ProjectContainer({ item, height, width, top, left, wrap }) {
  const [project, setProject] = useState(item);
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [hoverState, setHoverState] = useState(false);

  const { innerHeight } = window;

  useEffect(() => {
    resetState();
    setupProject();
    return () => {
      resetState();
    };
  }, []);

  const resetState = () => {
    setHoverState(false);
  };

  let PX;
  let PB;
  let SX;
  let PT;
  let WIDTH;
  let HEIGHT;

  if (wrap) {
    PX = ['10px', '10px', '2px'];
    PB = innerHeight * 0.0324;
    PT = innerHeight * 0.0324;
    SX = {
      overflow: 'hidden',
      position: 'relative',
      zIndex: 5,
    };
    HEIGHT = innerHeight * 0.5926;
    WIDTH = width * 0.2792;
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
      zIndex: 5,
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
          <CustomAnimatedFlex style={CustomAnimation(hoverState)}>
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
  top: PropTypes.string,
  left: PropTypes.string,
  wrap: PropTypes.bool,
};

export default ProjectContainer;
