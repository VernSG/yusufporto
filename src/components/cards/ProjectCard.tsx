"use client";
import { StaticImageData } from "next/image";
import * as React from "react";
import BaseCard from "./BaseCard";
import { TechStackItem } from "@/types";

export interface ProjectCardProps {
  url: string;
  title: string;
  description: string;
  techStack: TechStackItem[];
  image: string | StaticImageData;
  imageAlt: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  return <BaseCard {...props} variant="project" />;
}
