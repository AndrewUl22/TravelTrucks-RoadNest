TravelTrucks RoadNest
https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel
https://img.shields.io/badge/Framework-Next.js-000000?logo=nextdotjs
https://img.shields.io/badge/License-MIT-green.svg
https://img.shields.io/github/stars/AndrewUI22/TravelTrucks-RoadNest?style=social

A modern web platform for exploring, filtering, and comparing travel trucks and campers.
Built with performance, usability, and clean design in mind, TravelTrucks RoadNest provides an intuitive interface for discovering vehicles tailored to your travel needs.

🚀 Features
Advanced Filtering System  
Filter campers by type, price, location, engine, and specifications.

Modern Responsive UI  
Fully optimized for desktop, tablet, and mobile devices.

Detailed Camper Pages  
Each vehicle includes images, descriptions, and technical specifications.

Fast Performance  
Powered by Next.js with optimized rendering and routing.

Smooth User Experience  
Clean navigation, consistent design, and accessible interface.

🛠 Tech Stack
Next.js — SSR & SSG

React — UI components

CSS Modules / Tailwind — styling

Node.js — backend logic

MongoDB — database (if used)

Vercel — hosting & deployment

📦 Installation
bash
git clone https://github.com/AndrewUI22/TravelTrucks-RoadNest.git
cd TravelTrucks-RoadNest
npm install
npm run dev
Open in browser:
http://localhost:3000

🔐 Environment Variables
Create a .env.local file in the root directory and add the required keys.

Required Variables
Variable	Description
NEXT_PUBLIC_API_URL	Base URL for API requests
API_SECRET_KEY	Private API key
MONGODB_URI	MongoDB connection string
NEXT_PUBLIC_MAPBOX_TOKEN	Mapbox token (if maps are used)


Optional Variables
Variable	Description
NEXT_PUBLIC_ANALYTICS_ID	Analytics tracking ID
IMAGE_CDN_URL	Custom CDN for images


Example .env.local
env
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
API_SECRET_KEY=your-secret-key
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
NEXT_PUBLIC_MAPBOX_TOKEN=your-mapbox-token
⚠️ Never commit .env.local to GitHub.

📸 Screenshots
Home Page
[Похоже, результат оказался небезопасным для отображения. Давайте внесем изменения и попробуем что-нибудь другое!]

Catalog / Gallery
[Похоже, результат оказался небезопасным для отображения. Давайте внесем изменения и попробуем что-нибудь другое!]

Camper Details Page
[Похоже, результат оказался небезопасным для отображения. Давайте внесем изменения и попробуем что-нибудь другое!]

🌐 Deployment
Automatic Deployment (GitHub → Vercel)
Every push to the main branch triggers an automatic build and deployment.

Manual Deployment (CLI)
bash
vercel --prod
📁 Project Structure
Код
TravelTrucks-RoadNest/
│
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Next.js pages & routing
│   ├── styles/          # Global and modular styles
│   ├── utils/           # Helper functions
│   └── api/             # API routes (if used)
│
├── screenshots/         # Project screenshots
├── package.json
└── README.md
🤝 Contributing
Contributions, issues, and feature requests are welcome.
Feel free to open a pull request or report a bug.

📄 License
This project is licensed under the MIT License.

⭐ Support the Project
If you like this project, consider starring the repository — it helps visibility and motivates further development.