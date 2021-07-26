import React, { Component } from 'react'
import {Row,Col } from 'react-bootstrap';
import HomeCards from './HomeCards';
import axios from 'axios';
export class Home extends Component {

constructor(props) {
  super(props)

  this.state = {
     drinks:[],
     showComponentsDidMount:false,
  }
}
componentDidMount = () =>{

  let url = `http://localhost:8000/getAllDrinks`;
  axios.get(url).then((response)=>{
    this.setState({
      drinks:response.data,
      showComponentsDidMount:true,
    })
  })
}








//   --------------------------------- add Fav ---------------------------------------
addToFav = (item)=>{
  console.log('item',item);
let url =`http://localhost:8000/AddToFav`;

let reqBody={
  name:item.strDrink,
  img:item.strDrinkThumb,
}
axios.post(url,reqBody).then((response)=>{
console.log(response.data);

})


}


//   -------------------------------------------------------------------


    render() {
        console.log(this.state)
        return (
          <>
          <Row>
{this.state.showComponentsDidMount &&
this.state.drinks.map((item,idx)=>{
  return(
<Col key={idx} >
<HomeCards
item={item}
addToFav={this.addToFav}
/>
</Col>
  )
})

}
</Row>









        {/* <Row>   
     {this.state.showComponentsDidMount && 
      this.state.drinks.map((item,idx)=>{
        return(
        <Col >
        <HomeCards
        item={item}
        key={idx}
        addFav={this.addFav}
        />
      </Col>
        )
      })
      }
      </Row>  */}
</>

        )
    }
}

export default Home;
