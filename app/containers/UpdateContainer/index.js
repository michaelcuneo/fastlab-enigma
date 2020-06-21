import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import moment from 'moment';

import { Flex, Box, Text } from 'rebass';

import { Markup } from 'interweave';
import CustomS3Image from './CustomS3Image';

function UpdateContainer({ item, width }) {
  return (
    <Flex
      flexDirection="row"
      flexWrap="wrap"
      minWidth={width * 0.2865}
      width={width * 0.2865}
      px={['15px']}
      key={item.id}
    >
      <Link style={{ textDecoration: 'none' }} to={`/update/${item.id}`}>
        <Box sx={{ position: 'relative' }}>
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
            <Text overflow="wrap">{item.title}</Text>
          </Flex>
          <CustomS3Image
            style={{
              container: {
                width: `${width * 0.2865}`,
                height: '382px',
              },
              image: {
                width: `${width * 0.2865}`,
                height: '382px',
                objectFit: 'cover',
                objectPosition: 'center',
              },
            }}
            hoverStyle={{
              container: {
                width: `${width * 0.2865}`,
                height: '382px',
              },
              image: {
                width: `${width * 0.2865}`,
                height: '382px',
                objectFit: 'cover',
                objectPosition: 'center',
              },
            }}
            imgKey={item.featuredImage.key}
            src={item.featuredImage.key}
            alt={item.featuredImage.key}
            enableHover
          />
        </Box>
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          sx={{ background: '#ffffff' }}
          mt="5px"
          px="34px"
          pt="34px"
          height="274px"
        >
          <Flex width="100%" flexDirection="row">
            <Text
              sx={{
                maxWidth: '80%',
                color: '#151417',
                fontSize: '24px',
                lineHeight: '28px',
                fontFamily: 'archia',
                height: '28px',
                overflow: 'hidden',
              }}
            >
              {item.title}
            </Text>
            <Text
              sx={{
                maxWidth: '20%',
                flex: 'auto',
                color: '#b9b9b9',
                fontSize: '24px',
                lineHeight: '28px',
                fontFamily: 'archia',
              }}
            >
              {moment(item.date).format('D MMM')}
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
            <Markup content={item.data} noHtml />
          </Text>
          <Text
            sx={{ color: '#868686', fontSize: '14px', lineHeight: '20px' }}
            mb="34px"
          >
            {item.tags ? item.tags : 'No Tags'}
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
}

UpdateContainer.propTypes = {
  item: PropTypes.object,
  width: PropTypes.number,
};

export default UpdateContainer;
