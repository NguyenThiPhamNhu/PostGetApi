import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
class Add extends Component{
  onAddSubmit(event){
    event.preventDefault();
    let title = event.target['title'].value;
    let comment = event.target['comment'].value;

    let post = {
        title: title,
        comment: comment
    }

    let postInJson = JSON.stringify(post);
    console.log(postInJson);

    fetch("http://127.0.0.1:8000/api/posts", {
        method: "post",
        headers: {
            "Content-Type":"application/json"
        },
        body: postInJson
    })
    .then((response) => {
        console.log(response);
        this.props.history.push("/posts"); // chuyển trang
    });
}
    render(){
        return(
          <div>
          
            <h2>ADD VITEM PRO </h2>
            
            <form onSubmit={this.onAddSubmit} method="POST" class="form-inline" role="form">
                <div class="form-group">
                    <label>Title</label>
                    <p>
                    <input type="text" class="form-control"  name="title" id="" placeholder="Input title" />
                    </p>
                    <label>Comment</label>
                    <p>
                    <input type="text" name ="comment" class="form-control" id="" placeholder="Input coment" />
                    </p>
                    <p>
                    <button type="submit"  class="btn btn-info">Add</button>
                    </p>
                </div>
                
                
                

               
            </form>
            
            
          </div>
          
        )
      }
    }
    export default withRouter(Add); 