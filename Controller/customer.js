const { request, response } = require("express");
const Customer= require("../Model/Customer");
const Service= require("../service/customer");

const createCustomer= async(req,res)=>
{
    return await Service.createCust(req.body.firstName, req.body.lastName,req.body.adress, req.body.userId, req.body.password, req.body.birthDay, req.body.gmail)

}

function getCust(filter)
{
    return Service.getCust(filter);
}

const deleteCust = async(req,res)=>
{
    await Service.deleteAllCust();
}

const getCustById= async(req,res)=>{
    return await Service.getCustById(req.body.userId)
}

const getCustHistoryById=async(req,res)=>{
    return await Service.getCustHistoryById(req.body.userId)
}



module.exports= {createCustomer, deleteCust, getCust, getCustById, getCustHistoryById};


