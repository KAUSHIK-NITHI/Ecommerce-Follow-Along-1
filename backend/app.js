const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const ErrorHandler = require("./middleware/error");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Configure CORS to allow requests from React frontend
app.use(cors({
  origin: 'http://localhost:3000', // Update this if your frontend is hosted elsewhere
  credentials: true, // Enable if you need to send cookies or authentication headers
}));

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Serve static files for uploads and products
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/products', express.static(path.join(__dirname, 'products')));

// Import Routes
const userRoutes = require("./controller/user");
const productRoutes = require('./controller/product');


// Route Handling
app.use("/api/v2/user", userRoutes);
app.use("/api/v2/product", productRoutes);

// Error Handling Middleware
app.use(ErrorHandler);

module.exports = app;

router.get('/my-orders', async (req, res) => {
  try {
      const { email } = req.query;


      // Validate the email parameter
      if (!email) {
          return res.status(400).json({ message: 'Email is required.' });
      }


      // Retrieve user _id from the user collection using the provided email
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(404).json({ message: 'User not found.' });
      }


      // Find all orders associated with the user
      const orders = await Order.find({ user: user._id });


      res.status(200).json({ orders });
  } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ message: error.message });
  }
});
