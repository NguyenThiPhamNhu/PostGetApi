import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Home.css';

import {
    Link
} from "react-router-dom";
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: []
        }
        let id = this.props.match.params.id;
        this.getData(id);
    }
    getData(id) {
        fetch("http://127.0.0.1:8000/api/posts/" + id)
            .then(response => {
                response.json().then((data) => {
                    console.log(data);
                    this.updateIU(data);
                })
            })
    }
    updateIU(data) {
        this.setState({
            post: data
        })
    }
    render() {
        return (
            

            <div className="detail">
               
                {this.state.post.map((item) =>
                    <div>
                                <img className="imageDetail" src="https://q-cf.bstatic.com/images/hotel/max1280x900/146/146276699.jpg" alt="" />
                               <center> <div class="caption">
                                    <h1>Name:{item.title}</h1>
                                    <p>
                                        <h2>Typeroom:{item.typeroom}</h2>
                                        <h2>Size:{item.size}</h2>
                                    </p>
                                    <p>
                                        <a class="btn btn-success" href="" role="button">Buy</a>
                                    </p>
                        </div></center>

                       
                    </div>

                )}

                <div>
                    <h1>VIT TRAVEL</h1>
                    <h4>Đến với VIT Homestay bạn sẽ được tận hưởng không gian mộc mạc pha trộn tính hiện đại của không gian rừng núi nơi đây. Đồng hành với không gian tuyệt vời giành cho bạn là những dịch vụ vô vùng pro </h4>
                    <p>VIT luôn đặt sự hài lòng và lợi ích khách hàng lên hàng đầu</p>
                    <p>Nhân viên nhiệt tình và đặt cái tâm nghề lên trên hết</p>
                    <p>Khách hàng là cha là mẹ là ông cố nội và là bà tổ cố cụ nội ngoại</p>

                </div>
                
            </div>
        )
    }
}
export default withRouter(Post);