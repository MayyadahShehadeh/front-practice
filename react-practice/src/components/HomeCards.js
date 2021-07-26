import React, { Component } from 'react'
import {Row,Col,Card,Button } from 'react-bootstrap';
export class HomeCards extends Component {
    render() {
        return (
            <Row>
            <div className="Cards-Container">
                  {/* <Col >
                  <Card style={{ width: '20rem', margin: "1rem" }} >
                    <Card.Img variant="top" src={this.props.item.strDrinkThumb} width="300px" height="300px" />
                    <Card.Body>
                      <Card.Title>{this.props.item.strDrink}</Card.Title>
                      <Button variant="primary" onClick={()=> this.props.addFav(this.props.item)}>add to fav</Button>
                    </Card.Body>
                  </Card>
                  </Col>
                 */}
              <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={this.props.item.strDrinkThumb} />
                <Card.Body>
                  <Card.Title>{this.props.item.strDrink}</Card.Title>
                  <Button variant="primary" onClick={()=>this.props.addToFav(this.props.item)}>add to fav</Button>
                </Card.Body>
              </Card>
              

            </div>

          </Row>
        )
    }
}

export default HomeCards
