import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class Login extends Component {
//   onAddSubmit(event) {
//     event.preventDefault();
//     let name = event.target['name'].value;
//     let password = event.target['password'].value;
  
//     let post = {
//       name: name,
//       password: password
      
     
//     }

//     let postInJson = JSON.stringify(post);
//     console.log(postInJson);

//     fetch("http://127.0.0.1:8000/api/posts", {
//       method: "post",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: postInJson
//     })
//       .then((response) => {
//         console.log(response);
//         this.props.history.push("/posts"); // chuyển trang
//       });
//   }
//   onAddClicked() {
//     alert("Add successful! VIT Vipro !");
//   }
  render() {
    return (
      <div>


        <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
        <script src="//code.jquery.com/jquery.js"></script>
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>


        <h2>LOG IN </h2>

        <form onSubmit={this.onAddSubmit} method="POST" class="form-inline" role="form">
          <div class="form-group">
            <label>User name</label>
            <p>
              <input type="text" class="form-control" name="title" id="" placeholder="Input username" />
            </p>


            <p>
              <label>Password</label>
            </p>
            <p>
              <input type="text" name="password" class="form-control" id="" placeholder="Input password" />
            </p>
           

            <p>
              <button type="submit" class="btn btn-info">Log in</button>
            </p>

          </div>



        </form>


      </div>

    )
  }
}
export default withRouter(Login); 