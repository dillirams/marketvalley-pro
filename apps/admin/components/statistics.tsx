import React from "react";

interface statisticsType {
  title: string;
  value: number;
  type: "money" | "count";
  StartIcon?: React.ComponentType<{ size?: number; className?: string }>;
  EndIcon?: React.ComponentType<{ size?: number; className?: string }>;
  percent?: number;
  time?: string;
}

const Statistics = ({
  title,
  value,
  type,
  StartIcon,
  EndIcon,
  percent,
  time,
}: statisticsType) => {
  const formattedValue =
    type === "money"
      ? value.toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
          maximumFractionDigits: 0,
        })
      : value.toLocaleString();

  // 🎯 Color system
  const isPositive = percent !== undefined && percent > 0;
  const isNegative = percent !== undefined && percent < 0;

  const theme = isPositive
    ? {
        border: "border-emerald-300",
        bg: "bg-emerald-50",
        iconBg: "bg-emerald-100",
        iconText: "text-emerald-600",
        badgeBg: "bg-emerald-100",
        badgeText: "text-emerald-600",
      }
    : isNegative
      ? {
          border: "border-red-300",
          bg: "bg-red-50",
          iconBg: "bg-red-100",
          iconText: "text-red-600",
          badgeBg: "bg-red-100",
          badgeText: "text-red-600",
        }
      : {
          border: "border-gray-200",
          bg: "bg-gray-50",
          iconBg: "bg-gray-100",
          iconText: "text-gray-600",
          badgeBg: "bg-gray-100",
          badgeText: "text-gray-600",
        };

  return (
    <div
      className={`
        relative
        w-full
        max-w-[220px]
        min-h-[140px]
        rounded-2xl
        p-4
        border
        ${theme.border}
        ${theme.bg}
        shadow-sm
        transition-all
        duration-200
        hover:shadow-md
        hover:-translate-y-0.5
      `}
    >
      {/* Top row */}
      <div className="flex items-center justify-between">
        {/* Start Icon */}
        {StartIcon && (
          <div className={`p-2 rounded-lg ${theme.iconBg} ${theme.iconText}`}>
            <StartIcon size={18} />
          </div>
        )}

        {/* Trend badge */}
        {EndIcon && percent !== undefined && (
          <div
            className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${theme.badgeBg} ${theme.badgeText}`}
          >
            <EndIcon size={14} />
            <span>
              {percent > 0 && "+"}
              {percent}%
            </span>
          </div>
        )}
      </div>

      {/* Main value */}
      <p className="mt-4 text-3xl font-semibold text-gray-900">
        {formattedValue}
      </p>

      {/* Time label */}
      {time && (
        <p className="mt-1 text-[11px] uppercase tracking-wide text-gray-500">
          {time}
        </p>
      )}

      {/* Title */}
      <p className="mt-1 text-sm font-medium text-gray-700">{title}</p>
    </div>
  );
};

export default Statistics;
