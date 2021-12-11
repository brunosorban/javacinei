import React from 'react';
import Head from './template/Header';
import Footer from './template/Footer';
import Home from './pages/home/Home';  

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { estoque:null, vacinas:null };
  }

  componentDidMount() {
    fetch('https://site-vacinei.herokuapp.com/api/estoques/')
      .then((response) => response.json())
      .then((result) => this.setState({ estoque: result }))
      .catch((error) => error);

    fetch('https://site-vacinei.herokuapp.com/api/vacinas/')
      .then((response) => response.json())
      .then((result) => this.setState({ vacinas: result }))
      .catch((error) => error);

    fetch('https://site-vacinei.herokuapp.com/api/agendamentos/')
      .then((response) => response.json())
      .then((result) => this.setState({ agendamentos: result }))
      .catch((error) => error);

    fetch('https://site-vacinei.herokuapp.com/api/vacineis/')
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

  prepare_estoque(estoque, vacinas) {
    let estoque_unificado = [];

    for (const v_id in vacinas) {
      let nome_temp = vacinas[v_id]['nome']
        estoque_unificado[v_id] = {'nome': nome_temp, 'quantidade': 0};
        for (const e_id in estoque) {
          if (estoque[e_id]['nome'] === nome_temp){
            estoque_unificado[v_id]['quantidade'] = estoque_unificado[v_id]['quantidade'] + estoque[e_id]['quantidade'];
          }
        }
    }

    return (estoque_unificado)
  }

  contas(vacineis, agendamentos) {
    var today = new Date();
    var month = today.getMonth()+1;
    var year = today.getFullYear();
    var mon_year = String(year) + '-' + String(month);
    var agendamentos_mes = 0;
    
    for (const v_id in vacineis) {
      var temp_date = agendamentos[vacineis[v_id]['agendamento_id']-1]['dia'];
      temp_date = temp_date.slice(0, 7);
      if (String(temp_date) === String(mon_year)) {
        agendamentos_mes++;
      }
    }

    return agendamentos_mes
  }

  grafico(agendamentos) {
    var today = new Date();
    var year = today.getFullYear();
    var grafico = [
      {
        name: 'Jan',
        "Soma": 0,
      },
      {
        name: 'Fev',
        "Soma": 0,
      },
      {
        name: 'Mar',
        "Soma": 0,
      },
      {
        name: 'Abr',
        "Soma": 0,
      },
      {
        name: 'Mai',
        "Soma": 0,
      },
      {
        name: 'Jun',
        "Soma": 0,
      },
      {
        name: 'Jul',
        "Soma": 0,
      },
      {
        name: 'Ago',
        "Soma": 0,
      },
      {
        name: 'Set',
        "Soma": 0,
      },
      {
        name: 'Out',
        "Soma": 0,
      },
      {
        name: 'Nov',
        "Soma": 0,
      },
      {
        name: 'Dez',
        "Soma": 0,
      },
    ];
    
    for (const a_id in agendamentos) {
      var temp_date = agendamentos[a_id]['dia'];
      temp_date = temp_date.slice(0, 4);

      if (String(temp_date) === String(year)) {
        var temp_mes = agendamentos[a_id]['dia'];
        temp_mes = temp_mes.slice(5, 7);
        grafico[Number(temp_mes)-1]['Soma']++;
      }
    }

    return grafico
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
    let estoque_unificado = this.prepare_estoque(novo_estoque, vacinas);
    const total_vacinei = vacineis.length;
    const total_agendamentos = agendamentos.length;
    let agendamentos_mes = this.contas(vacineis, agendamentos);
    let grafico = this.grafico(agendamentos);
    
    return (
      <div className='App'>
        <Header/>
        <Home data={estoque_unificado} total_vacinei={total_vacinei} 
        total_agendamentos={total_agendamentos} agendamentos_mes={agendamentos_mes} grafico={grafico}/>
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
