export const choice = (items) => {
    console.log('items', items)
    let idx = Math.floor(Math.random() * items.length);
    console.log('random idx', idx)
    return items[idx];
};

export const remove = (items, item) => {
    const idx = items.indexOf(item);
    return items.slice(0, idx).concat(items.slice(idx + 1, items.length))
}