import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ParsedContent from 'components/ParsedContent';
import SideMenu from 'components/SideMenu';
import TopMenu from 'components/TopMenu';

import { DetailHeader } from 'components/DetailHeader';
import { DetailText } from 'components/DetailText';

import Sig2 from 'images/scribbles_mark-2-white.svg';

import { Flex, Image } from 'rebass';

import Button from 'components/Button';
import { menuItems } from './menuItems';

const ProgramsContainer = ({ width, isTabletMobile }) => {
  const [currentMenuItem, setCurrentMenuItem] = useState(0);
  return (
    <React.Fragment>
      <Flex
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
            />
            <Flex
              flexDirection="column"
              pt={['40px', '40px']}
              pl={['0px', '0px', width * 0.0802]}
              sx={{ position: 'relative', minWidth: width * 0.4229 }}
            >
              <React.Fragment>
                <DetailHeader>{menuItems[currentMenuItem].title}</DetailHeader>
                <DetailText pr={['0px', '0px', width * 0.1432]}>
                  <ParsedContent content={menuItems[currentMenuItem].details} />
                </DetailText>
              </React.Fragment>
            </Flex>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <SideMenu
              width={width}
              menuItems={menuItems}
              currentMenuItem={currentMenuItem}
              setCurrentMenuItem={setCurrentMenuItem}
            />
            <Flex
              height="auto"
              flexDirection="column"
              pl={['0px', '0px', width * 0.0802]}
              sx={{ position: 'relative', minWidth: width * 0.4229 }}
            >
              <React.Fragment>
                <DetailHeader pt="10px" pb="30px">
                  {menuItems[currentMenuItem].title}
                </DetailHeader>
                <DetailText pr={['0px', '0px', width * 0.1432]}>
                  <ParsedContent content={menuItems[currentMenuItem].details} />
                </DetailText>
              </React.Fragment>
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
          src={Sig2}
        />
      </Flex>
      <Flex
        width="100%"
        flexDirection="row"
        justifyContent="flex-end"
        pt={[32]}
        pb={['40px', '40px', '182px']}
        pr={
          menuItems[currentMenuItem].link === 'researchers'
            ? width * 0.0729
            : width * 0.2167
        }
      >
        <Button
          color="dark"
          to="/programs"
          onClick={() => {
            if (currentMenuItem === 3) {
              setCurrentMenuItem(0);
            } else {
              setCurrentMenuItem(currentMenuItem + 1);
            }
          }}
          arrow="right"
        >
          {currentMenuItem === 3
            ? menuItems[0].title
            : menuItems[currentMenuItem + 1].title}
        </Button>
      </Flex>
    </React.Fragment>
  );
};

ProgramsContainer.propTypes = {
  width: PropTypes.number,
  isTabletMobile: PropTypes.bool,
};

export default ProgramsContainer;
