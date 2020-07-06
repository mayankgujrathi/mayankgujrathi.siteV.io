/* cards creation class */
class Card {
    _title
    _desciption
    _img
    constructor(img, title, desciption) {
        this._title = title
        this._img = img
        this._desciption = desciption
    }

    render() {
        return (
            `<div class="card" title="Read More">
                <img src="${this._img}" class="card-img-top" alt="${this._title}">
                <div class="card-body">
                    <h5 class="card-title">${this._title}</h5>
                    <p class="card-text">${this._desciption}</p>
                </div>
          </div>`
        )
    }
}

/* group card renderer */
function renderCards(cards) {
    /*
        param: object{img: str, title: str, desc: str}
        returns: str(HTML tags ready to insert)
    */
    let render_html = ''
    cards.forEach(card => {
        render_html += new Card(card.img, card.title, card.desc).render()
    });
    return render_html
}

// Services  Card details
const cards = [
    {
        title: 'Cheap Web Hosting',
        img: 'asset/service/cheap-web-hosting.jpg',
        desc: 'We provide cheap webhosting services starting from $1 pre Month with an MicroServer to huge data center with 100TB of storage and 20GB of memory etc.'
    },
    {
        title: 'Cloud Storage',
        img: 'asset/service/cloud-storage.jpg',
        desc: 'We provide cloud storage to a wide range of people from single user to enterprise standard where the time is preices than money.'
    },
    {
        title: 'Media Processing',
        img: 'asset/service/image-processing.jpg',
        desc: 'We provide online services for processing of images and videos, Have to a .jpg want an .Svg we are here, Want to reduce the video size for Youtube Without any quaity loss we cover that too.'
    },
    {
        title: 'Data Science',
        img: 'asset/service/data-science.jpg',
        desc: 'We try to solve problems using the mordern approches to get desired outcomes. Our team tries to find the best possible solution for your problem. To use we provide APIs, free to use for first 3 days.'
    },
    {
        title: 'Machine Learning',
        img: 'asset/service/machine-learning.jpg',
        desc: 'We provide online Machine Learning libraries that can be used to create complex Models, Our online free API supports Python & Javascript, the paid version supports free langs + Golang, Typerscript, Java and C++, other languages are come to list in near future.'
    },
    {
        title: 'Remote Desktops',
        img: 'asset/service/remote-desktop.png',
        desc: 'We provide web application and desktop application to access your desktop via any device with browser, setup for remoting any device is easy now.'
    },
    {
        title: 'IoT Help',
        img: 'asset/service/iot-hardware.jpg',
        desc: 'Provide a very immersive expreience while creating your iot projects, with Python or C, Have a doubt Come to our community of developer and exprisened people for any help.'
    },
    {
        title: 'Video Editing',
        img: 'asset/service/video-rendering.jpg',
        desc: 'If you want to change a contrast/ brightness/ etc we covered that too, our online api provides to use your command/ terminal to do that simple modificates, if you want to edit it with previews, we have GUI application also which is paid.'
    },
    {
        title: 'Audio Editing & Text To Speeh',
        img: 'asset/service/audio-editing.png',
        desc: 'Want to edit a audio and donot want the background noice, so use our online service for editing audio with all industry standard tools, You can also edit audio of an Video and directly  upload it to Youtube/LBRY and other servies.'
    }
]

// inserting services
$('main .sec-card .cards').append(renderCards(cards.slice(0, 3)))

