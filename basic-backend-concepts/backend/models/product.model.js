const mongoose = require(`mongoose`);

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      default: "Zaid Ansari",
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      default: 0,
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, // This will automatically add createdAt and updatedAt fields
  }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
