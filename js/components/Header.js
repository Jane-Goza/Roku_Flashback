export default {
    name: "Header",



    template: `
        <header id="header">
                    <div class="logo">
                    <a href="index.html">
                        <img src="dist/roku-logo-svg2.svg" alt="Roku Logo"/>
                    </a>
                </div>
                    
                    <div class="menu-btn">
                        <span class="menu-btn__burger"></span>
                    </div>
                
                    <nav class="nav-mobile">
                        <h2 class="hidden">Nav - mobile</h2>
                        <ul class="menu-nav">
                        <li class="menu-nav__item">
                            <router-link class="menu-nav__link" to="/">
                            Home
                            </router-link>
                        </li>
                        <li class="menu-nav__item">
                        <router-link class="menu-nav__link" to="/tvshows">
                            TV Shows
                            </router-link>
                        </li>
                        <li class="menu-nav__item">
                        <router-link  class="menu-nav__link" to="/musics">
                            Musics
                            </router-link>
                        </li>
                        <li class="menu-nav__item">
                        <router-link  class="menu-nav__link" to="/movies">
                            Movies
                            </router-link>
                        </li>
                        </ul>
                    </nav>
        
                    <nav class="nav-desktop">
                        <h2 class="hidden">Nav - Desktop</h2>
                        <ul class="menu-nav-desktop">
                            <li class="menu-nav__item">
                                <a href="index.html" class="menu-nav__link">
                                Home
                                </a>
                            </li>
                            <li class="menu-nav__item">
                                <a href="" class="menu-nav__link">
                                TV Shows
                                </a>
                            </li>
                            <li class="menu-nav__item">
                                <a href="" class="menu-nav__link">
                                Musics
                                </a>
                            </li>
                            <li class="menu-nav__item">
                                <a href="" class="menu-nav__link">
                                Movies
                                </a>
                            </li>
                        </ul>
                    </nav>
            </header>`
}

