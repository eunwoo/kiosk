const pointInRect = ({ x1, y1, x2, y2 }, { x, y }) => {
    return x > x1 && x < x2 && y > y1 && y < y2;
};
const convToPoint = ({ x, y, width, height }, imgWidth, imgHeight) => {
    const x1 = Number(x.split('%')[0]) * 0.01 * imgWidth;
    const y1 = Number(y.split('%')[0]) * 0.01 * imgHeight;
    const wpx = Number(width.split('%')[0]) * 0.01 * imgWidth;
    const hpx = Number(height.split('%')[0]) * 0.01 * imgHeight;

    return {
        x1: x1,
        y1: y1,
        x2: x1 + wpx,
        y2: y1 + hpx,
    };
};
export { pointInRect, convToPoint };
