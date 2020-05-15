import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { FormattedMessage } from 'react-intl';

import IconNav from 'images/icon-nav-trigger.svg';
import CloseNav from 'images/icon-close.svg';
import FastlabIcon from './FastlabIcon';

import LinksDiv from './LinksDiv';

import NavBar from './NavBar';
import { HeaderLink, SmallLink } from './HeaderLink';
import messages from './messages';

function Header() {
  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '56px',
      height: '56px',
      right: '26px',
      top: '26px',
    },
    bmBurgerBars: {
      background: '#373a47',
    },
    bmBurgerBarsHover: {
      background: '#a90000',
    },
    bmCrossButton: {
      position: 'absolute',
      width: '36px',
      height: '36px',
      left: '35px',
      top: '35px',
    },
    bmCross: {
      position: 'absolute',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },
    bmMenu: {
      background: '#151417',
    },
    bmMorphShape: {
      fill: '#373a47',
    },
    bmItemList: {
      color: '#151417',
    },
    bmItem: {
      display: 'inline-block',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
    },
  };

  return (
    <NavBar>
      <FastlabIcon />
      <Menu
        right
        width={599}
        pageWrapId="page-wrap"
        outerContainerId="outer-container"
        customBurgerIcon={
          <img
            style={{
              position: 'absolute',
              right: 26,
              top: 26,
            }}
            width="56"
            height="56"
            src={IconNav}
            alt="nav"
          />
        }
        customCrossIcon={
          <img width="36" height="36" src={CloseNav} alt="nav" />
        }
        styles={styles}
      >
        <hr
          style={{
            position: 'absolute',
            focus: 'none',
            color: '#E0E0E0',
            top: '106px',
          }}
          width="100%"
        />
        <LinksDiv>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/about">
            <FormattedMessage {...messages.about} />
          </HeaderLink>
          <HeaderLink to="/projects">
            <FormattedMessage {...messages.projects} />
          </HeaderLink>
          <HeaderLink to="/updates">
            <FormattedMessage {...messages.updates} />
          </HeaderLink>
          <HeaderLink to="/programs">
            <FormattedMessage {...messages.programs} />
          </HeaderLink>
          <HeaderLink to="/contact">
            <FormattedMessage {...messages.contact} />
          </HeaderLink>
          <SmallLink to="/login">
            <FormattedMessage {...messages.login} />
          </SmallLink>
        </LinksDiv>
      </Menu>
    </NavBar>
  );
}

export default Header;
