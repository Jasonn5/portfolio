import { Skill } from "./skills";

export class Project{
    title!: string;
    company!: string;
    description!: string;
    linkRepo?: string;
    skills!: Skill[];
}