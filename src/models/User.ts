
import mongoose, { Date, Document, Schema } from 'mongoose';

export interface User extends Document {
  id: number;   
  name: string;
  cpf: string;
  birth: Date;
  address: string;
  email: string;
  password: string;
  type: string
}

const UserSchema = new Schema<User>({
  id: {type: Number, required: true, unique: true},
  name: { type: String, required: true },
  cpf: { type: String, required: true },
  birth: { type: Date, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  type: {type: String, required: true}
});

export default mongoose.model<User>('User', UserSchema);

