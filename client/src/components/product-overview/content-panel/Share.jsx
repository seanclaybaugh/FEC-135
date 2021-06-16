import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaPinterestP, FaTwitter } from 'react-icons/fa';
import { FiMail, FiLink } from 'react-icons/fi';

const ShareContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 20px;
`;

const IconContainer = styled.div`
  margin: 10px;
  width: 15px;
  height: 15px;

  :hover {
    cursor: pointer;
  }
`;

function Share() {
  return (
    <ShareContainer>
      <IconContainer>
        <FaFacebookF />
      </IconContainer>
      <IconContainer>
        <FaPinterestP />
      </IconContainer>
      <IconContainer>
        <FaTwitter />
      </IconContainer>
      <IconContainer>
        <FiMail />
      </IconContainer>
      <IconContainer>
        <FiLink />
      </IconContainer>
    </ShareContainer>
  )
}

export default Share;