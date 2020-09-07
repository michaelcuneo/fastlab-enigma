import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Image } from 'rebass';

import ParsedContent from 'components/ParsedContent';
import SideMenu from 'components/SideMenu';
import TopMenu from 'components/TopMenu';
import Button from 'components/Button';

import ArtworksContainer from 'containers/ArtworksContainer';

import { DetailHeader } from 'components/DetailHeader';
import { DetailText } from 'components/DetailText';

import Sig1 from 'images/scribbles_mark-1-white.svg';

import { menuItems } from './MenuItems';

const BiomesComponent = ({ width, isTabletMobile }) => {
  const [currentMenuItem, setCurrentMenuItem] = useState(0);

  return (
    <React.Fragment>
      <Box
        pt={['40px', '40px', '182px']}
        pb={['40px']}
        px={[width * 0.0933, width * 0.0933, width * 0.0729]}
      >
        <Button color="dark" to="/exhibits" arrow="left">
          Back to Exhibitions
        </Button>
      </Box>
      <Flex
        flexDirection={isTabletMobile ? 'column' : 'row'}
        justifyContent="flex-begin"
        alignItems="flex-begin"
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
              flexDirection="column"
              pl={['0px', '0px', width * 0.0802]}
              sx={{ position: 'relative', minWidth: width * 0.4229 }}
            >
              <DetailHeader>{menuItems[currentMenuItem].title}</DetailHeader>
              <DetailText pr={['0px', '0px', width * 0.1432]}>
                <ParsedContent content={menuItems[currentMenuItem].details} />
              </DetailText>
              {menuItems[currentMenuItem].link === 'artworks' && (
                <ArtworksContainer width={width} />
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
        pr={[0, 0, width * 0.2167]}
      >
        <Button
          color="dark"
          to="/biomes"
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

BiomesComponent.propTypes = {
  width: PropTypes.number,
  isTabletMobile: PropTypes.bool,
};

export default BiomesComponent;
