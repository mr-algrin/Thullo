import React from "react";

export interface LabelProps {
    color: string;
    title: string;
}

export const Label: React.FC<LabelProps> = ({color, title}) => (
    <div
        style={{
            backgroundColor: `${color}1F`,
            borderRadius: '8px',
            width: 'fit-content',
            padding: '2px 9px'
        }}
    >
        <span
            style={{
                color: color,
            }}
        >
            {title}
        </span>
    </div>
)