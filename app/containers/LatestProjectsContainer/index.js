import React from 'react';

import Button from 'components/Button';

import MarkGroup1 from 'images/Mask Group 2.png';
import MarkGroup2 from 'images/Mask Group 3.png';
import MarkGroup3 from 'images/Mask Group 4.png';
import MarkGroup4 from 'images/Mask Group 7.png';

import { Flex } from 'rebass';
import ProjectContainer from 'containers/ProjectContainer';

const LatestProjectsContainer = () => {
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
      <Flex
        flexDirection="column"
        sx={{ background: '#151417', zIndex: '1' }}
        justifyContent="space-around"
      >
        <Flex height="auto">
          <ProjectContainer
            width="554px"
            height="430px"
            offset="0px"
            data={fakeData[0]}
          />
          <ProjectContainer
            width="407px"
            height="506px"
            offset="212px"
            data={fakeData[1]}
          />
          <ProjectContainer
            width="421px"
            height="506px"
            offset="87px"
            data={fakeData[2]}
          />
          <ProjectContainer
            width="538px"
            height="506px"
            offset="41px"
            data={fakeData[3]}
          />
        </Flex>
      </Flex>
      <Flex
        width="100%"
        flexDirection="row"
        justifyContent="flex-end"
        sx={{ background: '#151417' }}
        pb={[100]}
      >
        <Button color="dark" to="/projects">
          Explore more projects
        </Button>
      </Flex>
    </React.Fragment>
  );
};

export default LatestProjectsContainer;
