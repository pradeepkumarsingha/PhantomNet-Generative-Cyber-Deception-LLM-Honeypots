# 🕸️ PhantomNet — Generative Cyber-Deception (LLM Honeypots)

**PhantomNet** is an AI-powered cyber-deception platform that creates a realistic, self-generating fake corporate network to trap, observe, and analyze attackers.

Unlike traditional honeypots that rely on static files and repetitive fake data, PhantomNet uses a locally hosted LLM to dynamically generate files, directories, database records, emails, logs, and command outputs in real time. The attacker believes they are exploring a real corporate server, while every action is captured and analyzed by the security team.

> ⚠️ **Ethical Notice:** PhantomNet is built strictly for cybersecurity research, education, and controlled lab demonstrations. Do not deploy it against real users, production systems, or networks without explicit authorization.

---

## 🚀 Overview

When an unauthorized attacker connects to PhantomNet, the system silently redirects them into an isolated sandbox. Inside the sandbox, they find a fake Linux server, fake database, fake internal files, and fake corporate data.

If the attacker runs:

```bash
ls /home/finance
cat payroll_2026.csv
SELECT * FROM employees;
```

PhantomNet generates realistic responses instantly using a local LLM. The generated data remains consistent through a vector-memory layer, so files, employees, and database records do not change randomly between commands.

### Example Deception Flow

```text
Attacker connects through SSH
        ↓
Network Interceptor redirects traffic
        ↓
Isolated PhantomNet Sandbox
        ↓
Fake SSH Shell + Generative Filesystem + Mock PostgreSQL
        ↓
Ollama generates realistic content
        ↓
ChromaDB preserves context and consistency
        ↓
React Dashboard displays attacker activity in real time
```

---

## ✨ Key Features

- **Generative File System:** Fake files and folders are generated only when accessed.
- **Dynamic SQL Engine:** A mock PostgreSQL service returns realistic, hallucinated database records.
- **Fake SSH Shell:** Supports common Linux reconnaissance commands.
- **Context Retention:** ChromaDB stores previously generated files, schemas, and records to maintain consistency.
- **Local LLM:** Uses Ollama so generated data and attacker activity remain on the local machine.
- **Network Redirection:** Suspicious SSH or database traffic is routed into an isolated sandbox.
- **Behavioral Analysis:** Classifies attacker intent, skill level, and potential targets.
- **Live Analyst Dashboard:** React + WebSockets display attacker commands, generated responses, alerts, and session metadata.
- **Sandbox Isolation:** Docker-based containment prevents attackers from accessing the host or real network.

---

## 🧠 How PhantomNet Works

### 1. Network Interceptor

The interceptor monitors unauthorized SSH, database, and internal-network connections. Suspicious traffic is redirected into the PhantomNet sandbox instead of reaching real services.

Initial implementation uses `iptables`; advanced versions can use eBPF for low-overhead kernel-level monitoring and traffic control.

### 2. Generative File System

The FUSE filesystem creates a virtual Linux filesystem. Files do not exist on disk until an attacker attempts to read or list them.

Example:

```bash
$ cat /home/finance/payroll/Q1_report.csv
```

PhantomNet intercepts the request, asks the LLM to generate a realistic payroll file, and returns the generated content.

### 3. Context Engine

The Context Engine uses:

- **Ollama** for local LLM inference.
- **ChromaDB** for persistent vector memory.
- **Prompt templates** for company lore, employee details, departments, projects, and internal terminology.

This prevents continuity errors, such as an employee appearing in two departments or a file changing content between reads.

### 4. Mock PostgreSQL Engine

Instead of running a real database, PhantomNet implements a mock PostgreSQL service. SQL queries are intercepted and answered with generated rows, schemas, and relationships.

Example:

```sql
SELECT * FROM employees LIMIT 10;
```

The engine returns fake but realistic employee records with valid data types, IDs, departments, salaries, and dates.

### 5. Security Analyst Dashboard

The React dashboard streams attacker activity in real time using WebSockets.

It displays:

- Live terminal commands.
- LLM-generated responses.
- Source IP and session duration.
- SQL queries and returned records.
- Files accessed.
- Risk alerts.
- Attacker intent and skill classification.

---

## 🏗️ Architecture

```text
                 ┌──────────────────────────┐
                 │       Attacker           │
                 └────────────┬─────────────┘
                              │
                              ▼
                 ┌──────────────────────────┐
                 │  Network Interceptor     │
                 │  iptables / eBPF         │
                 └────────────┬─────────────┘
                              │
                              ▼
                 ┌──────────────────────────┐
                 │  Isolated Sandbox        │
                 │  Docker Container        │
                 └────────────┬─────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
┌───────────────┐   ┌──────────────────┐   ┌────────────────┐
│ Fake SSH Shell│   │ Generative FUSE  │   │ Mock PostgreSQL│
└───────┬───────┘   └────────┬─────────┘   └───────┬────────┘
        │                    │                     │
        └────────────┬───────┴─────────────────────┘
                     ▼
         ┌────────────────────────┐
         │  Context Engine        │
         │  Ollama + ChromaDB     │
         └────────────┬───────────┘
                      ▼
         ┌────────────────────────┐
         │  Telemetry / WebSocket │
         └────────────┬───────────┘
                      ▼
         ┌────────────────────────┐
         │  React SOC Dashboard   │
         └────────────────────────┘
```

