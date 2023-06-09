
const transactionModel = require('../models/transactionModel');
const getAllTransaction = async (req, res) => {


    try {

 
        const transaction = await transactionModel.find({
           
            userid: req.body.userid,
        
        });

        res.status(200).json(transaction)
    }
    catch (error) {

        console.log(error);
        res.status(500).json(error);
    }
};


const DeleteTransaction = async (req, res) =>{


try{

    await transactionModel.findByIdAndDelete({_id: req.body.transactionId})
    res.status(200).send('Transaction Deleted')
}
catch(error){
    console.log(error)
    res.status(500).json(error)
}



}


const EditTransaction = async (req, res) => {


    try{

        await transactionModel.findOneAndUpdate({_id: req.body.transactionId}, req.body.payload)
        res.status(200).send("Edit SuccesFully");
    }
    catch(error)
    {
        console.log(error)
        res.status(500).json(error)
    }
}

const AddTransaction = async (req, res) => {  


try {
    const newTransaction = new transactionModel(req.body);

    await newTransaction.save();
    res.status(201).send("Transaction Created");

}
catch (error) {
    console.log(error);
    res.status(500).json(error);
}
};


module.exports = { getAllTransaction, AddTransaction, EditTransaction , DeleteTransaction };