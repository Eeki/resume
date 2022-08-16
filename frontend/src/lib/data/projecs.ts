import type {Project} from "../types";

const projects: Project[] = [
  {
    name: 'Homer',
    start: new Date(2016, 4),
    end: new Date(2016, 10),
    color: '#8DD3C7FF',
    roles: ['Frontend'],
    devType: 'In-House & Consulting',
    tech: ['React'],
    description:
      'My first job as a developer in a startup named Homer. We were developing a innovative ' +
      'rental listing site that could find one a best place to live based on locations. ' +
      'We also did some consulting work to support our operations.'
  },
  {
    name: 'Data curation tool',
    start: new Date(2016, 11),
    end: new Date(2018, 2),
    color: '#BEBADAFF',
    roles: ['Full stack'],
    devType: 'In-House',
    tech: ['Django', 'Postgres', 'React'],
    description:
      "I started in Medisapiens working with Data curation tool. " +
      "The application can curate and ontologize medical data. This was my first Django " +
      "project and I started it as a single developer project."
  },
  {
    name: 'Genomic tool for big pharma',
    start: new Date(2017, 8),
    end: new Date(2019, 11),
    color: '#80B1D3FF',
    roles: ['Full stack'],
    devType: 'Consulting',
    tech: ['Node', 'MongoDB', 'React'],
    description:
      'My first consulting case. This project taught me a lot of working with big legacy ' +
      'projects and effective usage of Node in a data intensive applications. I was also ' +
      ' refactoring the frontend from Reactive coffee to React.'
  },
  {
    name: 'Online vet platform',
    start: new Date(2018, 8),
    end: new Date(2020, 10),
    color: '#FB8072FF',
    roles: ['Full stack'],
    devType: 'Consulting',
    tech: ['Django', 'Postgres', 'React'],
    description:
      'Online Vet platform where multiple vets and vet organisations can sell' +
      ' their services through video and chat meetings. ' +
      'There is also analysis capabilities for pets based on research made in University of Helsinki'
  },
  {
    name: 'Laboratory information system',
    start: new Date(2018, 2),
    end: new Date(2020, 10),
    color: '#FDB462FF',
    roles: ['Backend'],
    devType: 'Consulting',
    tech: ['Django', 'Postgres'],
    description:
      'I was responsible for the backend of this LIS system. This project was done for a company ' +
      'that is doing clinical laboratory analysis in Netherlands.'
  },
  {
    name: 'Genomic software suite',
    start: new Date(2020, 4),
    end: new Date(),
    color: '#4f46e5',
    roles: ['Frontend', 'Cloud'],
    devType: 'In-House',
    tech: ['React', 'AWS', 'Kubernetes', 'Terraform'],
    description:
      'GSS is a flagship product of Medisapiens ' +
      " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  }
]

export default projects
