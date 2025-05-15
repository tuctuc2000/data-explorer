import React from "react";
import styled from "styled-components";
import { Metric } from "../context/DataContext";

const Aside = styled.aside`
  width: 240px;
  padding: ${({ theme }) => theme.spacing.md};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
`;

const Select = styled.select`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
`;

const Radios = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

interface Props {
  sinceDate: string;
  onSinceChange: (d: string) => void;
  language: string;
  onLanguageChange: (l: string) => void;
  metric: Metric;
  onMetricChange: (m: Metric) => void;
}

export function FiltersPanel({
  sinceDate,
  onSinceChange,
  language,
  onLanguageChange,
  metric,
  onMetricChange,
}: Props) {
  // In a real app, you’d derive these from fetched data:
  const languages = ["All", "JavaScript", "TypeScript", "Python", "Go"];

  return (
    <Aside>
      <div>
        <Label htmlFor="since">Since:</Label>
        <Input
          id="since"
          type="date"
          value={sinceDate}
          onChange={(e) => onSinceChange(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="language">Language:</Label>
        <Select
          id="language"
          value={language}
          onChange={(e) => onLanguageChange(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </Select>
      </div>

      <div>
        <Label>Metric:</Label>
        <Radios>
          {(["stars", "forks", "issues"] as Metric[]).map((m) => (
            <label key={m}>
              <input
                type="radio"
                name="metric"
                value={m}
                checked={metric === m}
                onChange={() => onMetricChange(m)}
              />{" "}
              {m.charAt(0).toUpperCase() + m.slice(1)}
            </label>
          ))}
        </Radios>
      </div>
    </Aside>
  );
}
