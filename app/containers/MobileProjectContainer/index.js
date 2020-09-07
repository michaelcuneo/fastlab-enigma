import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Flex, Text } from 'rebass';

function MobileProjectContainer({ width, item }) {
  const [project, setProject] = useState(item);
  const [image, setImage] = useState();

  useEffect(() => {
    setupProject();
  }, []);

  const setupProject = async () => {
    if (item !== undefined) {
      setProject(item);
      getImage(`public/${item.featuredImage.key}`);
    }
  };

  const getImage = imgKey => {
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

    setImage(url);
  };

  return (
    <Flex
      width="100%"
      flexDirection="row"
      flexWrap="wrap"
      px={width * 0.0827}
      mb="20px"
      sx={{ zIndex: 9999 }}
    >
      <Link
        style={{ width: '100%', textDecoration: 'none' }}
        to={`/project/${project.id}`}
      >
        <Flex
          alignItems="flex-end"
          justifyContent="flex-end"
          height="320px"
          sx={{
            background: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <Flex
            flexDirection="column"
            minWidth="100%"
            width="100%"
            p={width * 0.0827}
            sx={{
              background: 'white',
            }}
          >
            <Text
              sx={{
                color: '#151417',
                fontSize: '20px',
                lineHeight: '28px',
                fontFamily: 'archiaregular',
              }}
            >
              {project.title}
            </Text>
            <Text
              sx={{
                color: '#868686',
                fontSize: '10px',
                lineHeight: '15px',
                fontFamily: 'archiaregular',
              }}
            >
              {project.category.label}
            </Text>
          </Flex>
        </Flex>
      </Link>
    </Flex>
  );
}

MobileProjectContainer.propTypes = {
  item: PropTypes.object,
  width: PropTypes.number,
};

export default MobileProjectContainer;
