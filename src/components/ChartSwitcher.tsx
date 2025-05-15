import React from "react";
import styled from "styled-components";
import { ChartType } from "../context/DataContext";

const Switcher = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Tab = styled.button<{ active: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: none;
  border-bottom: 2px solid
    ${({ active, theme }) =>
      active ? theme.colors.primary : "transparent"};
  background: transparent;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

interface Props {
  chartType: ChartType;
  onChange: (c: ChartType) => void;
}

export function ChartSwitcher({ chartType, onChange }: Props) {
  const tabs: ChartType[] = ["bar", "line", "pie", "scatter"];
  return (
    <Switcher>
      {tabs.map((t) => (
        <Tab
          key={t}
          active={chartType === t}
          onClick={() => onChange(t)}
        >
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </Tab>
      ))}
    </Switcher>
  );
}
