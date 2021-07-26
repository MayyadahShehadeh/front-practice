import axios from 'axios';
import React, { Component } from 'react'
import { Card,Row,Col,Button } from 'react-bootstrap';

class FavPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       favData:[],
       showCards:false,
       showForm:false,
       name:'',
       img:'',
       index:0,
       
    }
  }

  componentDidMount = async ()=>{
let url =`http://localhost:8000/getFavData`;
await axios.get(url).then((response)=>{
this.setState({

  favData:response.data,
  showCards:true,
});
});
}
  














// ------------------------------- get fav data ------------------------------------
//   componentDidMount= ()=>{
// let url = `http://localhost:8000/getFavData`;
// axios.get(url).then((Response)=>{
// this.setState({
//   favData:Response.data,
//   showDataComponents:true,
// })
// })
// .catch((err)=>{
//   console.log('error in getting data',err);
// })
//   }


//  --------------------------------------------------------------------------------














// ---------------------------- delete from fav --------------------------------------
deleteData = async (item) =>{

let url = `http://localhost:8000/deleteData/${item.id}`; 
await axios.delete(url).then((response)=>{
this.setState({
  favData:response.data,
  showCards:true,
})
})
}

// -----------------------------------------------------------------------------------------------





















// ---------------------------- put method // update data ----------------------------------------
updateItem = async(event)=>{
  event.preventDefault();

  const object = {
  
    name: event.target.name.value,
    img: event.target.img.value,
  };

  let Url = `http://localhost:8000/updateData/${event.id}`;
  axios.put(Url, object).then((result) => {
      this.setState({
        favDrinks: result.data,
        show: false,
      });
    })
   
}




// ---------------------------------------------------------------------------------------
// when i click on update button this finction will show the form with all of this labels: 
showUpdateForm = (idx)=>{
this.setState({
showForm:true,
name:idx.name,
img:idx.img,
id:idx._id,

})

}
//  -------------------------------------------------
// -------- this functions to the value in the form according to user inputs :
updateName = ((e)=> this.setState({name:e.target.value}))
updateImg = ((e)=> this.setState({img:e.target.value}))

// // --------------------------------------------------------



render() {
  console.log(this.state);
  console.log(this.state.favData);
    return (
        <>
{this.state.showForm &&
<form onSubmit={this.updateItem} >
<input type="text" value={this.state.name} onChange={this.updateName}/>
<input type="text" value={this.state.img} onChange={this.updateImg}/>
<input type="submit" value='update'/>
</form>

//      <form onSubmit={event => this.updateItem(event)}>
//      <input type="text" value={this.state.name} onChange={this.updateName} />
//      <input type="text" value={this.state.img} onChange={this.updateImg} />

//      <input type='submit' value='Update' />
//  </form>
}


        <Row>

{
  this.state.showCards &&
  this.state.favData.map((item,idx)=>{
return(
  <Col>
    <Card style={{ width: '18rem' }} key={idx} >
    <Card.Img variant="top" src={item.img} />
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Button variant="primary"
       onClick={()=>this.deleteData(item)}
      >delete</Button>
      
      <Button variant="primary" style={{margin:'10px'}}
      onClick={()=>this.showUpdateForm(item)}
       >update</Button>

    </Card.Body>
  </Card>
  </Col>
)
  


  })
}

</Row>


        {/* {this.state.showForm &&
       <form onSubmit={event => this.updateItem(event)}>
       <input type="text" value={this.state.name} onChange={this.updateName} />
       <input type="text" value={this.state.img} onChange={this.updateImg} />

       <input type='submit' value='Update' />
   </form>
        }

            <div className="cards-container">
            <Row>

              {this.state.showDataComponents &&
              this.state.favData.map((item,idx)=>{
                console.log(item);
               return (
   
          <Card style={{ width: "18rem" }} key={idx}>
            <Card.Img variant="top" src={item.img} style={{width:"100px" , height:"100px"}} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Button
                variant="primary" style={{ marginRight: 20 }} onClick={() => this.deleteData(item)}>
                Delete
                </Button>
                <Button
                variant="success"
                onClick={()=> this.showUpdateForm(item)}
                // to show the form in the modal
                // onClick={() => this.showModal(item)}
                >
                Update
              </Button>
            </Card.Body>
          </Card>
          )
      }) }
              
          

</Row>
</div> */}
                
            </>
        )
    }
}

export default FavPage;

       //  favData:[],
        //  showDataComponents:false,
        //  name:'',
        //  img:'',
        //  index:0,
        //  showForm:false,