export const randomColour = (previousColour) => {
    const colours = ["action200", "info200", "success200", "highlight200", "primary200", "warning200"];
    const i = Math.floor(Math.random() * colours.length);
    if (colours[i] !== previousColour) {
        return colours[i];
    } else {
        return randomColour(previousColour);
    }
};