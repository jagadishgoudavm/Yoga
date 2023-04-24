import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Middlecomp = ({menu}) => {

    return (
        <div>
            <Navbar menu={menu} />   
          <div className="secondcomp">
            <div className="middle">

                <div className="image1">
                    <img src="https://img.freepik.com/free-photo/young-woman-doing-sukhasana-exercise-side-view_1163-5084.jpg?size=626&ext=jpg&ga=GA1.1.1172164133.1681889845&semt=sph" alt="" />
                </div>
                <div className="s1">
                    <h1>YOGA CLASS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Donec fringilla neque euismod volutpat cursus.Vestibulum ac pretium orci,</p>
                    <button>JOIN NOW</button>
                </div>
            </div>
            <div className="s2">
                <div className="text">
                <h1>CHOOSE CLASS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.vivamus lacinia odio vitae vestibulum vestibulum</p>
                </div>
            <div className="cards">
                <div className="card">
                    <img src="https://images.pexels.com/photos/8032834/pexels-photo-8032834.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <h3>NEWBIE CLASS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="card">
                    <img src="https://images.pexels.com/photos/3822227/pexels-photo-3822227.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <h3>ADVANCED CLASS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="card">
                    <img src="https://images.pexels.com/photos/13849063/pexels-photo-13849063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <h3>EXPERT CLASS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
            </div>
            <div className="last">
                <h1>OUR STATS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Vivamus lacinia odio vitae vestbulum vestibulum.</p>
            </div>
            <hr />
            <div className="s2">
                <div className="text1">
                <h1>PRICING</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.vivamus lacinia odio vitae vestibulum vestibulum</p>
                </div>
            <div className="cards1">
                <div className="card1">
                    
                    <h3>NEWBIE CLASS</h3>
                    <p>$00.00</p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwtb9PQ7qH1FZX1jsUYwUS__-DRX1S5egyn8488qKF9WXPQBYU3ktVWzKWzHoQ52G__2k&usqp=CAU" style={{width:"50px",height:"50px",margin:"auto"}} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button>REGISTER NOW</button>
                </div>
                <div className="card1">
                    
                    <h3>ADVANCED CLASS</h3>
                    <p>$00.00</p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwtb9PQ7qH1FZX1jsUYwUS__-DRX1S5egyn8488qKF9WXPQBYU3ktVWzKWzHoQ52G__2k&usqp=CAU" style={{width:"50px",height:"50px",margin:"auto"}} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button>REGISTER NOW</button>
                </div>
                <div className="card1">
                  
                    <h3>EXPERT CLASS</h3>
                    <p>$00.00</p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwtb9PQ7qH1FZX1jsUYwUS__-DRX1S5egyn8488qKF9WXPQBYU3ktVWzKWzHoQ52G__2k&usqp=CAU" style={{width:"50px",height:"50px",margin:"auto"}} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button>REGISTER NOW</button>
                </div>
            </div>
            </div>
            <div className="s3">
                <div>
                    <img src="https://img.freepik.com/free-photo/young-woman-doing-sukhasana-exercise-side-view_1163-5084.jpg?size=626&ext=jpg&ga=GA1.1.1172164133.1681889845&semt=sph" alt="" />
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.vivamus lacinia odio vitae vestibulum vestibulum</p>
                    <h3>TRAINER DEVANDRA</h3>
                </div>
            </div>
          <div className="s4">
            <div>
                <h1>DONT MISS OUR UPDATE</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.vivamus lacinia odio vitae vestibulum vestibulum</p>
            </div>
            <div>
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
            </div>
          </div>
          <div className="end">
            <div className="last1">
                <h3>Title Here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam at dignissam nunc, id maximus es. Etiam nec dignissam elit, at dignissam enim.</p>
            </div>
            <div className="last2">
                <h3>About</h3>
                <p><Link to="">History</Link></p>
                <p><Link to="">Our Team</Link></p>
                <p><Link to="">Brand Guidelines</Link></p>
                <p><Link to="">Terms&Conditions</Link></p>
                <p><Link to="">Privacy Policy</Link></p>
            </div>
            <div className="last3">
                <h3>Services</h3>
                <p><Link to="">How to Order</Link></p>
                <p><Link to="">Our Product</Link></p>
                <p><Link to="">Order Status</Link></p>
                <p><Link to="">Promo</Link></p>
                <p><Link to="">Payment Method</Link></p>
            </div>
            <div className="icons">
                <h3>Follow</h3>
                <Link><span><i class='bx bxl-facebook-circle'></i></span>Facebook</Link>
                <Link><span><i class='bx bxl-twitter'></i></span>Twitter</Link>
                <Link><span><i class='bx bxl-instagram' ></i></span>Instagram</Link>
                <Link><span><i class='bx bxl-whatsapp' ></i></span>Whatsapp</Link>
            </div>
          </div>
          </div>
        </div>
    );
}

export default Middlecomp;
