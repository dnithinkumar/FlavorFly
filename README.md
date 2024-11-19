# **FlavorFly - Food Delivery Application**

FlavorFly is a robust food delivery application designed to provide a seamless and efficient platform for customers to order their favorite meals and for administrators to manage the backend operations effectively. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), the application combines a modern, responsive user interface with a powerful backend to create a complete end-to-end solution for food delivery services.

The application is structured into two distinct panels:
- **User Panel**: Tailored for customers to browse the menu, place orders, and track their order status.
- **Admin Panel**: Designed for administrators to manage menu items, oversee customer orders, and handle user management.

---

## **Live Demo**
- Checkout the Live Application here:
- [FlavorFly - User Panel](https://flavorfly-frontend.onrender.com)
- [FlavorFly - Admin Panel](https://flavorfly-admin.onrender.com)

---

## **Features**

### **User Features**
- **User Registration and Login**: Users can create an account and log in to access personalized features. Passwords are securely hashed before storage, enhancing security.

- **Menu Browsing**: After logging in, users can explore a variety of food items organized into categories. Each item displays relevant information such as name, description, price, and images.

- **Cart Management**: Users can add items to their cart, modify quantities, or remove items as needed. The cart state is managed in the frontend, providing real-time feedback.

- **Checkout Process**: During checkout, users confirm their orders and provide delivery details. The application initiates a payment session with Stripe, allowing users to complete their transactions securely.

- **Order History**: Users can view their past orders, including details about items purchased, order status, and payment confirmations.

### **Admin Features**

- **Admin Login**: A separate authentication mechanism for administrators to access the admin panel securely.

- **Order Management**: Admins can view and manage all incoming orders, update their status, and communicate with users regarding their order fulfillment.

- **Menu Management**: The admin panel allows for easy addition, editing, or removal of food items from the menu. This ensures that the application reflects the current offerings.

---

## **Technology Stack** 

### **Frontend:**

- **React.js**: For building dynamic and interactive user interfaces.
- **HTML/CSS**: For structuring and styling the application.

### **Backend:**

- **Node.js**: A JavaScript runtime for building the server-side logic.
- **Express.js**: A web application framework for Node.js, facilitating API creation and routing.
- **MongoDB**: A NoSQL database for storing user data, menu items, and orders.

### **Security:**

- **Bcrypt**: For password hashing to ensure user credentials are stored securely.
- **JWT**: For managing user sessions and authorization.

### **Payment Processing:**

- **Stripe**: For handling payments securely, ensuring a smooth checkout experience for users.

---

## **Architecture**

- **Frontend**: Handles the user interface and interacts with the backend via RESTful APIs.
- **Backend**: Processes business logic, manages data interactions with MongoDB, and ensures secure authentication.
- **Database**: Stores user, order, and food item data.
- **Security**: Passwords are hashed, and JWT is used for secure session management.

---

## **Data Flow and Interaction**

- **User Interaction**: Users interact with the frontend by registering, logging in, and browsing menus. The frontend makes API calls to the backend for each action, such as fetching menu items or placing orders.

- **Backend Processing**: Upon receiving a request, the backend validates the data, interacts with the MongoDB database, and returns the appropriate response. For example, when a user places an order, the backend creates a new order record in the database and initiates a payment session with Stripe.

- **Order Fulfillment**: Once the payment is confirmed, the backend updates the order status and notifies the user. Administrators can view and manage these orders through the admin panel.

---

## How It Works

### User Workflow

- Users sign up and log in securely.
- Browse food items by categories.
- Add desired items to the cart and proceed to checkout.
- Make payments via Stripe, confirming the order.
- View order history for previous transactions.
  
### Admin Workflow
- Admin logs in securely.
- Access the dashboard to manage orders, menu items, and users.
- Update order statuses in real-time to keep users informed.
- Add, edit, or remove food items to keep the menu updated.
