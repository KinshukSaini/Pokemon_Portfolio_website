import React, { useState } from 'react';

// --- Configuration and Helper Functions ---

const MAX_STAT_VALUE = 50; // Max theoretical value for the chart boundary
const CHART_SIZE = 300;   // The size of the SVG viewbox (300x300)
const CENTER = CHART_SIZE / 2; // The center point (150, 150)
const RADIUS = 100; // The maximum drawing radius of the chart (reduced to leave space for labels)

// Sample data structure for the 6 stats (Pokemon-inspired)
// This data can be passed via the 'stats' prop to RadarChart
const initialStats = [
    { name: 'HP', value: 44, display: '1/44', max: MAX_STAT_VALUE, color: 'text-red-600' },
    { name: 'Attack', value: 19, max: MAX_STAT_VALUE, color: 'text-blue-600' },
    { name: 'Defense', value: 25, max: MAX_STAT_VALUE, color: 'text-green-600' },
    { name: 'Speed', value: 25, max: MAX_STAT_VALUE, color: 'text-purple-600' },
    { name: 'Sp. Def', value: 30, max: MAX_STAT_VALUE, color: 'text-rose-600' },
    { name: 'Sp. Atk', value: 24, max: MAX_STAT_VALUE, color: 'text-orange-600' },
];

/**
 * Calculates the coordinates (x, y) for a point on the radar chart.
 * @param {number} value - The stat value (0 to MAX_STAT_VALUE).
 * @param {number} index - The index of the axis (0 to 5).
 * @returns {{x: number, y: number}} The calculated coordinate.
 */
const getPoint = (value, index) => {
    // 1. Normalize the value (0 to 1) based on MAX_STAT_VALUE
    const normalized = value / MAX_STAT_VALUE;

    // 2. Calculate the distance from the center
    const r = normalized * RADIUS;

    // 3. Calculate the angle (6 axes = 60 degrees separation)
    // Start at 90 degrees (top), rotate clockwise (subtract 60 degrees for each index)
    const angleDeg = 90 - index * 60;
    const angleRad = (angleDeg * Math.PI) / 180;

    // 4. Calculate the coordinates relative to the center (CENTER, CENTER)
    const x = CENTER + r * Math.cos(angleRad);
    const y = CENTER - r * Math.sin(angleRad); // SVG y-axis is inverted

    return { x, y };
};

