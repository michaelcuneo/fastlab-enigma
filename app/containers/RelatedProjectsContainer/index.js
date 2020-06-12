import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'components/Button';

import MarkGroup1 from 'images/Mask Group 2.png';
import MarkGroup2 from 'images/Mask Group 3.png';
import MarkGroup3 from 'images/Mask Group 4.png';
import MarkGroup4 from 'images/Mask Group 7.png';

import { Flex, Box, Text } from 'rebass';

import Overlay from './Overlay';
import ProjectContainer from '../ProjectContainer';

const RelatedProjectsContainer = ({ width, height }) => {
  const StyledText = styled(Text)`
    font-size: 34pt;
    font-family: 'archiaregular', sans-serif;
    color: white;
  `;

  const fakeData = [
    {
      id: '1',
      title: 'Title One',
      image: MarkGroup1,
      updateTitle: 'Update Title One',
      updateDate: '17 Aug',
      updateDetails:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis',
      tags: 'tags, tags, other tags, taggies',
    },
    {
      id: '2',
      title: 'Title Two',
      image: MarkGroup2,
      updateTitle: 'Update Title Two',
      updateDate: '23 Jun',
      updateDetails:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis',
      tags: 'tags, tags, other tags, taggies',
    },
    {
      id: '3',
      title: 'Title Three',
      image: MarkGroup3,
      updateTitle: 'Update Title Three',
      updateDate: '18 Feb',
      updateDetails:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis',
      tags: 'tags, tags, other tags, taggies',
    },
    {
      id: '4',
      title: 'Title Four',
      image: MarkGroup4,
      updateTitle: 'Update Title Four',
      updateDate: '08 Nov',
      updateDetails:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis',
      tags: 'tags, tags, other tags, taggies',
    },
  ];

  return (
    <React.Fragment>
      <Flex flexDirection="column" width={width}>
        <Overlay width={width} />
        <Flex
          flexDirection="column"
          sx={{ background: '#EC184A' }}
          justifyContent="space-around"
          pl={[width * 0.0729]}
        >
          <Box pt={[172]}>
            <StyledText>Related Projects</StyledText>
          </Box>
          {/* Change this Flex to a slideable Horizontal Container */}
          <Flex
            sx={{ overflowX: 'scroll', flexDirection: 'row' }}
            minHeight="800px"
          >
            {fakeData.map(data => (
              <ProjectContainer
                key={data.id}
                width={width}
                height={height}
                data={data}
                staggered
              />
            ))}
          </Flex>
        </Flex>
        <Flex
          width="100%"
          flexDirection="row"
          justifyContent="flex-end"
          sx={{ background: '#EC184A' }}
          pb={[100]}
          pr={[width * 0.0729]}
        >
          <Button color="pink" to="/projects">
            Explore more projects
          </Button>
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

RelatedProjectsContainer.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default RelatedProjectsContainer;
