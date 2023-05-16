const express= require('express');
const { AddTransaction, getAllTransaction, EditTransaction ,  DeleteTransaction} = require('../controllers/transactionController');



//router object

const router = express.Router()


//routes

router.post('/edit-transaction', EditTransaction)
//add transaction

router.post('/add-transaction', AddTransaction)

//get transaction

router.post('/get-transaction' , getAllTransaction);



//delete transaction
router.post('/delete-transaction', DeleteTransaction)



module.exports = router