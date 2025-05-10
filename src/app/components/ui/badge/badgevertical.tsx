'use client'

import React from "react";

interface BadgeProps {
    text: string;
}

export default function Badge({ text }: BadgeProps) {
    return (
        <span className="badge-container">{text}</span>
    );
}