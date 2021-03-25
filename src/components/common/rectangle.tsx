import styled from "@emotion/styled";

type RectangleProps = {
  top: string;
  left: string;
};

export default styled.div`
  position: absolute;
  top: ${(props: RectangleProps) => props.top};
  left: ${(props: RectangleProps) => props.left};
  width: 536px;
  height: 4px;

  background: #0078d7;
`;
