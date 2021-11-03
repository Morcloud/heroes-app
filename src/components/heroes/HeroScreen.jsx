import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { getHeroById } from "../selectors/getHeroById";

export const HeroScreen = () => {
    const { heroeid } = useParams();

    const hero = getHeroById(heroeid);

    if (!hero) {
        return <Redirect to='' />;
    }

    const { superhero, publisher, alter_ego, first_appearance, characters } =
        hero;

    return (
        <div>
            <h1>Hero Screen</h1>
        </div>
    );
};
