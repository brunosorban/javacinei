import React from 'react';
import Head from './template/Head'
import Footer from './template/Footer'
import Home from './pages/home/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { estoque:null, vacinas:null };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/estoques/')
      .then((response) => response.json())
      .then((result) => this.setState({ estoque: result }))
      .catch((error) => error);

    fetch('http://127.0.0.1:8000/api/vacinas/')
      .then((response) => response.json())
      .then((result) => this.setState({ vacinas: result }))
      .catch((error) => error);

    fetch('http://127.0.0.1:8000/api/agendamentos/')
      .then((response) => response.json())
      .then((result) => this.setState({ agendamentos: result }))
      .catch((error) => error);

    fetch('http://127.0.0.1:8000/api/vacineis/')
      .then((response) => response.json())
      .then((result) => this.setState({ vacineis: result }))
      .catch((error) => error);

  }

  prepare(estoque, vacinas) {
    let novo_estoque = estoque;

    for (const prop in estoque) {
        const num = estoque[prop].vacinas_id;
        const nome = vacinas[num-1]["nome"];
        novo_estoque[prop].nome = nome;
    }

    return (novo_estoque)
  }

  render() {
    let {estoque, vacinas, agendamentos, vacineis} = this.state; 

    if (!estoque) {
      return null;
    }

    if (!vacinas) {
      return null;
    }

    if (!agendamentos) {
      return null;
    }

    if (!vacineis) {
      return null;
    }

    let novo_estoque = this.prepare(estoque, vacinas);
    
    return (
      <div className='App'>
        <Head/>
        <Home data={novo_estoque}/>
        <Footer/>
      </div>
      );
    }
  }


export default App;










// let movieData = [
//   {
//   id: "1",
//   name: "The Shawshank Redemption",
//   release_year: "1994",
//   poster_url:
//   "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
//   },
//   {
//   id: "2",
//   name: "The Godfather",
//   release_year: "1972",
//   poster_url:
//   "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
//   },
//   {
//   id: "3",
//   name: "Schindler's List",
//   release_year: "1993",
//   poster_url:
//   "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
//   }
//   ];

// function HelloTitle(props) {
//   return (
//     <h2>Hello {props.name}</h2>
//   );
// }

// function MoviesTable(props) {
//   const {list, onDismiss, searchTerm} = props;
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>ID </th>
//           <th>Titulo</th>
//           <th>Ano</th>
//           <th>Url do Poster</th>
//         </tr>
//       </thead>
//       <tbody>
//         {list.filter(movie => movie.name.toLowerCase().includes(searchTerm.toLowerCase()))
//         .map(movie => 
//             <tr key={movie.id}>
//               <td>{movie.id}</td>
//               <td>{movie.name}</td>
//               <td>{movie.release_year}</td>
//               <td>{movie.poster_url}</td>
//               <td>
//                 <button onClick={() => onDismiss(movie.id)}>
//                   Dismiss
//                 </button>
//               </td>
//               </tr>
//               )}
//       </tbody>
//     </table>
//   )
// }

// function Search(props) {
//   const {searchTerm, handleInputChange} = props;
//   return (
//     <form>
//         <input type="text" placeholder="Search by movie name"
//         name='searchTerm' value={searchTerm} onChange={(event) => handleInputChange(event)}/>
//     </form>
//   )
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {list: movieData, searchTerm: ''};
//     this.onDismiss = this.onDismiss.bind(this);
//     this.onSearchChange = this.onSearchChange.bind(this);
//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   onDismiss(id) {
//     const updatedList = this.state.list.filter(item => item.id !== id);
//     this.setState({ list: updatedList });
//   }

//   onSearchChange(event) {
//     this.setState({searchTerm: event.target.value });
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked: target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   render() {
//     const {list, searchTerm} = this.state;
//     return (
//       <div className='App'>
//         <Search searchTerm={searchTerm} handleInputChange={(e) => this.handleInputChange(e)}/>
//         <MoviesTable 
//         list={list}
//         onDismiss={(id) => this.onDismiss(id)}
//         searchTerm={searchTerm}
//         onSearchChange={(e) => this.onSearchChange(e)}
//         />
//       </div>
//     );
//   }
// }



// export default App;
