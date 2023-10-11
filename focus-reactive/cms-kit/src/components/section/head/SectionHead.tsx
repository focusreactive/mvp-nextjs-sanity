import React, { ReactNode } from 'react';
import { styled } from '@linaria/react';

interface SectionHeadProps {
  icon?: string;
  title: ReactNode;
  isH1?: boolean;
}

const StyledHeading = styled.div`
  margin-bottom: clamp(30px, 6vw, 65px);

  img {
    display: inline-block;
    vertical-align: middle;
    max-width: clamp(35px, 4.2vw, 50px);
    margin-bottom: clamp(20px, 3vw, 35px);
  }

  h1,
  h2 {
    font-size: clamp(34px, 5vw, 52px);
    font-weight: 400;
    line-height: 1.2;
  }
`;

const SectionHead = ({ icon, title, isH1 }: SectionHeadProps) => {
  return (
    <StyledHeading>
      {icon && <img src={icon} alt="" loading="lazy" />}
      {isH1 ? <h1>{title}</h1> : <h2>{title}</h2>}
    </StyledHeading>
  );
};

export default SectionHead;
