import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        setState({ loading: true, data: null, error: null });
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                setState({ loading: false, error: null, data });
            })
            .catch(() => {
                setState({
                    loading: false,
                    data: null,
                    error: "No se pudo cargar la información",
                });
            });
    }, [url]);

    return state;
};
