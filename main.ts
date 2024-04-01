#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todoList : string[] = [];

console.log(chalk.yellowBright.bold("\n\t\tWELCOME TO YOUR TODO LIST!\t "));
console.log(chalk.whiteBright("\t_Empowering You To Organize Your Life_\n"));

async function createTodo(todoList:string[]){
    do{
        let result = await inquirer.prompt({
            name: "select",
            type: "list",
            message: chalk.cyanBright("Select one operation"),
            choices: ['Add', 'View', 'Update', 'Delete'],
        })
    
        if(result.select === 'Add'){
            let addList = await inquirer.prompt({
                name: "task",
                type: "input",
                message: chalk.magentaBright("What task do you want to add?"),
            })
            todoList.push(addList.task);
            todoList.forEach(todo => console.log(todo));
            console.log(chalk.green (`\t**Task added in ToDo List successfully!`)); 
        }
        if(result.select === 'View'){
            console.log(chalk.yellow.bold("**TO DO LIST**"));
            todoList.forEach(todo => console.log(todo));
            console.log(chalk.green (`\t**Task added in ToDo List successfully!`)); 
        }
        if(result.select === 'Update'){
            let updateList = await inquirer.prompt({
                name: "todo",
                type: "list",
                message:chalk.magentaBright ("Update task in the list"),
                choices: todoList.map(task => task)
            });
            let addList = await inquirer.prompt({
                name: "task",
                type: "input",
                message:chalk.magentaBright ("What task do you want to add?"),
            });
            let newTodo = todoList.filter(val => val !== updateList.todo);
            todoList = [...newTodo,addList.task];
            todoList.forEach(todo => console.log(todo));
            console.log(chalk.green (`\t**Task added in ToDo List successfully!`)); 
            }
    
            if (result.select === 'Delete'){
                let deleteTodo = await inquirer.prompt({
                    name: "delete",
                    type: "list",
                    message:chalk.red("Update task in the list"),
                    choices: todoList.map(task => task)
                });
            let newTodo = todoList.filter(val => val !== deleteTodo.delete);
                todoList = [...newTodo];
                todoList.forEach(todo => console.log(todo));
                console.log(chalk.green (`\t**Task added in ToDo List successfully!`));
        }
    } while(true)
}
createTodo(todoList);



