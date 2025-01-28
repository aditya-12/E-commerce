# ShopEase | E-Commerce Store 🛒

ShopEase is a full-featured e-commerce platform built with the MERN stack and additional integrations. It allows users to browse products, add them to the cart, checkout with Stripe, and more. The platform features a robust admin dashboard, product management, category management, and sales analytics. Secure user authentication and caching with Redis make the app fast and reliable.

## Features 🚀

- **MongoDB & Redis Integration** 🗄️  
  MongoDB is used for the database, while Redis handles caching for faster data retrieval.

- **Stripe Payment Setup** 💳  
  Secure and efficient checkout process using **Stripe** for payment processing.

- **Robust Authentication System** 🔐  
  Secure sign-up, login, and JWT-based authentication with refresh and access tokens.

- **User Signup & Login** 📝  
  Users can create accounts, log in, and manage their profile.

- **E-Commerce Core** 🛒  
  The app has core e-commerce functionality for browsing, adding products to the cart, and placing orders.

- **Product & Category Management** 📦  
  Admins can manage products, categories, and product details.

- **Shopping Cart Functionality** 🛍️  
  Add products to the shopping cart and proceed to checkout.

- **Checkout with Stripe** 💰  
  Users can make payments using Stripe during the checkout process.

- **Coupon Code System** 🏷️  
  Discounts are applied to orders via a coupon code system.

- **Admin Dashboard** 👑  
  Admins can manage the store, view sales analytics, and oversee products and orders.

- **Sales Analytics** 📊  
  Visualize sales data through the admin dashboard with detailed analytics.

- **Design with Tailwind CSS** 🎨  
  Stylish and responsive user interface built with **Tailwind CSS**.

- **Security** 🔒  
  The app implements secure data protection, encrypted passwords, and token-based authentication.

- **Caching with Redis** 🚀  
  Caching with **Redis** to speed up data access and improve performance.

---

## Tech Stack 🛠️

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)  
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)  
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)  
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)  
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)  
![Stripe](https://img.shields.io/badge/Stripe-61DAFB?style=for-the-badge&logo=stripe&logoColor=white)  
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)  
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)  
![Cloudinary](https://img.shields.io/badge/Cloudinary-FFD100?style=for-the-badge&logo=cloudinary&logoColor=black)  

- **Frontend**: React.js ⚛️, TailwindCSS 🖌️  
- **Backend**: Node.js 🌐, Express.js 🛠️  
- **Database**: MongoDB 🗃️  
- **Authentication**: JWT with Access/Refresh Tokens 🔑  
- **Caching**: Redis 🚀  
- **Payment Gateway**: Stripe 💳  
- **Image Hosting**: Cloudinary 📷

---

## Installation 🛠️

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB (local or cloud database)
- Redis (local or cloud instance)
- Cloudinary account (for image uploads)
- Stripe account (for payment setup)

# Project Setup and Configuration

## 1. Clone the Repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/shopease.git
cd shopease
```
## 2. Set up the .env file
Create a .env file in the root directory of the project and add the following variables:
```bash
PORT=5000
MONGO_URI=your_mongo_uri
UPSTASH_REDIS_URL=your_redis_url
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```
## 3. Build the App
Run the following command to build the app:
```bash
npm run build
```
## 4. Start the App
After building the app, start it using the following command:
```bash
npm run start
```
## Future Additions 🔮

Here are some future additions planned for the project:

- **Multi-currency Support 💰**  
  Add support for multiple currencies to accommodate international customers.

- **Advanced Search Functionality 🔍**  
  Implement a more advanced search with filters for product attributes like size, color, price range, etc.

- **Product Reviews ⭐**  
  Allow customers to leave reviews and ratings for products they purchase.

- **Social Media Login 📱**  
  Users will be able to log in using their social media accounts (e.g., Google, Facebook, Twitter) for a seamless authentication experience.

- **AI-Driven Product Recommendations 🤖**  
  Implement machine learning algorithms to provide personalized product recommendations to users.
