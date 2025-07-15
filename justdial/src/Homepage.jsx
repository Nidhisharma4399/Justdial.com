import React from 'react';
import './Homepage.css';


function Homepage() {
  return (
    <>
        <header id="header" className="fixed-top bg-white shadow-sm">
            <div className="container-fluid d-flex justify-content-between align-items-center py-2 px-3">
            
            {/* Logo */}
            <div className="logo-container">
                <img src="./public/img/justdialnew.jpeg" className="webbanner" alt="Website Banner" height="40" />
            </div>

            {/* Navigation Buttons */}
            <div className="nav-container">
                <ul className="nav-links list-unstyled d-flex gap-3 align-items-center mb-0">

                {/* Language Dropdown */}
                <li>
                    <div className="dropdown">
                    <button className="btn dropdown-toggle text-primary" type="button" data-bs-toggle="dropdown">
                        <i className="fa-solid fa-language me-1"></i> En
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">English - EN</a></li>
                        <li><a className="dropdown-item" href="#">हिंदी - HI</a></li>
                    </ul>
                    </div>
                </li>

                {/* Other Nav Buttons */}
                <li><a href="#" className="btn text-dark">We Are Hiring</a></li>
                <li><a href="#" className="btn text-dark">Investor Relations</a></li>
                <li>
                    <a href="#" className="btn text-dark">
                    Advertise <i className="fa-solid fa-volume-high ms-1"></i>
                    </a>
                </li>
                <li>
                    <a href="#" className="btn text-dark">
                    <i className="fa-solid fa-chart-line me-1"></i> Free Listing
                    </a>
                </li>
                <li>
                    <a href="#" className="btn text-dark">
                    <i className="fa-regular fa-bell"></i>
                    </a>
                </li>

                {/* Offcanvas Login Button */}
                <li>
                    <button
                    className="btn btn-primary btn-sm"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    >
                    Log-In / Sign-Up
                    </button>
                </li>
                </ul>
            </div>
            </div>
        </header>

        
        <main className="main-wrapper container-fluid m-4 n_tbdr" id="mainContent"> 
            <div className="container my-4">
                <br/>
            <h2>
                Search Across '5.9 Crore +
                <span id="rotatingText" className="text-primary">Product & Services</span>
            </h2>

            <div className="d-flex gap-3 align-items-center flex-wrap"></div>

            <div id="searchLocationWrapper" className="container d-flex gap-2 align-items-center py-2 flex-wrap">
                <div className="input-group location-box">
                <span className="input-group-text">
                    <i className="fas fa-map-marker-alt text-primary"></i>
                </span>
                <input type="text" className="form-control" placeHolder="Select Location"/>
                </div>

                <div className="input-group search-box">
                <span className="input-group-text bg-white border-end-0">
                    <i className="fas fa-search text-primary"></i>
                </span>
                <input type="text" id="searchInput" className="form-control border-start-0" placeHolder="Search for Packers and Movers"/>
                </div>
            </div>
            </div>

            <div className="container mt-3 n_slide">
            <div className="row overflow-hidden n_slide rounded-2 img-fluid">
                <div className="col-md-6 n_slide">
                <div id="carouselExampleAutoplaying" className="n_slidear slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_interiordesigners_2024.webp" class="d-block w-100 h-100 object-fit-cover" alt="img"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_hotels_2024.webp" class="d-block w-100 h-100 object-fit-cover" alt="img"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_cctv_2024.webp" class="d-block w-100 h-100 object-fit-cover" alt="img"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_loans_2024.webp" class="d-block w-100 h-100 object-fit-cover" alt="img"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_webflight_2024.webp" class="d-block w-100 h-100 object-fit-cover" alt="img"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_packersmovers_2024.webp" class="d-block w-100 h-100 object-fit-cover" alt="img"/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                </div>

                <div className="col-md-6 n_slide">
                    <div className="d-flex gap-3 mb-4 scroll-x">
                        <div class="category-card n_cards text-center position-relative overflow-hidden" style="background-image: url('https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/b2b_square_hotkey.webp?w=2048&q=75'); background-size: cover; background-position: right; background-color: #0076D7;">
                            <div class="position-absolute top-0 start-0 w-84 h-100" style="background-color: rgba(14, 119, 205, 0.6);"></div>
                                <div className="position-relative">
                                    <h6>B2B</h6>
                                    <small>Quick Quotes</small>
                                </div>
                            </div>
                            <div class="category-card n_cards text-center position-relative overflow-hidden" style="background-image: url('https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/repair_square_hotkey.webp?w=2048&q=75'); background-size: cover; background-position: right; background-color: #2654A1;">
                            <div class="position-absolute top-0 start-0 w-84 h-100" style="background-color: rgba(14, 119, 205, 0.6);"></div>
                                <div className="position-relative">
                                    <h6>REPAIRS & SERVICES</h6>
                                    <small>Get Nearest Vendor</small>
                                </div>
                            </div>
                            <div class="category-card n_cards text-center position-relative overflow-hidden" style="background-image: url('https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/realestate_square_hotkey.webp?w=2048&q=75'); background-size: cover; background-position: right; background-color: #6769D0;">
                            <div class="position-absolute top-0 start-0 w-84 h-100" style="background-color: rgba(14, 119, 205, 0.6);"></div>
                                <div className="position-relative">
                                    <h6>REAL ESTATE</h6>
                                    <small>Finest Agents</small>
                                </div>
                            </div>
                            <div class="category-card n_cards text-center position-relative overflow-hidden" style="background-image: url('https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/doctor_square_hotkey.webp?w=2048&q=75'); background-size: cover; background-position: right; background-color: #008561;">
                            <div class="position-absolute top-0 start-0 w-84 h-100" style="background-color: rgba(14, 119, 205, 0.6);"></div>
                                <div className="position-relative">
                                    <h6>DOCTORS</h6>
                                    <small>Book Now</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container text-center my-4 n_icons">
                <div className="row row-cols-10 btn-lg text-secondary">
                    <div className="col mb-5">
                        <a href="./returantlisting.html" className="btn d-block">
                            <div className="icon-store">
                                <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/restaurant-2022.svg?w=96&q=75" alt="Restaurant"/>
                            </div>
                            <div className="mt-2">Restaurants</div>
                        </a>
                    </div>
                    <div className="col mb-4">
                        <a href="./Hotellisting.html" className="btn d-block">
                            <div className="icon-store">
                                <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/hotel-2022.svg?w=96&q=75" alt="hotel"/>
                            </div>
                            <div className="mt-1">Hotels</div>
                        </a>
                    </div>
                    <div className="col mb-4">
                        <a href="#" className="btn d-block">
                            <div className="icon-store">
                                <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/beauty.svg?w=96&q=75" alt="Beauty Spa"/>
                            </div>
                            <div className="mt-1">Beauty Spa</div>
                        </a>
                    </div>
                    <div className="col mb-4">
                        <a href="#" className="btn d-block">
                            <div className="icon-store">
                                <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/homedecor.svg?w=96&q=75" alt="Home Decor"/>
                            </div>
                            <div className="mt-1">Home Decor</div>
                        </a>
                    </div>
                    <div className="col mb-4">
                        <a href="#" className="btn d-block">
                            <div className="icon-store">
                            <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hotkey_wedding_icon.gif?w=96&q=75" alt="Wedding Planning"/>
                            </div>
                            <div className="mt-1">Wedding Planning</div>
                        </a>
                    </div>
                    <div className="col mb-4">
                        <a href="#" className="btn d-block">
                            <div className="icon-store">
                            <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/education.svg?w=96&q=75" alt="Education"/>
                            </div>
                            <div className="mt-1">Education</div>
                        </a>
                    </div>
                    <div className="col mb-4">
                        <a href="#" className="btn d-block">
                            <div className="icon-store">
                            <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/renthire.svg?w=96&q=75" alt="Rent & Hire"/>
                            </div>
                            <div className="mt-1">Rent & Hire</div>
                        </a>
                    </div>
                    <div className="col mb-4">
                        <a href="#" className="btn d-block">
                            <div className="icon-store">
                            <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/hospital_2023.svg?w=96&q=75" alt="Hospitals"/>
                            </div>
                            <div className="mt-1">Hospitals</div>
                        </a>
                    </div>
                    <div className="col mb-4">
                        <a href="#" className="btn d-block">
                            <div className="icon-store">
                            <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/contractor-2022.svg?w=96&q=75" alt="Contractors"/>
                            </div>
                            <div className="mt-1">Contractors</div>
                        </a>
                    </div>
                    <div className="col mb-4">
                        <a href="#" className="btn d-block">
                            <div className="icon-store">
                            <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pet_shops_2023.svg?w=96&q=75" alt="Pet Shops"/>
                            </div>
                            <div className="mt-1">Pet Shops</div>
                        </a>
                    </div>
                    <div className="col mb-4">
                        <a href="#" className="btn d-block">
                            <div className="icon-store">
                            <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pg-hostels-rooms.svg?w=96&q=75" alt="PG & Hostels"/>
                            </div>
                            <div className="mt-1">PG & Hostels</div>
                        </a>
                    </div>
                    <div className="col mb-4">
                        <a href="#" className="btn d-block">
                            <div className="icon-store">
                            <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/estate-agent.svg?w=96&q=75" alt="Estate Agent"/>
                            </div>
                            <div className="mt-1">Estate Agent</div>
                        </a>
                    </div>
                    <div className="col mb-4">
                        <a href="#" className="btn d-block">
                            <div className="icon-store">
                            <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/eventorganizers.svg?w=96&q=75" alt="Event Organizers"/>
                            </div>
                            <div className="mt-1">Event Organizers</div>
                        </a>
                    </div>
                    <div className="col mb-4">
                        <a href="#" className="btn d-block">
                            <div className="icon-store">
                            <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/courier_2023.svg?w=96&q=75" alt="Courier Services"/>
                            </div>
                            <div className="mt-1">Courier Services</div>
                        </a>
                    </div>
                    <div className="col mb-4">
                        <a href="#" className="btn d-block">
                            <div className="icon-store">
                            <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newhotkey/loans.svg?w=96&q=75" alt="Loans"/>
                            </div>
                            <div className="mt-1">Loans</div>
                        </a>
                    </div>
                    <div className="col mb-4">
                        <a href="#" className="btn d-block">
                            <div className="icon-store">
                            <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/driving_school_2023.svg?w=96&q=75" alt="Driving Schools"/>
                            </div>
                            <div className="mt-1">Driving Schools</div>
                        </a>
                    </div>
                    <div className="col mb-4">
                        <a href="#" className="btn d-block">
                            <div className="icon-store">
                            <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/gym_2023.svg?w=96&q=75" alt="Gym"/>
                            </div>
                            <div className="mt-1">Gym</div>
                        </a>
                    </div>
                    <div className="col mb-4">
                        <a href="#" className="btn d-block">
                            <div className="icon-store">
                            <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/packers_movers_2023.svg?w=96&q=75" alt="Packers & Movers"/>
                            </div>
                            <div className="mt-1">Packers & Movers</div>
                        </a>
                    </div>
                    <div className="col mb-4">
                        <a href="#" className="btn d-block">
                            <div className="icon-store">
                            <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/dentist_2023.svg?w=96&q=75" alt="Dentists"/>
                            </div>
                            <div className="mt-1">Dentists</div>
                        </a>
                    </div>
                    <div className="col mb-4">
                        <a href="#" className="btn d-block">
                            <div className="icon-store">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdvVWaxVpvriYI9pPTde3gTJ_SfJHQdWywU2naSdXYfh8dNOOp4Hb5-0NDCT0LSOFq_3E&usqp=CAU" alt="Popular Categories"/>
                            </div>
                            <div className="mt-1">Popular Categories</div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="vertical-buttons" role="complementary" aria-label="Side vertical action buttons">
                <button class="side-button advertise" type="button" aria-label="Advertise">Advertise</button>
                <button class="side-button free-listing" type="button" aria-label="Free Listing">Free Listing</button>

            <div className="container my-4">
                <div className="row overflow-hidden n_slide rounded-2 img-fluid">
                    <div className="col-md-6">
                        <div className="category-section">
                            <div className="category-title">Wedding Requisites</div>
                            <div className="row text-center justify-content-center">
                                <div className="col-6 col-md-3 category-item">
                                    <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banquethalls_rectangle_2024.webp?w=640&q=75" 
                                        alt="Banquet Halls" 
                                        className="img-fluid"/>
                                    <p>Banquet Halls</p>
                                </div>
                                <div className="col-6 col-md-3 category-item">
                                    <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bridalrequisite_rectangle_2024.webp?w=640&q=75" 
                                        alt="Bridal Requisite" 
                                        className="img-fluid"/>
                                    <p>Bridal Requisite</p>
                                </div>
                                <div className="col-6 col-md-3 category-item">
                                    <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/caterers_rectangle_2024.webp?w=640&q=75" 
                                        alt="Caterers" 
                                        className="img-fluid"/>
                                    <p>Caterers</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="category-section">
                            <div className="category-title">Beauty & Spa</div>
                            <div className="row text-center justify-content-center">
                                <div className="col-6 col-md-3 category-item">
                                    <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/beautyparlours_rectangle_2024.webp?w=640&q=75" 
                                        alt="Beauty Parlours" 
                                        className="img-fluid"/>
                                    <p>Beauty Parlours</p>
                                </div>
                                <div className="col-6 col-md-3 category-item">
                                    <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/spamassages_rectangle_2024.webp?w=640&q=75" 
                                        alt="Spa & Massages" 
                                        className="img-fluid"/>
                                    <p>Spa & Massages</p>
                                </div>
                                <div className="col-6 col-md-3 category-item">
                                    <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/salons_rectangle_2024.webp?w=640&q=75" 
                                        alt="Salons" 
                                        className="img-fluid"/>
                                    <p>Salons</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-4">
                <div className="row overflow-hidden n_slide rounded-2 img-fluid">
                    <div className="col-md-6">
                        <div className="category-section">
                            <div className="category-title">Repairs & Services</div>
                            <div className="row text-center justify-content-center">
                                <div className="col-6 col-md-3 category-item">
                                    <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_acrepair.png?w=640&q=75" 
                                        alt="AC Service" 
                                        className="img-fluid"/>
                                    <p>AC Service</p>
                                </div>
                                <div className="col-6 col-md-3 category-item">
                                    <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/carservice_rectangle_2024.webp?w=640&q=75" 
                                        alt="Car Service" 
                                        className="img-fluid"/>
                                    <p>Car Service</p>
                                </div>
                                <div className="col-6 col-md-3 category-item">
                                    <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bikeservice_rectangle_2024.webp?w=640&q=75" 
                                        alt="Bike Service" 
                                        className="img-fluid"/>
                                    <p>Bike Service</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="category-section">
                            <div className="category-title">Daily Needs</div>
                            <div className="row text-center justify-content-center">
                                <div className="col-6 col-md-3 category-item">
                                    <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_movies.png?w=640&q=75" 
                                        alt="Movies" 
                                        className="img-fluid"/>
                                    <p>Movies</p>
                                </div>
                                <div className="col-6 col-md-3 category-item">
                                    <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/grocery_rectangle_2024.webp?w=640&q=75" 
                                        alt="Grocery" 
                                        className="img-fluid"/>
                                    <p>Grocery</p>
                                </div>
                                <div className="col-6 col-md-3 category-item">
                                    <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/electricians_rectangle_2024.webp?w=640&q=75" 
                                        alt="Electricians" 
                                        className="img-fluid"/>
                                    <p>Electricians</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="container py-4">
                    <div className="service-box mb-4">
                        <div className="row">
                            <div className="col-md-4">
                                <h5><strong>Bills & Recharge</strong></h5>
                                <p className="text-muted">Pay your bills & recharge instantly with Justdial</p>
                                <a href="#" className="text-primary fw-semibold">Explore More</a>
                            </div>
                            <div className="col-md-8">
                                <div className="row text-center g-3">
                                    <div className="col-4 col-md-2">
                                        <div className="icon-box">
                                            <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_mobile.svg?w=128&q=75" 
                                                alt="Mobile Recharge" 
                                                className="img-fluid"/>
                                        </div>
                                        <p className="fw-medium">Mobile</p>
                                    </div>
                                    <div className="col-4 col-md-2">
                                        <div className="icon-box">
                                            <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_electricity.svg?w=128&q=75" 
                                                alt="Electricity Bill Payment" 
                                                className="img-fluid"/>
                                        </div>
                                        <p className="fw-medium">Electricity</p>
                                    </div>
                                    <div className="col-4 col-md-2">
                                        <div className="icon-box">
                                            <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_dth.svg?w=128&q=75" 
                                                alt="DTH Recharge" 
                                                className="img-fluid"/>
                                        </div>
                                        <p className="fw-medium">DTH</p>
                                    </div>
                                    <div className="col-4 col-md-2">
                                        <div className="icon-box">
                                            <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_water.svg?w=128&q=75" 
                                                alt="Water Bill Payment" 
                                                className="img-fluid"/>
                                        </div>
                                        <p className="fw-medium">Water</p>
                                    </div>
                                    <div className="col-4 col-md-2">
                                        <div className="icon-box">
                                            <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_gas.svg?w=128&q=75" 
                                                alt="Gas Booking" 
                                                className="img-fluid"/>
                                        </div>
                                        <p className="fw-medium">Gas</p>
                                    </div>
                                    <div className="col-4 col-md-2">
                                        <div className="icon-box">
                                            <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_insurance.svg?w=128&q=75" 
                                                alt="Insurance Payment" 
                                                className="img-fluid"/>
                                        </div>
                                        <p className="fw-medium">Insurance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-box">
                        <div className="row">
                            <div className="col-md-4">
                                <h5><strong>Travel Bookings</strong></h5>
                                <p className="text-muted">Instant ticket bookings htmlFor your best travel experience</p>
                                <a href="#" className="text-primary fw-semibold">Explore More</a>
                            </div>
                            <div className="col-md-8">
                                <div className="row text-center g-3">
                                    <div className="col-4 col-md-2">
                                        <div className="icon-box">
                                            <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_flight.svg?w=128&q=75" 
                                                alt="Flight Tickets" 
                                                className="img-fluid"/>
                                        </div>
                                        <p className="fw-medium mb-1">Flight</p>
                                        <small className="highlight-green">Powered by Easemytrip.com</small>
                                    </div>
                                    <div className="col-4 col-md-2">
                                        <div className="icon-box">
                                            <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_bus.svg?w=128&q=75" 
                                                alt="Bus Tickets" 
                                                className="img-fluid"/>
                                        </div>
                                        <p className="fw-medium mb-1">Bus</p>
                                        <small className="highlight-green">Affordable Rides</small>
                                    </div>
                                    <div className="col-4 col-md-2">
                                        <div className="icon-box">
                                            <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_train.svg?w=128&q=75" 
                                                alt="Train Tickets" 
                                                className="img-fluid"/>
                                        </div>
                                        <p className="fw-medium">Train</p>
                                    </div>
                                    <div className="col-4 col-md-2">
                                        <div className="icon-box">
                                            <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_hotels.svg?w=128&q=75" 
                                                alt="Hotel Bookings" 
                                                className="img-fluid"/>
                                        </div>
                                        <p className="fw-medium mb-1">Hotel</p>
                                        <small className="highlight-green">Budget-friendly Stay</small>
                                    </div>
                                    <div className="col-4 col-md-2">
                                        <div className="icon-box">
                                            <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_carhire.svg?w=128&q=75" 
                                                alt="Car Rentals" 
                                                className="img-fluid"/>
                                        </div>
                                        <p className="fw-medium mb-1">Car Rentals</p>
                                        <small className="highlight-green">Drive Easy Anywhere</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                    <div className="d-flex align-items-center mb-3">
                        <h4 className="fw-bold mb-0">Trending Searches Near You</h4>
                        <span className="badge bg-danger text-white ms-2">NEW</span>
                    </div>
                    <p className="text-muted mb-4">Stay updated with the latest local trends.</p>


                    <div class="row g-3 flex-nowrap overflow-auto" style="scroll-snap-type: x mandatory;">
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="./img/archery-classes-1-archery-classes-1-l95om.avif" 
                                            className="img-fluid rounded-start" 
                                            alt="Archery Classes"/>
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">Archery Classes</h6>
                                            <a href="#" className="card-link text-primary">
                                                Explore <i className="fa-solid fa-angle-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10948367.jpg?w=256&q=75" 
                                            className="img-fluid rounded-start" 
                                            alt="Digital Marketing Services"/>
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">Digital Marketing Services</h6>
                                            <a href="#" className="card-link text-primary">
                                                Explore <i className="fa-solid fa-angle-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10059338.jpg?w=256&q=75" 
                                            className="img-fluid rounded-start" 
                                            alt="Building Contractors"/>
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">Building Contractors</h6>
                                            <a href="#" className="card-link text-primary">
                                                Explore <i className="fa-solid fa-angle-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10104727.jpg?w=256&q=75" 
                                            className="img-fluid rounded-start" 
                                            alt="Coffee Shops"/>
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">Coffee Shops</h6>
                                            <a href="#" className="card-link text-primary">
                                                Explore <i className="fa-solid fa-angle-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10925563.jpg?w=256&q=75" 
                                            className="img-fluid rounded-start" 
                                            alt="Polytechnic Colleges"/>
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">Polytechnic Colleges</h6>
                                            <a href="#" className="card-link text-primary">
                                                Explore <i className="fa-solid fa-angle-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/11250059.jpg?w=256&q=75" 
                                            className="img-fluid rounded-start" 
                                            alt="Android App Developers"/>
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">Android App Developers</h6>
                                            <a href="#" className="card-link text-primary">
                                                Explore <i className="fa-solid fa-angle-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10080172.jpg?w=256&q=75" 
                                            className="img-fluid rounded-start" 
                                            alt="Cardiologists"/>
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">Cardiologists</h6>
                                            <a href="#" className="card-link text-primary">
                                                Explore <i className="fa-solid fa-angle-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/11123333.jpg?w=256&q=75" 
                                            className="img-fluid rounded-start" 
                                            alt="Playgrounds"/>
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">Playgrounds</h6>
                                            <a href="#" className="card-link text-primary">
                                                Explore <i className="fa-solid fa-angle-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10128276.jpg?w=256&q=75"
                                            className="img-fluid rounded-start" 
                                            alt="Construction Contractors"/>
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">Construction Contractors</h6>
                                            <a href="#" className="card-link text-primary">
                                                Explore <i className="fa-solid fa-angle-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            <section>
                    <h4 className="fw-bold mb-3">Latest Movies & Review</h4>
                    <div className="d-flex overflow-auto gap-3 pb-3">

                        <div class="position-relative" style="min-width: 180px;">
                            <img src="https://images.jdmagicbox.com/movies/centralized_161987892025_06_06_05_14_13_220.jpg?w=2048&q=75" class="img-fluid movie-card" alt="Sitaare Zameen Par" />
                            <div className="rating-badge">👍 80%</div>
                            <p className="fw-semibold mt-2 mb-0">Sitaare Zameen Par</p>
                            <small className="text-muted">Hindi • 2D</small>
                        </div>

                        <div class="position-relative" style="min-width: 180px;">
                            <img src="https://images.jdmagicbox.com/movies/centralized_161833792025_06_12_01_40_24_220.jpg?w=2048&q=75" class="img-fluid movie-card" alt="Maa (2025)" />
                            <div className="rating-badge">👎 20%</div>
                            <p className="fw-semibold mt-2 mb-0">Maa (2025)</p>
                            <small className="text-muted">Hindi • 2D</small>
                        </div>

                        <div class="position-relative" style="min-width: 180px;">
                            <img src="https://images.jdmagicbox.com/movies/centralized_161391492024_11_27_06_32_12_220.jpg?w=2048&q=75" class="img-fluid movie-card" alt="F1" />
                            <div className="rating-badge">👍 80%</div>
                            <p className="fw-semibold mt-2 mb-0">F1</p>
                            <small className="text-muted">English • 2D</small>

                        <div class="position-relative" style="min-width: 180px;">
                            <img src="https://images.jdmagicbox.com/movies/centralized_161212992025_04_15_07_45_57_220.jpg?w=2048&q=75" class="img-fluid movie-card" alt="Kannappa" />
                            <div className="rating-badge">👍 80%</div>
                            <p className="fw-semibold mt-2 mb-0">Kannappa</p>
                            <small className="text-muted">Tamil • 2D</small>
                        </div>

                        <div class="position-relative" style="min-width: 180px;">
                            <img src="https://images.jdmagicbox.com/movies/centralized_161999222025_05_23_04_22_20_220.jpg?w=2048&q=75" class="img-fluid movie-card" alt="Jarann" />
                            <div className="rating-badge">👍 60%</div>
                            <p className="fw-semibold mt-2 mb-0">Jarann</p>
                            <small className="text-muted">Marathi • 2D</small>
                        </div>

                        <div class="position-relative" style="min-width: 180px;">
                            <img src="https://images.jdmagicbox.com/movies/centralized_161710302025_02_28_01_05_51_220.jpg?w=2048&q=75" class="img-fluid movie-card" alt="Jurassic World" />
                            <div className="rating-badge">👍 70%</div>
                            <p className="fw-semibold mt-2 mb-0">Jurassic World</p>
                            <small className="text-muted">English • 2D</small>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container my-5">
                    <div className="d-flex align-items-center mb-2">
                        <h4 className="fw-bold mb-0">Rainy Day Essentials</h4>
                        <span className="badge bg-danger text-white ms-2">SEASONAL</span>
                    </div>
                    <p className="text-muted mb-4">Discover wide range of rainy collection</p>

                    <div class="row g-3 flex-nowrap overflow-auto" style="scroll-snap-type: x mandatory;">
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10378025.jpg?w=256&q=75" class="img-fluid rounded-start" alt="Plumbers" />
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">Plumbers</h6>
                                            <a href="#" classNameNameName="card-link text-primary">Explore <i class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10533854.jpg?w=256&q=75" class="img-fluid rounded-start" alt="Waterproofing Contractors" />
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">Waterproofing Contractors</h6>
                                            <a href="#" classNameNameName="card-link text-primary">Explore <i class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10472227.jpg?w=256&q=75" class="img-fluid rounded-start" alt="Tarpaulin Dealers" />
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">Tarpaulin Dealers</h6>
                                            <a href="#" classNameNameName="card-link text-primary">Explore <i class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10274634.jpg?w=256&q=75" class="img-fluid rounded-start" alt="Inverter Dealers" />
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">Inverter Dealers</h6>
                                            <a href="#" classNameNameName="card-link text-primary">Explore <i class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10925563.jpg?w=256&q=75" class="img-fluid rounded-start" alt="Polytechnic Colleges" />
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">Polytechnic Colleges</h6>
                                            <a href="#" classNameNameName="card-link text-primary">Explore <i class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/11250059.jpg?w=256&q=75" class="img-fluid rounded-start" alt="Android App Developers" />
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">Android App Developers</h6>
                                            <a href="#" classNameNameName="card-link text-primary">Explore <i class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                      
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10080172.jpg?w=256&q=75" class="img-fluid rounded-start" alt="Cardiologists" />
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">Cardiologists</h6>
                                            <a href="#" classNameNameName="card-link text-primary">Explore <i class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                       
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/11123333.jpg?w=256&q=75" class="img-fluid rounded-start" alt="Playgrounds" />
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">Playgrounds</h6>
                                            <a href="#" classNameNameName="card-link text-primary">Explore <i class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10128276.jpg?w=256&q=75" class="img-fluid rounded-start" alt="Construction Contractors" />
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">Construction Contractors</h6>
                                            <a href="#" classNameNameName="card-link text-primary">Explore <i class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/11123333.jpg?w=256&q=75" class="img-fluid rounded-start" alt="Playgrounds" />
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">Playgrounds</h6>
                                            <a href="#" classNameNameName="card-link text-primary">Explore <i class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container my-5">
                    
                    <div className="d-flex align-items-center mb-3">
                        <h4 className="fw-bold mb-0">Explore Top Tourist Places</h4>
                        <span className="badge bg-danger text-white ms-2">NEW</span>
                    </div>

                    
                    <div class="row g-3 flex-nowrap overflow-auto pb-3" style="scroll-snap-type: x mandatory;">
                       
                        <template id="tourist-card-template">
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                                <div className="card h-100">
                                    <div className="row g-0 align-items-center">
                                        <div className="col-5">
                                            <img src="" class="img-fluid rounded-start" alt=""/>
                                        </div>
                                        <div className="col-7">
                                            <div className="card-body">
                                                <h6 className="card-title fw-bold"></h6>
                                                <a href="#" classNameNameName="card-link text-primary">Explore <i class="fa-solid fa-angle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>

                       
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/Explorecities_Udaipur.png?t=1?w=256&q=75" class="img-fluid rounded-start" alt="Udaipur"/>
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">Udaipur</h6>
                                            <a href="#" classNameNameName="card-link text-primary">Explore <i class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/Explorecities_Ahmedabad.png?t=1?w=256&q=75" class="img-fluid rounded-start" alt="Ahmedabad"/>
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">Ahmedabad</h6>
                                            <a href="#" classNameNameName="card-link text-primary">Explore <i class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/Explorecities_Jaipur.png?t=1?w=256&q=75" class="img-fluid rounded-start" alt="Jaipur"/>
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">Jaipur</h6>
                                            <a href="#" classNameNameName="card-link text-primary">Explore <i class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/Explorecities_Agra.png?t=1?w=256&q=75" class="img-fluid rounded-start" alt="Agra"/>
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">Agra</h6>
                                            <a href="#" classNameNameName="card-link text-primary">Explore <i class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10925563.jpg?w=256&q=75" class="img-fluid rounded-start" alt="Polytechnic"/>
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">Polytechnic</h6>
                                            <a href="#" classNameNameName="card-link text-primary">Explore <i class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/11250059.jpg?w=256&q=75" class="img-fluid rounded-start" alt="App Developers"/>
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">App Devs</h6>
                                            <a href="#" classNameNameName="card-link text-primary">Explore <i class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10080172.jpg?w=256&q=75" class="img-fluid rounded-start" alt="Doctors"/>
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">Doctors</h6>
                                            <a href="#" classNameNameName="card-link text-primary">Explore <i class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/11123333.jpg?w=256&q=75" class="img-fluid rounded-start" alt="Playground"/>
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">Playground</h6>
                                            <a href="#" classNameNameName="card-link text-primary">Explore <i class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="min-width: 250px;">
                            <div className="card h-100">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5">
                                        <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10128276.jpg?w=256&q=75" class="img-fluid rounded-start" alt="Construction"/>
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold">Construction</h6>
                                            <a href="#" classNameNameName="card-link text-primary">Explore <i class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-5">
                <div className="container">
                    <h2 className="mb-4">Popular Searches</h2>
                    <div className="row g-4">
                        <div className="col-md-3">
                            <div className="card h-100">
                                <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10422444.jpg?fit=around%7C350:350&crop=350:350;*,*" class="card-img-top" alt="Schools"/>
                                <div className="card-body">
                                    <h5 className="card-title">Schools</h5>
                                    <a href="#" className="btn btn-custom">Enquire Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card h-100">
                                <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10076456.jpg?fit=around%7C350:350&crop=350:350;*,*" class="card-img-top" alt="Car Rental"/>
                                <div className="card-body">
                                    <h5 className="card-title">Car Rental</h5>
                                    <a href="#" className="btn btn-custom">Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card h-100">
                                <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10042247.jpg?fit=around%7C350:350&crop=350:350;*,*" class="card-img-top" alt="Beauty Parlours"/>
                                <div className="card-body">
                                    <h5 className="card-title">Beauty Parlours</h5>
                                    <a href="#" className="btn btn-custom">Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card h-100">
                                <img src="https://content.jdmagicbox.com/comp/def_content/ncat_id/10892680.jpg?fit=around%7C350:350&crop=350:350;*,*" class="card-img-top" alt="General Doctors"/>
                                <div className="card-body">
                                    <h5 className="card-title">General Doctors</h5>
                                    <a href="#" className="btn btn-custom">Explore</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-4">
                <div className="container">
                    <h2 className="mb-4">Recent Activity</h2>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://images.jdmagicbox.com/v2/comp/mumbai/q7/022pxx22.xx22.210211143811.n8q7/catalogue/kaya-kalp-international-health-clinics-dadar-west-mumbai-ayurvedic-clinics-0eatnyhg2q.jpg" class="card-img-top" alt="Kayakalp International"/>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h5 className="card-title mb-0">Kayakalp International</h5>
                                        <span className="badge bg-success">WhatsApp</span>
                                    </div>
                                    <p className="reviewer mb-1">Pradeep Bachav</p>
                                    <div className="stars mb-2">★★★★★</div>
                                    <p>Main Kurla mein rahta hoon shaadi se pehle main aata tha. Bahut pareshan tha...</p>
                                </div>
                            </div>
                        </div>


                        <div className="col">
                            <div className="card h-100">
                                <img src="https://images.jdmagicbox.com/v2/comp/mumbai/q7/022pxx22.xx22.210211143811.n8q7/catalogue/kaya-kalp-international-health-clinics-dadar-west-mumbai-ayurvedic-clinics-0eatnyhg2q.jpg" class="card-img-top" alt="Dr. L. A. Dongarwar"/>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h5 className="card-title mb-0">Dr. L. A. Dongarwar</h5>
                                        <span className="badge bg-success">WhatsApp</span>
                                    </div>
                                    <p className="reviewer mb-1">Pawan Jaiswal</p>
                                    <div className="stars mb-2">★★★★★</div>
                                    <p>Dr. Dongarwar is a great doctor! He helps with many health problems...</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100">
                                <img src="https://images.jdmagicbox.com/v2/comp/mumbai/b8/022pxx22.xx22.220120114820.c3b8/catalogue/dr-l-a-dongarwar-md-ayurveda-sexologist-kalyan-west-kalyan-sexologist-doctors-opmm1g9u4d.jpg" class="card-img-top" alt="Dr. Suresh Patil's Clinic"/>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h5 className="card-title mb-0">Dr. Suresh Patil's Clinic</h5>
                                        <span className="badge bg-success">WhatsApp</span>
                                    </div>
                                    <p className="reviewer mb-1">Dr. Rahul Yadav</p>
                                    <div className="stars mb-2">★★★★★</div>
                                    <p>I recently visited this clinic and had a great experience. The staff was friendly...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <button className="btn btn-outline-primary">Load More</button>
                    </div>
                </div>
            </section>
        </main>

     
    </>
  )
}

export default Homepage;

