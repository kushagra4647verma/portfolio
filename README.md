# Kushagra Verma Portfolio

A Vite and React portfolio showcasing full-stack, mobile, cloud, and enterprise software work.

## Local development

Requires Node.js 20 or newer.

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
```

The static production output is written to `dist/`.

## Deploy with AWS Amplify

1. Push this repository to GitHub.
2. In AWS Amplify Hosting, choose **New app** and connect the GitHub repository.
3. Select the production branch.
4. Amplify reads `amplify.yml`, installs dependencies with Node.js 20, runs the production build, and deploys `dist/`.

The contact form opens a prefilled email draft in the visitor's email application. No message data is sent to a third-party form service.
