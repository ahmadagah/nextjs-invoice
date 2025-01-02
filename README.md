# **Next.js Invoice App**

Next.js Invoice App is a web application that simplifies the invoicing process. Users can sign up effortlessly using their Google account or register with a username and password. Once logged in, they can create and send invoices to clients. Clients receive these invoices via email and can conveniently make payments online.

---

## **Table of Contents**

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technolgies](#technolgies-used)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
5. [Development](#development)
6. [Folder Structure](#folder-structure)
7. [Contributing](#contributing)

---

## **Introduction**

Next.js Invoice App is a powerful tool for business owners and freelancers to streamline their invoicing and payment processes. The app enables users to sign up easily using their Google account or register with a username and password. Once logged in, users can create professional invoices and send them to clients, who will receive email notifications and can make payments conveniently.

The app supports organizing invoices under multiple organizations, making it ideal for users managing various businesses or revenue streams. Each organization acts as a group for related invoices, allowing for better management and reporting

## **Features**

1. **Flexible User Authentication**:  
   Sign up effortlessly using Google authentication or a username and password.

2. **Invoice Creation**:  
   Generate professional invoices quickly and efficiently.

3. **Direct Invoice Delivery**:  
   Send invoices directly to clients via email from the web app.

4. **Seamless Payment Integration**:  
   Clients can pay invoices using all major payment methods, ensuring convenience and accessibility.

---

## **Technolgies Used**

This project is built using the following frameworks, libraries, and tools:

- **[Next.js](https://nextjs.org/)**: A React framework for building server-rendered and static web applications.
- **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for styling.
- **[TypeScript](https://www.typescriptlang.org/)**: A strongly typed programming language that builds on JavaScript.
- **[PostgreSQL](https://www.postgresql.org/)**: A powerful, open-source relational database system.
- **[Clerk](https://clerk.dev/)**: Authentication and user management solution.
- **[Stripe](https://stripe.com/)**: Payment processing platform for handling transactions.
- **[Resend](https://resend.com/)**: API for sending transactional emails.
- **[Xata](https://xata.io/)**: Serverless database platform with powerful search capabilities.
- **[Drizzle ORM](https://orm.drizzle.team/)**: Type-safe SQL ORM for interacting with the database.

---

## **Getting Started**

### **Prerequisites**

- **[Node.js (>= 22.x)](https://nodejs.org/en/download)**:  
   Use the command below to install the recommended version via `nvm`:

  ```bash
  nvm install 22
  ```

- **[npm (>=11.x)](https://www.npmjs.com/package/npm)**:

  ```bash
  npm i npm
  ```

### **Installation**

#### 1. **Clone the repository**

```bash
git clone https://github.com/ahmadagah/nextjs-invoice
```

#### 2. **Navigate to the project directory**

```bash
cd nextjs-invoice
```

#### 3. **Set Up Environment Variables**

Create a .env.local file in the root directory and add the following environment variables:

```bash
# Xata Database API Key
XATA_API_KEY

# PostgreSQL Database URLs
DATABASE_URL_POSTGRES
DATABASE_URL

# Clerk Authentication Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY

# Clerk Authentication URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL="/dashboard"

# Stripe API Secret Key
STRIPE_API_SECRET

# Resend API Key
RESEND_API_KEY
```

#### 4. **Install dependencies**

```bash
npm install
```

## Development

### Scripts

```bash
npm run dev
```

## **Folder Structure**

```bash
nextjs-invoice/
├── src/                   # Main source code for the application
│   ├── app/               # Next.js app directory for routing and layout
│   │   ├── dashboard/     # Dashboard page for users
│   │   │   └── page.tsx   # Entry point for the dashboard page
│   │   ├── invoices/      # Routes and components related to invoices
│   │   │   ├── [invoiceId]/
│   │   │   │   ├── payment/
│   │   │   │   │   └── page.tsx  # Payment page for invoices
│   │   │   │   └── Invoice.tsx   # Invoice details component
│   │   │   ├── new/
│   │   │   │   └── page.tsx      # Entry point for creating a new invoice
│   │   │   └── page.tsx          # Entry point for invoices overview
│   │   ├── sign-in/              # User sign-in route
│   │   │   └── page.tsx          # Entry point for the sign-in page
│   │   ├── sign-up/              # User sign-up route
│   │   │   └── page.tsx          # Entry point for the sign-up page
│   │   ├── actions.ts            # Server-side action handlers
│   │   ├── error.tsx             # Error page component
│   │   ├── globals.css           # Global CSS styles
│   │   ├── layout.tsx            # Global layout wrapper
│   │   └── page.tsx              # Home page of the application
│   ├── components/               # Reusable UI components
│   │   ├── icons/                # Icon components
│   │   ├── ui/                   # Core UI components
│   │   ├── Container.tsx         # Layout container component
│   │   ├── Footer.tsx            # Footer component
│   │   ├── Header.tsx            # Header component
│   │   └── SubmitButton.tsx      # Button component for forms
│   ├── data/                     # Static or predefined data
│   │   └── invoices.ts           # Invoice-related data and helpers
│   ├── db/                       # Database-related configurations
│   │   ├── migrations/           # Database migration files
│   │   ├── index.ts              # Database initialization
│   │   └── schema.ts             # Database schema definitions
│   ├── email/                    # Email templates
│   │   └── invoice-created.tsx   # Template for invoice creation emails
│   ├── lib/                      # Utility functions and middleware
│   │   └── middleware.ts         # Application-level middleware
├── .gitignore                   # Git ignore file
├── components.json              # Component metadata/configuration (if applicable)
├── drizzle.config.ts            # Configuration for Drizzle ORM
├── eslint.config.mjs            # ESLint configuration
├── next-env.d.ts                # TypeScript definitions for Next.js
├── next.config.ts               # Next.js application configuration
├── package.json                 # Metadata and dependencies of the project
├── postcss.config.js            # PostCSS configuration
├── README.md                    # Documentation for the project
├── tailwind.config.ts           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.

2. Create a new branch:

   ```bash
   git checkout -b feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add feature"
   ```

4. Push to your branch:

   ```bash
   git push origin feature-name
   ```

5. Open a Pull Request.
