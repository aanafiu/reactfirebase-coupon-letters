# 🎟️ Coupon Letters  

**Coupon Letters** is a website where customers can explore a vast collection of coupons from renowned brands. Easily collect and use discounts to save on your favorite products!  

## 🚀 Live Demo  

- **Netlify Live Link:** [Coupon Letters (Netlify)](https://reactfirebase-coupon-letters.netlify.app/)  
- **Firebase Live Link:** [Coupon Letters (Firebase)](https://reactfirebase-coupon-letters.web.app/)  
- **Project Requirements:** [View Document](https://drive.google.com/file/d/1WhtJx1HdTLrkaateDEqOVavMjA2oW6u5/view?usp=sharing)  

---  

## 📌 Features  

✅ **Single Page Application (SPA)**  
✅ **React Router DOM for seamless navigation**  
✅ **User authentication (Google & Email login/signup)**  
✅ **Private routes for secure access**  
✅ **Smooth animations & notification styles**  
✅ **User profile update functionality**  

---  

## 🛠️ Tech Stack & Dependencies  

This project is built using **React** along with the following packages:  

- **[React Router DOM](https://reactrouter.com/)** → For dynamic routing  
- **[SweetAlert](https://sweetalert.js.org/)** → For notifications & alerts  
- **[AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)** & **[Animate.css](https://animate.style/)** → For animations  
- **[Firebase](https://firebase.google.com/)** → For authentication  
- **[React Fast Marquee](https://www.npmjs.com/package/react-fast-marquee)** → For smooth scrolling effects  
- **[React Icons](https://react-icons.github.io/react-icons/)** → For stylish icons  

---  

## 📥 Installation & Setup  

To run this project locally, follow these steps:  

### 1️⃣ Clone the repository  

```sh
git clone https://github.com/your-username/coupon-letters.git
cd coupon-letters
```

### 2️⃣ Install dependencies  

```sh
npm install
```

### 3️⃣ Start the development server  

```sh
npm run dev
```

> The app will be available at **http://localhost:PORT/**  

---  

## 🔧 Configuration  

Make sure to set up Firebase for authentication. Create a `.env` file in the root directory and add your Firebase credentials:  

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

> Replace `your_*` with actual values from your Firebase project.  

---  

## 🚀 Deployment  

This project is deployed on **Netlify** and **Firebase Hosting**. To deploy manually:  

### 🔹 Deploy to Netlify  

1. **Install Netlify CLI** (if not installed):  
   ```sh
   npm install -g netlify-cli
   ```  
2. **Login to Netlify**:  
   ```sh
   netlify login
   ```  
3. **Deploy the project**:  
   ```sh
   netlify deploy
   ```

### 🔹 Deploy to Firebase  

1. **Install Firebase CLI** (if not installed):  
   ```sh
   npm install -g firebase-tools
   ```  
2. **Login to Firebase**:  
   ```sh
   firebase login
   ```  
3. **Deploy the project**:  
   ```sh
   firebase deploy
   ```

---  

## 💡 Troubleshooting  

- If you encounter issues with Firebase authentication, ensure your **API key** and **Auth domain** are correctly set in `.env`.  
- If animations are not working, verify that **AOS** and **Animate.css** are properly imported.  
- For deployment errors, check the logs for missing environment variables or incorrect configurations.  

---  

## 📬 Feedback & Support  

If you have any feedback or need support, feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/aanafiu/).  

---

