export const getFlag = (languageCode) => {
    try {
        return new URL(`/src/assets/flags/${languageCode}.svg`, import.meta.url).href;
    } catch {
        return new URL('/src/assets/flags/default.png', import.meta.url).href;
    }
};