import mongoose, { Date, Document, Schema} from 'mongoose'
import { GameBoard } from './GameBoard';
import { User } from './User';

export interface Payment extends Document{
    
    id: number;
    codOrder: string;
    userCostumerId: User;
    products: Array<GameBoard>;
    totalPrice: number;
    nameCostumer: string;
    estado: string;
    logradouro: string;
    bairro: string;
    cardName: string;
    cardNumber: string;
    cvvCard:string;
    expDate: string;

}

const PaymentSchema:Schema = new Schema({
    id: { type: Number, required: true },
    codOrder: { type: String, required: true },
    userCostumerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true  },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'GameBoard', required: true }],
    totalPrice: { type: Number, required: true },
    nameCostumer: { type: String, required: true },
    estado: { type: String, required: true },
    logradouro: { type: String, required: true },
    bairro: { type: String, required: true },
    cardName: { type: String, required: true },
    cardNumber: { type: String, required: true },
    cvvCard: { type: String, required: true },
    expDate: { type: String, required: true }
});


export default mongoose.model<Payment>('Payment', PaymentSchema);