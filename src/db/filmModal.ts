import { FilmFormData } from "@/Validation/filmForm";
import { Schema, model, models } from "mongoose";

// Schema
const filmSchema = new Schema<FilmFormData>({
  title: { type: String, required: true, unique: true },
  content: { type: String, required: true, unique: true },
});
// Model
const FilmModel = models.Film || model<FilmFormData>("Film", filmSchema);

export default FilmModel;
