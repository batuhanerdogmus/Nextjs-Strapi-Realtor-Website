import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  text-transform: capitalize;
  color: var(--text-color);
  background-color: var(--background-color-dark);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Footer = () => {
  return (
    <div>
      <StyledFooter>design by BatuhanErdogmus</StyledFooter>
    </div>
  );
};

export default Footer;
