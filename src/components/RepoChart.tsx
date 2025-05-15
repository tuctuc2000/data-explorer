import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
} from "recharts";
import { ChartType, Metric } from "../context/DataContext";

interface Repo {
  id: number;
  name: string;
  stars: number;
  forks: number;
  issues: number;
}

interface Props {
  data: Repo[];
  chartType: ChartType;
  metric: Metric;
}

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#d88484", "#84d8d8"];

export function RepoChart({ data, chartType, metric }: Props) {
  if (data.length === 0) return <p>No data to display</p>;

  const key = metric;
  const pieData = data.map((d) => ({ name: d.name, value: d[key] }));

  switch (chartType) {
    case "bar":
      return (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={0} angle={-45} textAnchor="end" height={60}/>
            <YAxis />
            <Tooltip />
            <Bar dataKey={key} fill={COLORS[0]} />
          </BarChart>
        </ResponsiveContainer>
      );

    case "line":
      return (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={0} angle={-45} textAnchor="end" height={60}/>
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey={key} stroke={COLORS[1]} />
          </LineChart>
        </ResponsiveContainer>
      );

    case "pie":
      return (
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={150}
              label
            >
              {pieData.map((_, idx) => (
                <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      );

    case "scatter":
      return (
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart>
            <XAxis dataKey="name" type="category" tick={{ fontSize: 12 }} interval={0} angle={-45} textAnchor="end" height={60}/>
            <YAxis />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter data={data} dataKey={key} fill={COLORS[2]} />
          </ScatterChart>
        </ResponsiveContainer>
      );

    default:
      return null;
  }
}
