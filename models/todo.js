module.exports = {
    id: 'todo',
    label: 'To Do',
    name: 'task',
    namePlural: 'tasks',
    icon: 'todo.gif',
    fnTitle:'title',
    fnSearch: ['title', 'description', 'notes'],
    elements: [
        {
            type: 'panel', label: 'Task', width: 62,
            elements: [
                {
                    id: 'title', attribute: 'title', type: 'text', label: 'Title', required: true,
                    //placeholder: 'Call John',
                    maxLength: 255,
                    width: 100, inMany: true
                },
                {
                    id: 'duedate', attribute: 'duedate', type: 'date', label: 'Due Date', width: 62, inMany: true
                },
                {
                    id: 'category', attribute: 'category_id', type: 'lov', label: 'Category', width: 38, inMany: true,
                    lovtable: 'todo_category',
                    list: [
                        {id: 1, text: 'Home'},
                        {id: 2, text: 'Work'},
                        {id: 3, text: 'Fun'},
                        {id: 4, text: 'Others'},
                        {id: 5, text: 'Misc.'}
                    ],
                    typeChart:'bars'
                }
            ]
        },
        {
            type: 'panel', label: 'Status', width: 38,
            elements: [
                {
                    id: 'priority', attribute: 'priority_id', type: 'lov', label: 'Priority', required: true,
                    width: 100,  inMany: true,
                    lovtable: 'todo_priority',
                    list: [
                        {id: 1, text: '1 - ASAP'},
                        {id: 2, text: '2 - Urgent'},
                        {id: 3, text: '3 - Important'},
                        {id: 4, text: '4 - Medium'},
                        {id: 5, text: '5 - Low'}
                    ]
                },
                {
                    id: 'complete', attribute: 'complete', type: 'boolean', width: 100, inMany: true,
                    label: 'Complete', 
                    labelCharts:'Tasks completion', labelTrue: 'Complete', labelFalse:'Incomplete',
                    typeChart:'pie'
                }
            ]
        },
        {
            type: 'panel', label: 'Task Description', label2:'and Notes', width: 100,
            elements: [
                {
                    id: 'description', attribute: 'description', type: 'textmultiline', 
                    label: 'Description', 
                    maxLength: 1000,
                    width: 62, height: 5, inMany: false
                },
                {
                    id: 'notes', attribute: 'notes', type: 'textmultiline', label: 'Notes', maxLength: 1000,
                    width: 38, height: 5, inMany: false
                }
            ]
        }
    ]
};
