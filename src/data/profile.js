
const profile = {
    identity: {
        name: "#PERRY",
        chineseName: "",
        handle: "github::@lizzary",
        roles: [
            {en: "Backend & Systems Engineer", zh: "后端与系统工程师"},
            {en: "Full-Stack Developer", zh: "全栈开发者"},
            {en: "Open-Source Author", zh: "开源作者"},
        ],
        tagline: {
            en: "Building reliable systems from the kernel up — and elegant interfaces on top.",
            zh: "从内核底层构建可靠系统 —— 同时在其之上交付精致的界面。",
        },
        location: {en: "Hong Kong", zh: "香港"},
        email: "ywpwong111@gmail.com",
        github: "https://github.com/lizzary",
    },

    stats: [
        {
            label: {en: "GitHub Repos (own)", zh: "原创开源仓库"},
            value: "3+",
            hint: {en: "Open source, MIT", zh: "全部开源 · MIT"},
        },
        {
            label: {en: "Tech Stacks", zh: "技术栈"},
            value: "8",
            hint: "Go · Java · Python · React …",
        },
        {
            label: {en: "University", zh: "本科院校"},
            value: "HKUST",
            hint: {en: "Second Class Honours", zh: "二级荣誉"},
        },
        {
            label: {en: "Internship", zh: "实习经历"},
            value: "Wafer Systems",
            hint: "HKEX: 01087",
        },
    ],

    education: {
        school: {
            en: "The Hong Kong University of Science and Technology",
            zh: "香港科技大学",
        },
        shortSchool: "HKUST",
        degree: {
            en: "Bachelor of Science — Second Class Honours",
            zh: "理学士 - 二等荣誉",
        },
        majors: [
            {
                type: {en: "First Major", zh: "第一主修"},
                name: {en: "Mathematics — Statistics Track", zh: "数学 - 统计学方向"},
            },
            {
                type: {en: "Second Major / Minor", zh: "第二主修 / 副修"},
                name: {en: "Computer Science", zh: "计算机科学"},
            },
            {
                type: {en: "Second Major / Minor", zh: "第二主修 / 副修"},
                name: {en: "Artificial Intelligence", zh: "人工智能"},
            },
        ],
        coursework: [
            {en: "Computer Organization", zh: "计算机组成"},
            {en: "Algorithm Design & Analysis", zh: "算法设计与分析"},
            {en: "Database System", zh: "数据库原理"},
            {en: "Big Data & Cloud Computing", zh: "大数据与云计算"},
            {en: "Deep Learning", zh: "深度学习"},
            {en: "Statistical Inference", zh: "统计推断"},
            {en: "Probability Theory", zh: "概率论"},
            {en: "Operating Systems", zh: "操作系统"},
        ],
    },

    experience: [
        {
            company: "Wafer Systems (Asia) Limited",
            companyZh: "威發系統(亞洲)有限公司",
            ticker: "HKEX: 01087",
            url: "https://www.wafersystems.com/en/",
            role: {en: "Summer Programmer Trainee", zh: "暑期程序员实习生"},
            period: {en: "Jun 2026 – Aug 2026", zh: "2026 年 6 月 – 8 月"},
            project: {
                name: {
                    en: "Hong Kong Public Library — Smart Library Systems",
                    zh: "香港公共图书馆 — 智慧图书馆系统",
                },
                tender: "LCT_6008_19(S) Cat A",
                tenderLabel: {en: "Tender", zh: "投标编号"},
                scope: {
                    en: "Government-led · territory-wide programme",
                    zh: "政府主导 · 全港范围项目",
                },
                url: "https://sc.lcsd.gov.hk/TuniS/www.hkpl.gov.hk/tc/index.html",
                purpose: {
                    en: "Deliver end-to-end digital services for every Hong Kong resident, library administrator and front-desk librarian — covering the full lifecycle of every catalog item: acquisition, circulation (borrow / return), shelf retirement, destruction and loss — each stage with its own application, management and approval workflow.",
                    zh: "面向全港市民、图书馆管理方与前台服务，提供图书馆全业务的智能化服务 —— 覆盖每一本馆藏从采购、借还、下架、销毁或遗失的完整生命周期，每一阶段都配套独立的申请、管理与审批工作流。",
                },
                features: [
                    {
                        en: "Enterprise-grade compliance workflow end-to-end",
                        zh: "企业级合规化全流程",
                    },
                    {
                        en: "Multi-module integration: procurement · circulation · audit · reporting",
                        zh: "多模块集成 · 采购 · 流通 · 审计 · 报表",
                    },
                    {
                        en: "Role-based access: citizens · administrators · librarians",
                        zh: "多角色权限 · 市民 · 管理人员 · 前台工作人员",
                    },
                ],
            },
            missionLabel: {en: "Mission (my scope)", zh: "项目宗旨（我参与的部分）"},
            highlights: [
                {
                    en: "Served as PM Assistant across the full DevOps cycle — requirement intake, front-end & back-end implementation, automated API / UI testing, and UAT.",
                    zh: "担任 PM 助理，参与 DevOps 全流程闭环 —— 需求接入、前后端开发、API / UI 自动化测试与 UAT 验收。",
                },
                {
                    en: "Designed and shipped ~10 front-end pages with React, covering circulation, catalog, and member-management flows.",
                    zh: "使用 React 设计并交付约 10 个前端页面，覆盖流通、目录管理与读者管理等业务模块。",
                },
                {
                    en: "Built the back-end data-access layer in close pair with the senior team — modelled CRUD endpoints over MySQL, contracted them with the front-end, and hardened error handling, parameter validation, and pagination semantics for production load.",
                    zh: "与资深团队结对开发后端数据访问层 —— 基于 MySQL 设计数十个 CRUD 接口、与前端约定契约，并加固错误处理、参数校验、与Redis、运维团队对接以承载生产负载。",
                },
                {
                    en: "Authored ~200 automated UI / API test cases and wired them into the CI pipeline so smoke and regression suites run unattended on every merge.",
                    zh: "编写约 200 条 UI / API 自动化测试用例并接入 CI 流水线，使冒烟与回归套件在每次合并时自动运行。",
                },
                {
                    en: "Executed ~300 manual UAT cases and tracked ~50 production-grade defects to closure with the vendor and the Library Authority.",
                    zh: "执行约 300 条 UAT 手工用例，并与供应商及图书馆管理处闭环跟踪约 50 个生产级缺陷。",
                },
            ],
            note: {
                en: "HR email or reference letter available upon request — please contact me directly.",
                zh: "如需 HR 邮箱或推荐信，请直接联络本人。",
            },
        },
    ],

    projects: [
        {
            name: "Artifex",
            stars: "~10",
            languages: ["Go", "React", "SQLite (FTS5)", "ONNX"],
            blurb: {
                en: "A self-hosted gallery for ComfyUI output. Parses workflow metadata from the PNG itself, auto-tags with a local vision model (WD EVA02-Large v3), and lets you organise thousands of generations with mutually-exclusive color groups.",
                zh: "面向 ComfyUI 生成结果的自托管图库。直接从 PNG 内解析工作流元数据，本地视觉模型（WD EVA02-Large v3）自动打标签，并通过互斥色彩分组管理上千张生成图。",
            },
            highlights: [
                {
                    en: "Single static Go binary embeds the React frontend — no install, no dependencies.",
                    zh: "Go 单一静态二进制内嵌 React 前端 —— 免安装、零外部依赖。",
                },
                {
                    en: "Custom PNG tEXt / iTXt parser reads ComfyUI's workflow JSON without ComfyUI present.",
                    zh: "自研 PNG tEXt / iTXt 解析器，无需安装 ComfyUI 即可读取其工作流 JSON。",
                },
                {
                    en: "SQLite FTS5 full-text search over tags and prompts; CUDA + CPU fallback for the tagger.",
                    zh: "基于 SQLite FTS5 对标签与提示词全文检索；打标模型支持 CUDA 加速与 CPU 回退。",
                },
            ],
            links: [
                {label: "GitHub", href: "https://github.com/lizzary/Artifex"},
                {label: {en: "Landing", zh: "下载页"}, href: "https://artifex.havenlab.tech/"},
            ],
            accent: "indigo",
        },
        {
            name: "Filecat",
            sub: "C core · Filecat-go bindings",
            stars: "~10",
            languages: ["C", "Go", "CGO"],
            blurb: {
                en: "Cross-platform recursive directory watcher purpose-built for Ferret. The C core unifies inotify / ReadDirectoryChangesW / FSEvents behind one ABI; the Go layer adds Watchman-style coalescing, rename → Move synthesis, and an idiomatic channel API.",
                zh: "为 Ferret 量身打造的跨平台递归目录监视库。C 核心将 inotify / ReadDirectoryChangesW / FSEvents 统一在同一 ABI 下；Go 层补足 Watchman 风格的事件合并、rename → Move 重组以及惯用的 channel API。",
            },
            highlights: [
                {
                    en: "O(1) cold start on Windows & macOS — one handle / stream covers the whole subtree.",
                    zh: "Windows 与 macOS 上 O(1) 冷启动 —— 单个 handle / stream 覆盖整棵子树。",
                },
                {
                    en: "Flat open-addressed hash map in C for the Linux inotify path: no Go GC, no per-dir allocations.",
                    zh: "Linux inotify 路径采用 C 端扁平开放寻址 hash map：无 Go GC，亦无逐目录分配开销。",
                },
                {
                    en: "Seven-function C ABI designed for cgo / Rust FFI / Python ctypes embedding.",
                    zh: "七函数 C ABI，专为 cgo / Rust FFI / Python ctypes 嵌入设计。",
                },
            ],
            links: [
                {label: "Filecat (C)", href: "https://github.com/lizzary/Filecat"},
                {label: "Filecat-go", href: "https://github.com/lizzary/Filecat-go"},
            ],
            accent: "cyan",
        },
        {
            name: "Ferret",
            stars: "WIP",
            languages: ["Go", {en: "Distributed", zh: "分布式"}, {en: "Search", zh: "搜索引擎"}],
            blurb: {
                en: "An unstructured-file search engine for individuals and enterprises — both single-node and distributed deployments. Built on top of Filecat for low-overhead change tracking. Source release pending.",
                zh: "面向个人与企业的非结构化文件搜索引擎，同时支持单机部署与分布式部署。基于 Filecat 实现低开销变更追踪。源码即将开放。",
            },
            highlights: [
                {
                    en: "Single-node & distributed deployment from one codebase.",
                    zh: "单机与分布式部署共用同一份代码。",
                },
                {
                    en: "Live indexing driven by Filecat's coalesced filesystem events.",
                    zh: "实时索引，由 Filecat 合并后的文件系统事件驱动。",
                },
                {
                    en: "Community edition + enterprise edition planned.",
                    zh: "规划社区版与企业版并行设计。",
                },
            ],
            links: [],
            accent: "amber",
            wip: true,
        },
    ],

    // 技能数据：分类名通过下方 skillCategories 翻译；某些条目本身可翻译时也用 {en, zh}
    skills: {
        Frontend: ["React", "Tailwind CSS", "state management"],
        Backend: [
            "Go Lang",
            "Java",
            "Python",
            {en: "RESTful API design", zh: "RESTful API 设计"},
        ],
        Concurrency: [
            "async / await",
            "Goroutine · Channel (CSP)",
            "Mutex · RWMutex · Spinlock · Semaphore",
            "CAS · Atomic · Lock-free",
            "Happens-before · Memory barriers · JMM",
            "Event loop · Coroutine · Work-stealing",
        ],
        Database: [
            "MongoDB",
            "Oracle SQL",
            {en: "Lock modes (S / X / IS / IX)", zh: "锁模式 (S / X / IS / IX)"},
            {en: "MVCC · Isolation levels · Deadlock analysis", zh: "MVCC · 事务隔离级别 · 死锁分析"},
        ],
        Systems: [
            {en: "Linux internals · inotify", zh: "Linux 内核机制 · inotify"},
            "Windows ReadDirectoryChangesW",
            "FSEvents (macOS)",
            "ONNX Runtime · CUDA EP",
            {en: "CI / CD · Automated testing", zh: "CI / CD · 自动化测试"},
        ],
        "ML / Stats": [
            {en: "Deep Learning", zh: "深度学习"},
            {en: "Statistical inference", zh: "统计推断"},
            {en: "Time-series analysis", zh: "时间序列分析"},
            {en: "Quantitative factor research", zh: "量化因子研究"},
        ],
    },
    skillCategories: {
        Frontend: {en: "Frontend", zh: "前端"},
        Backend: {en: "Backend", zh: "后端"},
        Concurrency: {en: "Concurrency", zh: "并发编程"},
        Database: {en: "Database", zh: "数据库"},
        Systems: {en: "Systems", zh: "系统底层"},
        "ML / Stats": {en: "ML / Stats", zh: "机器学习 / 统计"},
    },

    beyond: {
        title: {en: "Beyond code", zh: "代码之外"},
        items: [
            {
                tag: {en: "Quant Research", zh: "量化研究"},
                heading: {
                    en: "Dissecting the market with statistics & ML",
                    zh: "用统计学与机器学习解剖市场",
                },
                body: {
                    en: "I bring statistics and machine-learning techniques to equity markets — factor mining, residualisation, signal decay analysis. It's where doctrine and practice all meet.",
                    zh: "我将统计学与机器学习技术应用到金融市场 —— 因子挖掘、残差化、信号衰减分析。这是理论与实践一同交汇之处。",
                },
            },
            {
                tag: "WorldQuant BRAIN",
                heading: {
                    en: "Registered Quantitative Consultant",
                    zh: "注册量化策略顾问",
                },
                body: {
                    en: "Contributor on the WorldQuant BRAIN platform, submitting alphas under their consultant programme. The continuous IS / OS evaluation loop keeps my modelling discipline sharp.",
                    zh: "WorldQuant BRAIN 平台的贡献者，以顾问身份持续提交 alpha 策略。该平台样本内 / 样本外评估的循环监督让我的建模保持严谨和鲁棒。",
                },
                link: "https://platform.worldquantbrain.com",
            },
        ],
    },

    contact: {
        intro: {
            en: "Recruiting? Collaborating on an open-source project? Looking for a quant collaborator? Feel free to reach out.",
            zh: "招聘？寻找开源协作？或者想找一位量化研究伙伴？随时联络我。",
        },
        primaryEmail: "ywpwong111@gmail.com",
        socials: [
            {label: "GitHub", href: "https://github.com/lizzary"},
            {label: "Artifex", href: "https://artifex.havenlab.tech/"},
            {label: "WorldQuant BRAIN", href: "https://platform.worldquantbrain.com"},
        ],
    },
};

export default profile;
