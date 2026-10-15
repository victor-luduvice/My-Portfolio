import type { IconType } from "react-icons";
import { SiDocker, SiExpress, SiFastapi, SiGit, SiJavascript, SiLinux, SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiRender, SiSqlite, SiSpring, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa6";
import { siteContent } from "@/data/content";

const icons: Record<string, IconType> = {
  Python: SiPython, FastAPI: SiFastapi, "Node.js": SiNodedotjs, NestJS: SiNestjs, Express: SiExpress,
  Java: FaJava, Spring: SiSpring, TypeScript: SiTypescript, JavaScript: SiJavascript, React: SiReact,
  "Next.js": SiNextdotjs, "Tailwind CSS": SiTailwindcss, PostgreSQL: SiPostgresql, MySQL: SiMysql,
  MongoDB: SiMongodb, SQLite: SiSqlite, Docker: SiDocker, Linux: SiLinux, Git: SiGit,
  Vercel: SiVercel, Render: SiRender, AWS: FaAws,
};

export function StackGrid() {
  return <div className="stack-groups">{siteContent.stacks.map((group) => <div className="stack-group" key={group.title}>
    <h3>{group.title}</h3><ul>{group.technologies.map((technology) => { const Icon = icons[technology]; return <li className="tech-chip" key={technology}><Icon aria-hidden="true" size={15} /><span>{technology}</span></li>; })}</ul>
  </div>)}</div>;
}
