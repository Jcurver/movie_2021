import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading : false});
  };
  componentDidMount() {
    this.getMovies();
  }
  // axios 는 fetch 위에 있는 작은 layer이다.

  render() {
    const { isLoading, movies } = this.state;
    return (
    <section className="container">
      {isLoading ? (
      <div className="loader">
        <span className="loader__text">Loading...</span>
      </div> 
      ) : (
      
        <div className="movies">
          {movies.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              genres={movie.genres}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              />
          ))}
        </div>
        )}
      </section>
    )
}}

export default Home;


























//   constructor(props){
//     super(props)
//     console.log("Hello");
//   }
//   state = {
//     count: 0
//   };
//   add = () => {
//     this.setState(current => ({count: current.count +1}));
//   }
//   minus = () => {
//      this.setState(current => ({count: current.count -1}));

//   }
//   componentDidMount(){ // 컴포넌트가 마운트에 등장한 후 실행
//     console.log("component rendered");
//   }
//   componentDidUpdate(){ //컴포넌트가 업데이트 될 때마다 실행
//     console.log("I just updated");

//   }
//   componentWillUnmount(){ // 컴포넌트가 마운트에서 사라진 후 실행(페이지이동)
//     console.log("Good bye Cruel world");// 함수는 확싫히 동작하지만 콘솔로그는 동작 확인 불가
//   }
//   render(){
//     console.log("I'm randering");
//     return ( <div>

//     <h1>The number is {this.state.count}</h1>
//     <button onClick={this.add}>Add</button>
//     <button onClick={this.minus}>Minus</button>
//     </div>
//     )
//   }
// }

// export default App;

// // 매 순간 내가 setState를 호출할 때마다 react는 새로운 state와 함께 render function을 호출한다.

//  // mounting = 태어나는 것
//  // Updating = 업데이트
//  // Unmounting = 컴포넌트가 죽는 것(페이지 바꿀 때 등)

