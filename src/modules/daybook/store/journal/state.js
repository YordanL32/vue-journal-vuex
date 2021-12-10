export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni ipsum quisquam saepe totam sit ea, fuga voluptate reprehenderit necessitatibus minus illum ex sint, explicabo recusandae a maxime voluptatum quos aspernatur.',
            picture:null
        },
        {
            id: new Date().getTime()+1000,
            date: new Date().toDateString(),
            text: 'doloepe totam sit ea, fuga voluptate reprehenderit necessitatibus minus illum ex sint, explicabo recusandae a maxime voluptatum quos aspernatur.',
            picture:null
        },
        {
            id: new Date().getTime()+2000,
            date: new Date().toDateString(),
            text: 'saepe totam sit ea, fuga voluptate reprehenderit necessitatibus minus illum ex sint, explicabo recusandae a maxime voluptatum quos aspernatur.',
            picture:null
        }
    ]
})