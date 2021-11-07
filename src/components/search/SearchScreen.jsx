import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { queryString } from "../../helpers/queryString";
import { useForm } from "../../hooks/useForm";
import { getHeroByName } from "../../selectors/getHeroByName";
import { HeroCard } from "../heroes/HeroCard";

export const SearchScreen = ({ history }) => {
    const location = useLocation();
    const { q = "" } = queryString(location.search);

    const [{ searchText }, handleInputChange] = useForm({
        searchText: q,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    };

    const heroesFiltered = useMemo(() => getHeroByName(q), [q]);
    // const heroesFiltered = getHeroByName(searchText);

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className='row'>
                <div className='col-5'>
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input
                            name='searchText'
                            type='text'
                            placeholder='Find your hero'
                            className='form-control'
                            autoComplete='off'
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button
                            type='submit'
                            className='btn btn-block btn-outline-primary'
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className='col-7'>
                    <h4>Results</h4>
                    <hr />
                    {q === "" && (
                        <div className='alert alert-info'>Search a hero</div>
                    )}
                    {q !== "" && heroesFiltered.length === 0 && (
                        <div className='alert alert-danger'>
                            There is no hero with {q}{" "}
                        </div>
                    )}
                    {heroesFiltered.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </div>
    );
};
