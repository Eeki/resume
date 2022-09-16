import type { Project } from '../types'

const projects: Project[] = [
  {
    name: 'Homer',
    start: new Date(2016, 4),
    end: new Date(2016, 10),
    color: 'rgb(0 112 169)',
    roles: ['Frontend'],
    devType: 'In-House & Consulting',
    tech: ['React'],
    description:
      'My first job as a developer was in a startup named Homer. We were ' +
      'developing an innovative rental listing site that could find an individual\'s ' +
      'best place to live based on locations and services. We also did some ' +
      'consulting work to support our operations.'
  },
  {
    name: 'Data curation tool',
    start: new Date(2016, 11),
    end: new Date(2018, 2),
    color: 'rgb(0 112 169)',
    roles: ['Full stack'],
    devType: 'In-House',
    tech: ['Django', 'Postgres', 'React'],
    description:
      'I started in Medisapiens working with the Data curation tool. The ' +
      'application can curate and ontologize medical data. This project was my ' +
      'first Django application, and I started it as a single developer project.'
  },
  {
    name: 'Genomic tool for big pharma',
    start: new Date(2017, 8),
    end: new Date(2019, 11),
    color: 'rgb(0 112 169)',
    roles: ['Full stack'],
    devType: 'Consulting',
    tech: ['Node', 'MongoDB', 'React'],
    description:
      'My first consulting case. This project taught me much about working with ' +
      'big legacy projects and effectively using Node in data-intensive ' +
      'applications. I was also refactoring the front end from Reactive coffee to React.'
  },
  {
    name: 'Online vet platform',
    start: new Date(2018, 8),
    end: new Date(2020, 10),
    color: 'rgb(0 112 169)',
    roles: ['Full stack'],
    devType: 'Consulting',
    tech: ['Django', 'Postgres', 'React'],
    description:
      'Online Vet platform where multiple vets and vet organizations can sell ' +
      'their services through video and chat meetings. The application also ' +
      'provides medical records and analysis capabilities based on research at ' +
      'the University of Helsinki. My role was a full-stack developer in this project.'
  },
  {
    name: 'Laboratory information system',
    start: new Date(2018, 2),
    end: new Date(2020, 10),
    color: 'rgb(0 112 169)',
    roles: ['Backend'],
    devType: 'Consulting',
    tech: ['Django', 'Postgres'],
    description:
      'I was responsible for the backend of this LIS system. We did this project ' +
      'for a company in the Netherlands that is doing clinical laboratory analysis. ' +
      'The big challenge was to manage to do everything in minimal time and ' +
      'with a small team. Even though the overall time of this project was long, ' +
      'we only spent three months of development to complete the project.'
  },
  {
    name: 'Genomic/clinical SaaS',
    start: new Date(2020, 4),
    end: new Date(2022, 9),
    color: 'rgb(0 112 169)',
    roles: ['Frontend', 'Cloud'],
    devType: 'In-House',
    tech: ['React', 'AWS', 'Kubernetes', 'Terraform'],
    description:
      'The flagship product of Medisapiens that can combine genomic and ' +
      'phenotype data under one roof and provide a powerful analysis tool for ' +
      'researchers. I was the lead developer of this project\'s front end and ' +
      'managed cloud infrastructure. I learned a lot about leading peer ' +
      'developers and taking responsibility for a project.'
  }
]

export default projects
