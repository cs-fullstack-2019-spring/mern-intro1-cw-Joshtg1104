import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            troubles: [],
        };
        this.allTickets();
    }
    //fetchs info from server directory '/tickets', turns it into a json, and displays it on react client
    allTickets(){
        fetch('/tickets')
            .then(troubles => {
                console.log(troubles.json);
                return troubles.json();
            })
            .then(tticketData=>this.setState({troubles:tticketData}));
    }

    render() {
        //maps all the data entry model fields and contains it all into a variable
        const ticketMapping = this.state.troubles.map((eachTicket)=>{
            return(
                <div>
                    <p>{eachTicket.ticket_person_reporting}</p>
                    <p>{eachTicket.ticket_problem__description}</p>
                    <p>{eachTicket.ticket_date}</p>
                    <hr/>
                </div>
            )
        });
    return (
      //  renders and returns a header and all data entries onto web page
      <div className="App">
          <h1>Trouble Tickets Listing</h1>
          {ticketMapping}
      </div>
    );
  }
}

export default App;
