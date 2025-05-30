# EasyShop E-Commerce WebApp

## Overview
EasyShop is a modern, user-friendly e-commerce web application that allows users to browse products, add items to a cart, and complete purchases using secure UPI/QR code payments. The platform is designed for scalability, accessibility, and ease of use, making online shopping seamless for everyone.

## Features
- Product catalog with images, descriptions, and categories
- Shopping cart with real-time updates
- Secure checkout with UPI/QR code payment integration
- Order confirmation and email notifications
- Responsive design for mobile and desktop
- Admin and maintenance tools (optional)
- Analytics and error monitoring integration

## Technology Stack
- **Frontend:** Next.js, React, TypeScript, Tailwind CSS, Radix UI, Lucide React
- **Backend:** Next.js API routes, Node.js, Neon (serverless Postgres)
- **Forms & Validation:** React Hook Form, Zod
- **Payment:** UPI/QR code (react-qr-code)
- **Email:** Nodemailer
- **Other:** Embla Carousel, Sonner, Vaul, date-fns, recharts, bcryptjs, clsx, class-variance-authority

## Folder Structure
```
/ (project root)
├── app/                # Main application pages and routes
├── components/         # Reusable UI components
├── lib/                # Database, email, and utility logic
├── public/             # Static assets (images, icons, etc.)
├── styles/             # Global and component styles
├── hooks/              # Custom React hooks
├── node_modules/       # Installed dependencies
├── schema.sql          # Database schema
├── seed.sql            # Sample data for database
├── setup-db.js         # Database setup script
├── package.json        # Project metadata and dependencies
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── ...                 # Other config and environment files
```

## Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/) (for installing dependencies)
- [Neon](https://neon.tech/) or any Postgres-compatible database (for production)
- [Vercel](https://vercel.com/) account (for deployment, optional)

## Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd easyshop
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```
3. **Set up environment variables:**
   - Copy `.env.example` to `.env.local` (create if not present).
   - Add your database URL, email credentials, and UPI ID:
     ```env
     DATABASE_URL=your_neon_postgres_url
     EMAIL_USER=your_gmail_address
     EMAIL_PASS=your_gmail_app_password
     NEXT_PUBLIC_UPI_ID=your_upi_id
     NEXT_PUBLIC_MERCHANT_CODE=your_merchant_code
     ```
4. **Set up the database:**
   - Run the setup script to create tables and seed data:
     ```bash
     npm run setup-db
     ```
   - This will execute `schema.sql` and `seed.sql` using your database connection.

5. **Start the development server:**
   ```bash
   npm run dev
   ```
   - Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Payment Integration (UPI/QR Code)
- At checkout, a QR code is generated for the total order amount using your configured UPI ID.
- Users scan the QR code with any UPI app to complete payment.
- For live payments, ensure your UPI ID is active and correct in `.env.local`.


## Deployment
- Deploy easily to [Vercel](https://vercel.com/) (recommended for Next.js):
  1. Push your code to GitHub/GitLab.
  2. Import the repo in Vercel and set environment variables in the dashboard.
  3. Vercel will handle builds, deployments, and hosting.
- For other platforms, ensure environment variables and database access are configured.

## Troubleshooting
- **Database errors:** Check your `DATABASE_URL` and ensure the database is running and accessible.
- **UPI/QR code issues:** Ensure your UPI ID is valid and the payment string is correctly formatted.
- **Build errors:** Run `npm run lint` and `npm run build` to check for code or type issues.

 
## Frequently Asked Questions (FAQ)
**Q: Do I need to know programming to use EasyShop?**
- No! You can run the app by following the steps above. For customization or development, some programming knowledge is helpful.

**Q: Can I use a different database or email provider?**
- Yes, but you may need to update the connection logic in `lib/db.ts` or `lib/email.ts`.

**Q: How do I add new products?**
- You can add products directly in the database or extend the app with an admin interface.

**Q: Is this app production-ready?**
- The app is built with production best practices, but you should review security, environment, and payment settings before going live.

---
