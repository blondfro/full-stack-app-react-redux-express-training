import * as server  from "./server";

(async function serverTest() {
    await server.addNewTask({
        name: "my New Task yay",
        id: "123456"
    });

    await server.updateTask({
        name: "my New Task updated yay",
        id: "12345"
    })
})();

// by adding the ()() around the function it will invoke it automatically.

