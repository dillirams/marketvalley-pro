"use client";

import React from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", value: 1200 },
  { day: "Tue", value: 1800 },
  { day: "Wed", value: 1500 },
  { day: "Thu", value: 2200 },
  { day: "Fri", value: 2700 },
  { day: "Sat", value: 3100 },
  { day: "Sun", value: 2900 },
];

const SalesChart = () => {
  return (
    <div
      className="
        bg-white rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.08)]
        p-4 sm:p-6
        mx-auto
        w-[90vw] sm:w-full
        max-w-md sm:max-w-2xl lg:max-w-4xl
      "
    >
      {/* Title */}
      <h4 className="mb-3 text-base sm:text-lg font-bold text-slate-700">
        Sales Over Time
      </h4>

      {/* Chart height control */}
      <div className="w-full h-[260px] sm:h-[320px] lg:h-[420px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: 12, right: 12, bottom: 24 }}>
            <defs>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#475569", fontSize: 12, fontWeight: 600 }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#475569", fontSize: 12, fontWeight: 600 }}
              width={36}
            />

            <Tooltip
              formatter={(value) => [`₹${value}`, "Sales"]}
              contentStyle={{
                borderRadius: 8,
                border: "none",
                boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                fontSize: 12,
              }}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              strokeWidth={3}
              fill="url(#salesGradient)"
              dot={false}
              activeDot={{ r: 6 }}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;
