import { styled } from '@linaria/react';
import React from 'react';
import Logo from '../common/logo/Logo';
import Buttons from '../common/buttons/Buttons';
import { appTheme } from '../../theme';
import SmartLink from '../common/smart-link/SmartLink';
import Contacts from '../common/contacts/Contacts';
import Socials from '../common/socials/Socials';

const CustomButtons = styled(Buttons)``;

const FooterBox = styled.footer`
  width: 100%;
  position: relative;
  overflow: hidden;
  background: ${appTheme.colors.gray100};
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: column;

  ${appTheme.media.lg} {
    flex-direction: row;
  }

  &.container {
    padding: 20px 20px;

    ${appTheme.media.md} {
      padding: 30px 20px;
    }

    ${appTheme.media.lg} {
      padding: 30px 20px 20px;
    }
  }
`;

const FooterBottom = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  color: ${appTheme.colors.gray400};
  z-index: 1;

  .socials {
    margin: 10px 0 0;

    ${appTheme.media.md} {
      margin: 20px 0 0;
    }

    ${appTheme.media.lg} {
      margin: 0;
    }
  }

  &.container {
    padding: 0 20px 30px;
  }

  ${appTheme.media.md} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
`;

const FooterTopL = styled.div``;

const FooterTopR = styled.div`
  position: relative;
  z-index: 1;
  padding: 20px 0 20px;
  margin-top: 30px;

  ${appTheme.media.md} {
    padding: 40px 0;
    margin-top: 0;
  }

  ${appTheme.media.lg} {
    padding: 60px 42px;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100vw + 1px);
    border-radius: 0 0 0 60px;
    background: ${appTheme.colors.blue700};
    z-index: -1;

    ${appTheme.media.lg} {
      top: -30px;
      left: 0;
      transform: translateX(0);
      border-radius: 0 0 0 80px;
    }
  }

  ${CustomButtons} {
    margin: 35px 0 32px;
    color: ${appTheme.colors.blue700};

    ${appTheme.media.lg} {
      margin: 30px 0 94px;
    }
  }
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  height: 20px;
  width: 128px;
  flex: 0 0 auto;
  margin: 4px 0 20px;

  ${appTheme.media.md} {
    width: 246px;
    height: 40px;
  }
  ${appTheme.media.lg} {
    margin: 0 0 20px;
  }
`;

const TopMenu = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  ${appTheme.media.sm} {
    flex-direction: row;
  }

  ${appTheme.media.md} {
    padding-bottom: 40px;
  }

  ${appTheme.media.lg} {
    padding-bottom: 20px;
  }

  .f-list {
    margin: 20px 0 20px;
    ${appTheme.media.sm} {
      flex: 0 0 calc(50% - 20px);
      padding-right: 20px;
    }
    ${appTheme.media.md} {
      flex: 0 0 33.3%;
    }
    ${appTheme.media.lg} {
      margin: 60px 0 0;
    }
  }

  h5 {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.28;
    color: ${appTheme.colors.blue400};
  }

  ul {
    margin-top: 24px;
    font-size: 16px;
    line-height: 1.58;
    list-style: none;

    ${appTheme.media.md} {
      line-height: 1.64;
    }
  }

  li {
    font-size: 16px;
  }

  a {
    color: ${appTheme.colors.black};
    transition: all ease 0.2s;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style: none;
  margin: 60px 0;
  font-size: 16px;
  line-height: 1.28;

  ${appTheme.media.sm} {
    flex-direction: row;
    margin: 30px 0;
  }

  ${appTheme.media.md} {
    margin: 0 0 0;
  }

  li {
    &:not(:first-child) {
      margin: 5px 0 0;

      ${appTheme.media.sm} {
        margin: 0 0 0 20px;
      }
    }
  }

  a {
    color: ${appTheme.colors.gray400};
    transition: all ease 0.2s;

    &:hover {
      color: ${appTheme.colors.black};
    }
  }
`;

const Copyright = styled.p`
  font-size: 16px;
  line-height: 1.28;
  order: -1;

  ${appTheme.media.sm} {
    order: 0;
  }
`;

const FDecor1Box = styled.svg`
  position: absolute;
  width: 156px;
  height: 156px;
  right: 0;
  bottom: -120px;

  ${appTheme.media.sm} {
    right: auto;
    left: -100px;
    bottom: 0;
  }
`;

