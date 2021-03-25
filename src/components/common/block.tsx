import styled from "@emotion/styled";
type BlockProps = {
  top: string;
  left: string;
};

export default styled.div`
  position: absolute;
  width: 536px;
  height: 640px;
  left: ${(props: BlockProps) => props.left};
  top: ${(props: BlockProps) => props.top};
  background-color: #e5e5e5;
`;
