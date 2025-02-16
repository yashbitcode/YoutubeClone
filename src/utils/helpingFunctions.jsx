export const getDateDiff = (dataDate) => {
    const d1 = new Date();
    const d2 = new Date(dataDate);

    const timeDiffInDay = Math.floor((d1 - d2) / (1000 * 60 * 60 * 24));

    if(timeDiffInDay === 0) return "Today";
    else if(timeDiffInDay > 360) return `${Math.floor(timeDiffInDay / 360)} Yr ago`;
    else if(timeDiffInDay > 30) return `${Math.floor(timeDiffInDay / 30)} Mn ago`;
    else if(timeDiffInDay > 7) return `${Math.floor(timeDiffInDay / 7)} Wk ago`;
    else return `${Math.floor(timeDiffInDay)} dy ago`;
};

export const truncateStr = (str) => {
    if(str.length > 40) return str.substring(30) + "....";
    return str;
};