const Member = styled.div`
  width: 100%;
  margin: 6px 0 14px;
`;

const TopMenuItem = (props: any) => {
  const { title, ...rest } = props;
  return (
    <li>
      <SmartLink {...rest}>{title}</SmartLink>
    </li>
  );
};

const TopMenuList = ({ title, list }: any) => {
  return (
    <div className="f-list">
      <h5>{title}</h5>
      <ul>
        {(list || []).map((item: any, key: any) => (
          <TopMenuItem key={key} {...item} />
        ))}
      </ul>
    </div>
  );
};

const NavItem = (props: any) => {
  const { title, ...rest } = props;
  return (
    <li>
      <SmartLink {...rest}>{title}</SmartLink>
    </li>
  );
};

const Iab = () => {
  return (
    <a href="https://www.iab.com/" target="_blank" rel="noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16.1" viewBox="0 0 32 16.1">
        <style>{'.st0{fill:#abaaa9}.st1{fill:#747372}'}</style>
        <path
          className="st0"
          d="M29.9 12c-1.1 0-2.1.9-2.1 2.1s.9 2.1 2.1 2.1c1.1 0 2.1-.9 2.1-2.1s-.9-2.1-2.1-2.1M2.1.3C.9.3 0 1.2 0 2.3s.9 2.1 2.1 2.1 2.1-.9 2.1-2.1-1-2-2.1-2"
        />
        <path
          className="st1"
          d="M.5 5.8h3.1V16H.5zM21.3 12.9c-1.1 0-2.1-.9-2.1-2.1 0-1.1.9-2.1 2.1-2.1 1.1 0 2.1.9 2.1 2.1 0 1.2-.9 2.1-2.1 2.1m4-5.6c-.9-.9-2.1-1.5-3.4-1.5-1 0-1.9.3-2.7.9V0h-3.1v16h3.1v-.9c.8.5 1.8.9 2.8.9 1.3 0 2.5-.6 3.4-1.5.9-.9 1.4-2.2 1.4-3.6-.1-1.4-.6-2.7-1.5-3.6M9.9 12.9c-1.1 0-2.1-.9-2.1-2.1 0-1.1.9-2.1 2.1-2.1s2.1 1 2.1 2.2c0 1.1-1 2-2.1 2M12 5.8v.9c-.8-.6-1.7-.9-2.7-.9-1.3 0-2.5.6-3.4 1.5-.9.9-1.4 2.2-1.4 3.6s.5 2.7 1.4 3.6c.9.9 2.1 1.5 3.4 1.5 1 0 1.9-.3 2.7-.9v.9h3.1V5.8H12z"
        />
      </svg>
    </a>
  );
};

const FDecor1 = () => {
  return (
    <FDecor1Box viewBox="0 0 153 153" xmlns="http://www.w3.org/2000/svg">
      <rect x="48.1812" width="115.039" height="115.039" transform="rotate(24.7604 48.1812 0)" fill="#FFC766" />
    </FDecor1Box>
  );
};

export const Footer = (props: any) => {
  const { menus, nav, socials, buttons, copyright, contacts } = props;

  return (
    <FooterBox>
      <FooterTop className="container">
        <FooterTopL>
          <TopMenu>
            {(menus || []).map((item: any, key: any) => (
              <TopMenuList key={key} {...item} />
            ))}
          </TopMenu>
        </FooterTopL>

        <FooterTopR>
          <LogoLink href={'/'}>
            <Logo bgColor="blue100" />
          </LogoLink>
          <CustomButtons buttons={buttons} />
          <Contacts contacts={contacts} />
        </FooterTopR>
      </FooterTop>

      <FooterBottom className="container">
        <Member>
          Member of{' '}
          <b>
            <sub>i</sub>MVP
          </b>
        </Member>
        <Copyright>© Copyright 2021 TerrificYard</Copyright>
        <Nav>
          {(nav || []).map((item: any, key: any) => (
            <NavItem key={key} {...item} />
          ))}
        </Nav>
        <Socials linkSize="32px" iconSize="18px" socials={socials} />
      </FooterBottom>
      <FDecor1 />
    </FooterBox>
  );
};