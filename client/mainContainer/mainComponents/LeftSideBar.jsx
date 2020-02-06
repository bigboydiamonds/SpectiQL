import React, { Component } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import {  Link } from "react-router-dom";

class SideBar extends Component {
  render() {
    return (
      <div className="leftSideBar">
        <ButtonToolbar className="buttonContainer">
          <div className="selections">Select</div>
            <Button className="queries" variant="outline-dark" size="lg">
              <Link to = '/queries'>
                Queries
              </Link>
            </Button>
            <Button className="mutations" variant="outline-dark" size="lg">
              <Link to = '/mutations' exact>
                Mutations
              </Link>
            </Button>
         
          <Button className="subscriptions" variant="outline-dark" size="lg">
            Subscriptions
          </Button>
          <div className="testing">Testing</div>
          <Button className="tester" variant="outline-dark" size="lg">
            Tester
          </Button>
          <Button className="save" variant="outline-dark" size="lg">
            Save
          </Button>
          <Button className="export" variant="outline-dark" size="lg">
            Export
          </Button>
          <Button className="clear" variant="outline-dark" size="lg">
            Clear
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}
export default SideBar;