// --- Main Reusable Component ---
// Exported as a named component for reusability.
export const RadarChart = ({ stats }) => {
    // Get the points for the outer polygon boundary (MAX_STAT_VALUE)
    const boundaryPoints = stats.map((_, i) => getPoint(MAX_STAT_VALUE, i));
    const boundaryPointsString = boundaryPoints.map(p => `${p.x},${p.y}`).join(' ');

    // Get the points for the actual data polygon
    const dataPoints = stats.map((stat, i) => getPoint(stat.value, i));
    const dataPointsString = dataPoints.map(p => `${p.x},${p.y}`).join(' ');

    // Get the points for the inner grid (e.g., 50% max)
    // Note: The original image only shows the outer boundary, but this grid is helpful
    const innerPoints = stats.map((_, i) => getPoint(MAX_STAT_VALUE * 0.5, i));
    const innerPointsString = innerPoints.map(p => `${p.x},${p.y}`).join(' ');

    // Function to calculate label position (slightly outside the radius)
    const getLabelPosition = (index, distanceFactor = 1.35) => {
        const p = getPoint(MAX_STAT_VALUE, index);
        const angleDeg = 90 - index * 60;
        const angleRad = (angleDeg * Math.PI) / 180;

        // Calculate position based on a slightly larger radius
        const r = RADIUS * distanceFactor;
        const x = CENTER + r * Math.cos(angleRad);
        const y = CENTER - r * Math.sin(angleRad);

        // Determine text anchor for alignment (for side labels)
        let textAnchor = 'middle';
        if (angleDeg > 30 && angleDeg < 150) textAnchor = 'start';  // Left side
        if (angleDeg > 210 && angleDeg < 330) textAnchor = 'end';    // Right side

        return { x, y, textAnchor };
    };

    // Calculate axis line end points
    const axisLines = boundaryPoints.map(p => ({
        x1: CENTER, y1: CENTER, x2: p.x, y2: p.y
    }));

    return (
        <div className="w-full h-full flex items-center justify-center">
            <svg
                viewBox={`0 0 ${CHART_SIZE} ${CHART_SIZE}`}
                className="w-full h-full max-w-full max-h-full"
                style={{ fontFamily: 'Inter, sans-serif' }}
            >
                {/* 1. Axis Lines and Inner Grid */}
                <g className="text-blue-200 stroke-current stroke-1">
                    {axisLines.map((line, i) => (
                        <line key={`axis-${i}`} {...line} />
                    ))}
                    {/* Inner 50% Grid Polygon */}
                    <polygon
                        points={innerPointsString}
                        className="fill-transparent stroke-current stroke-1"
                        style={{ stroke: '#ccc' }}
                    />
                </g>

                {/* 2. Outer Boundary (Hexagon) */}
                <polygon
                    points={boundaryPointsString}
                    className="fill-transparent stroke-blue-400 stroke-2"
                />

                {/* 3. Data Polygon (Blue Shaded Area) */}
                <polygon
                    points={dataPointsString}
                    className="fill-blue-500/50 stroke-blue-700 stroke-[2.5]"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                />

                {/* 4. Labels and Values */}
                {stats.map((stat, i) => {
                    const { x: labelX, y: labelY, textAnchor } = getLabelPosition(i);
                    const isSpDef = stat.name === 'Sp. Def'; // For red label as in example
                    const isAttack = stat.name === 'Attack'; // For blue label as in example

                    // Adjust vertical position for top/bottom labels
                    const dyLabel = i === 0 ? '-0.5em' : (i === 3 ? '1.5em' : '0.5em');
                    const dyValue = i === 0 ? '1.5em' : (i === 3 ? '-0.5em' : '0.5em');

                    // Determine final text anchor for labels/values
                    let finalLabelAnchor = textAnchor;
                    if (i === 0 || i === 3) finalLabelAnchor = 'middle'; // Top/Bottom always centered

                    // Position the value point (data label)
                    const labelStyle = {
                        fontWeight: '600',
                        fontSize: '16px',
                        textAnchor: finalLabelAnchor,
                    };
                    
                    // Position the stat name label
                    const nameStyle = {
                        fontWeight: '600',
                        fontSize: '14px',
                        textAnchor: finalLabelAnchor,
                    };

                    return (
                        <g key={stat.name}>
                            {/* Value Label (e.g., 1/44, 19, 25) */}
                            <text
                                x={labelX}
                                y={labelY}
                                dy={dyValue}
                                className={`font-bold ${isSpDef ? 'text-red-500' : 'text-gray-900'} ${isAttack ? 'text-blue-500' : ''}`}
                                style={labelStyle}
                            >
                                {stat.display || stat.label}
                            </text>

                            {/* Stat Name Label (e.g., HP, Attack) */}
                            <text
                                x={labelX}
                                y={labelY}
                                dy={dyLabel}
                                className={`text-sm ${isSpDef ? 'text-red-500' : 'text-gray-700'} ${isAttack ? 'text-blue-500' : ''}`}
                                style={nameStyle}
                            >
                                {stat.name}
                            </text>

                            {/* Center Dot (optional, matching the image) */}
                            <circle cx={CENTER} cy={CENTER} r="8" fill="#93C5FD" opacity="0.6" />

                            {/* Data Points (optional visual markers) */}
                            {/* <circle cx={valueX} cy={valueY} r="3" fill="#1D4ED8" /> */}
                        </g>
                    );
                })}
            </svg>
        </div>
    );
};


// --- App Component (Wrapper for demonstration) ---
// This component manages the state and provides the data to the reusable RadarChart component.
const App = () => {
    // State for the data
    const [stats] = useState(initialStats);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="text-center">
                {/* The reusable RadarChart component is used here */}
                <RadarChart stats={stats} />
            </div>
        </div>
    );
};

export default App;
