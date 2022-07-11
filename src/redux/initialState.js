const initialState = {
    columns: [
      {
        id: 1,
        title: 'Books',
        icon: 'book',
      },
      {
        id: 2,
        title: 'Movies',
        icon: 'film',
      },
      {
        id: 3,
        title: 'Games',
        icon: 'gamepad',
      }
    ],
  
    cards: [
      { id: 1, columnId: 1, title: 'The Bible' },
      { id: 2, columnId: 1, title: 'Interpreter of Maladies' },
      { id: 3, columnId: 2, title: 'Minions' },
      { id: 4, columnId: 2, title: 'Interstellar' },
      { id: 5, columnId: 3, title: 'The Sims' },
      { id: 6, columnId: 3, title: 'Minecraft' }
    ]
  
  };
  
  export default initialState;