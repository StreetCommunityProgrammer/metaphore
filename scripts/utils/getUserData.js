module.exports = (input) => {
    const regex = /{start userdata}([\s\S]*?){end userdata}/;
    const result = input.match(regex);
    if (result) {
        return result[1];
    } else {
        return null;
    }
}