
import styled from "styled-components";
import { ReactNode } from "react";

const Bar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
`;

const Controls = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
`;

export function Header({ children }: { children: ReactNode }) {
  return (
    <Bar>
      <h1>DataExplorer</h1>
      <Controls>{children}</Controls>
    </Bar>
  );
}
