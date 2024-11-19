# **FlavorFly - Food Delivery Application**

A dynamic and user-friendly web application built with the MERN stack, designed to streamline the food ordering and delivery experience for both customers and administrators.

---

## **Live Link**
- User Panel: [Click Here](https://flavorfly-frontend.onrender.com)
- Admin Panel: [Click Here](https://flavorfly-admin.onrender.com)

- --

## **Features**

### **User Panel**
- **User Authentication**: Secure sign-up and login using JWT and password hashing.
- **Menu Browsing**: Explore a variety of food items categorized for easier navigation.
- **Cart Management**: Add, update, or remove items from the cart dynamically.
- **Secure Checkout**: Integrated Stripe for seamless payment processing.
- **Order History**: View previously placed orders and their status.

### **Admin Panel**
- **Admin Authentication**: Exclusive admin login for secure access.
- **Order Management**: Monitor and update order statuses.
- **Menu Management**: Add, update, or delete food items from the menu.
- **User Management**: View and manage registered users.

---

## **Technologies Used**

### **Frontend**
- React.js
- HTML, CSS

### **Backend**
- Node.js
- Express.js

### **Database**
- MongoDB (using Mongoose for ORM)

### **Authentication**
- JSON Web Tokens (JWT)
- Bcrypt

### **Payment Integration**
- Stripe

---

## **Architecture**

- **Frontend**: Handles the user interface and interacts with the backend via RESTful APIs.
- **Backend**: Processes business logic, manages data interactions with MongoDB, and ensures secure authentication.
- **Database**: Stores user, order, and food item data.
- **Security**: Passwords are hashed, and JWT is used for secure session management.

---

## How It Works

### User Workflow

- Users sign up and log in securely.
- Browse food items by categories.
- Add desired items to the cart and proceed to checkout.
- Make payments via Stripe, confirming the order.
- View order history for previous transactions.
- 
### Admin Workflow
- Admin logs in securely.
- Access the dashboard to manage orders, menu items, and users.
- Update order statuses in real-time to keep users informed.
- Add, edit, or remove food items to keep the menu updated.
