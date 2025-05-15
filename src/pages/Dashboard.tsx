import React from "react";
import { useData } from "../context/DataContext";
import { Header } from "../components/Header";
import { FiltersPanel } from "../components/FiltersPanel";
import { ChartSwitcher } from "../components/ChartSwitcher";
import { RepoChart } from "../components/RepoChart";

export default function Dashboard() {
  const {
    sinceDate,
    setSinceDate,
    language,
    setLanguage,
    metric,
    setMetric,
    chartType,
    setChartType,
    repos,
    loading,
    error,
  } = useData();

  return (
    <>
      <Header>
        {/* date picker, language select, theme toggle */}
      </Header>
      <div style={{ display: "flex" }}>
        <FiltersPanel
          sinceDate={sinceDate}
          onSinceChange={setSinceDate}
          language={language}
          onLanguageChange={setLanguage}
          metric={metric}
          onMetricChange={setMetric}
        />
        <div style={{ flexGrow: 1, padding: "1rem" }}>
          <ChartSwitcher
            chartType={chartType}
            onChange={setChartType}
          />
          {loading && <p>Loading…</p>}
          {error   && <p>Error: {error}</p>}
          {!loading && !error && (
            <RepoChart
              data={repos}
              chartType={chartType}
              metric={metric}
            />
          )}
        </div>
      </div>
    </>
  );
}
