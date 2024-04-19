#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = ["Read a Book", "Code", "Do Exercise"];
let response = await inquirer.prompt([
    {
        name: "Q1",
        type: "list",
        message: "Welcome to your Todo App",
        choices: ["View your Todo List", "Edit your Todo List"],
    },
]);
if (response.Q1 === "View your Todo List") {
    console.log(todoList.join("\n"));
}
if (response.Q1 === "Edit your Todo List") {
    let response2 = await inquirer.prompt([
        {
            name: "Q2",
            type: "list",
            message: "What do you want to do with your Todo List?",
            choices: ["Add items to your List", "Remove items from your List"],
        },
    ]);
    if (response2.Q2 === "Add items to your List") {
        let addMore = true;
        while (addMore) {
            let response3 = await inquirer.prompt([
                {
                    name: "Q3",
                    type: "input",
                    message: "What do you want to add?",
                },
                {
                    name: "Q4",
                    type: "confirm",
                    message: "Do you want to add more?",
                    default: false,
                },
            ]);
            let newTodo = todoList.push(response3.Q3);
            console.log("Updated Todo List:");
            console.log(todoList.join("\n"));
            if (response3.Q4 == false) {
                break;
            }
        }
    }
    if (response2.Q2 === "Remove items from your List") {
        console.log(todoList.join("\n"));
        let response4 = await inquirer.prompt([
            {
                name: "Q5",
                type: "checkbox",
                message: "Select items to remove",
                choices: todoList,
            },
        ]);
        todoList = todoList.filter(item => !response4.Q5.includes(item));
        console.log("Updated Todo List:");
        console.log(todoList.join("\n"));
    }
}
