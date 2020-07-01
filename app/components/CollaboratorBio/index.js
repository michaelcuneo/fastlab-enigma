import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Flex, Box, Text } from 'rebass';

import StaffLink from './StaffLink';

const StyledSubHeader = ({ link, to, children }) => {
  const HeaderLinkHref = styled.a`
    font-face: 'jetbrains-medium';
    type-size: 16px;
    line-height: 22px;
    text-decoration: none;
    color: white;
  `;

  const HeaderLinkTo = styled(Link)`
    font-face: 'jetbrains-medium';
    type-size: 16px;
    line-height: 22px;
    text-decoration: none;
    color: white;
  `;

  return to ? (
    <HeaderLinkTo to={link}>{children}</HeaderLinkTo>
  ) : (
    <HeaderLinkHref href={link}>{children}</HeaderLinkHref>
  );
};

StyledSubHeader.propTypes = {
  link: PropTypes.string,
  to: PropTypes.bool,
  children: PropTypes.node,
};

const CollaboratorBio = ({ width, data }) => {
  const containerWidth = width * 0.1786;

  const StyledMenu = styled(Box)`
    background: #151417;
    z-index: 99999;
  `;

  const StyledText = styled(Text)`
    font-face: 'jetbrains-medium';
    type-size: 20px;
    line-height: 25px;
    color: #0ff48d;
  `;

  return (
    <StyledMenu
      width={containerWidth}
      minWidth={containerWidth}
      maxWidth={containerWidth}
      height="auto"
    >
      <Link to={`/researcher/${data.id}`}>
        <Flex alignItems="center">
          <Box p={2}>
            <StaffLink
              width={width}
              typeSize={['10px', '12px', '14px']}
              staff={data}
            />
          </Box>
          <Box p={2}>
            <Flex flexDirection="column">
              <Box>
                <StyledText>
                  {data.firstName} {data.lastName}
                </StyledText>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Link>
    </StyledMenu>
  );
};

CollaboratorBio.propTypes = {
  width: PropTypes.number,
  data: PropTypes.object,
};

export default CollaboratorBio;
