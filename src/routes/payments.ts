
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import Payment from '../models/Payment';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const count = await mongoose.model('Payment').countDocuments();
    const id = count + 1;
    const {  codOrder,
        userCostumerId,
        products,
        totalPrice,
        nameCostumer,
        estado,
        logradouro,
        bairro,
        cardName,
        cardNumber,
        cvvCard,
        expDate} = req.body;  
    const payment = new Payment({ 
        id,
        codOrder,
        userCostumerId,
        products,
        totalPrice,
        nameCostumer,
        estado,
        logradouro,
        bairro,
        cardName,
        cardNumber,
        cvvCard,
        expDate,
     });
    await payment.save();
    res.status(201).json(payment);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
});


router.get('/', async (req: Request, res: Response) => {
  try {
    const payment = await Payment.find();
    res.json(payment);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:userCostumerId', async (req: Request, res: Response ) => {
  try {
    const payments = await Payment.find({ userCostumerId: req.params.userCostumerId });
    res.json(payments);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.json(payment);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { codOrder } = req.body;
    const updatedPayment = await Payment.findByIdAndUpdate(req.params.id, { codOrder }, { new: true });
    if (!updatedPayment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.json(updatedPayment);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const deletedPayment = await Payment.findByIdAndDelete(req.params.id);
    if (!deletedPayment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.json({ message: 'Payment deleted' });
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }

});

export default router;
