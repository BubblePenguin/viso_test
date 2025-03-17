import RecipeList from "../components/recipes/RecipeList";
import mock from "@/public/mock.json";
import SearchBar from "../components/searchBar/SearchBar";

export default function Home() {
  return (
    <div className="">
      <SearchBar />
      <RecipeList meals={mock.meals} />
    </div>
  );
}
