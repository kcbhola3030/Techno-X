import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';
function Home(){
    return (
        <div id="template-mo-jassa-hero-carousel" className="carousel slide" data-bs-ride="carousel">
                <Navbar/>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid" src="https://cdn.lifehack.org/wp-content/uploads/2014/10/best-entrepreneur-books-1024x768.jpeg" alt="" />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left align-self-center">
                                        <h1 className="h1 text-success"><b>Prama</b></h1>
                                        <h3 className="h2">Where your search ends</h3>
                                        <p>
                                            Are you bored with your old books?
                                            Are you missing out on a book in a series?
                                            Did your exams just get over and you're piled up with books?.
                                            Using this service, you can lend academic books, novels, biographies, and storybooks to other users and borrow them as well 
                                            <h5 className='free'>FOR FREE</h5>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                
                <Footer/>
            </div>

    );
}

export default Home;