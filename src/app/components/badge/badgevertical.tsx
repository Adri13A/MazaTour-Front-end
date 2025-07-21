'use client'

import React from "react";

interface BadgeVerticalProps {
    text: string;
}

const BadgeVertical = ({ text }: BadgeVerticalProps) => {
    return (
        <span className="badge-container">{text}</span>
    );
}

export default BadgeVertical;