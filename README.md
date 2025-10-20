# Home of Best DevOps Resources

Your Ultimate Collection of DevOps Learning Materials, Projects, and Tools for accelerating your DevOps journey.

![Home of Best DevOps Resources](https://github.com/NotHarshhaa/home-of-best-devops-resources/assets/NotHarshhaa/screenshot.png)

## About

The Home of Best DevOps Resources project was created to be your ultimate hub for high-quality DevOps learning content, hands-on projects, and career advancement resources. 

In the rapidly evolving world of DevOps, we provide a centralized collection of resources to help DevOps enthusiasts at every stage of their journey - from beginners to advanced practitioners. Our mission is to accelerate your DevOps career through carefully selected and organized materials.

## Features

- 💻 **Real-Time Projects**: Hands-on DevOps projects from beginner to advanced levels
- 📚 **Extensive Learning Materials**: Over 900+ curated resources for complete DevOps education
- 🧭 **Career Resources**: Job listings, interview preparation, and career progression guidance
- 🐳 **Specialized Content**: Dedicated resources for Docker, Kubernetes, and cloud technologies
- 🛠️ **Practical Tools**: Ready-to-use environments, cheat sheets, and automation solutions

## Tech Stack

| Area       | Technology                           |
| ---------- | ----------------------------------- |
| Framework  | Next.js (App Router)                |
| Styling    | Tailwind CSS + shadcn/ui            |
| Animations | Framer Motion                       |
| Data       | Static JSON/MDX files for resources |
| Deployment | Vercel                              |
| Source     | GitHub public repo                  |

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/NotHarshhaa/home-of-best-devops-resources.git
cd home-of-best-devops-resources
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Adding New Resources

All resources are stored in the `data/resources.json` file. To add a new resource:

1. Fork this repository
2. Add your resource to the JSON file following the existing format
3. Submit a pull request with your changes

Example resource format:

```json
{
  "id": "projects-hub",
  "title": "Real-Time Projects Hub",
  "description": "Hands-on DevOps projects from beginner to advanced",
  "category": "Learning",
  "tags": ["Projects", "Hands-on", "Learning"],
  "links": {
    "website": "https://projects.prodevopsguytech.com",
    "documentation": "https://projects.prodevopsguytech.com/docs",
    "github": "https://github.com/NotHarshhaa/projects-hub",
    "tutorial": "https://projects.prodevopsguytech.com/getting-started"
  },
  "featured": true,
  "image": "/images/devops-icon.png"
}
```

## Contributing

We welcome contributions to the Home of Best DevOps Resources project! Here's how you can help:

1. **Share Your Resources**: Have a DevOps project, blog, or tool? Submit it to be included
2. **Improve Site Features**: Help enhance the site's UI, search capabilities, or filtering options
3. **Report Broken Links**: Let us know if any resource links are no longer working
4. **Suggest New Categories**: Propose new ways to organize content for better discovery

Please see our [CONTRIBUTING.md](CONTRIBUTING.md) file for detailed guidelines on how to contribute.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to all [contributors](https://github.com/NotHarshhaa/home-of-best-devops-resources/graphs/contributors) who have helped build this resource
- The entire DevOps community for continuous learning and knowledge sharing
