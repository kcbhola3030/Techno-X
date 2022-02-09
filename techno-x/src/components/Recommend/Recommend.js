import "./Recommend.css";
import Navbar from "../Navbar";
import {study1} from "../../Image/chem hsc.jpg"
function Recommend(){
    return(<div>
        <Navbar/>
        <section className="bg-light">
                <div className="container py-5">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">Academic</h1>
                            <p>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-100">
                                <a href="#">
                                    <img src="https://images-na.ssl-images-amazon.com/images/I/71XECUumOyL.jpg" width={100} height={350} className="card-img-top" alt="..." />
                                </a>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                           
                                        </li>
                                        <li className="text-muted text-right">Lend</li>
                                    </ul>
                                    <a href="#" className="h2 text-decoration-none text-dark">Physics for IIT-JEE- Vol.1</a>
                                    <p className="card-text">
                                    by Amit Gupta (Author), Halliday (Author), Resnick (Author), Walker (Author)
                                    </p>
                                    {/* <p className="text-muted">Reviews (24)</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-100">
                                <a href="#">
                                    <img width={100} height={350} src="https://s3.ap-south-1.amazonaws.com/storage.commonfolks.in/docs/products/images_full/exploring-biology-for-neet-vol-1_FrontImage_203.jpg" className="card-img-top" alt="..." />
                                </a>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                            
                                        </li>
                                        <li className="text-muted text-right">GiveAway</li>
                                    </ul>
                                    <a href="#" className="h2 text-decoration-none text-dark">Exploring Biology for NEET - Vol. 1</a>
                                    <p className="card-text">
                                     Publisher: Arihant Publications No. of pages: 1065
                                    </p>
                                    {/* <p className="text-muted">Reviews (48)</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-100">
                                <a href="#">
                                    <img width={100} height={350} src="https://www.cart91.com/spree/products/21097/product/11th_sp.jpg?1566113013" className="card-img-top" alt="..." />
                                </a>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                           
                                        </li>
                                        <li className="text-muted text-right">GiveAway</li>
                                    </ul>
                                    <a href="#" className="h2 text-decoration-none text-dark">11th Secretarial Practice</a>
                                    <p className="card-text">
                                    Secretarial Practice for Standard XI (Class 11) -Maharashtra Board (English Medium) by Maharashtra State Board (Author)
                                    </p>
                                    {/* <p className="text-muted">Reviews (74)</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-5">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">Non-academic</h1>
                            {/* <p>
                                12th
                            </p> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-100">
                                <a href="#">
                                    <img width={100} height={350} src="https://images-na.ssl-images-amazon.com/images/I/81EbEWM54ML.jpg" className="card-img-top" alt="..." />
                                </a>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        
                                        <li className="text-muted text-right">Exchange</li>
                                    </ul>
                                    <a href="#" className="h2 text-decoration-none text-dark">Harry Potter and the Prisoner of Azkaban</a>
                                    <p className="card-text">
                                    by J.K. Rowling  (Author)
                                    </p>
                                    {/* <p className="text-muted">Reviews (24)</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-100">
                                <a href="#">
                                    <img width={100} height={350} src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1216107646l/3320520.jpg" className="card-img-top" alt="..." />
                                </a>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                            
                                        </li>
                                        <li className="text-muted text-right">Lend</li>
                                    </ul>
                                    <a href="#" className="h2 text-decoration-none text-dark">The 3 Mistakes of My Life</a>
                                    <p className="card-text">
                                    by Chetan Bhagat
                                    </p>
                                    {/* <p className="text-muted">Reviews (48)</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-100">
                                <a href="#">
                                    <img width={100} height={350} src="https://www.jeffreyarcherbooks.com/wp-content/uploads/2020/09/HiddenPlainSight.jpg" className="card-img-top" alt="..." />
                                </a>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        
                                        <li className="text-muted text-right">GiveAway</li>
                                    </ul>
                                    <a href="#" className="h2 text-decoration-none text-dark">HIDDEN IN PLAIN SIGHT</a>
                                    <p className="card-text">
                                    Jeffrey Archer’s Hidden in Plain Sight is the second novel featuring Detective William Warwick, by the master storyteller and #1 New York Times bestselling author of the Clifton Chronicles. 
                                    </p>
                                    {/* <p className="text-muted">Reviews (74)</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-5">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">NGO</h1>
                            {/* <p>
                                12th
                            </p> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-100">
                                <a href="#">
                                    <img width={100} height={350} src="https://content3.jdmagicbox.com/comp/mumbai/p3/022pxx22.xx22.171223202534.a8p3/catalogue/book-share-india-vile-parle-east-mumbai-social-service-organisations-mwarnipjyg-250.jpg" className="card-img-top" alt="..." />
                                </a>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        {/* <li>
                                            
                                        </li>
                                        <li className="text-muted text-right">$240.00</li> */}
                                    </ul>
                                    <a href="#" className="h2 text-decoration-none text-dark">Book Share India </a>
                                    <p className="card-text">
                                    Contact No: 091724 00740
                                    </p><p><a href="https://www.bookshare.org/cms/bookshare-india">Visit website</a></p>
                                    {/* <p className="text-muted">Reviews (24)</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-100">
                                <a href="#">
                                    <img width={100} height={350} src="https://s12982.pcdn.co/wp-content/uploads/2014/02/Room-to-Read.png" className="card-img-top" alt="..." />
                                </a>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        {/* <li>
                                            
                                        </li>
                                        <li className="text-muted text-right">$480.00</li> */}
                                    </ul>
                                    <a href="#" className="h2 text-decoration-none text-dark">Room to read:</a>
                                    <p className="card-text">
                                        {/* Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum */}
                                    </p><p><a href="https://www.roomtoread.org/">Visit website</a></p>
                                    {/* <p className="text-muted">Reviews (48)</p> */}
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-100">
                                <a href="#">
                                    <img width={100} height={350} src="https://www.kgvmtrust.org/wp-content/uploads/2018/12/RatnaNidhi.jpg" className="card-img-top" alt="..." />
                                </a>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        {/* <li>
                                           
                                        </li>
                                        <li className="text-muted text-right">$360.00</li> */}
                                    </ul>
                                    <a href="#" className="h2 text-decoration-none text-dark">RatnaNidhi</a>
                                    <p className="card-text">
                                    Contact No: +918530485324
                                    </p><p><a href="https://ratnanidhi.org/">Visit website</a></p>
                                    {/* <p className="text-muted">Reviews (74)</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section></div>
    )
}

export default Recommend;