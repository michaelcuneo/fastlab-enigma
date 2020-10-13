import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import moment from 'moment';

import { Flex, Box, Text } from 'rebass';

import { Markup } from 'interweave';

const UpdateContainer = ({ item, width }) => {
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
    const domain = 'https://d32d35ekbziyl7.cloudfront.net/';

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

  const updateWidth = width * 0.2792;
  const updateImageHeight = (width * 0.2792) / 1.403;
  const updateTextHeight = (width * 0.2792) / 1.965;

  return (
    <Flex
      key={item.id}
      maxWidth={updateWidth}
      width={updateWidth}
      flexDirection="row"
      flexWrap="wrap"
      sx={{ zIndex: 5 }}
    >
      <Link style={{ textDecoration: 'none' }} to={`/update/${item.id}`}>
        <Box sx={{ position: 'relative' }}>
          <Flex
            sx={{
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              backgroundImage: `url(${image})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              overflow: 'hidden',
              width: updateWidth,
              height: updateImageHeight,
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
              width: updateWidth,
              height: updateTextHeight,
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

UpdateContainer.propTypes = {
  item: PropTypes.object,
  width: PropTypes.number,
};

export default UpdateContainer;
