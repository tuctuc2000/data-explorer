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
        {/* we’ll wire up theme toggle here later */}
      </Header>

      <div style={{ display: "flex", height: "calc(100vh - 64px)" }}>
        <FiltersPanel
          sinceDate={sinceDate}
          onSinceChange={setSinceDate}
          language={language}
          onLanguageChange={setLanguage}
          metric={metric}
          onMetricChange={setMetric}
        />

        <main style={{ flexGrow: 1, padding: "1rem", overflowY: "auto" }}>
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
        </main>
      </div>
    </>
  );
}
