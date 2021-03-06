import mountain from '../images/mountain.png'
import dd from '../images/smallDD.png'
import user from '../images/user.svg'
import DropdownButton from 'react-bootstrap/DropdownButton';
import { NavDropdown } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { render } from '@testing-library/react';
// import React from 'react';
import BookData from "../Data.json";
import * as airports from "airportsjs"
import { makeStyles } from '@material-ui/core/styles';
import SearchTest from "../components/Searchbar"
import Where from "../components/Where"
import { Button } from './Button';
import DatePicker from '../components/DatePicker.js'
import BasicDateRangePicker from '../components/BasicDateRangePicker.js'
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import IconButton from "@material-ui/core/IconButton";
import Counter from "../components/Counter";
import Counter2 from "../components/Counter2";
import Counter3 from "../components/Counter3";
import Counter4 from "../components/Counter4";
import React, { useState, setState } from "react";
import SearchButton from "../components/SearchButton"
import { connect } from "react-redux";



var option = ""
var sum = 0;
var t = "One way";



const useStyles = makeStyles((theme) => ({
  search: {
    //  display: "flex",

  },
  selectors: {
    display: "flex",
    flexDirection: "column",
    height: "30%",
  },
  searchDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 16,
  },
  input1: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
  },
  calender: {
    display: "flex",
    flexDirection: "row",
    flex: 1,

  },
  bottomSheet: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "222px",
    top: "573px",
  },







}));
const mapStateToProps = (state) => {
  //console.log(state.DetailsReducer.details.destination)
  return {
    destination_name: state.DetailsReducer.details.destination_name,
    destination: state.DetailsReducer.details.destination,
    origin_name: state.DetailsReducer.details.origin_name,
    tripType: state.DetailsReducer.details.tripType,
    cabin_class: state.DetailsReducer.details.cabin_class,
    Adults: state.DetailsReducer.details.Adults,
    children: state.DetailsReducer.details.children,
    infants_on_lap: state.DetailsReducer.details.infants_on_lap,
    infants_in_seat: state.DetailsReducer.details.infants_in_seat,
    totalPassengers: state.DetailsReducer.details.totalPassengers,
    Adults: state.DetailsReducer.details.Adults,

  };
};
const mapDispatchToState = (dispatch) => {
  return {
    setDestination: (destination) => {
      dispatch({ type: 'setDestination', payload: destination });
    },
    setDestinationName: (destination_name) => {
      dispatch({ type: 'setDestinationName', payload: destination_name });
    },
    setOriginName: (origin_name) => {
      dispatch({ type: 'setOriginName', payload: origin_name });
    },

    setTripType: (tripType) => {
      dispatch({ type: 'setTripType', payload: tripType });
    },

    setCabinClass: (cabin_class) => {
      dispatch({ type: 'setCabinClass', payload: cabin_class });
    },
    setAdult: (Adults) => {
      dispatch({ type: 'setAdult', payload: Adults });
    },

    setAdult: (Adult) => {
      dispatch({ type: 'setAdult', payload: Adult });
    },
    setChildren: (children) => {
      dispatch({ type: 'setChildren', payload: children });
    },
    setInfantsOL: (infants_on_lap) => {
      dispatch({ type: 'setInfantsOL', payload: infants_on_lap });
    },
    setInfantsIS: (infants_in_seat) => {
      dispatch({ type: 'setInfantsIS', payload: infants_in_seat });
    },
    setTotalPassengers: (totalPassengers) => {
      dispatch({ type: 'setTotalPassengers', payload: totalPassengers });
    },


  };
};
export default connect(mapStateToProps, mapDispatchToState)(Home);


