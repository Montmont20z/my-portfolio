import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "myinvoice2u",
    position: "Software Engineer Intern",
    company: "MyInvoice2U",
    location: "Kuala Lumpur, Malaysia",
    startDate: new Date("2024-11-01"),
    endDate: new Date("2025-01-31"),
    description: [
      "Developed websites using PHP, Laravel, and MySQL.",
      "Debug and optimize existing codebase for performance and scalability.",
      "Create API integration with third-party services including LHDN and other private company.",
      "Work together with multinational teams to debug API and payment gateway issues.",
      "Create a online form to allow customers to generate invoices.",
      "Create unit, integration and end to end tests to ensure code quality.",
      "Fix development database's migration schema where it does not meet the production database schema.",
      "Test and debug email vertication system to ensure reliable delivery of emails to users.",
      "Suggest improvements to exisiting UI/UX design to enhance user experience.",
      "Update existing WordPress website content and layout as per company requirements.",
      "Integrate custom WordPress plugins for client-specific functionalities.",
      "Create videos and documentation to help new interns understand the codebase and development process.",
      "Guide new interns during their internship period and help them complete their assigned tasks.",
    ],
    achievements: [
      "Implemented a secure, user-facing invoice generation form (Laravel + Javascript) with server-side validation and email verification, enabling customers to self-serve invoice creation.",
      "Integrated multiple third-party APIs including LHDN and payment gateways; collaborated with international teams to diagnose and resolve cross-border API and payment issues.",
      "Improved application reliability by designing and adding unit, integration, and end-to-end tests (PHPUnit / Laravel Dusk patterns), reducing regressions during releases.",
      "Diagnosed and corrected development database migration mismatches to match production schema, preventing deployment failures and data inconsistencies.",
      "Optimized legacy code paths and database queries to increase performance and reduce latency, improving page responsiveness and backend throughput.",
      "Delivered WordPress site updates and developed/installed custom plugins for client-specific features, improving content manageability for non-technical users.",
      "Improved email deliverability and verification flow by auditing mailer configuration and retry logic, reducing user support tickets related to account activation.",
      "Produced onboarding documentation and tutorial videos and mentored new interns — accelerating ramp-up time and improving team productivity.",
      "Coordinated deployment and CI/CD tasks (infrastructure as code / pipeline maintenance), ensuring smoother, repeatable releases and faster rollback capability." ,
    ],
    skills: [
        "PHP",
        "Laravel",
        "MySQL",
        "WordPress",
        "Git",
        "Javascript",
        "HTML 5", 
        "CSS 3",
        "React",
        "CI/CD",
        "Unit / Integration / E2E testing",
        "API Design & Integration",
        "Documentation",
        "Onboarding",
        "Remote Collaboration",
    ],
    companyUrl: "https://myinvoice2u.com/",
    logo: "/experience/myinvoice2u-logo.png",
  },
];