---

## 🧰 Technology Stack

| Component | Technology |
|---|---|
| Backend | Python, FastAPI |
| Filesystem Deception | Python FUSE / `llfuse` |
| Network Interception | `iptables`, eBPF |
| Sandbox | Docker, Docker Compose |
| Local LLM | Ollama |
| LLM Model | Llama 3 / Llama 3.2 / compatible local model |
| Vector Memory | ChromaDB |
| Database Deception | Python mock PostgreSQL server |
| Real-Time Streaming | WebSockets |
| Dashboard | React, Tailwind CSS |
| Logging | JSON logs, SQLite/PostgreSQL |

---

## 📁 Project Structure

```text
phantomnet/
│
├── backend/
│   ├── main.py
│   │
│   ├── interceptor/
│   │   ├── iptables_manager.py
│   │   └── ebpf_monitor.py
│   │
│   ├── sandbox/
│   │   ├── ssh_server.py
│   │   └── shell_handler.py
│   │
│   ├── filesystem/
│   │   ├── fuse_fs.py
│   │   └── file_generator.py
│   │
│   ├── database/
│   │   ├── mock_postgres.py
│   │   └── sql_generator.py
│   │
│   ├── ai/
│   │   ├── ollama_client.py
│   │   ├── prompts.py
│   │   └── context_engine.py
│   │
│   ├── memory/
│   │   └── chroma_store.py
│   │
│   ├── analytics/
│   │   ├── behavior_classifier.py
│   │   └── threat_report.py
│   │
│   └── telemetry/
│       ├── websocket_server.py
│       └── logger.py
│
├── dashboard/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── sockets/
│   └── package.json
│
├── docker/
│   ├── Dockerfile
│   └── docker-compose.yml
│
├── docs/
│   ├── architecture.md
│   ├── security-policy.md
│   └── demo-script.md
│
├── requirements.txt
└── README.md
```

---

## ⚙️ Installation

### Prerequisites

- Linux system, preferably Ubuntu 22.04+
- Python 3.10+
- Docker and Docker Compose
- Node.js 18+
- Ollama
- FUSE installed on the host

### 1. Clone the Repository

```bash
git clone [https://github.com/your-username/phantomnet.git](https://github.com/your-username/phantomnet.git)
cd phantomnet
```

### 2. Create a Python Virtual Environment

