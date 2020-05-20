/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { FormattedMessage } from 'react-intl';

import { useMediaQuery } from 'react-responsive';

import IconNav from 'images/icon-nav-trigger.svg';
import CloseNav from 'images/icon-close.svg';
import { FastlabIconDesktop, FastlabIconMobile } from './FastlabIcon';

import { LinksDiv, LinksDivTop, LinksDivBottom } from './LinksDiv';

import { HeaderLink, HeaderLinkSmall } from './HeaderLink';
import messages from './messages';

import { DesktopLaptopStyles, TabletMobileStyles } from './MenuStyles';

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  const closeMenu = () => setMenuOpened(false);
  const handleStateChange = state => setMenuOpened(state.isOpen);

  return (
    <React.Fragment>
      {isTabletMobile ? <FastlabIconMobile /> : <FastlabIconDesktop />}
      <Menu
        right
        width={isTabletMobile ? '100%' : '600px'}
        isOpen={menuOpened}
        onStateChange={state => handleStateChange(state)}
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
        styles={isTabletMobile ? TabletMobileStyles : DesktopLaptopStyles}
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
          <LinksDivTop>
            <HeaderLink to="/" mobile={isTabletMobile} onClick={closeMenu}>
              <FormattedMessage {...messages.home} />
            </HeaderLink>
            <HeaderLink to="/about" mobile={isTabletMobile} onClick={closeMenu}>
              <FormattedMessage {...messages.about} />
            </HeaderLink>
            <HeaderLink
              to="/projects"
              mobile={isTabletMobile}
              onClick={closeMenu}
            >
              <FormattedMessage {...messages.projects} />
            </HeaderLink>
            <HeaderLink
              to="/updates"
              mobile={isTabletMobile}
              onClick={closeMenu}
            >
              <FormattedMessage {...messages.updates} />
            </HeaderLink>
            <HeaderLink
              to="/programs"
              mobile={isTabletMobile}
              onClick={closeMenu}
            >
              <FormattedMessage {...messages.programs} />
            </HeaderLink>
            <HeaderLink
              to="/contact"
              mobile={isTabletMobile}
              onClick={closeMenu}
            >
              <FormattedMessage {...messages.contact} />
            </HeaderLink>
          </LinksDivTop>
          <LinksDivBottom>
            <HeaderLinkSmall
              to="/login"
              mobile={isTabletMobile}
              onClick={closeMenu}
            >
              <FormattedMessage {...messages.login} />
            </HeaderLinkSmall>
          </LinksDivBottom>
        </LinksDiv>
      </Menu>
    </React.Fragment>
  );
}

export default Header;
