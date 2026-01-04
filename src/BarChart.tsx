// import React from "react";

// export interface BarChartProps {
//   data: Array<{ label: string; value: number }>;
// }

// export const BarChart: React.FC<BarChartProps> = ({ data }) => {
//   return (
//     <div className="bar-chart">
//       {data.map((d) => (
//         <div key={d.label}>
//           {d.label}: {d.value}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BarChart;

import React from "react";

interface BarChartProps {
  data: number[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const max = Math.max(...data, 1);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: "12px",
        height: "200px",
        padding: "16px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      {data.map((value, index) => (
        <div
          key={index}
          style={{
            width: "40px",
            height: `${(value / max) * 100}%`,
            background: "#4f46e5",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            color: "white",
            fontSize: "12px",
            borderRadius: "4px 4px 0 0",
            transition: "height 0.3s ease",
          }}
        >
          <span style={{ paddingBottom: "4px" }}>{value}</span>
        </div>
      ))}
    </div>
  );
};

export default BarChart;
