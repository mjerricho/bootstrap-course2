import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

  constructor(props) {
      super(props);

      this.state = {
      }
  }

  renderDish(dish) {
    if (dish != null)
      return(
        <div className="col-12 col-md-5 m-1"> 
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
        </div >
      );
    else 
      return(
        <div></div>
      );
  }

  renderComments(dish) {
    if (dish != null)
      return(
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
            {dish.comments.map(comment => {
              return (
                <div key={comment.id}>
                  <ul className="list-unstyled">
                    <li>{comment.comment}</li>
                    <li>-- {comment.author}, {" "}
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit"
                      }).format(new Date(Date.parse(comment.date)))}
                    </li>
                </ul>
                </div>
              );
            })}
        </div>
      );
    else  
      return(
        <div></div>
      );
  }

  render() {
    return (
      <div class="container">
        <div className="row">
          {this.renderDish(this.props.dish)}
          {this.renderComments(this.props.dish)}
        </div>
      </div>
    );
  }
}

export default DishDetail;