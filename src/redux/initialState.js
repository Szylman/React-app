const initialState = {
  lists: [
    {
      id: '1',
      title: 'Things to do...',
      description: 'Interesting things I want to check out'
    },
   {
      id: '2',
      title: 'Test list',
      description: 'Lorem Ipsum'
   }
  ],

  columns: [
    {
      listId: '1',
      id: 1,
      title: 'Books',
      icon: 'book',
    },
    {
      listId: '1',
      id: 2,
      title: 'Movies',
      icon: 'film',
    },
    {
      listId: '1',
      id: 3,
      title: 'Games',
      icon: 'gamepad',
    },
    {
      listId: '2',
      id: 4,
      title: 'TEST',
      icon: 'book',
    },
  ],
  
  cards: [
    { id: 1, columnId: 1, title: 'The Bible' },
    { id: 2, columnId: 1, title: 'Interpreter of Maladies' },
    { id: 3, columnId: 2, title: 'Minions' },
    { id: 4, columnId: 2, title: 'Interstellar' },
    { id: 5, columnId: 3, title: 'The Sims' },
    { id: 6, columnId: 3, title: 'Minecraft' }
  ],

  searchString:'',
  
};
  
export default initialState;