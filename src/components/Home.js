
import React, { Component } from 'react';
import './Home.css'

import {
    Link
} from "react-router-dom";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }

        this.getData();
    }
    getData() {
        fetch("http://127.0.0.1:8000/api/posts")
            .then(response => {
                response.json().then((data) => {
                    console.log(data);
                    this.updateUI(data);
                });
            });
    }
    updateUI(data) {
        this.setState({
            posts: data
        })
    }
    render() {
        return (
            <div>
                <div className="home">
                    {/* <center><div className="mySlide">
                    <img className="Slide" alt="slide" src="https://www.taylorguitars.com/sites/default/files/styles/hero_rotator/public/TG-GrandPacific-GPGroupShot-1.jpg?itok=c4voc54g" />
                </div></center> */}

                </div>
                <ul>

                    <li><Link to="/home"></Link></li>
                    <li><Link to="/about">Type Room</Link></li>
                    <li><Link to="/post">Discount</Link></li>
                    <li><Link to="/posts">Cover</Link></li>
                    <li><Link to="/posts">Experience trip</Link></li>
                    <li><Link to="/posts">Bedroom</Link></li>
                    <li><Link to="/posts">Add filter</Link></li>
                </ul>

                <hr />


                <div className="container">
                    <div id="menu">
                        <ul>
                            <li><a href="#">Homepage</a></li>
                            <li><a href="#">Service</a>
                                <ul class="sub-menu">
                                    <li><a href="#">Food</a></li>
                                    <li><a href="#">Cơ-Tu Cultural</a></li>
                                    <li><a href="#">Tour</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Comment</a></li>
                           
                            <li><a href="#">Take a photo</a></li>
                            
                        </ul>
                    
                    </div>
                    
                    {this.state.posts.map((item) =>
                        <div className="demo">
                            <div class="hvrbox">
                            <img className="image" src="https://q-cf.bstatic.com/images/hotel/max1280x900/146/146276699.jpg"  class="hvrbox-layer_bottom" />
                            {/* <img src={"Image/" + this.props.item.image} /> */}
                            <div class="hvrbox-layer_top">
                                <div class="hvrbox-text">{item.title}</div> 
                                
                            </div>
                            <center><h2>{item.typeroom}</h2></center>
                           
                        </div> 
                        <center><a class="btn btn-danger" href={"/posts/" + item.id} role="button">Detail</a></center>  
                        </div>
                    )}
                </div >
            </div>
        )
    }
}
export default Home;