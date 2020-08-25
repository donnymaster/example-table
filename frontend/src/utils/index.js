
const getAge = (timestamp) => {
    const today = new Date();
    const birthDate = new Date(timestamp * 1000);
    return today.getFullYear() - birthDate.getFullYear();
}

const feetToMeters = (ft) => { // format '1.31'
    const result = ft.split("'");
    const mt = parseInt(result[0], 10) / 3.2808; // футы
    const sm = parseInt(result[1], 10) * 2.54; // дюймы
    if(mt.toFixed(0) == 0){
        return `${sm.toFixed(0)}см`;
    }
    return `${mt.toFixed(0)}м ${sm.toFixed(0)}см`;
}

const lbToKl = (lb) => {
    const kl = lb / 2.2046;
    return `${kl.toFixed(0)}кг`;
}

const compose = (...funcs) => (comp) => {
    return funcs.reduceRight(
        (wrapped, f) => f(wrapped), comp);
}

export {
    getAge,
    feetToMeters,
    lbToKl,
    compose
};