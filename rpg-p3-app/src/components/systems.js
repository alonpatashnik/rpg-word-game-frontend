const MoveBox = (entities, { input }) => {
    // you can treat the game state as immutable and return a copy
    // i.e. return { ... entities, t.id: {UPDATED COMPONENTS }};

    const { payload } = input.find( x => x.name === "onMouseDown") || {};

    if (payload) {
        const box1 = entities["box1"];

        box1.x = payload.pageX;
        box1.y = payload.pageY;
    }

    return entities;
};

export { MoveBox };