import React from "react";
import { FaCode } from "react-icons/fa6";
import {
	SiApachekafka, SiClaude, SiCline, SiDatabricks, SiDocker, SiEslint, SiFastapi, SiGit,
	SiGithub, SiGithubactions, SiGithubcopilot, SiGooglegemini, SiGrafana, SiJest, SiKeycloak,
	SiKnip, SiKubernetes, SiLefthook, SiMaplibre, SiMaptiler, SiMui, SiNewrelic, SiNextdotjs,
	SiNotebooklm, SiNpm, SiOpenapiinitiative, SiPostman, SiPrettier, SiPnpm, SiPython, SiPytest,
	SiReact, SiRuff, SiThreedotjs, SiTurborepo, SiTypescript, SiVault, SiVite, SiVitest,
} from "react-icons/si";

const icons: Record<string, React.ElementType> = {
	apachekafka: SiApachekafka, claude: SiClaude, cline: SiCline, code: FaCode,
	databricks: SiDatabricks, docker: SiDocker, eslint: SiEslint, fastapi: SiFastapi,
	git: SiGit, github: SiGithub, githubactions: SiGithubactions, githubcopilot: SiGithubcopilot,
	googlegemini: SiGooglegemini, grafana: SiGrafana, jest: SiJest, keycloak: SiKeycloak,
	knip: SiKnip, kubernetes: SiKubernetes, lefthook: SiLefthook, maplibre: SiMaplibre,
	maptiler: SiMaptiler, mui: SiMui, newrelic: SiNewrelic, nextdotjs: SiNextdotjs,
	notebooklm: SiNotebooklm, npm: SiNpm, openapiinitiative: SiOpenapiinitiative,
	postman: SiPostman, prettier: SiPrettier, pnpm: SiPnpm, python: SiPython,
	pytest: SiPytest, react: SiReact, ruff: SiRuff, threedotjs: SiThreedotjs,
	turborepo: SiTurborepo, typescript: SiTypescript, vault: SiVault, vite: SiVite, vitest: SiVitest,
};

export default function CareerSkillIcon({
	name,
	icon,
	mark,
	color,
}: {
	name: string;
	icon?: string;
	mark?: string;
	color: string;
}) {
	const Icon = icon ? icons[icon] : undefined;
	if (!Icon) {
		return <span aria-hidden="true" className="career-skill-mark" style={{ backgroundColor: color }}>{mark || name.slice(0, 1)}</span>;
	}
	return <Icon aria-hidden="true" className="career-skill-icon" style={{ color }} />;
}
