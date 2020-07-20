import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Flex, Box, Text } from 'rebass';

import StaffLink from './StaffLink';

import { StyledMenu } from './StyledMenu';
import { StyledText } from './StyledText';
import { StyledHeader } from './StyledHeader';
import { StyledSubText } from './StyledSubText';
import { StyledLine } from './StyledLine';

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

const StyledSubHeader = ({ link, to, children }) =>
  to ? (
    <HeaderLinkTo to={link}>{children}</HeaderLinkTo>
  ) : (
    <HeaderLinkHref href={link}>{children}</HeaderLinkHref>
  );

StyledSubHeader.propTypes = {
  link: PropTypes.string,
  to: PropTypes.bool,
  children: PropTypes.node,
};

const BottomBio = ({ width, data }) => (
  <StyledMenu height="auto">
    <Flex width="100%" justifyContent="space-between" alignItems="center">
      <Box width="100%" m={3}>
        <StaffLink
          minWidth={width}
          width={width}
          typeSize={['10px', '12px', '14px']}
          staff={data}
        />
      </Box>
      <Box width="100%" m={3}>
        <Flex flexDirection="column">
          <Box>
            <StyledText>{data.firstName}</StyledText>
            <StyledText>{data.lastName}</StyledText>
          </Box>
          <Box>
            <StyledSubText>{data.title}</StyledSubText>
          </Box>
        </Flex>
      </Box>
    </Flex>
    <StyledLine />
    <Flex p={width * 0.0182}>
      <Box>
        <Flex pb="45px" flexDirection="column">
          <Box>
            <StyledHeader>Projects</StyledHeader>
          </Box>
          <Box>
            {data.projects.items.map(item => (
              <StyledSubHeader
                key={item.id}
                link={`/project/${item.project.id}`}
                to
              >
                <Text pt={2}>{item.project.title}</Text>
              </StyledSubHeader>
            ))}
          </Box>
        </Flex>
        <Flex pb="50px" flexDirection="column">
          <Box>
            <StyledHeader>Contact</StyledHeader>
          </Box>
          <Box>
            <StyledSubHeader link={`mailto:${data.email}`}>
              <Text pt={2}>{data.email}</Text>
            </StyledSubHeader>
            <StyledSubHeader link={data.website}>
              <Text pt={2}>University Profile</Text>
            </StyledSubHeader>
          </Box>
        </Flex>
      </Box>
    </Flex>
  </StyledMenu>
);

BottomBio.propTypes = {
  width: PropTypes.number,
  data: PropTypes.object,
};

export default BottomBio;
