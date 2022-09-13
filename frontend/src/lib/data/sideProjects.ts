import type { SideProject } from '../types'

export const sideProjects: SideProject[] = [
  {
    name: 'Deepdream generator',
    description:
      'Application to generate <a href="https://en.wikipedia.org/wiki/DeepDream" target="_blank">deepdream</a> images based on user uploaded images. ' +
      'The stack is fully serverless to minimize all costs from AWS. ' +
      'This app was done to learn how to create a complex service in AWS without running any virtual machines. ' +
      'Technologies used in this project: AWS (Lambda, Cognito, S3, Appsync, DynamoDB), Terraform, GraphQL, Serverless, Python, Typescript',
    image: 'side-project-deepdream.jpeg',
    link: 'https://deepdream-demo-app.xyz/',
    gitRepo: 'https://github.com/Eeki/deepdream-generator'
  },
  {
    name: 'Ticketing app (microservice training)',
    description:
      'Customer to customer e-commerce platform where you can sell and buy tickets. ' +
      'This application was done purely for training purposes. ' +
      'All communication between microservices are asynchronous ' +
      'and each service has zero dependencies to other services. ' +
      'Technologies used in this project: Node, Express, Mongo, Redis, NATS streams, Kubernetes, Docker, React, Digital Ocean',
    image: 'side-project-ticketing.png',
    link: 'https://eliels-microservice-demo.site/',
    gitRepo: 'https://github.com/Eeki/microservices-training'
  },
  {
    name: 'Index Veritas',
    description:
      'Service that provides a fast and easy way of searching changes over time in Finnish online news. ' +
      'This project was started by a friend of mine who want to make the press more transparent in Finland. ' +
      "I'm helping her to find the most meaningful use case and doing a prototype. " +
      'The goal is to get funding for the project from Kone Funding programme: Is Democracy Eroding? ' +
      'Technologies used in this project: Node, Nest, AWS (Elastic Beanstalk, RDS, CloudFront), Terraform, Postgres, Docker,  React',
    image: 'side-project-index-veritas.png',
    link: 'https://index-veritas.org',
    gitRepo: 'https://github.com/Eeki/index-veritas'
  },
  {
    name: 'This resume page',
    description:
      'I needed a resume so coding one was the most natural way of doing it. ' +
      'I also wanted to learn something new so I created this page using svelte and tailwind which were previously unfamiliar to me.',
    image: 'side-project-resume.png',
    gitRepo: 'https://github.com/Eeki/resume'
  }
]
