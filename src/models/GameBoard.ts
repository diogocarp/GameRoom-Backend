
import mongoose, { Date, Document, Schema } from 'mongoose';

export interface GameBoard extends Document {

    id: number;
    name: string;
    value: number;
    description: string;
    minPlayers: number;
    maxPlayers: number;
    recommendedAge: number;
    publisher: string;
    designer: string;
    releaseDate: Date;
    imageURL?: string;
    rulesURL?: string;
}

const GameBoardSchema: Schema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    value: { type: Number, required: true },
    description: { type: String, required: true },
    minPlayers: { type: Number, required: true },
    maxPlayers: { type: Number, required: true },
    recommendedAge: { type: Number, required: true },
    publisher: { type: String, required: true },
    designer: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    imageURL: { type: String },
    rulesURL: { type: String }
});

export default mongoose.model<GameBoard>('GameBoard', GameBoardSchema);