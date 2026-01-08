"use client";
import { StaticImageData } from "next/image";
import * as React from "react";
import BaseCard from "./BaseCard";
import { TechStackItem } from "@/types";

export interface SertifCardProps {
  url: string;
  title: string;
  description: string;
  techStack: TechStackItem[];
  image: string | StaticImageData;
  imageAlt: string;
}

export default function SertifCard(props: SertifCardProps) {
  return <BaseCard {...props} variant="certificate" />;
}
