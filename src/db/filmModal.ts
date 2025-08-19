import { FilmFormData } from "@/Validation/filmForm";
import { Schema, model, models, Document } from "mongoose";

interface FilmDocument extends FilmFormData, Document {}

const filmSchema = new Schema<FilmDocument>({
  title: { type: String, required: true, unique: true },
  content: { type: String, required: true, unique: true },
  isFavorite: { type: Boolean, default: false },
});

const FilmModel = models.Film || model<FilmDocument>("Film", filmSchema);

export default FilmModel;
