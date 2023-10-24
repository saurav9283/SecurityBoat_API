import { productModel } from "../model/Product.js";

export const addProduct = async (req, res) => {
  try {
    const newProduct = new productModel(req.body);
    await newProduct.save();
    return res.status(200).send("Product Saved!!");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

export const updateProduct = async (req, res) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  else{
      const id = req.params.id;
      try {
        await productModel.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).send("Product updated!");
      } catch (error) {
        console.log(error);
      }
  }
};

export const deleteProduct = async (req, res) => {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    else{

        const id = req.params.id;
        try {
          await productModel.findByIdAndDelete(id);
          res.status(200).send("Product Deleted!!");
        } catch (error) {
            console.log("lkjhg")
          console.log(error);
        }
    }
};

export const getProducts = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 6;
  const skip = (page - 1) * limit;

  try {
    const products = await productModel.find().skip(skip).limit(limit);
    const totalProducts = await productModel.countDocuments();

    res.status(200).json({
      products,
      currentPage: page,
      totalPages: Math.ceil(totalProducts / limit),
      totalProducts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
