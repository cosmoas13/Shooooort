import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

import { postShort, clearShort } from "../_actions/shorten";

const App = ({ short, postShort, clearShort }) => {
  const { data, loading, error } = short;
  const [value, setValue] = useState("");

  if (loading) return <h1>Now Loading</h1>;
  if (error) return <h1>And Error Occured</h1>;
  return (
    <div className="app">
      {/* <h1>Shooooort</h1> */}
      <form
        onSubmit={event => {
          event.preventDefault();
          postShort(value);
          setValue("");
        }}
      >
        <input
          type="text"
          value={value}
          onChange={event => {
            setValue(event.target.value);
          }}
        />
        <button type="submit">Shorten This Link</button>
      </form>
      <button onClick={() => clearShort()}>Clear</button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Link</th>
            <th>Visit</th>
            <th>Visited</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td>
                <h4>No Data Found</h4>
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={index}>
                <td>
                  <a href={item.link}>{item.name}</a>
                </td>
                <td>{item.visit}</td>
                <td>{item.lastVisit}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    short: state.short
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postShort: value => dispatch(postShort(value)),
    clearShort: () => dispatch(clearShort())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
