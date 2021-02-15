import React, { Component } from "react";
import { getChats } from "../services/fakeChatService";

import NavBar from "./common/navbar";

import ChatHistory from "./chatHistory";
import Form from "./common/form"
import Display from "./common/display"

// import Pagination from "./common/pagination";

import { paginate } from "../utils/paginate";
import _ from 'lodash';


class Chats extends Component {
  state = {
    movies: [],
    currentPage: 1,
    pageSize: 4,
    genres: [],
    sortColumn: { path: 'title', order: 'asc' }
  };

  componentDidMount() {


    this.setState({
      movies: getChats()

    })
  }

  getPageData = () => {
    const { pageSize, currentPage,  movies: allMovies, sortColumn } = this.state;


    const sorted = _.orderBy(allMovies, [sortColumn.path], [sortColumn.order])

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: sorted.length, data: movies }
  }

  handleDelete = (id) => {
    let newMovieList = this.state.movies.filter((movie) => movie._id !== id);
    this.setState({
      movies: newMovieList,
    });
  };

  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  handleSort = (sortColumn) => {
    this.setState({
      sortColumn
    })
  }

  render() {
    const { pageSize, currentPage, sortColumn } = this.state;
    const { totalCount, data: movies } = this.getPageData();


    return (
      <React.Fragment>
        <NavBar />
        <div className="row">
          <div className="col-md-5 m-4">
            <ChatHistory
              movies={movies}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
              sortColumn={sortColumn}
            />
  
          </div>
          <div className="col m-4">

            <div className="row">
              <div className="col m-4">        
                <Form
                  itemsCount={totalCount}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={this.handlePageChange}
                />
              </div>
            </div >
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Chats;
