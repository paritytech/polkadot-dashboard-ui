/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */
import { useState, useEffect, useMemo } from "react";

export type PieProps = {
  diameter: number;
  items: { value: number; color: string }[];
  innerRadius?: number;
  speed?: number;
};

const PROGRESS_TIMEOUT = 5;

const getArcPath = (
  start: number,
  end: number,
  innerRadius: number,
  outerRadius: number
) => {
  const startAngle = start * Math.PI * 2;
  const endAngle = end * Math.PI * 2;
  const x1 = innerRadius * Math.sin(startAngle);
  const y1 = innerRadius * -Math.cos(startAngle);
  const x2 = outerRadius * Math.sin(startAngle);
  const y2 = outerRadius * -Math.cos(startAngle);
  const x3 = outerRadius * Math.sin(endAngle);
  const y3 = outerRadius * -Math.cos(endAngle);
  const x4 = innerRadius * Math.sin(endAngle);
  const y4 = innerRadius * -Math.cos(endAngle);
  const bigArc = end - start >= 0.5;
  const outerFlags = bigArc ? "1 1 1" : "0 0 1";
  const innerFlags = bigArc ? "1 1 0" : "1 0 0";
  return `M ${x1},${y1} L ${x2},${y2} A ${outerRadius} ${outerRadius} ${outerFlags} ${x3},${y3}
        L ${x4},${y4} A ${innerRadius} ${innerRadius} ${innerFlags} ${x1},${y1} Z`;
};

export const Pie = ({
  diameter,
  items,
  innerRadius = 0,
  speed = 1,
}: PieProps) => {
  const [visiblePart, setVisiblePart] = useState(0);
  const [rad] = useState(diameter / 2);

  useEffect(() => {
    if (visiblePart < 1) {
      setTimeout(
        () => setVisiblePart(visiblePart + speed / 100),
        PROGRESS_TIMEOUT
      );
    }
  }, [visiblePart]);

  const segments = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const sum = items.reduce((sum, item) => sum + item.value, 0);
    let start = 0;
    return items.map((item) => {
      const delta = (item.value / sum) * visiblePart;
      const path = getArcPath(start, start + delta, innerRadius, rad);
      start += delta;
      return { ...item, path };
    });
  }, [items, innerRadius, rad, visiblePart]);

  return (
    <div style={{ padding: "0.1rem" }}>
      <svg width={diameter} height={diameter}>
        <g transform={`translate(${rad},${rad})`}>
          {segments.map((segment) => (
            <path
              key={segment.color}
              stroke={segment.color}
              fill={segment.color}
              d={segment.path}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};
