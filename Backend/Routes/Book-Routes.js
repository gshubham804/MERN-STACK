const express = require("express");
const router = express.Router();
const BookController=require("../Controllers/books-Controllers");


router.get("/",BookController.getAllBooks);
router.post("/",BookController.addBook);
router.get("/:id",BookController.getById);
router.put("/:id",BookController.updateBook);
router.delete("/:id",BookController.deleteBook);


module.exports=router;