const express= require('express');
const router=express.Router();
const {getAllProducts,createProduct,updateProduct,getProductReviews,deleteReview,deleteProduct,getProductDetails,createProductReview}=require('../controllers/productController');
const { isAuthenticatedUser,authorizeRoles } = require('../middleware/auth');
router.route("/products").get(getAllProducts);
router.route("/product/new").post(isAuthenticatedUser,authorizeRoles("admin"),createProduct);
router.route("/product/:id")
.put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct)
.delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct)
.get(getProductDetails);

router.route("/review").put(isAuthenticatedUser, createProductReview);


router.route("/reviews").get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);

module.exports=router;