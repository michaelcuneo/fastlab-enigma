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

const SideBio = ({ width, data }) => {
  const containerWidth = width * 0.2073;

  const StyledMenu = styled(Box)`
    background: #151417;
    border: 1px solid #707070;
    border-radius: 40px;
    z-index: 99999;
  `;

  const StyledText = styled(Text)`
    font-face: 'jetbrains-medium';
    type-size: 20px;
    line-height: 25px;
    color: #0ff48d;
  `;

  const StyledSubText = styled(Text)`
    font-face: 'jetbrains-medium';
    type-size: 16px;
    line-height: 25px;
    padding: 2px;
  `;

  const StyledHeader = styled(Text)`
    font-face: 'jetbrains-medium';
    type-size: 14px;
    line-height: 22px;
    color: #0ff48d;
  `;

  const StyledLine = styled.hr`
    width: 100%;
    color: #707070;
  `;

  return (
    <StyledMenu
      width={containerWidth}
      minWidth={containerWidth}
      maxWidth={containerWidth}
      height="auto"
    >
      <Flex p={width * 0.0182} alignItems="center">
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
                <StyledSubHeader link={`/project/${item.project.id}`} to>
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
};

SideBio.propTypes = {
  width: PropTypes.number,
  data: PropTypes.object,
};

export default SideBio;
