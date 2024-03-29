import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addtask = await inquirer.prompt([
        {
            name: 'todo',
            type: 'input',
            message: "what you want to add in your todos"
        },
        {
            name: 'addmore',
            //for yes or no add confirm
            type: 'confirm',
            message: 'do you want to add more?',
            //when add confirm we must add default
            default: 'false'
        },
    ]);
    todos.push(addtask.todo);
    condition = addtask.addmore;
    console.log(todos);
}
;
