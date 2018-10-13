import React from 'react';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

//top level component
var App = () => {
    return (
      <div>
        <Title />
        <Navigation movies={movies}/>
        <List movies={movies} />
      </div>
    )
};

var Title = () => (
  <h1>Movie List!</h1>
);

//this component includes the search bar and the logic assoiated with it
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInList: false
    };
  }

  handleSearch(props) {
    //check if movie is in list?
    this.props.movies.forEach((movie) => {
      //if movie is equal to or includes the inputted text, 
        //do this.setState = {isInList: true}
    })

  }

  //after we check and see if the inputted movie is in the movie list, 
    //we update the state and use this state to output the appropriate response
    //and after we do this we need to return the state to false,
    //because if we don't then all subsequent searches will return true

  render() {
    return (
      <input type="search" id="movie-search">
      <button>Search</button>
    )
  }
};

var List = (props) => {
  const movieItems = props.movies.map((movie, key) => 
    <ListItem key={key} value={movie} />
  );

  return (
    <ul>{movieItems}</ul>
  )
};

var ListItem = (props) => (
  <li>{props.value.title}</li>
);


export default App;