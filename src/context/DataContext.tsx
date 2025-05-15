import React, { createContext, useContext, useState, ReactNode } from "react";
import useFetchTrending from "../hooks/useFetchTrending";

export type ChartType = "bar" | "line" | "pie" | "scatter";
export type Metric    = "stars" | "forks" | "issues";

interface Repo {
  id: number;
  name: string;
  stars: number;
  forks: number;
  issues: number;
  language: string;
  url: string;
  description: string;
}

interface DataContextType {
  sinceDate:   string;
  setSinceDate: (d: string) => void;
  language:    string;
  setLanguage: (l: string) => void;
  metric:      Metric;
  setMetric:   (m: Metric) => void;
  chartType:   ChartType;
  setChartType:(c: ChartType) => void;
  repos:       Repo[];
  loading:     boolean;
  error:       string | null;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [sinceDate,   setSinceDate]   = useState(() => {
    const d = new Date();
    d.setMonth(d.getMonth() - 1);
    return d.toISOString().slice(0, 10);
  });
  const [language,    setLanguage]    = useState("All");
  const [metric,      setMetric]      = useState<Metric>("stars");
  const [chartType,   setChartType]   = useState<ChartType>("bar");

  const { data: repos, loading, error } = useFetchTrending(sinceDate);

  const filtered = repos.filter(
    (r) => language === "All" || r.language === language
  );

  return (
    <DataContext.Provider
      value={{
        sinceDate,
        setSinceDate,
        language,
        setLanguage,
        metric,
        setMetric,
        chartType,
        setChartType,
        repos: filtered,
        loading,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useData must be inside DataProvider");
  return ctx;
}
