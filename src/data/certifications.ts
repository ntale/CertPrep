export interface Certification {
  id: string;
  name: string;
  description: string;
  quizzes: Quiz[];
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const certifications: Certification[] = [
  {
    id: 'aws-saa',
    name: 'AWS Solutions Architect Associate',
    description: 'Validate your expertise in designing distributed systems on AWS',
    quizzes: [
      {
        id: 'aws-saa-1',
        title: 'AWS SAA - Compute Services',
        questions: [
          {
            id: 1,
            question: "Which AWS service is best suited for running containerized applications?",
            options: ["EC2", "ECS", "Lambda", "S3"],
            correctAnswer: 1
          },
          // Add more questions...
        ]
      },
      // Add more quizzes...
    ]
  },
  {
    id: 'az-900',
    name: 'Microsoft Azure Fundamentals',
    description: 'Prove your understanding of cloud concepts and Azure services',
    quizzes: [
      {
        id: 'az-900-1',
        title: 'AZ-900 - Cloud Concepts',
        questions: [
          {
            id: 1,
            question: "Which of the following is not a cloud computing deployment model?",
            options: ["Public cloud", "Private cloud", "Hybrid cloud", "Distributed cloud"],
            correctAnswer: 3
          },
          // Add more questions...
        ]
      },
      // Add more quizzes...
    ]
  },
  {
    id: 'cka',
    name: 'Certified Kubernetes Administrator',
    description: 'Demonstrate your ability to manage Kubernetes clusters',
    quizzes: [
      {
        id: 'cka-1',
        title: 'CKA - Cluster Architecture',
        questions: [
          {
            id: 1,
            question: "Which component in Kubernetes is responsible for maintaining the desired state of the cluster?",
            options: ["kubelet", "kube-proxy", "kube-scheduler", "kube-controller-manager"],
            correctAnswer: 3
          },
          // Add more questions...
        ]
      },
      // Add more quizzes...
    ]
  },
  // Add more certifications...
];