$(document).ready(() => {

    /* function to change mode */
    function makeDark(themeColor = '#009879') {

        const makeWholeDark = (themeColor == '#009879') ? false : true
        const themeLightColor = (themeColor == '#536DFE') ? '#8497FE' : '#37bda2'
        if (makeWholeDark) {

            float_btn.style.backgroundColor = '#536DFE'
            float_btn.mode = 'dark'
            float_btn.classList.replace('fa-sun', 'fa-moon')

            const color = '#333'
            $('body').css("backgroundColor", color)
            $('main .ender .upper-svg svg path').attr('fill', color)

            // change about
            $('main .title-subs').css('color', '#fff')
            $('main .about-sec .about-desc .title-about').css('color', '#fff')
            $('main .about-sec .about-desc .desc, main .about-sec .about-desc .about-btn')
            .css('color', '#ddd')

            // nav and header
            // nav
            $('header .navbar').css('background-color', themeColor)
            // header
            $('header .img-box, header .ender').css('background-color', themeColor)
            $('header .img-box .title .help-btn').css('background-color', themeColor)
            $('header .img-box .title .contact-btn').css('color', themeColor)
            $('header .img-box .img').css('background-image', 'url(./asset/books-girl.png)')

            // contact form
            $('footer .contact').css('background-color', themeColor)
            $('footer .contact .contact-form .submit-btn').css('color', themeColor)

            // services section
            $('main .sec-card, main .ender .upper-svg, main .services')
                .css('background-color', themeLightColor)
            $('main .services').css('color', '#222')

            // services cards
            $('main .sec-card .cards .card').css('background-color', '#444')
            $('main .sec-card .secvice-btn').css('color', '#444')
            $('main .sec-card .cards .card .card-body .card-title, main .sec-card .cards .card .card-body .card-text')
                .css('color', '#fff')
            
            // main sec as services
            $('.dy-content .cards .card').css('background-color', '#444')
            $('.dy-content .cards .card .card-body .card-title, .dy-content .cards .card .card-body .card-text')
                .css('color', '#fff')
            
            // dy-sec/ main sec as contact
            $('.dy-content .contact h3, .dy-content .contact .type').css('color', '#fff')
            $('.dy-content .contact ul li a').css('color', '#ddd')

            // dy-sec/ main sec as about
            $('.dy-content .about .desc, .dy-content .about .type')
            .css('color', '#fff')
            $('.dy-content .about .subtitle').css('color', '#bbb')
            $('.dy-content .about ul li a').css('color', '#eee')

        } else {

            float_btn.style.backgroundColor = '#009879'
            float_btn.classList.replace('fa-moon', 'fa-sun')
            float_btn.mode = 'day'
            const color = '#fff'
            $('body').css("backgroundColor", color)
            $('main .ender .upper-svg svg path').attr('fill', color)

            // change about
            $('main .title-subs').css('color', '#000')
            $('main .about-sec .about-desc .title-about').css('color', '#000')
            $('main .about-sec .about-desc .desc, main .about-sec .about-desc .about-btn')
            .css('color', '#222')

            // nav and header
            // nav
            $('header .navbar').css('background-color', themeColor)
            // header
            $('header .img-box, header .ender').css('background-color', themeColor)
            $('header .img-box .title .help-btn').css('background-color', themeColor)
            $('header .img-box .title .contact-btn').css('color', themeColor)
            $('header .img-box .img').css('background-image', 'url(./asset/books-girl-green.png)')

            // contact form
            $('footer .contact').css('background-color', themeColor)
            $('footer .contact .contact-form .submit-btn').css('color', themeColor)

            // services section
            $('main .sec-card, main .ender .upper-svg, main .services')
                .css('background-color', themeLightColor)
            $('main .services').css('color', '#fff')

            // services cards
            $('main .sec-card .cards .card').css('background-color', '#fff')
            $('main .sec-card .secvice-btn').css('color', '#ddd')
            $('main .sec-card .cards .card .card-body .card-title, main .sec-card .cards .card .card-body .card-text')
                .css('color', '#000')

            // main sec as services
            $('.dy-content .cards .card').css('background-color', '#fff')
            $('.dy-content .cards .card .card-body .card-title, .dy-content .cards .card .card-body .card-text')
                .css('color', '#000')

            // dy-sec/ main sec as contact
            $('.dy-content .contact h3, .dy-content .contact .type').css('color', '#000')
            $('.dy-content .contact ul li a').css('color', '#333')

            // dy-sec/ main sec as about
            $('.dy-content .about .desc, .dy-content .about .type')
            .css('color', '#000')
            $('.dy-content .about .subtitle').css('color', '#333')
            $('.dy-content .about ul li a').css('color', '#555')
        }

    }

    /*fucntion to change toggle Mode*/
    function toggle_mode(night=false) {
        if (float_btn.mode == 'day') {

            /* changeing the mode */
            makeDark(themeColor = '#536DFE')
        } else {

            /* changeing the mode */
            makeDark()
        }
    }
    const float_btn = document.querySelector('main .float-btn')
    float_btn.mode = 'day'
    float_btn.addEventListener('click', toggle_mode)

    function dyChTheme() {
    /*Dynamically changing the theme*/
        const currHour = new Date().getHours()
        if (currHour >= 18 || currHour <= 6) {
            makeDark(themeColor = '#536DFE')
        }
    }
    dyChTheme()

    /* modal events */
    const modal = document.querySelector('main .modal')
    const previews = document.querySelectorAll('main .sec-card .cards .card')
    const oriTitle = document.querySelector('main .modal .title')
    const original = document.querySelector('main .modal .full-img')
    const oriText = document.querySelector('main .modal .desc')

    previews.forEach(preview => {
        preview.addEventListener('click', () => {
            modal.classList.add('open')
            original.classList.add('open')
            // Dynamic contents
            oriTitle.innerHTML = preview.querySelector('.card-body .card-title').innerHTML
            oriText.innerHTML = preview.querySelector('.card-body .card-text').innerHTML
            original.src = preview.querySelector('.card-img-top').getAttribute('src')
        })
    })

    /* to close the modal if we click any where */
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            modal.classList.remove('open')
            original.classList.remove('open')
        }
    })

    /* change the active section in nav bar */
    function setActive(className) {
        document.querySelectorAll('header .navbar ul li button').forEach((btn) => {
            btn.classList.remove('active')
        })
        document.querySelector(`header .${className}`).classList.add('active')
    }

    /* Hide home content */
    function hideHome(notHide=false) {

        // updating navbar
        setActive('home')

        const home_contents = document.querySelectorAll('.home-tab')
        home_contents.forEach((element) => {
            if (notHide) {
                $(element).show(600)
            } else {
                $(element).hide(600)
            }
        })
    }

    /* set the title for other page */
    function setTitle(title) {
        const element = document.querySelector('.title-sec-cur')
        element.innerHTML = title
    }
    /*show the frame to add dynamic content*/
    function showFrame(className, viewHeight) {
        let dy_frame = document.querySelector('.dy-content')
        $(dy_frame).css({'display': 'block', 'height': `${viewHeight}vh`})
        dy_frame.innerHTML = `<div class="${className}"></div>`
    }
    function destroyFrame() {
        document.querySelector('.dy-content').innerHTML = ''
        document.querySelector('.dy-content').style.display = 'none'
    }
    /* continue the theme fucntion */
    function continueTheme() {
        if (float_btn.mode == 'day') {
            makeDark()
        } else {
            makeDark(themeColor='#536DFE')
        }
    }

    // Generate services section content

    function openServices() {
        // hiding home content
        hideHome()
        // setting title
        setTitle('<i class="fas fa-user-graduate"></i>&emsp;Services')
        // setting up the frame
        showFrame('cards', cards.length * 20)
        // rendering the content
        $('.dy-content .cards').append(renderCards(cards))
        // adding the modal event
        const previews_sec = document.querySelectorAll('.dy-content .cards .card')
        previews_sec.forEach(preview => {
            preview.addEventListener('click', () => {
                modal.classList.add('open')
                original.classList.add('open')
                // Dynamic contents
                oriTitle.innerHTML = preview.querySelector('.card-body .card-title').innerHTML
                oriText.innerHTML = preview.querySelector('.card-body .card-text').innerHTML
                original.src = preview.querySelector('.card-img-top').getAttribute('src')
            })
        })
        // update nav
        setActive('service')
        // gotin back to top
        window.scrollTo(0, 0)
        // changing the theme
        continueTheme()
    }
    const service_btn = document.querySelector('main .secvice-btn')
    service_btn.addEventListener('click', openServices)
    const service_link = document.querySelector('.service')
    service_link.addEventListener('click', openServices)

    /* show the home page */
    function showHome() {
        hideHome(notHide=true)
        setTitle('')
        destroyFrame()
    }
    const logo_btn = document.querySelector('header .logo')
    logo_btn.addEventListener('click', showHome)
    const home_btn = document.querySelector('header .home')
    home_btn.addEventListener('click', showHome)

    /* constact section */
    function openContact() {

        /* func to render the contact section */
        function renderContact() {
            document.querySelector('.dy-content .contact').innerHTML = 
            `<h3>Stay Connnected with us</h3>
            <p class="type">Social Media</p>
            <ul>
                <li><a href=""><i class="fab fa-twitter"></i>&emsp;Twitter</a></li>
                <li><a href=""><i class="fab fa-facebook"></i>&emsp;FaceBook</a></li>
                <li><a href=""><i class="fab fa-instagram"></i>&emsp;Instagram</a></li>
            </ul>
            <p class="type">Have Problem(join our Community Forms)</p>
            <ul>
                <li><a href=""><i class="fab fa-discord"></i>&emsp;Discord</a></li>
                <li><a href=""><i class="fab fa-twitch"></i>&emsp;Twitch</a></li>
                <li><a href=""><i class="fab fa-mastodon"></i>&emsp;Mastodon</a></li>
            </ul>
            <p class="type">Donate(want to support us by code or money)</p>
            <ul>
                <li><a href=""><i class="fab fa-github"></i>&emsp;Github (by code)</a></li>
                <li><a href=""><i class="fab fa-gitlab"></i>&emsp;Gitlab (by code)</a></li>
                <li><a href=""><i class="fab fa-patreon"></i>&emsp;Patreon (by money)</a></li>
                <li><a href=""><i class="fab fa-paypal"></i>&emsp;Paypal (by money)</a></li>
            </ul>
            `
        }

        // hiding the home
        hideHome()
        // setting the title
        setTitle('<i class="fas fa-id-badge"></i>&emsp;Contact')
        // show Frame render it
        showFrame('contact', 80)
        // rendering the content
        renderContact()
        // updating navbar
        setActive('contact')
        // gotin back to top
        window.scrollTo(0, 0)
        // changing the theme
        continueTheme()
    }
    const contact_link = document.querySelector('header .contact')
    contact_link.addEventListener('click', openContact)
    const contact_btn = document.querySelector('.contact-btn')
    contact_btn.addEventListener('click', openContact)


    /* generate about section */

    function openAbout() {

        function render() {
            document.querySelector('.dy-content .about').innerHTML = 
            `<p class="desc">We believe in making things more easier to access and develop.
            Our main goal is to provide an easier interface to access the modern technologies,
            in order to make process of development as easier as possible.
            </p>
            <p class="desc">
            Our Team provides services on technologies like IoT, Machine Learning, Web technologies,
            RestAPI, APIs for Machine Learning, Image Processing, Voice processing, Video rendering
            A Math's AI which is capable of solving any given problem and so on.
            </p>
            <p class="desc">
            So, we welcome you to be a part of this amazing community of developer and common people to
            get together and drive the future of modern technologies.
            </p>
            <img src="./asset/about/about-us.jpg" alt="About Image">
            <p class="type">Help</p>
            <p class="subtitle">Follow the below links to solve your problems with our Community</p>
            <ul>
                <li><a href=""><i class="fab fa-twitter"></i>&emsp;Twitter</a></li>
                <li><a href=""><i class="fab fa-github"></i>&emsp;Github Issus</a></li>
                <li><a href=""><i class="fab fa-gitlab"></i>&emsp;Gitlab Issus</a></li>
                <li><a href=""><i class="fab fa-discord"></i>&emsp;Discord</a></li>
                <li><a href=""><i class="fab fa-twitch"></i>&emsp;Twitch</a></li>
            </ul>
            `
        }

        // hiding the home and setting the title
        hideHome()
        setTitle('<i class="fas fa-users"></i>&emsp;About')
        // setting up the frame
        showFrame('about', 100)
        // render about page
        render()
        // updating navbar
        setActive('about')
        // gotin back to top
        window.scrollTo(0, 0)
        // continuing the theme
        continueTheme()
    }
    const about_link = document.querySelector('header .about')
    about_link.addEventListener('click', openAbout)
    const about_btn = document.querySelector('.about-sec .about-btn')
    about_btn.addEventListener('click', openAbout)
    const help_btn = document.querySelector('header .img-box .help-btn')
    help_btn.addEventListener('click', openAbout)
})
