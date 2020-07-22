import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class Add extends Component {
  onAddSubmit(event) {
    event.preventDefault();
    let title = event.target['title'].value;
    let number = event.target['number'].value;
    let service = event.target["service"].value;
    let comment = event.target['comment'].value;
    let description = event.target['description'].value;
    let price = event.target["price"].value;
    let size = event.target['size'].value;
    let discount = event.target['discount'].value;
    let typeroom = event.target['typeroom'].value;
    
    let address = event.target["address"].value;
    let image = event.target["image"].files.item(0).name;
    
  

    let post = {
      title: title,
      number: number,
      service: service,
      comment: comment,
      description: description,
      price: price,
      size: size,
      discount: discount,
      typeroom: typeroom,
      address: address,
      image: image
      

    }

    let postInJson = JSON.stringify(post);
    console.log(postInJson);

    fetch("http://127.0.0.1:8000/api/posts", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: postInJson
    })
      .then((response) => {
        console.log(response);
        this.props.history.push("/posts"); // chuyển trang
      });
  }
  onAddClicked() {
    alert("Add successful! VIT Vipro !");
  }
  render() {
    return (
      <div>


        <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
        <script src="//code.jquery.com/jquery.js"></script>
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>


        <h2>ADD VITEM PRO </h2>

        <form onSubmit={this.onAddSubmit} method="POST" class="form-inline" role="form">
          <div class="form-group">
            <label>Title</label>
            <p>
              <input type="text" class="form-control" name="title" id="" placeholder="Input title" />
            </p>


            <p>
              <label>Number</label>
            </p>
            <p>
              <input type="number" name="number" class="form-control" id="" placeholder="Input coment" />
            </p>
            <p>
              <label>Service</label>
            </p>
            <p>
              <input type="service" name="service" class="form-control" id="" placeholder="Input coment" />
            </p>
            <p> <label>Comment</label></p>

            <p>
              <input type="text" name="comment" class="form-control" id="" placeholder="Input coment" />
            </p>

            <p> <label>Desciption</label></p>

            <p>
              <input type="text" name="description" class="form-control" id="" placeholder="Input coment" />
            </p>

            <p> <label>Price</label></p>

            <p>
              <input type="number" name="price" class="form-control" id="" placeholder="Input coment" />
            </p>

            <p> <label>Size</label></p>

            <p>
              <input type="text" name="size" class="form-control" id="" placeholder="Input coment" />
            </p>

            <p> <label>Discount</label></p>

            <p>
              <input type="text" name="discount" class="form-control" id="" placeholder="Input coment" />
            </p>
            

            <p>
              <label for="sel1">Select typeroom (select one):</label>
            </p>
            <p>

              <select width="200px" class="form-control" name="typeroom" id="sel1">
                <option>Family</option>
                <option>Luxury Double</option>
                <option>Luxury Triple</option>
                <option>Super vip</option>
              </select>
            </p>

            <p> <label>Address</label></p>

            <p>
              <input type="text" name="address" class="form-control" id="" placeholder="Input coment" />
            </p>


            <p>
              <label for="inputAddress">Image</label>
              <input type="file" class="form-control" id="myAddress" name="image" />
              {/* <button className="btn btn-success " onClick={this.onAddClicked} type="submit">Add</button> */}
            </p>
            <p>
              <button type="submit" class="btn btn-info">Add</button>
            </p>

          </div>



        </form>


      </div>

    )
  }
}
export default withRouter(Add); 