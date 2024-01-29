import { Injectable } from '@angular/core';
import { Project } from '../models/projects';
import { ExperienceService } from './experience.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  public projects: Project[] = [
    {
      title: "San Martin de Porres", company: "Jabusoft", description: "In collaboration with the team, we developed an informative website for San Martin de Porres, an animal shelter, focusing on creating an inclusive and user-friendly platform. The project implemented features like detailed pet registration, heartwarming photos, and intuitive filters. Our collective goal was to simplify the adoption process, enabling potential adopters to find their ideal companions based on various criteria. The project aimed to contribute to the shelter's mission by providing a visually appealing and accessible online space that promotes pet adoption and the well-being of the animals under their care.",
      skills: [
        { id: 1 }, { id: 2 }, { id: 3 }
      ]
    },
    {
      title: "Waiter Logistic Service", company: "Jabusoft", description: "I played a part in designing a logistics management system for waiter services, focusing on optimizing email communication, employee management, and event coordination. The system aimed to streamline operations and improve communication efficiency within the team.",
      skills: [
        { id: 1 }
      ]
    },
    {
      title: "Medical System", company: "Jabusoft", description: "I contributed to a medical clinic management system, focusing on improving features like appointment scheduling, patient record management, and automated reminders. Engaging in both frontend and backend development, this experience taught me the crucial balance between user-friendly interfaces and efficient backend functionalities in healthcare systems.",
      skills: [
        { id: 1 }
      ]
    },
    {
      title: "Sales and Inventory Management System", company: "Jabusoft", description: "In the development of a sales and inventory management system, my emphasis leaned towards the backend. I played a key role in streamlining product orders, optimizing sales transactions, and enhancing inventory management across multiple branches. This experience significantly advanced my understanding of backend intricacies, contributing substantially to my professional growth.",
      skills: [
        { id: 1 }
      ]
    },
    {
      title: "Building Management System", company: "Jabusoft", description: "I contributed significantly to the development of a condominium management system. My focus spanned both frontend and backend tasks, encompassing the creation of user-friendly interfaces and essential backend functionalities, such as stored procedures. This experience greatly broadened my understanding of system architecture and development processes.",
      skills: [
        { id: 1 }
      ]
    },
    {
      title: "Building Management System", company: "Jabusoft", description: "I contributed  to the development of a condominium management system. My focus spanned both frontend and backend tasks, encompassing the creation of user-friendly interfaces and essential backend functionalities, such as stored procedures. This experience greatly broadened my understanding of system architecture and development processes.",
      skills: [
        { id: 1 }
      ]
    },
    {
      title: "Single User Manager", company: "Jabusoft", description: "I played the role in creating a NuGet library for user authentication in .NET, with a focus on essential features like login, account creation, password reset, and recovery methods. This experience expanded my expertise in authentication processes and library development within the .NET framework.",
      skills: [
        { id: 1 }
      ]
    },
    {
      title: "Imaq", company: "Jabusoft", description: "I contributed to the development of Imaq, focusing on a sophisticated e-commerce system with dual frontends. I played a crucial role in streamlining online product sales, integrating WhatsApp API for order processing, and seamlessly synchronizing orders with the administrative system. Responsibilities included efficient stock management and product categorization in the administrative interface, while prioritizing aesthetics for the customer-facing frontend. This experience enhanced my understanding of e-commerce systems and the integration of multiple functionalities for a seamless user experience.",
      skills: [
        { id: 1 }
      ]
    },
    {
      title: "MiniStore", company: "Jabusoft", description: "I played a role in crafting a food catalog for a restaurant webpage, integrating WhatsApp API for streamlined order placement. This experience allowed me to contribute to the user experience of the restaurant's online platform by seamlessly connecting the catalog with a convenient ordering system through WhatsApp.",
      skills: [
        { id: 1 }
      ]
    },
    {
      title: "Black Box", company: "Personal", description: "I developed a dynamic course platform, meticulously tailored to streamline diverse tasks such as file uploads, group creation, and collaborative reviews. This endeavor was driven by the aspiration to cultivate an inclusive and highly efficient learning environment. The platform aimed to foster seamless collaboration and engagement among users. This project underscored my commitment to creating innovative solutions that enhance the educational experience.",
      skills: [
        { id: 1 }
      ]
    },
    {
      title: "New Medical System", company: "Jabusoft", description: "In the revamp of the Medical System, my focus was on resolving issues and updating technologies to enhance clinic management. This experience contributed to my understanding of system improvements and the implementation of updated technologies for more effective healthcare solutions.",
      skills: [
        { id: 1 }
      ]
    },
    {
      title: "Diagnostic System", company: "Personal", description: "In a collaborative initiative, I played a key role in developing a diagnostic system that integrated pre-trained AI for COVID-19 diagnosis from chest X-ray images. This collaborative effort significantly enhanced my skills in AI integration for healthcare applications, emphasizing the importance of teamwork in tackling complex and impactful projects.",
      skills: [
        { id: 1 }
      ]
    },
    {
      title: "MichiSoft", company: "Personal", description: "I developed a university classroom reservation system, offering flexible bookings for various time slots. this project deepened my expertise in building reservation systems tailored for educational institutions.",
      skills: [
        { id: 1 }
      ]
    },
    {
      title: "Fire Force", company: "Nice CX One", description: "In an initiative, I crafted an alert reporting system tailored to the needs of firefighters. This user-friendly platform empowers individuals to send crucial alerts, complete with location descriptions, ensuring precise and timely responses during emergencies. Additionally, the system includes contact information for firefighters, enhancing communication channels. Rooted in a commitment to social responsibility, this solo project is designed to contribute to public safety by leveraging technology for swift emergency response.",
      skills: [
        { id: 1 }
      ]
    },
    {
      title: "Hierarchies", company: "Nice CX One", description: "Engaged actively in a micro-frontends-based call center system, where my role involved addressing reported vulnerabilities by Veracode and BlackDuck. This collaborative effort spanned across a global team, fostering coordination with talented individuals from diverse backgrounds, including team members in India and the United States. The experience not only refined my skills in vulnerability resolution but also emphasized the importance of a cohesive, international approach in tackling complex technological challenges.",
      skills: [
        { id: 1 }
      ]
    },
    {
      title: "Octopus", company: "Nice CX One", description: "Contributed to the collaborative effort on an internal system aimed at migrating a call center from an older to a newer framework. I played a role in investigating migration failures, generating informative reports, and working seamlessly with a team comprising members from India and Bolivia.",
      skills: [
        { id: 1 }
      ]
    },
    {
      title: "Property Manager", company: "Personal", description: "In collaboration with a team member, we developed a property listing system for advisors, offering detailed property information and productivity monitoring. this project enhanced our proficiency in real estate management systems and data analytics, particularly in the context of effective sales monitoring. The collaborative effort allowed for a shared exploration of insights and skills, contributing to a more robust and comprehensive solution.",
      skills: [
        { id: 1 }
      ]
    },
  ];

  constructor(private experienceService: ExperienceService) { }

  listProjects() {
    return this.projects.map(project => ({
      title: project.title,
      company: project.company,
      description: project.description,
      skills: this.experienceService.getSkillsByIds(project.skills.map(skill => skill.id))
    })).reverse();
  }
}
