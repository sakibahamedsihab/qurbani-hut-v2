# QurbaniHat 🐄

A modern livestock marketplace where users can explore animals for Qurbani such as cows and goats. Users can view details and place a booking after authentication.

## 🔗 Live URL

[https://qurbani-hut-v2-xxxv.vercel.app](https://qurbani-hut-v2-xxxv.vercel.app)

## ✨ Key Features

- Browse 12+ Qurbani animals (cows and goats)
- Sort animals by price
- Full animal details page
- Booking form (login required)
- Email & Google authentication
- My Profile page with update feature
- Responsive on mobile, tablet and desktop
- Toast notifications
- Protected private routes

## 📦 NPM Packages Used

| Package           | Purpose                               |
| ----------------- | ------------------------------------- |
| `better-auth`     | Authentication (email + Google OAuth) |
| `mongodb`         | Database                              |
| `animate.css`     | CSS animations on hero section        |
| `react-hot-toast` | Toast notifications                   |
| `lucide-react`    | Icons                                 |
| `next`            | React framework                       |
| `tailwindcss`     | Styling                               |

## 🔐 Environment Variables

Create a `.env` file with the following:

\`\`\`
MONGODB_URI=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
NEXT_PUBLIC_BETTER_AUTH_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
\`\`\`

## 🚀 Run Locally

\`\`\`bash
git clone https://github.com/sakibahamedsihab/qurbani-hut-v2
cd qurbani-hut-v2
npm install
npm run dev
\`\`\`
