# Security

## Modern Security Practices

Security is a continuous process that requires vigilance and multiple layers of protection. The following sections outline key security practices for development and operations.

## Incident Response Process
- Check login trials
  - `last | more`
  - `tail -300f /var/log/secure`

- Check hacked file update time
  - use `git` which easily shows modified file
  - use log monitoring tool such as Elastic Stack

- Archive it for later analysis
  - `tar cvfz ~/archive.tgz hacked_file1 path/to/hacked_file2`
  - delete them
  - `git reset --hard`

- Image Capture or record screen
  - QuickTime
  - Obsproject
  - OBS Studio
  - Microsoft PowerToys Screen Recorder

## Useful code
- monitoring status change
```
while true; do git status; date; sleep 5; done
```

## Security Best Practices

### Authentication & Authorization
- Implement Multi-Factor Authentication (MFA)
- Use OAuth 2.0 or OpenID Connect for federated authentication
- Follow the principle of least privilege
- Implement proper session management
- Use JWT with appropriate expiration times

### Data Protection
- Encrypt sensitive data at rest and in transit
- Use HTTPS everywhere with TLS 1.3
- Implement proper key management
- Follow data retention and deletion policies
- Use secure password hashing (Argon2, bcrypt)

### Code Security
- Implement input validation and sanitization
- Use parameterized queries to prevent SQL injection
- Protect against XSS by using content security policy
- Implement proper CORS settings
- Use security headers:
  - Content-Security-Policy
  - X-Content-Type-Options
  - X-Frame-Options
  - X-XSS-Protection

### Infrastructure Security
- Keep all systems and dependencies up-to-date
- Use Web Application Firewalls (WAF)
- Implement network segmentation
- Use container security scanning
- Implement intrusion detection systems

## Security Testing
- Static Application Security Testing (SAST)
  - SonarQube
  - ESLint security plugins
- Dynamic Application Security Testing (DAST)
  - OWASP ZAP
  - Burp Suite
- Dependency scanning
  - npm audit
  - OWASP Dependency-Check
- Regular penetration testing

## Modern Security Tools
- Monitoring: Prometheus, Grafana, ELK Stack
- SIEM: Wazuh, Elastic Security
- Container Security: Trivy, Falco, Clair
- Vulnerability Scanning: Nessus, OpenVAS
- Secret Management: HashiCorp Vault, AWS Secrets Manager

## OWASP Top 10 (2021)
1. Broken Access Control
2. Cryptographic Failures
3. Injection
4. Insecure Design
5. Security Misconfiguration
6. Vulnerable and Outdated Components
7. Identification and Authentication Failures
8. Software and Data Integrity Failures
9. Security Logging and Monitoring Failures
10. Server-Side Request Forgery (SSRF)

## Resources
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
- [Mozilla Web Security Guidelines](https://infosec.mozilla.org/guidelines/web_security)
- [SANS Internet Storm Center](https://isc.sans.edu/)
- [CVE Database](https://cve.mitre.org/)
