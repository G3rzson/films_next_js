import FilmForm from "@/Components/AddFilm/FilmForm";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="title">Film hozzáadása</h1>
      <FilmForm />
    </div>
  );
}
