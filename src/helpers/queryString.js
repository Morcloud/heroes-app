export const queryString = (location) => {
    const locationArray = location.replace("?", "").split("&");
    let result = {};
    locationArray.forEach((element) => {
        const [clave, valor] = element.split("=");
        result = { ...result, [clave]: valor };
    });
    return result;
};
