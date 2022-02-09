import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar';
import "./Categories.css"
function Categories(){
    return(
        <div>
            <Navbar/>
        <section className="container py-5">
                <div className="row text-center pt-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Categories</h1>
                        <p> 
                            Academic: Books from 1st-12th and various college books. <br />
                            Non-academic: Novels, Biographies,etc. <br />
                            NGO: In this section you can contact the NGOs with the provided links and give away or even donate books on your special days.

                            {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. */}
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="#"><img src="https://images.unsplash.com/photo-1585059466160-5cd3af4c49d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className="rounded-circle img-fluid border" /></a>
                        <h5 className="text-center mt-3 mb-3">Academic use</h5>
                        <p className="text-center check" ><a className="btn btn-success" >Check out</a></p>
                    </div>
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="#"><img src="https://i.etsystatic.com/20746359/r/il/695dda/3378914223/il_794xN.3378914223_ej4o.jpg" className="rounded-circle img-fluid border" /></a>
                        <h2 className="h5 text-center mt-3 mb-3">Non-academic use</h2>
                        <p className="text-center check"><a className="btn btn-success" >Check out</a></p>
                    </div>
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="#"><img src="https://media.istockphoto.com/vectors/cardboard-box-with-books-for-donations-charity-colorful-vector-vector-id1178491737?k=20&m=1178491737&s=612x612&w=0&h=xgqe5jHZbz6KNovyDJf30G9HDQfSuEAb0KtAbcLxk28=" className="rounded-circle img-fluid border" /></a>
                        <h2 className="h5 text-center mt-3 mb-3">NGO</h2>
                        <p className="text-center check" ><a className="btn btn-success" >Check out</a></p>
                    </div>
                </div>
            </section></div>
    )
}

export default Categories;