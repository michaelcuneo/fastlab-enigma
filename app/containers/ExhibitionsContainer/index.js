import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Flex, Image } from 'rebass';

import ParsedContent from 'components/ParsedContent';
import SideMenu from 'components/SideMenu';
import TopMenu from 'components/TopMenu';
import Button from 'components/Button';

import { DetailHeader } from 'components/DetailHeader';
import { DetailText } from 'components/DetailText';

import ResearchersContainer from 'containers/ResearchersContainer';

import Sig1 from 'images/scribbles_mark-1-white.svg';

import { menuItems } from './MenuItems';

const ExhibitionsContainer = ({ width, isTabletMobile }) => {
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
              {menuItems[currentMenuItem].link === 'researchers' ? (
                <ResearchersContainer
                  width={width}
                  isTabletMobile={isTabletMobile}
                />
              ) : (
                <React.Fragment>
                  <DetailHeader>
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
              width={width}
              menuItems={menuItems}
              currentMenuItem={currentMenuItem}
              setCurrentMenuItem={setCurrentMenuItem}
            />
            <Flex
              flexDirection="column"
              pl={['0px', '0px', width * 0.0802]}
              sx={{ position: 'relative', minWidth: width * 0.4229 }}
            >
              {menuItems[currentMenuItem].link === 'researchers' ? (
                <ResearchersContainer />
              ) : (
                <React.Fragment>
                  <DetailHeader>
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
        flexDirection="row"
        justifyContent={isTabletMobile ? 'center' : 'flex-end'}
        pt={['40px', '40px', '105px']}
        pb={['40px', '40px', '105px']}
        pr={[
          0,
          0,
          menuItems[currentMenuItem].link === 'researchers'
            ? width * 0.0729
            : width * 0.2167,
        ]}
      >
        <Button color="dark" to={menuItems[currentMenuItem].link} arrow="right">
          Enter {menuItems[currentMenuItem].title}
        </Button>
      </Flex>
    </React.Fragment>
  );
};

ExhibitionsContainer.propTypes = {
  width: PropTypes.number,
  isTabletMobile: PropTypes.bool,
};

export default ExhibitionsContainer;
