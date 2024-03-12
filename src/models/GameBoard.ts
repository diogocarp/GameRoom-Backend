
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
    minPlayers: { type: Number, },
    maxPlayers: { type: Number, },
    recommendedAge: { type: Number, },
    publisher: { type: String, },
    designer: { type: String, },
    releaseDate: { type: Date, },
    imageURL: { type: String, required: true},
    rulesURL: { type: String }
});

export default mongoose.model<GameBoard>('GameBoard', GameBoardSchema);