function Home({ tripType, setTripType, cabin_class, Adult, children, infants_on_lap, infants_in_seat, setTotalPassengers, totalPassengers, Adults }) {
  const classes = useStyles();

  const [dropDownValue, setdropDownValue] = useState("Round Trip");
  const [classValue, setclassValue] = useState('Economy');


  const renderCalender = () => {
    console.log("hiiiiii", option)
    if (option.value === t) {
      console.log("ana gwaaaa")
      return <DatePicker />

    }
    else {

      return <BasicDateRangePicker />
    }
  };
  const changeValue = (text) => {
    setdropDownValue(text)
    // setTripType(dr)
  }
  const changeValueClass = (text) => {
    setclassValue(text)
  }



  // handleCount(value) {
  //   this.setState((prevState) => ({ count: prevState.count + value }));
  // }

  const handleOptions = (value) => {
    option = { value }
    setTripType(value)
    console.log(option, "hhhh")
    console.log(tripType, "tripType")

  }
  const someFunc = (value) => {
    handleOptions(value);
    changeValue(value);
    renderCalender();
  }

  const Sum = () => {
    setTotalPassengers(Adults + children + infants_in_seat + infants_on_lap)
    // return newcount1 + newcount2 + newcount3 + newcount4
  }

  // render() { 
  const [newcount1, setnewCount1] = useState(0);
  const [newcount2, setnewCount2] = useState(0);
  const [newcount3, setnewCount3] = useState(0);
  const [newcount4, setnewCount4] = useState(0);
  const [Total, setTotal] = useState(newcount1 + newcount2 + newcount3 + newcount4);
  return (

    <div className="homecontent">
      <img src={mountain} alt="" className="mountain" />
      <div className={classes.search}>
        <div className={classes.bottomSheet}>
          <div className="rectangle">
            <div className={classes.selectors}>
              <Dropdown >
                <div className='selectedItem'>
                  <Dropdown.Toggle calssName="selected" variant="out-secontary" color='#818181'>
                    {/* {dropDownValue} */}
                    {tripType}

                  </Dropdown.Toggle></div>
                <Dropdown.Menu>
                  <Dropdown.Item as='button'><div className="oneway" onClick={(e) => someFunc(e.target.textContent)}>One way</div>

                  </Dropdown.Item>
                  <Dropdown.Item as='button'><div className='round' onClick={(e) => someFunc(e.target.textContent)}>Round Trip</div>
                  </Dropdown.Item>
                  <Dropdown.Item as='button' ><div className='multi' onClick={(e) => someFunc(e.target.textContent)}>Multi-city</div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>



              <div className="">
                <div className="test"></div>
                <Dropdown className="userbtn" autoClose="outside">
                  <Dropdown.Toggle calssName="selected1" variant="outlined-secondary" >
                    <img src={user} alt="" />
                    {/* {Passerngers(newcount)} */}
                    {Sum()}
                    {totalPassengers}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="DropDownResults">
                    <Dropdown.Item as='text'><div className="adult"> Adult</div>
                      <Counter count={newcount1} setCount={setnewCount1} />

                    </Dropdown.Item>
                    {/* </Dropdown.Item>
            <Dropdown.Item as='text'><div className="adult"> Children </div>
             
                 <Button  className="addbtn"  sign="-"  count={this.state.count} updateCount={this.handleCount.bind(this)} />
              {this.state.count}
              <Button sign="+" count={this.state.count} updateCount={this.handleCount.bind(this)} />  */}

                    {/* </Dropdown.Item> */}

                    <Dropdown.Item as='text'><div className="adult"> Children </div>
                      {/* <img src={add} onClick ={ }/> */}
                      <Counter2 count={newcount2} setCount={setnewCount2} />
                    </Dropdown.Item>
                    <Dropdown.Item as='text'><div className="adult"> infants </div>
                      {/* <img src={add} onClick ={ }/> */}
                      <Counter3 count={newcount3} setCount={setnewCount3} />
                      {/* <Button sign="+" count={this.state.count} updateCount={this.handleCount.bind(this)} />  */}


                    </Dropdown.Item>
                    <Dropdown.Item as='text'><div className="adult"> infants </div>
                      {/* <img src={add} onClick ={ }/> */}
                      <Counter4 count={newcount4} setCount={setnewCount4} />
                      {/* <Button sign="+" count={this.state.count} updateCount={this.handleCount.bind(this)} />  */}


                    </Dropdown.Item>

                  </Dropdown.Menu>
                </Dropdown>
              </div>


              <div className="class">
                <Dropdown className="dropdownClass">
                  <Dropdown.Toggle calssName="selected" variant="outlined-secondary">

                    {classValue}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as='button'><div className="buss" onClick={(e) => changeValueClass(e.target.textContent)}>Economy</div>

                    </Dropdown.Item>
                    <Dropdown.Item as='button'><div className="eco" onClick={(e) => changeValueClass(e.target.textContent)}>Business</div>
                    </Dropdown.Item>
                    <Dropdown.Item as='button'><div className="fclass" onClick={(e) => changeValueClass(e.target.textContent)}>First Class</div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>

            <div className={classes.searchDiv}>


              <div className={classes.input1}>
                <SearchTest placeholder="From" data={airports} />

                <Where placeholder="To" data={airports} />
              </div>

              <div className={classes.calender}>
                {renderCalender()}
              </div>
            </div>
          </div>

          <SearchButton />

        </div>



      </div>



    </div>

    //2209
  )
}




// export default Home;