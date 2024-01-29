import { Skill } from "./skills";

export class Category{
    id!: number;
    name?: string;
    skills?: Skill[];
}