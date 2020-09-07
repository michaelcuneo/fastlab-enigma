import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Flex, Image } from 'rebass';

import ParsedContent from 'components/ParsedContent';
import SideMenu from 'components/SideMenu';
import TopMenu from 'components/TopMenu';
import Button from 'components/Button';

import { DetailHeader } from 'components/DetailHeader';
import { DetailText } from 'components/DetailText';

import Sig1 from 'images/scribbles_mark-1-white.svg';

import { menuItems } from './menuItems';
import ResearchersContainer from '../ResearchersContainer';

const AreasContainer = ({ width, isTabletMobile }) => {
  const [currentMenuItem, setCurrentMenuItem] = useState(0);

  const { innerHeight } = window;

  let SX;

  if (isTabletMobile) {
    SX = {
      position: 'relative',
      background: '#151417',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    };
  } else {
    SX = {
      position: 'relative',
      marginTop: `-${innerHeight - 400}px`,
      background: '#151417',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    };
  }

  return (
    <Flex flexDirection="column" width="100%" sx={SX}>
      <Flex
        sx={{
          position: 'relative',
        }}
        flexDirection={isTabletMobile ? 'column' : 'row'}
        justifyContent="flex-begin"
        alignItems="flex-begin"
        pt={['40px', '40px', '182px']}
        pb={['40px', '40px', '182px']}
        px={[width * 0.0933, width * 0.0933, width * 0.0729]}
      >
        {isTabletMobile ? (
          <React.Fragment>
            <TopMenu
              menuItems={menuItems}
              currentMenuItem={currentMenuItem}
              setCurrentMenuItem={setCurrentMenuItem}
              isTabletMobile={isTabletMobile}
            />
            <Flex
              height="auto"
              flexDirection="column"
              pt={['40px', '40px']}
              pl={['0px', '0px', width * 0.0802]}
              sx={{ position: 'relative', minWidth: width * 0.4229 }}
            >
              {menuItems[currentMenuItem].link === 'researchers' ? (
                <ResearchersContainer width={width} />
              ) : (
                <React.Fragment>
                  <DetailHeader pt="10px" pb="30px">
                    {menuItems[currentMenuItem].title}
                  </DetailHeader>
                  <DetailText pr={['0px', '0px', width * 0.1432]}>
                    <ParsedContent
                      content={menuItems[currentMenuItem].details}
                    />
                  </DetailText>
                </React.Fragment>
              )}
            </Flex>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <SideMenu
              menuItems={menuItems}
              currentMenuItem={currentMenuItem}
              setCurrentMenuItem={setCurrentMenuItem}
              isTabletMobile={isTabletMobile}
            />
            <Flex
              height="auto"
              flexDirection="column"
              pl={['0px', '0px', width * 0.0802]}
              sx={{ position: 'relative', minWidth: width * 0.4229 }}
            >
              {menuItems[currentMenuItem].link === 'researchers' ? (
                <ResearchersContainer width={width} />
              ) : (
                <React.Fragment>
                  <DetailHeader pt="10px" pb="30px">
                    {menuItems[currentMenuItem].title}
                  </DetailHeader>
                  <DetailText pr={['0px', '0px', width * 0.1432]}>
                    <ParsedContent
                      content={menuItems[currentMenuItem].details}
                    />
                  </DetailText>
                </React.Fragment>
              )}
            </Flex>
          </React.Fragment>
        )}
      </Flex>
      <Flex sx={{ position: 'relative' }}>
        <Image
          sx={{
            position: 'absolute',
            right: `${(width * 0.1292) / 2}px !important`,
            bottom: 0,
          }}
          width={['25%', '25%', width * 0.1292]}
          src={Sig1}
        />
      </Flex>
      <Flex
        width="100%"
        flexDirection="row"
        justifyContent="flex-end"
        pt={[32]}
        pb={['20px', '20px', '182px']}
        pr={
          menuItems[currentMenuItem].link === 'researchers'
            ? width * 0.0729
            : width * 0.2167
        }
      >
        <Button
          color="dark"
          to="/areas"
          onClick={() => {
            if (currentMenuItem === 4) {
              setCurrentMenuItem(0);
            } else {
              setCurrentMenuItem(currentMenuItem + 1);
            }
          }}
          arrow="right"
        >
          {currentMenuItem === 4
            ? menuItems[0].title
            : menuItems[currentMenuItem + 1].title}
        </Button>
      </Flex>
    </Flex>
  );
};

AreasContainer.propTypes = {
  width: PropTypes.number,
  isTabletMobile: PropTypes.bool,
};

export default AreasContainer;
