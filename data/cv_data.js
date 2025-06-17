const CV_DATA = {
    currentLang: 'ko', // 기본 언어 설정

    profile: {
        name: {
            ko: "홍길동",
            en: "Gil-dong Hong"
        },
        tagline: {
            ko: "혁신적인 소프트웨어 개발자 | 웹 기술 전문가",
            en: "Innovative Software Developer | Web Tech Expert"
        },
        photo: "assets/images/profile.png", // 실제 이미지 파일 경로
        contact: {
            email: "hong.gildong@example.com",
            phone: "+82-10-1234-5678",
            location: {
                ko: "서울, 대한민국",
                en: "Seoul, South Korea"
            }
        },
        keywords: [
            { ko: "웹 개발", en: "Web Development" },
            { ko: "프론트엔드", en: "Frontend" },
            { ko: "백엔드", en: "Backend" },
            { ko: "JavaScript", en: "JavaScript" },
            { ko: "React", en: "React" },
            { ko: "Node.js", en: "Node.js" },
            { ko: "데이터베이스", en: "Database" },
            { ko: "클라우드", en: "Cloud" },
            { ko: "애자일", en: "Agile" },
            { ko: "문제 해결", en: "Problem Solving" }
        ],
        summaryAwards: {
            ko: "2023년 대한민국 SW 공모전 대상 수상",
            en: "Grand Prize, 2023 Korea SW Contest"
        },
        externalLinks: [
            { name: "GitHub", url: "https://github.com/your-github-id", icon: "assets/icons/github.svg" },
            { name: "LinkedIn", url: "https://linkedin.com/in/your-linkedin-id", icon: "assets/icons/linkedin.svg" },
            { name: "Blog", url: "https://your-blog.com", icon: "assets/icons/blog.svg" }
        ]
    },

    sections: {
        navbar: {
            home: { ko: "홍길동 CV", en: "Gil-dong Hong CV" },
            introduction: { ko: "소개", en: "Introduction" },
            education: { ko: "학력", en: "Education" },
            experience: { ko: "경력", en: "Experience" },
            projects: { ko: "프로젝트", en: "Projects" },
            skills: { ko: "기술", en: "Skills" },
            research: { ko: "연구", en: "Research" },
            awards: { ko: "수상/자격증", en: "Awards/Certificates" }
        },
        summary: {
            contactInfoTitle: { ko: "연락처", en: "Contact Info" },
            keywordsTitle: { ko: "주요 역량", en: "Key Competencies" },
            summaryAwardsTitle: { ko: "요약된 자격", en: "Summary of Qualifications" },
            externalLinksTitle: { ko: "외부 링크", en: "External Links" },
            contactCtaButton: { ko: "문의하기", en: "Contact Me" }
        },
        introduction: {
            title: { ko: "소개", en: "Introduction" },
            selfIntroSubtitle: { ko: "자기소개", en: "Self-Introduction" },
            selfIntro: {
                ko: `안녕하세요! 소프트웨어 개발에 대한 깊은 열정을 가진 홍길동입니다. 저는 컴퓨터공학 학사 및 소프트웨어공학 석사 과정을 통해 이론적 기반을 다졌으며, 약 5년간의 실무 경력을 통해 다양한 웹 기반 애플리케이션 개발에 참여했습니다. 특히 복잡한 문제를 해결하고, 효율적인 코드를 작성하며, 사용자에게 가치를 제공하는 솔루션을 만드는 것에 보람을 느낍니다.`,
                en: `Hello! I'm Gil-dong Hong, a software developer with a profound passion for creating innovative solutions. My academic background includes a B.S. in Computer Science and an M.S. in Software Engineering, providing a strong theoretical foundation. With approximately 5 years of practical experience, I've been involved in developing various web-based applications. I particularly enjoy solving complex problems, writing efficient code, and delivering valuable solutions to users.`
            },
            goalsSubtitle: { ko: "목표", en: "Goals" },
            goals: {
                ko: `저는 끊임없이 배우고 성장하며, 최신 기술 트렌드를 주도적으로 습득하여 프로젝트에 적용하는 것을 목표로 합니다. 특히 대규모 시스템 아키텍처 설계 및 구현 역량을 강화하고, 클라우드 기반 서비스 개발에 기여하여 비즈니스 가치를 극대화하고 싶습니다. 또한, 동료들과의 협업을 통해 시너지를 창출하고, 사용자 중심의 서비스를 개발하여 긍정적인 영향을 미치는 개발자가 되고자 합니다.`,
                en: `My goal is to continuously learn and grow, actively acquiring and applying the latest technological trends to projects. I aim to strengthen my capabilities in designing and implementing large-scale system architectures and to maximize business value by contributing to cloud-based service development. Furthermore, I aspire to be a developer who creates synergy through collaboration with colleagues and positively impacts users by developing user-centric services.`
            }
        },
        education: {
            title: { ko: "학력", en: "Education" },
            items: [
                {
                    degree: { ko: "소프트웨어공학 석사", en: "M.S. in Software Engineering" },
                    institution: { ko: "한국대학교", en: "Korea University" },
                    period: { ko: "2021.03 ~ 2023.02", en: "Mar 2021 ~ Feb 2023" },
                    description: { ko: "주요 연구 분야: 분산 시스템 및 마이크로서비스 아키텍처", en: "Research Focus: Distributed Systems and Microservices Architecture" }
                },
                {
                    degree: { ko: "컴퓨터공학 학사", en: "B.S. in Computer Science" },
                    institution: { ko: "한성대학교", en: "Hansung University" },
                    period: { ko: "2017.03 ~ 2021.02", en: "Mar 2017 ~ Feb 2021" },
                    description: { ko: "주요 과목: 자료구조, 알고리즘, 운영체제, 데이터베이스", en: "Key Courses: Data Structures, Algorithms, Operating Systems, Databases" }
                }
            ]
        },
        experience: {
            title: { ko: "경력", en: "Experience" },
            items: [
                {
                    position: { ko: "선임 소프트웨어 엔지니어", en: "Senior Software Engineer" },
                    company: { ko: "이노베이트 테크놀로지스", en: "Innovate Technologies Inc." },
                    period: { ko: "2023.03 ~ 현재", en: "Mar 2023 ~ Present" },
                    duties: [
                        { ko: "클라우드 기반 대규모 백엔드 시스템(MSA) 설계, 개발 및 운영 (Java, Spring Boot, Kafka, AWS)", en: "Designed, developed, and operated cloud-based large-scale backend systems (MSA) using Java, Spring Boot, Kafka, and AWS." },
                        { ko: "트래픽 급증에 대응하는 시스템 최적화 및 성능 개선 주도", en: "Led system optimization and performance improvement initiatives to handle surging traffic." },
                        { ko: "신규 서비스 개발을 위한 기술 스택 및 아키텍처 결정 참여", en: "Participated in determining technology stack and architecture for new service development." }
                    ],
                    projects: [
                        { ko: "차세대 SaaS 플랫폼 코어 시스템 구축", en: "Development of Next-Gen SaaS Platform Core System" },
                        { ko: "실시간 데이터 처리 파이프라인 최적화", en: "Real-time Data Processing Pipeline Optimization" }
                    ]
                },
                {
                    position: { ko: "소프트웨어 엔지니어", en: "Software Engineer" },
                    company: { ko: "미래 소프트", en: "Future Soft Co., Ltd." },
                    period: { ko: "2021.03 ~ 2023.02", en: "Mar 2021 ~ Feb 2023" },
                    duties: [
                        { ko: "React 기반 프론트엔드 웹 애플리케이션 개발 및 유지보수", en: "Developed and maintained React-based frontend web applications." },
                        { ko: "RESTful API 연동 및 데이터 시각화 기능 구현", en: "Integrated with RESTful APIs and implemented data visualization features." },
                        { ko: "사용자 요구사항 분석 및 기능 정의 참여", en: "Participated in user requirement analysis and feature definition." }
                    ],
                    projects: [
                        { ko: "스마트 오피스 솔루션 웹 포털 개발", en: "Smart Office Solution Web Portal Development" }
                    ]
                },
                 {
                    position: { ko: "주니어 개발자", en: "Junior Developer" },
                    company: { ko: "스타트업 솔루션스", en: "Startup Solutions" },
                    period: { ko: "2020.01 ~ 2021.02", en: "Jan 2020 ~ Feb 2021" },
                    duties: [
                        { ko: "Python/Django를 이용한 웹 서비스 백엔드 개발 지원", en: "Assisted in backend web service development using Python/Django." },
                        { ko: "데이터베이스 스키마 설계 및 쿼리 최적화", en: "Designed database schemas and optimized queries." },
                        { ko: "테스트 코드 작성 및 버그 수정", en: "Wrote test code and fixed bugs." }
                    ],
                    projects: [
                        { ko: "온라인 학습 관리 시스템 초기 버전 개발", en: "Initial Version Development of Online Learning Management System" }
                    ]
                }
            ]
        },
        projects: {
            title: { ko: "프로젝트", en: "Projects" },
            viewProjectButton: { ko: "프로젝트 보기", en: "View Project" },
            projectDetailTitleLabel: { ko: "프로젝트 명", en: "Project Name" },
            projectDetailPeriodLabel: { ko: "기간", en: "Period" },
            projectDetailTechLabel: { ko: "기술 스택", en: "Technologies" },
            projectDetailLinkButton: { ko: "자세히 보기", en: "Learn More" },
            items: [
                {
                    id: "project1",
                    name: { ko: "스마트 헬스케어 웹 서비스", en: "Smart Healthcare Web Service" },
                    description: { ko: "사용자의 건강 데이터를 실시간으로 수집, 분석하고 맞춤형 건강 리포트를 제공하는 웹 서비스입니다. 백엔드는 Node.js와 MongoDB로, 프론트엔드는 React를 사용하여 개발했습니다.", en: "A web service that collects and analyzes user health data in real-time, providing personalized health reports. Developed with Node.js and MongoDB for the backend, and React for the frontend." },
                    technologies: ["React", "Node.js", "Express", "MongoDB", "RESTful API"],
                    period: { ko: "2024.01 ~ 2024.06", en: "Jan 2024 ~ Jun 2024" },
                    link: "https://github.com/gildong/smart-healthcare",
                    image: "assets/images/project1.png",
                    detail: {
                        ko: "개인의 건강 데이터를 쉽게 기록하고 시각적으로 확인할 수 있는 대시보드와 AI 기반의 건강 예측 모델을 포함합니다. 사용자 경험을 최적화하기 위해 Redux를 활용한 상태 관리를 도입했습니다. 실시간 데이터 스트리밍을 위해 웹소켓 기술을 일부 적용했습니다.",
                        en: "Includes a dashboard for easily recording and visualizing personal health data, along with an AI-based health prediction model. Implemented Redux for state management to optimize user experience. Partially applied WebSocket technology for real-time data streaming."
                    }
                },
                {
                    id: "project2",
                    name: { ko: "온라인 쇼핑몰 백엔드 시스템", en: "Online Shopping Mall Backend System" },
                    description: { ko: "Spring Boot와 JPA를 이용한 대규모 온라인 쇼핑몰의 주문, 결제, 상품 관리 시스템 백엔드 개발 프로젝트입니다. MSA(Microservices Architecture) 패턴을 적용했습니다.", en: "Backend development project for a large-scale online shopping mall's order, payment, and product management system, using Spring Boot and JPA. Applied Microservices Architecture (MSA) patterns." },
                    technologies: ["Spring Boot", "Java", "JPA", "MySQL", "Kafka", "Docker", "AWS EC2"],
                    period: { ko: "2023.07 ~ 2023.12", en: "Jul 2023 ~ Dec 2023" },
                    link: "https://github.com/gildong/ecommerce-backend",
                    image: "assets/images/project2.png",
                    detail: {
                        ko: "주문 처리, 재고 관리, 결제 연동 모듈을 각각 독립적인 서비스로 구축하여 시스템의 확장성과 안정성을 확보했습니다. Kafka를 이용한 비동기 메시징 시스템을 구현하여 트랜잭션 일관성을 유지했습니다. JUnit과 Mockito를 활용하여 TDD 기반의 개발을 진행했습니다.",
                        en: "Built order processing, inventory management, and payment integration modules as independent services to ensure system scalability and stability. Implemented an asynchronous messaging system using Kafka to maintain transactional consistency. Conducted TDD-based development using JUnit and Mockito."
                    }
                },
                {
                    id: "project3",
                    name: { ko: "실시간 채팅 애플리케이션", en: "Real-time Chat Application" },
                    description: { ko: "Node.js와 Socket.IO를 이용한 실시간 채팅 애플리케이션입니다. 사용자 인증, 방 생성, 메시지 전송 및 이모지 기능 등을 구현했습니다.", en: "A real-time chat application built with Node.js and Socket.IO. Implemented user authentication, room creation, message sending, and emoji functionalities." },
                    technologies: ["Node.js", "Express", "Socket.IO", "MongoDB", "Passport.js"],
                    period: { ko: "2023.03 ~ 2023.06", en: "Mar 2023 ~ Jun 2023" },
                    link: "https://github.com/gildong/realtime-chat-app",
                    image: "assets/images/project3.png",
                    detail: {
                        ko: "사용자 간 즉각적인 메시지 전송을 위해 웹소켓을 효율적으로 사용했습니다. 몽고DB를 활용하여 채팅 기록을 저장하고 관리했습니다. JWT 기반의 사용자 인증 시스템을 구축하여 보안을 강화했습니다.",
                        en: "Efficiently used WebSockets for instant message transmission between users. Stored and managed chat history using MongoDB. Built a JWT-based user authentication system to enhance security."
                    }
                },
                {
                    id: "project4",
                    name: { ko: "AI 기반 추천 시스템 개발", en: "AI-based Recommendation System Development" },
                    description: { ko: "사용자 행동 데이터를 기반으로 맞춤형 상품/콘텐츠를 추천하는 시스템을 개발했습니다. Python과 Scikit-learn, TensorFlow를 활용했습니다.", en: "Developed a system that recommends personalized products/content based on user behavior data. Utilized Python, Scikit-learn, and TensorFlow." },
                    technologies: ["Python", "TensorFlow", "Scikit-learn", "Flask", "PostgreSQL"],
                    period: { ko: "2022.09 ~ 2023.02", en: "Sep 2022 ~ Feb 2023" },
                    link: "https://github.com/gildong/ai-recommendation-system",
                    image: "assets/images/project4.png",
                    detail: {
                        ko: "협업 필터링(Collaborative Filtering)과 콘텐츠 기반 필터링(Content-based Filtering)을 조합한 하이브리드 추천 알고리즘을 구현했습니다. Django를 사용하여 추천 결과를 웹 페이지에 시각화하는 백엔드 API를 개발했습니다.",
                        en: "Implemented a hybrid recommendation algorithm combining Collaborative Filtering and Content-based Filtering. Developed a backend API using Django to visualize recommendation results on a web page."
                    }
                },
                {
                    id: "project5",
                    name: { ko: "클라우드 기반 파일 동기화 서비스", en: "Cloud-based File Synchronization Service" },
                    description: { ko: "개인 클라우드 저장소와 로컬 디렉토리 간 파일 동기화를 지원하는 서비스입니다. Go 언어와 AWS S3를 사용했습니다.", en: "A service supporting file synchronization between personal cloud storage and local directories. Developed using Go language and AWS S3." },
                    technologies: ["Go", "AWS S3", "Docker", "RESTful API"],
                    period: { ko: "2022.03 ~ 2022.08", en: "Mar 2022 ~ Aug 2022" },
                    link: "https://github.com/gildong/cloud-sync-service",
                    image: "assets/images/project5.png",
                    detail: {
                        ko: "대용량 파일 처리를 위한 스트리밍 업로드/다운로드 기능을 구현했습니다. 파일 변경 감지 및 충돌 해결 알고리즘을 설계하여 데이터 무결성을 확보했습니다. Docker를 이용하여 배포 환경을 컨테이너화했습니다.",
                        en: "Implemented streaming upload/download functionality for large file processing. Designed file change detection and conflict resolution algorithms to ensure data integrity. Containerized the deployment environment using Docker."
                    }
                },
                {
                    id: "project6",
                    name: { ko: "블록체인 기반 투표 시스템", en: "Blockchain-based Voting System" },
                    description: { ko: "이더리움 스마트 컨트랙트(Solidity)를 활용하여 투명하고 안전한 온라인 투표 시스템을 구축했습니다.", en: "Built a transparent and secure online voting system using Ethereum smart contracts (Solidity)." },
                    technologies: ["Solidity", "Truffle", "Ganache", "Web3.js", "React"],
                    period: { ko: "2021.09 ~ 2022.02", en: "Sep 2021 ~ Feb 2022" },
                    link: "https://github.com/gildong/blockchain-voting",
                    image: "assets/images/project6.png",
                    detail: {
                        ko: "투표 과정의 위변조를 방지하고, 모든 투표 내역을 블록체인에 기록하여 투명성을 확보했습니다. MetaMask 연동을 통해 사용자 친화적인 인터페이스를 제공했습니다. 프론트엔드는 React로 개발하여 스마트 컨트랙트와 상호작용했습니다.",
                        en: "Prevented tampering with the voting process and ensured transparency by recording all voting history on the blockchain. Provided a user-friendly interface through MetaMask integration. Developed the frontend with React to interact with smart contracts."
                    }
                },
                {
                    id: "project7",
                    name: { ko: "머신러닝 모델 배포 API", en: "Machine Learning Model Deployment API" },
                    description: { ko: "학습된 머신러닝 모델을 RESTful API 형태로 배포하여 다른 서비스에서 활용할 수 있도록 했습니다. Flask와 Docker를 사용했습니다.", en: "Deployed a trained machine learning model as a RESTful API for use by other services. Used Flask and Docker." },
                    technologies: ["Python", "Flask", "Scikit-learn", "Pandas", "Docker", "Nginx"],
                    period: { ko: "2021.03 ~ 2021.08", en: "Mar 2021 ~ Aug 2021" },
                    link: "https://github.com/gildong/ml-model-api",
                    image: "assets/images/project7.png",
                    detail: {
                        ko: "예측 요청에 대한 낮은 지연 시간(latency)을 목표로 모델 추론 API를 최적화했습니다. Docker 컨테이너를 사용하여 모델 환경을 격리하고, Nginx를 통해 API 게이트웨이를 구성했습니다. CI/CD 파이프라인 구축을 위한 기반을 마련했습니다.",
                        en: "Optimized the model inference API aiming for low latency on prediction requests. Isolated the model environment using Docker containers and configured an API gateway via Nginx. Laid the groundwork for building a CI/CD pipeline."
                    }
                },
                {
                    id: "project8",
                    name: { ko: "온라인 코드 에디터", en: "Online Code Editor" },
                    description: { ko: "웹 브라우저에서 실시간으로 코드를 작성하고 실행 결과를 확인할 수 있는 온라인 코드 에디터입니다. Monaco Editor와 Node.js 기반의 컴파일러 서버를 연동했습니다.", en: "An online code editor that allows real-time code writing and execution in a web browser. Integrated Monaco Editor with a Node.js-based compiler server." },
                    technologies: ["React", "Monaco Editor", "Node.js", "Express", "Docker"],
                    period: { ko: "2020.08 ~ 2021.02", en: "Aug 2020 ~ Feb 2021" },
                    link: "https://github.com/gildong/online-code-editor",
                    image: "assets/images/project8.png",
                    detail: {
                        ko: "사용자가 입력한 코드를 서버로 전송하여 안전한 환경에서 컴파일하고 실행 결과를 반환하는 기능을 구현했습니다. 다양한 프로그래밍 언어를 지원하기 위한 모듈형 아키텍처를 설계했습니다. 웹 워커를 사용하여 UI 스레드와 컴파일 스레드를 분리하여 성능을 향상시켰습니다.",
                        en: "Implemented the functionality to send user-entered code to the server, compile it in a secure environment, and return the execution results. Designed a modular architecture to support various programming languages. Improved performance by separating UI and compilation threads using web workers."
                    }
                }
            ]
        },
        skills: {
            title: { ko: "기술 스택", en: "Skills" },
            categories: [
                {
                    name: { ko: "언어", en: "Languages" },
                    items: [
                        { name: "JavaScript (ES6+)", level: 5 },
                        { name: "Python", level: 4 },
                        { name: "Java", level: 4 },
                        { name: "Go", level: 3 },
                        { name: "SQL", level: 4 }
                    ]
                },
                {
                    name: { ko: "프론트엔드", en: "Frontend" },
                    items: [
                        { name: "HTML/CSS", level: 5 },
                        { name: "React", level: 4 },
                        { name: "Vue.js", level: 3 },
                        { name: "Webpack", level: 3 }
                    ]
                },
                {
                    name: { ko: "백엔드", en: "Backend" },
                    items: [
                        { name: "Node.js (Express)", level: 4 },
                        { name: "Spring Boot", level: 4 },
                        { name: "Django", level: 3 },
                        { name: "Flask", level: 3 }
                    ]
                },
                {
                    name: { ko: "데이터베이스", en: "Databases" },
                    items: [
                        { name: "MySQL", level: 4 },
                        { name: "PostgreSQL", level: 3 },
                        { name: "MongoDB", level: 3 },
                        { name: "Redis", level: 3 }
                    ]
                },
                {
                    name: { ko: "클라우드 & DevOps", en: "Cloud & DevOps" },
                    items: [
                        { name: "AWS (EC2, S3, RDS)", level: 3 },
                        { name: "Docker", level: 4 },
                        { name: "Kubernetes", level: 2 },
                        { name: "Git", level: 5 },
                        { name: "CI/CD", level: 3 }
                    ]
                },
                {
                    name: { ko: "기타", en: "Others" },
                    items: [
                        { name: "RESTful API Design", level: 4 },
                        { name: "Microservices", level: 3 },
                        { name: "Agile/Scrum", level: 4 },
                        { name: "Test Driven Development (TDD)", level: 3 }
                    ]
                }
            ]
        },
        research: {
            title: { ko: "연구", en: "Research" },
            viewPaperButton: { ko: "논문 보기", en: "View Paper" },
            items: [
                {
                    title: { ko: "머신러닝 기반 이미지 인식 정확도 향상 연구: 합성곱 신경망을 이용한 접근", en: "Research on Improving Machine Learning-based Image Recognition Accuracy: A Convolutional Neural Network Approach" },
                    publisher: { ko: "한국컴퓨터학회 논문지", en: "Journal of Korean Institute of Computer Scientists" },
                    date: { ko: "2022.11", en: "Nov 2022" },
                    link: "http://sol-link.com/research1" // 샘플 URL
                },
                {
                    title: { ko: "분산 시스템 환경에서의 데이터 일관성 유지를 위한 새로운 동기화 프로토콜 제안", en: "Proposal of a Novel Synchronization Protocol for Data Consistency in Distributed System Environments" },
                    publisher: { ko: "대한전자공학회 논문지", en: "Journal of Korean Institute of Electrical and Electronic Engineering" },
                    date: { ko: "2021.05", en: "May 2021" },
                    link: "http://sol-link.com/research2" // 샘플 URL
                }
            ]
        },
        awards: {
            title: { ko: "수상 및 자격증", en: "Awards & Certificates" },
            items: [
                {
                    name: { ko: "2023 대한민국 SW 공모전 대상", en: "Grand Prize, 2023 Korea SW Contest" },
                    issuer: { ko: "과학기술정보통신부", en: "Ministry of Science and ICT" },
                    date: { ko: "2023.12", en: "Dec 2023" }
                },
                {
                    name: { ko: "정보처리기사", en: "Engineer Information Processing" },
                    issuer: { ko: "한국산업인력공단", en: "Human Resources Development Service of Korea" },
                    date: { ko: "2020.08", en: "Aug 2020" }
                },
                {
                    name: { ko: "AWS Certified Developer – Associate", en: "AWS Certified Developer – Associate" },
                    issuer: { ko: "Amazon Web Services", en: "Amazon Web Services" },
                    date: { ko: "2024.03", en: "Mar 2024" }
                }
            ]
        }
    },
    modals: {
        contact: {
            title: { ko: "문의 양식", en: "Contact Form" },
            nameLabel: { ko: "이름", en: "Name" },
            emailLabel: { ko: "이메일", en: "Email" },
            phoneLabel: { ko: "전화번호 (선택 사항)", en: "Phone (Optional)" },
            messageLabel: { ko: "메시지", en: "Message" },
            submitButton: { ko: "전송하기", en: "Send Message" },
            successMessage: { ko: "메시지가 성공적으로 전송되었습니다!", en: "Message sent successfully!" },
            errorMessage: { ko: "메시지 전송에 실패했습니다. 다시 시도해 주세요.", en: "Failed to send message. Please try again." }
        }
    },
    footer: {
        text: { ko: "© 2025 홍길동. All Rights Reserved.", en: "© 2025 Gil-dong Hong. All Rights Reserved." }
    }
};
