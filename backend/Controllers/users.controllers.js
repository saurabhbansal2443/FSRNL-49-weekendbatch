import fs from "fs";

let productsData = fs.readFileSync(
  "/Users/saurabhbansal/Desktop/GFG batches /FSRNL-49-weekendbatch/backend/data.json",
);
let data = JSON.parse(productsData);
let productArray = data.users;

let createProduct = (req, res) => {
  let data = req.body;
  productArray.push(data);
  res.json(data);
};

let getAllData = (req, res) => {
  res.json(productArray);
};

let getSingleProduct = (req, res) => {
  let id = req.params.id;
  let product = productArray.find((obj) => obj.id == id);
  res.json(product);
};

let replaceProduct = (req, res) => {
  let id = req.params.id;
  let objIdx = productArray.findIndex((obj) => obj.id == id);
  let replacedProduct = { ...req.body, id: id };
  productArray.splice(objIdx, 1, replacedProduct);
  res.json(replacedProduct);
};

let updateProduct = (req, res) => {
  let id = req.params.id;
  let objIdx = productArray.findIndex((obj) => obj.id == id);
  let product = productArray[objIdx]; //old product
  let replacedProduct = { ...product, ...req.body };
  productArray.splice(objIdx, 1, replacedProduct);
  res.json(replacedProduct);
};

let deleteProduct = (req, res) => {
  let id = req.params.id;
  let objIdx = productArray.findIndex((obj) => obj.id == id);
  let obj = productArray[objIdx];
  productArray.splice(objIdx, 1);
  res.json(obj);
};

export {
  createProduct,
  getAllData,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  replaceProduct,
};
