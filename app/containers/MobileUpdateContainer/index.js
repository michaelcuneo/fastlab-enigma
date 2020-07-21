import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import moment from 'moment';

import { Flex, Box, Text } from 'rebass';

const MobileUpdateContainer = ({ item, width }) => {
  const [post, setPost] = useState(item);
  const [image, setImage] = useState('');

  useEffect(() => {
    setupPost();
  }, []);

  const setupPost = async () => {
    if (item !== undefined) {
      setPost(item);
      getImageSource(`public/${item.featuredImage.key}`);
    }
  };

  const getImageSource = imgKey => {
    const domain = 'https://d3l78fpbbpsayf.cloudfront.net/';

    const request = {
      bucket: 'fastlab-master-20190705141744-storage164059-master',
      key: imgKey,
      edits: {
        // smartCrop: true,
        normalize: true,
        // grayscale: true,
        sharpen: true,
        // blur: 5,
        // rotate: 180,
        resize: {
          width: 536,
          height: 382,
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
      width="100%"
      height="100%"
      flexDirection="row"
      flexWrap="wrap"
      px={width * 0.0827}
      mb="20px"
    >
      <Link
        style={{ width: '100%', textDecoration: 'none' }}
        to={`/update/${item.id}`}
      >
        <Box sx={{ position: 'relative' }}>
          <Flex
            alignItems="flex-end"
            justifyContent="flex-end"
            height="220px"
            minWidth="auto"
            width="auto"
            sx={{
              background: `url(${image})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <Flex
              sx={{
                fontFamily: 'Jetbrains-Bold',
                color: 'white',
                top: '12px',
                left: '12px',
                right: '12px',
                background: '#151417',
                position: 'absolute',
                padding: '12px',
              }}
            >
              <Text overflow="wrap">{post.title}</Text>
            </Flex>
          </Flex>
          <Flex
            px="20px"
            pt="20px"
            height="115px"
            flexDirection="column"
            justifyContent="space-between"
            sx={{
              overflow: 'hidden',
              maxWidth: width,
              height: width / 1.956,
              background: '#ffffff',
            }}
          >
            <Flex maxWidth="100%" flexDirection="row">
              <Text
                sx={{
                  color: '#151417',
                  fontSize: '20px',
                  lineHeight: '25px',
                  fontFamily: 'archiaregular',
                  overflow: 'hidden',
                }}
              >
                {post.title}
              </Text>
            </Flex>
            <Flex maxWidth="100%" flexDirection="row">
              <Text
                sx={{
                  flex: 'auto',
                  color: '#b9b9b9',
                  fontSize: '15px',
                  lineHeight: '20px',
                  fontFamily: 'archiaregular',
                }}
              >
                {moment(post.date).format('D MMM')}
              </Text>
              <Text
                sx={{ color: '#868686', fontSize: '14px', lineHeight: '20px' }}
                mb="34px"
              >
                {post.tags ? post.tags : 'No Tags'}
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Link>
    </Flex>
  );
};

MobileUpdateContainer.propTypes = {
  item: PropTypes.object,
  width: PropTypes.number,
};

export default MobileUpdateContainer;