```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Backend Dependencies

```bash
pip install -r requirements.txt
```

Example `requirements.txt`:

```text
fastapi
uvicorn
websockets
llfuse
chromadb
requests
asyncio
docker
pydantic
python-dotenv
```

### 4. Install and Start Ollama

Install Ollama on Linux:

```bash
curl -fsSL [https://ollama.com/install.sh](https://ollama.com/install.sh) | sh
```

Verify installation:

```bash
ollama --version
```

Pull a local model:

```bash
ollama pull llama3.2
```

Ollama runs locally and exposes an API at:

```text
http://localhost:11434
```

### 5. Configure Environment Variables

Create a `.env` file:

```env
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=llama3.2
CHROMA_DB_PATH=./data/chroma
FUSE_MOUNT_POINT=./phantom_mount
SANDBOX_NETWORK=phantomnet_internal
DASHBOARD_PORT=5173
BACKEND_PORT=8000
```

ChromaDB can persist local data using its `PersistentClient`, where the provided path stores and reloads the database automatically. [18]

### 6. Start the Backend

```bash
uvicorn backend.main:app --reload --port 8000
```

### 7. Start the Dashboard

```bash
cd dashboard
npm install
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## 🐳 Docker Deployment

```bash
cd docker
docker-compose up --build
```

Recommended services:

```yaml
services:
  phantomnet-backend:
    build:
      context: ../
      dockerfile: docker/Dockerfile
    ports:
      - "8000:8000"
    networks:
      - phantomnet_internal
    cap_drop:
      - ALL

  ollama:
    image: ollama/ollama
    ports:
      - "11434:11434"
    volumes:
      - ollama_data:/root/.ollama

  dashboard:
    build:
      context: ../dashboard
    ports:
      - "5173:5173"

networks:
  phantomnet_internal:
    internal: true

volumes:
  ollama_data:
```

---

## 🧪 Demo Commands

### Start the Fake Filesystem

```bash
python backend/filesystem/fuse_fs.py --mount ./phantom_mount
```

### Explore the Fake Server

```bash
cd phantom_mount
ls
cd finance
cat payroll_2026.csv
```

### Connect to the Mock Database

```bash
psql -h localhost -p 5433 -U attacker -d corporate_db
```

Run:

```sql
SHOW TABLES;
SELECT * FROM employees LIMIT 10;
SELECT * FROM payroll WHERE month = 'March';
```

### View the Dashboard

Open the React dashboard and observe:

- Attacker commands.
- Generated file contents.
- SQL queries.
- Risk alerts.
- Session timeline.

---

## 🧠 Example Generated Lore

```text
Company Name: Nexora Technologies Pvt. Ltd.
Internal Domain: nexora-tech.internal
Industry: Enterprise SaaS and Cloud Infrastructure

CEO: Rajesh Menon
CFO: Ananya Sharma
CTO: Vikram Iyer
IT Administrator: Kevin D’Souza

Departments:
- Finance
- Human Resources
- Engineering
- IT Operations
- Legal
- Sales

Internal Tools:
- GitLab
- Jira
- VPN
- Internal SharePoint
- PostgreSQL Database
- Backup Server
```

The LLM uses this lore to generate consistent fake files, emails, database records, and system outputs.

---

## 🛡️ Security Design

PhantomNet is designed to be a **defensive research tool**, not an offensive hacking tool.

### Isolation Measures

- Run all honeypot services inside Docker.
- Use an internal Docker network with no direct internet access.
- Do not mount real host directories into the sandbox.
- Run services as non-root users.
- Block reverse shells, outbound downloads, and dangerous commands.
- Sanitize all LLM outputs.
- Store only synthetic data.
- Rate-limit attacker sessions.
- Preserve logs for incident analysis.

### Data Safety

PhantomNet must never expose:

- Real passwords or SSH keys.
- Real API keys or cloud credentials.
- Real customer or employee data.
- Real internal IP addresses.
- Real production database records.

All credentials, records, emails, and files shown to the attacker must be synthetic and generated by the local LLM.

---

## 📊 Behavioral Analysis

PhantomNet analyzes attacker commands and assigns a risk score.

| Behavior | Detected Intent | Risk |
|---|---|---|
| `whoami`, `ls`, `uname -a` | Basic reconnaissance | Low |
| Searching `.env`, `.ssh`, AWS keys | Credential discovery | High |
| Dumping database tables | Data exfiltration | Critical |
| Modifying cron jobs | Persistence | Critical |
| Scanning internal IP ranges | Lateral movement | High |
| Downloading binaries | Malware deployment | Critical |

Example generated threat report:

```text
Threat Summary:
The attacker demonstrated intermediate Linux proficiency.

Primary Objectives:
- Credential discovery
- Payroll database access
- Identification of backup files

Observed Commands:
- cat /home/finance/payroll_2026.csv
- find / -name "*.env"
- SELECT * FROM employees;

Risk Level: HIGH

Recommended Action:
- Preserve session telemetry
- Block source IP
- Alert security operations team
- Review affected network segment
```

---

## 📅 Development Roadmap

### Week 1 — Generative Filesystem and Lore Engineering

- Build Python FUSE filesystem.
- Implement `ls`, `cat`, and directory navigation.
- Generate fake filenames and file contents using Ollama.
- Define company lore and prompt templates.

### Week 2 — Dynamic SQL Engine and Context Retention

- Build mock PostgreSQL server.
- Intercept and respond to SQL queries.
- Generate realistic database schemas and records.
- Add ChromaDB-based memory for consistency.

### Mid-Project Review

- Test `cat secret_keys.txt`.
- Verify repeated file access returns consistent content.
- Measure LLM response latency.
- Ensure the filesystem does not crash.

### Week 3 — Network Routing and Dashboard

- Redirect unauthorized SSH/database traffic into the sandbox.
- Build React dashboard.
- Stream attacker sessions through WebSockets.
- Display live commands, responses, and alerts.

### Week 4 — Behavioral Analysis and Hardening

- Classify attacker skill and intent.
- Generate automated threat reports.
- Harden Docker sandbox.
- Block container escape and dangerous commands.
- Polish documentation and final demo.

---

## 🎯 Future Enhancements

- Add fake email server and webmail interface.
- Simulate internal web applications and admin panels.
- Add multi-container fake corporate network.
- Use eBPF for deeper syscall and network monitoring.
- Add attacker fingerprinting and automated incident response.
- Support multiple fake company profiles.
- Add voice-based SOC alerts.
- Integrate with SIEM tools such as Wazuh or Elastic.

---

## 📜 License

This project is released for educational and research purposes.

---

## 👨‍💻 Author

**PRADEEP KUMAR SINGHA**  
Full-Stack Developer | AI & Cybersecurity Enthusiast  

---

## 🙌 Acknowledgements

- [Ollama](https://ollama.com) for local LLM execution.
- [ChromaDB](https://www.trychroma.com) for vector memory and context retention.
- [Python FUSE / llfuse](https://github.com/libfuse/python-llfuse) for userspace filesystem development.
- The open-source cybersecurity and AI communities.