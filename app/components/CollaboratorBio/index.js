import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Flex, Box } from 'rebass';
import StaffLink from './StaffLink';

import { HeaderLinkA } from './HeaderLinkA';
import { HeaderLinkTo } from './HeaderLinkTo';

import { StyledMenu } from './StyledMenu';
import { StyledText } from './StyledText';

const StyledSubHeader = ({ link, to, children }) =>
  to ? (
    <HeaderLinkTo to={link}>{children}</HeaderLinkTo>
  ) : (
    <HeaderLinkA href={link}>{children}</HeaderLinkA>
  );

StyledSubHeader.propTypes = {
  link: PropTypes.string,
  to: PropTypes.bool,
  children: PropTypes.node,
};

const CollaboratorBio = ({ width, data }) => {
  const containerWidth = width * 0.1786;

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
