<template>
    <div>
        <!-- start Header -->
        <div class="main-header" id="home-header">
            <nav class="navbar container w-100 navbar-expand-lg navbar-transparent bg-transparent">


                <div class="logo">
                    <img src="./../assets/images/logo.png" alt="">
                </div>

                <div class="menu-toggle navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="d-flex align-items-center">
                        <!-- Mega menu -->
                        <div class="dropdown mega-menu d-none d-md-block">
                            <a href="#" class="btn  dropdown-toggle mr-3" id="dropdownMegaMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Mega Menu</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div class="row m-0">
                                    <div class="col-md-4 p-4 bg-img">
                                        <h2 class="title">Mega Menu <br> Sidebar</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores natus laboriosam fugit, consequatur.
                                        </p>
                                        <p class="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem odio amet eos dolore suscipit placeat.</p>
                                        <button class="btn btn-lg btn-rounded btn-outline-warning">Learn More</button>
                                    </div>
                                    <div class="col-md-4 p-4">
                                        <p class="text-primary text--cap border-bottom-primary d-inline-block">Features</p>
                                        <div class="menu-icon-grid w-auto p-0">
                                            <a href="#"><i class="i-Shop-4"></i> Home</a>
                                            <a href="#"><i class="i-Library"></i> UI Kits</a>
                                            <a href="#"><i class="i-Drop"></i> Apps</a>
                                            <a href="#"><i class="i-File-Clipboard-File--Text"></i> Forms</a>
                                            <a href="#"><i class="i-Checked-User"></i> Sessions</a>
                                            <a href="#"><i class="i-Ambulance"></i> Support</a>
                                        </div>
                                    </div>
                                    <div class="col-md-4 p-4">
                                        <p class="text-primary text--cap border-bottom-primary d-inline-block">Components</p>
                                        <ul class="links">
                                            <li><a href="accordion.html">Accordion</a></li>
                                            <li><a href="alerts.html">Alerts</a></li>
                                            <li><a href="buttons.html">Buttons</a></li>
                                            <li><a href="badges.html">Badges</a></li>
                                            <li><a href="carousel.html">Carousels</a></li>
                                            <li><a href="lists.html">Lists</a></li>
                                            <li><a href="popover.html">Popover</a></li>
                                            <li><a href="tables.html">Tables</a></li>
                                            <li><a href="datatables.html">Datatables</a></li>
                                            <li><a href="modals.html">Modals</a></li>
                                            <li><a href="nouislider.html">Sliders</a></li>
                                            <li><a href="tabs.html">Tabs</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- / Mega menu -->

                    </div>

                    <div style="margin: auto"></div>

                    <div class="header-part-right">

                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link m-2" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <!-- drop down menu start -->
                            <li class="nav-item">
                                <a href="#" class="nav-link m-2 m-2">Pages</a>
                                <!-- First  Drop Down -->
                                <ul>
                                    <li class="nav-item">
                                        <a href="#" class="  menu-item">Team</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="  menu-item">Testimonial</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="  menu-item">Extra features</a>
                                    </li>
                                    <li><a>Second Level</a>
                                        <!-- Second  Drop Down -->
                                        <ul>
                                            <li class="nav-item">
                                                <a href="#" class="  menu-item">Blog</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="  menu-item">Faqs</a>
                                            </li>
                                            <li><a>Third Level</a>

                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <!-- drop down menu end -->
                            <li class="nav-item">
                                <a class="nav-link m-2" href="#">News</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link m-2" href="#">Features</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link m-2" href="#">Testimonial</a>
                            </li>


                            <li class="nav-item">
                                <a class="nav-link m-2 " href="#">Contact Us</a>
                            </li>
                        </ul>



                    </div>
                </div>
            </nav>

        </div>

    </div>
</template>
<script>
export default {
    
}
</script>
