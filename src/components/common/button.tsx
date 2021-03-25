import styled from "@emotion/styled";

type ButtonProps = {
  width: string;
  height: string;
  bgColor: string;
};

export default styled.button`
  width: ${(props: ButtonProps) => props.width};
  height: ${(props: ButtonProps) => props.height};

  background: ${(props: ButtonProps) => props.bgColor};
  border-radius: 100px;
  border: none;
  outline: none;
  cursor:pointer;

  &:hover {
    background: rgba(0, 120, 215, 0.7);
  }

  font-family: Nunito;
  font-style: normal;
  font-size: 20px;
  font-weight: 500;
  line-height: 50px;
  color: white;
  text-align: center;
`;
