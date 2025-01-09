export const truncated = (str, length) => {
    const string = String(str);
    return string.length > length ? string.substring(0, length) + "..." : string;
};