import React from 'react';

import Button from 'components/Button';

import MarkGroup1 from 'images/Mask Group 2.png';
import MarkGroup2 from 'images/Mask Group 3.png';
import MarkGroup3 from 'images/Mask Group 4.png';
import MarkGroup4 from 'images/Mask Group 7.png';
import MarkGroup5 from 'images/Mask Group 8.png';
import MarkGroup6 from 'images/Mask Group 10.png';
import MarkGroup7 from 'images/Mask Group 5.png';

import { Flex } from 'rebass';
import ProjectContainer from 'containers/ProjectContainer';

const LatestProjectsContainer = () => {
  const fakeData = [
    {
      id: '1',
      title: 'Title One',
      image: MarkGroup1,
      tags: 'tags, tags, other tags, taggies',
    },
    {
      id: '2',
      title: 'Title Two',
      image: MarkGroup2,
      tags: 'tags, tags, other tags, taggies',
    },
    {
      id: '3',
      title: 'Title Three',
      image: MarkGroup3,
      tags: 'tags, tags, other tags, taggies',
    },
    {
      id: '4',
      title: 'Title Four',
      image: MarkGroup4,
      tags: 'tags, tags, other tags, taggies',
    },
    {
      id: '5',
      title: 'Title Five',
      image: MarkGroup5,
      tags: 'tags, tags, other tags, taggies',
    },
    {
      id: '6',
      title: 'Title Six',
      image: MarkGroup6,
      tags: 'tags, tags, other tags, taggies',
    },
    {
      id: '7',
      title: 'Title Seven',
      image: MarkGroup7,
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
        <Flex
          sx={{ position: 'relative' }}
          flexWrap="wrap"
          width="100%"
          height="1448px"
        >
          <ProjectContainer
            width={554}
            height={430}
            top="207px"
            left="0px"
            data={fakeData[0]}
          />
          <ProjectContainer
            width={407}
            height={506}
            top="419px"
            left="554px"
            data={fakeData[1]}
          />
          <ProjectContainer
            width={421}
            height={506}
            top="294px"
            left="961px"
            data={fakeData[2]}
          />
          <ProjectContainer
            width={538}
            height={506}
            top="41px"
            left="1382px"
            data={fakeData[3]}
          />
          <ProjectContainer
            width={292}
            height={416}
            top="637px"
            left="262px"
            data={fakeData[4]}
          />
          <ProjectContainer
            width={407}
            height={416}
            top="925px"
            left="830px"
            data={fakeData[5]}
          />
          <ProjectContainer
            width={407}
            height={506}
            top="657px"
            left="1382px"
            data={fakeData[6]}
          />
        </Flex>
      </Flex>
      <Flex
        width="100%"
        flexDirection="row"
        justifyContent="flex-end"
        sx={{ background: '#151417' }}
        pb={[100]}
        pr={['6.88vw']}
      >
        <Button color="dark" to="/projects">
          Explore more projects
        </Button>
      </Flex>
    </React.Fragment>
  );
};

export default LatestProjectsContainer;
