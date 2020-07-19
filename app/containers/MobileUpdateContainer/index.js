import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import moment from 'moment';

import { Flex, Box, Text } from 'rebass';

import { Markup } from 'interweave';

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
      m="20px"
    >
      <Link
        style={{ width: '100%', textDecoration: 'none' }}
        to={`/update/${item.id}`}
      >
        <Box sx={{ position: 'relative' }}>
          <Flex
            alignItems="flex-end"
            justifyContent="flex-end"
            height="320px"
            minWidth="95%"
            width="95%"
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
            px="34px"
            pt="34px"
            flexDirection="column"
            justifyContent="space-between"
            sx={{
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              overflow: 'hidden',
              width,
              height: width / 1.956,
              background: '#ffffff',
            }}
          >
            <Flex
              width="100%"
              justifyContent="space-around"
              flexDirection="row"
            >
              <Text
                sx={{
                  maxWidth: '80%',
                  color: '#151417',
                  fontSize: '24px',
                  lineHeight: '28px',
                  fontFamily: 'archiaregular',
                  height: '28px',
                  overflow: 'hidden',
                }}
              >
                {post.title}
              </Text>
              <Text
                sx={{
                  maxWidth: '20%',
                  flex: 'auto',
                  color: '#b9b9b9',
                  fontSize: '24px',
                  lineHeight: '28px',
                  fontFamily: 'archiaregular',
                }}
              >
                {moment(post.date).format('D MMM')}
              </Text>
            </Flex>
            <Text
              sx={{
                color: '#151417',
                fontSize: '16px',
                lineHeight: '25px',
                height: '100px',
                overflow: 'hidden',
              }}
            >
              <Markup content={post.data} noHtml />
            </Text>
            <Text
              sx={{ color: '#868686', fontSize: '14px', lineHeight: '20px' }}
              mb="34px"
            >
              {post.tags ? post.tags : 'No Tags'}
            </Text>
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
