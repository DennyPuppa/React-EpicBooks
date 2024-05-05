import MyNav from "../components/navbar/MyNav";
import MyFooter from "../components/footer/MyFooter";
import AllTheBooks from "../components/allTheBooks/AllTheBooks";
import AlertWelcome from '../components/welcome/Welcome';
import FantasyBook from "../dataBooks/fantasy.json";
import { useState } from "react";
import SearchBar from "../components/searchBar/SearchBar";

const HomePage = () => {

    const [books, setBooks] = useState(FantasyBook)
    const [booksStart, setBooksStart] = useState(FantasyBook)
    
    return (
        <>
            <MyNav />
            <SearchBar allBooks={books} setBooks={setBooks} booksStart={booksStart}/>
            <AlertWelcome />
            <AllTheBooks allBooks={books}/>
            <MyFooter />
        </>
    )
}

export default HomePage;