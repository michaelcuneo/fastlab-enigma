import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Flex, Box, Text } from 'rebass';

export const StaffName = styled(Text)`
  text-transform: uppercase;
  font-family: rigid-square, sans-serif;
  font-weight: 200;
  font-style: normal;
  color: #fff;
`;

export const ProjectLink = styled(Link)`
  text-transform: uppercase;
  font-family: rigid-square, sans-serif;
  font-weight: 200;
  font-style: normal;
  color: #ffd200;

  &:link {
    color: #ffd200;
  }

  &:visited {
    color: #ffd200;
  }

  &:hover {
    color: white;
  }

  &:active {
    color: #ffd200;
  }

  &:focus {
    color: #ffd200;
  }
`;

export const DetailPanelName = styled(Box)`
  text-transform: uppercase;
  font-family: rigid-square, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #fff;
`;

export const DetailPanelTitle = styled(Box)`
  text-transform: uppercase;
  font-family: rigid-square, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #fff;
`;

export const DetailPanelBio = styled(Box)`
  font-family: rigid-square, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #fff;
`;

export const DetailPanelContactEntry = styled(Box)`
  text-transform: uppercase;
  font-family: rigid-square, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #fff;
`;

export const ProjectName = styled(Text)`
  text-transform: uppercase;
  font-family: rigid-square, sans-serif;
  font-weight: 200;
  font-style: normal;
`;

export const DetailPanelStaff = styled(Flex)`
  text-transform: uppercase;
  font-family: rigid-square, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1em;
  color: black;
`;

export const DetailPanelKeys = styled(Text)`
  text-transform: uppercase;
  font-family: rigid-square, sans-serif;
  font-weight: 200;
  font-style: normal;
  color: black;
`;

export const DetailPanelDetails = styled(Text)`
  font-family: rigid-square, sans-serif;
  font-weight: 200;
  font-style: normal;
  color: black;
`;

export const KeyLink = styled(Link)`
  text-transform: uppercase;
  font-family: rigid-square, sans-serif;
  font-weight: 400;
  font-size: 1em;
  font-style: normal;
  margin: 3px;
  padding: 0 1em 0 0;

  &:link {
    color: #ec184a;
  }

  &:visited {
    color: #ec184a;
  }

  &:hover {
    color: black;
  }

  &:active {
    color: #ec184a;
  }

  &:focus {
    color: #ec184a;
  }
`;

export const DeleteDiv = styled.div`
  text-decoration: none;
  user-select: none;
  outine: 0;
  user-drag: none;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  font-family: brother-1816, sans-serif;
  font-weight: 600;
  font-size: 1.4vh;
  color: white;
  text-transform: uppercase;
`;
