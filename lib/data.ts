import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: "sarthakpandey5667@gmail.com",
    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Sarthak, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Sarthak-Pandey' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/sarthak-pandey-481248307/' },
    { name: 'instagram', url: 'https://www.instagram.com/sar_thak.io/' },
];

export const PORTFOLIO_STATS = [
    { label: 'Public Repositories', value: '20+' },
    { label: 'Featured Projects', value: '6' },
    { label: 'Core Technologies', value: '8+' },
];

export const MY_STACK = {
    languages: [
        // Added official C++ logo downloaded from Simple Icons CDN
        {
            name: 'C++',
            icon: '/logo/cpp.svg',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        // Added official Python logo downloaded from Simple Icons CDN
        {
            name: 'Python',
            icon: '/logo/python.svg',
        },
    ],
    frontend: [
        // Added official HTML5 logo downloaded from Simple Icons CDN
        {
            name: 'HTML5',
            icon: '/logo/html5.svg',
        },
        // Added official CSS3 logo downloaded from Simple Icons CDN
        {
            name: 'CSS3',
            icon: '/logo/css3.svg',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next-colored.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express-colored.png',
        },
    ],
    database: [
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'GitHub',
            icon: '/logo/github-colored.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        // Added official Visual Studio Code logo downloaded from Simple Icons CDN
        {
            name: 'VS Code',
            icon: '/logo/vscode.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Snitch',
        slug: 'snitch',
        sourceCode: 'https://github.com/Sarthak-Pandey/Snitch',
        year: 2025,
        description: `
        Snitch is a full-stack e-commerce and product management platform built with React, Redux Toolkit, and Node.js. <br/> <br/>
        
        Key Features:<br/>
        <ul>
          <li>🔒 Authentication System: Secure JWT token authentication with bcrypt password hashing</li>
          <li>📊 Interactive 3D Product Viewer: Realtime 3D clothing model visualization powered by Three.js</li>
          <li>📈 Custom Analytics: Data visualization graph featuring interactive radial statistics</li>
          <li>☁️ Cloud Image Storage: Integrated ImageKit service for seamless media uploads</li>
          <li>📦 Order & Product Management: Full CRUD operations for product inventory and categories</li>
        </ul>
        `,
        role: `
        Full-Stack Developer <br/>
        Designed and implemented end-to-end full-stack architecture:
        <ul>
          <li>✅ Backend: Built Express.js REST API with Mongoose schemas for users and products</li>
          <li>🔒 Security: Implemented JWT middleware and role-based route protection</li>
          <li>🎨 Frontend: Developed React frontend with Redux Toolkit for central state management</li>
          <li>🧊 3D Integration: Created Three.js 3D canvas viewport for product interaction</li>
        </ul>
        `,
        techStack: [
            'React',
            'Redux Toolkit',
            'Three.js',
            'Node.js',
            'Express',
            'MongoDB',
            'ImageKit',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/snitch.png',
        longThumbnail: '/projects/long/snitch.png',
        images: ['/projects/images/snitch-1.png'],
    },
    {
        title: 'Chat Application',
        slug: 'chat-application',
        sourceCode: 'https://github.com/Sarthak-Pandey/Chat_Application',
        year: 2025,
        description: `
        An AI-powered developer assistant and realtime chat application. Integrates Google GenAI and LangChain with custom tool calling to query GitHub, npm, and StackOverflow. <br/> <br/>
        
        Key Features:<br/>
        <ul>
          <li>🤖 Autonomous Tool Calling: AI agent calls external tools (GitHub API, npm registry, StackOverflow)</li>
          <li>⚡ Realtime Messaging: Socket.io websocket integration for instant chat delivery</li>
          <li>✉️ Email Verification: OTP verification system using Nodemailer</li>
          <li>💬 Thread & Message Management: Persistent chat history stored in MongoDB</li>
        </ul>
        `,
        role: `
        AI & Full-Stack Developer <br/>
        <ul>
          <li>🧠 AI Engineering: Built LangChain tool-calling pipeline with system prompts</li>
          <li>🔌 Sockets: Configured Socket.io event architecture on server and client</li>
          <li>🗄️ Database: Designed MongoDB models for user profiles, chat threads, and messages</li>
          <li>💻 Frontend: Built interactive dashboard UI with React Context API</li>
        </ul>
        `,
        techStack: [
            'React',
            'Node.js',
            'Express',
            'MongoDB',
            'Socket.io',
            'Google GenAI',
            'LangChain',
            'Nodemailer',
        ],
        thumbnail: '/projects/thumbnail/chat-app.png',
        longThumbnail: '/projects/long/chat-app.png',
        images: ['/projects/images/chat-app-1.png'],
    },
    {
        title: 'Spendily',
        slug: 'spendily',
        sourceCode: 'https://github.com/Sarthak-Pandey/Spendily',
        year: 2025,
        description: `
        Smart expense tracking and financial management platform built with Python Flask and SQLite, featuring an AI Financial Coach. <br/> <br/>
        
        Key Features:<br/>
        <ul>
          <li>💡 AI Financial Coach: Autonomous blueprint giving personalized spending advice</li>
          <li>📈 Financial Analytics: Analytics, savings targets, and expense predictions</li>
          <li>🗃️ Database Layer: Custom SQLite queries and transaction handling</li>
          <li>🧪 Automated Testing: Comprehensive test suite written with Pytest and pytest-flask</li>
        </ul>
        `,
        role: `
        Python Backend & Full-Stack Developer <br/>
        <ul>
          <li>🐍 Backend: Developed modular Flask blueprints (ai_coach.py) and app routing</li>
          <li>🗄️ Database: Built SQLite query manager (database/queries.py)</li>
          <li>📊 Analytics: Created predictive savings and financial analysis modules</li>
          <li>✅ Testing: Wrote full test coverage for all endpoints with Pytest</li>
        </ul>
        `,
        techStack: [
            'Python',
            'Flask',
            'SQLite',
            'Pytest',
            'pytest-flask',
            'HTML5/CSS3',
        ],
        thumbnail: '/projects/thumbnail/spendily.png',
        longThumbnail: '/projects/long/spendily.png',
        images: ['/projects/images/spendily-1.png'],
    },

    {
        title: 'AI Battle Arena',
        slug: 'ai-battle-arena',
        sourceCode: 'https://github.com/Sarthak-Pandey/Ai-Battle-arena',
        year: 2025,
        description: `
        Multi-LLM battle arena platform where language models compete on complex programming problems evaluated by an automated AI Judge. <br/> <br/>
        
        Key Features:<br/>
        <ul>
          <li>⚔️ Model Arena: Realtime competition between multiple AI models</li>
          <li>⚖️ AI Judge: Automated evaluation node grading code correctness</li>
          <li>🕸️ LangGraph: Stateful multi-agent graph workflows</li>
          <li>⚡ TypeScript Engine: Fully typed backend server environment</li>
        </ul>
        `,
        role: `
        AI Software Engineer <br/>
        <ul>
          <li>🕸️ Graph Design: Built LangGraph decision tree (graph.ai.ts)</li>
          <li>💻 Backend: Developed TypeScript Express server infrastructure</li>
          <li>🎛️ Frontend: Built JudgeCard and SolutionCard interactive UI components</li>
        </ul>
        `,
        techStack: [
            'TypeScript',
            'Node.js',
            'LangGraph',
            'React',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/ai-battle-arena.png',
        longThumbnail: '/projects/long/ai-battle-arena.png',
        images: ['/projects/images/ai-battle-arena-1.png'],
    },
    {
        title: 'ToDo App (AI-Assisted)',
        slug: 'todo-app-assisted-with-ai',
        sourceCode: 'https://github.com/Sarthak-Pandey/ToDo-App-Assisted-with-Ai',
        year: 2025,
        description: `
        AI-assisted task management application built with Astro and TypeScript. <br/> <br/>
        
        Key Features:<br/>
        <ul>
          <li>⚡ Astro Architecture: High performance component rendering</li>
          <li>🤖 AI Categorization: Automated task prioritization and tagging</li>
          <li>📱 Modern UI: Responsive, accessible user interface</li>
        </ul>
        `,
        role: `
        Frontend Developer <br/>
        <ul>
          <li>⚡ Developed Astro pages and TypeScript state logic</li>
          <li>🎨 Styled components with Tailwind CSS</li>
        </ul>
        `,
        techStack: ['Astro', 'TypeScript', 'Tailwind CSS', 'Python'],
        thumbnail: '/projects/thumbnail/todo-app.png',
        longThumbnail: '/projects/long/todo-app.png',
        images: ['/projects/images/todo-app-1.png'],
    },
    {
        title: 'StudySync',
        slug: 'studysync',
        sourceCode: 'https://github.com/Sarthak-Pandey/StudySync',
        liveUrl: 'https://sarthak-pandey.github.io/StudySync/',
        year: 2024,
        description: `
        Modern, responsive educational platform landing page deployed live on GitHub Pages. <br/> <br/>
        
        Key Features:<br/>
        <ul>
          <li>📚 Educational Showcase: Course cards, feature highlights, and testimonials</li>
          <li>⚡ Fast Load Speed: Optimized vanilla HTML5/CSS3 implementation</li>
          <li>🌐 Live Deployment: Deployed on GitHub Pages</li>
        </ul>
        `,
        role: `
        Frontend Developer <br/>
        <ul>
          <li>🎨 Designed responsive HTML5 structure and custom CSS styling</li>
          <li>🚀 Deployed site on GitHub Pages</li>
        </ul>
        `,
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
        thumbnail: '/projects/thumbnail/studysync.png',
        longThumbnail: '/projects/long/studysync.png',
        images: ['/projects/images/studysync-1.png'],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Computer Science Engineering Student',
        company: 'KIET Group of Institutions',
        duration: 'Present',
    },
    {
        title: 'Full-Stack Software Development',
        company: 'Self-Directed Projects & Open Source',
        duration: '2023 - Present',
    },
    {
        title: 'Data Structures & Algorithms',
        company: 'Competitive Problem Solving (C++)',
        duration: 'Ongoing',
    },
];
