import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="banquyen">
                    <h2>VIT ENTERTAINMENT</h2>
                    <div>
                        VitTravel.com © 2020               &nbsp;
                        The best experience &nbsp;&nbsp;&nbsp;&nbsp;
                        The best choose &nbsp;
                        <img className="vit" src="https://i.ebayimg.com/images/g/CCkAAOSwgHZdZ4k-/s-l300.jpg" alt="logo" /> for your life
                    </div>
                </div>
                <div className="chungtoi">
                    <h2>ABOUT US</h2>
                    <div>
                        VIT travel established in 26/12/2019&nbsp;
                        CEO is a little girl, her name is Nguyen Thi Pham Nhu from Quang Nam Province&nbsp;
                        Dong Giang - Quang Nam is a land of miracle,
                        Here you will enjoy and experience the houses designed close to nature&nbsp;
                    </div>
                </div>
                <div className="xemthem">
                    <h2>CONTACT WITH US</h2>
                    <div>
                        <i class="fab fa-facebook-f"></i>
                        <i class="fad fa-webcam"></i>
                    </div>
                    <div>
                        <img className="vit" src="https://lh3.googleusercontent.com/ccWDU4A7fX1R24v-vvT480ySh26AYp97g1VrIB_FIdjRcuQB2JP2WdY7h_wVVAeSpg"  />
                        <img className="vit" src="https://lh3.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc"  />
                        <img className="vit" src="https://suamaygiatelectrolux.net.vn/wp-content/uploads/2018/07/zalo-1-logo.png"  />
                    </div>
                    <div><h4>Phone: 0962973782</h4></div>
                </div>
            </div>
        )
    }
}
export default Footer;