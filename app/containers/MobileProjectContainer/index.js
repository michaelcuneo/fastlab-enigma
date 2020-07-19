import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Flex, Text } from 'rebass';

function MobileProjectContainer({ item }) {
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
      maxWidth="100vw"
      width="100vw"
      height="auto"
      flexDirection="row"
      flexWrap="wrap"
    >
      <Link style={{ textDecoration: 'none' }} to={`/project/${project.id}`}>
        <Flex
          alignItems="flex-end"
          justifyContent="flex-end"
          sx={{
            background: `url(${image})`,
          }}
        >
          <Flex>
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
          </Flex>
        </Flex>
      </Link>
    </Flex>
  );
}

MobileProjectContainer.propTypes = {
  item: PropTypes.object,
};

export default MobileProjectContainer;
