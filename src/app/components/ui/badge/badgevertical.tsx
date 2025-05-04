'use client'

import React from "react";

interface BadgeProps {
    text: string;
}

export default function Badge({ text }: BadgeProps) {
    return (
        <div className="miniCard-container">{text}</div>
    );
}