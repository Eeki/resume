import type { SideProject } from '../types'

// Deepdream generator, ticketing app, index-veritas, This resume

export const sideProjects: SideProject[] = [
  {
    name: 'Deepdream generator',
    description:
      'Service to generate <a href="https://en.wikipedia.org/wiki/DeepDream" target="_blank">deepdream</a> images based on user uploaded images. ' +
      'The stack is fully serverless to minimize all costs from AWS. ' +
      'Technologies used in this project: AWS (Lambda, Cognito, S3, Appsync, DynamoDB), Terraform, GraphQL, Serverless, Python, Typescript',
    image: 'side-project-deepdream.jpeg',
    link: 'https://deepdream-demo-app.xyz/',
    gitRepo: 'https://github.com/Eeki/deepdream-generator'
  },
  {
    name: 'Ticketing app (microservice training)',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://via.placeholder.com/200',
    link: 'https://www.google.com/',
    gitRepo: 'https://github.com/Eeki/microservices-training'
    // technologies: 'Node, Express, Mongo, Redis, NATS streams, Kubernetes, React, Digital Ocean'
  },
  {
    name: 'Index Veritas',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://via.placeholder.com/200',
    link: 'https://www.google.com/',
    gitRepo: 'https://github.com/Eeki/index-veritas'
    // technologies: 'Node, Nest, AWS, Postgres, Docker, React'
  },
  {
    name: 'This resume page',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'side-project-resume.png',
    gitRepo: 'https://github.com/Eeki/resume'
    // technologies: 'Svelte, Cloudflare'
  }
]
