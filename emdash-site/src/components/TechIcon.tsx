import React from "react";
import { FaAtom, FaBrain, FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";
import {
	SiCanvas, SiDjango, SiExpress, SiFramer, SiGooglemaps, SiLaravel,
	SiMaplibre, SiMaterialdesign, SiMongodb, SiNestjs, SiNextdotjs,
	SiSpring, SiTailwindcss, SiTypescript,
} from "react-icons/si";

const icons: Record<string, { icon: React.ElementType; color: string }> = {
	"next.js": { icon: SiNextdotjs, color: "#111827" }, react: { icon: FaReact, color: "#61dafb" },
	typescript: { icon: SiTypescript, color: "#3178c6" }, tailwindcss: { icon: SiTailwindcss, color: "#06b6d4" },
	"node.js": { icon: FaNodeJs, color: "#339933" }, express: { icon: SiExpress, color: "#374151" },
	nestjs: { icon: SiNestjs, color: "#e0234e" }, django: { icon: SiDjango, color: "#092e20" },
	spring: { icon: SiSpring, color: "#6db33f" }, laravel: { icon: SiLaravel, color: "#ff2d20" },
	mongodb: { icon: SiMongodb, color: "#47a248" }, localstorage: { icon: FaDatabase, color: "#4479a1" },
	"framer motion": { icon: SiFramer, color: "#0055ff" }, "maplibre gl": { icon: SiMaplibre, color: "#396cb2" },
	"material ui": { icon: SiMaterialdesign, color: "#007fff" },
	"canvas-confetti": { icon: SiCanvas, color: "#00c4cc" },
	"google maps api": { icon: SiGooglemaps, color: "#4285f4" },
	"google places api": { icon: SiGooglemaps, color: "#4285f4" },
	jotai: { icon: FaAtom, color: "#7828c8" },
	openai: { icon: FaBrain, color: "#10a37f" },
};

export default function TechIcon({ tech, className = "" }: { tech: string; className?: string }) {
	const item = icons[tech.toLowerCase()];
	if (!item) return <span className={className} aria-hidden="true">{tech.slice(0, 1)}</span>;
	const Icon = item.icon;
	return <Icon className={className} aria-hidden="true" style={{ color: item.color }} />;
}
