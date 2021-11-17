import React from 'react'
// import styleBlogContent from './CSS/styleBlogContent.css'

export default function Blogcontent() {
    return (
        <div>
            <nav className="navbar">
      
      <div className="logo">
        PCOS <br />
        COMPANION
      </div>
      
      <ul className="nav-links">
        
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" className="hamburger">&#9776;</label>
        
        <div className="menu">
          <li><a href="/">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/blog">BLOG</a></li>
          <li><a href="/diet">DIET</a></li>
          <li><a href="/tracker">TRACKER</a></li>
          <li><button className="btn__logout" type="submit">LOGOUT</button></li>
        </div>
      </ul>
    </nav>
    <div className="blogContainer">
      <div className="blog__container">
        <div className="genre__Date">
          <p className="genre">DIET<span className="Date"> • JAN 23, 2021</span></p>
        </div>
        <div className="blog__title">
          <h3 className="title">
            Living with PCOS: My story, Menstrual Health, Talking Periods.
          </h3>
        </div>
        <div className="minRead">
          <p className="minRead_p">
            In this blog, Ashley shares her experiences of PCOS.
            <span className="minRead_span"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;6 min</span>
          </p>
        </div>
        <div className="blog__img">
          <img
            className="img__blog"
            src="https://euassets.totmcdn.com/v4/2021/01/Untitled-design-29-1.png"
            alt=""
          />
        </div>
        <div className="blogContent">
          <p className="content_desc">
            Ashley has served as an executive and advisor to many PCOS and
            Women’s Health Organizations. She has made multiple appearances
            including Discovery Health Mystery Diagnosis, Woman’s World, Fox
            News and Glamour Magazine as a finalist for 2008 Woman of the Year.
            Her other achievements include WEGO #HAAwards Finalist 2016; 2016
            Ricardo Azziz PCOS Challenge; and Advocacy Leadership Award.
          </p>
          <p className="content_heading">Where It all began ?</p>
          <p className="content_desc">
            At age 13, I had menstrual irregularities that were quite
            significant. So much so that I was taken to an OBGYN
            (obstetrician-gynecologist). I was afraid and unaware. He said many
            girls combat menstrual irregularities and some need help so, at age
            13 I was put on birth control pills. Throughout the duration of
            being on the pill, I noticed some fluctuations with weight gain and
            acne break outs and saw some hairs popping up in unusual places like
            my chin. However, it was chalked up to it being a coming of age
            thing and there was never any further investigation as to probable
            causes for these symptoms.
          </p>
          <p className="content_heading">Seeking Help</p>
          <p className="content_desc">
            Move forward to age 29. After more than 10 years of being on BCPs, I came off them to start a family. Within three months I gained over 100 pounds, had adult acne and noticed a significant increase in facial hair. On top of this, I was not getting a menstrual cycle and was not pregnant. I immediately sought help. I started with my general practitioner, who insisted I was over eating because of anxiety formulated from trying to get pregnant. I moved on to two more doctors who came to the same theory, regardless of the fact had not changed any of my eating habits!

Finally, I made one more appointment with a young doctor. I began by explaining how I had been to multiple doctors and had no luck, then told him the story of my symptoms. After listening, his eyes became wide. He told me to hang on and walked out of the room. When he returned he had a text book open on a page, telling me he believed this was what I was dealing with. The page was titled ‘Polycystic Ovary Syndrome’ – also known as PCOS. He said that he did not know much about the syndrome, but he would work with me to learn and help me get answers.
          </p>
          <p className="content_heading">Treating the PCOS</p>
          <p className="content_desc">
            It was not until I accepted that I was the one in control of my destiny, that things changed. I went to the PCOS Center in Philadelphia run by Dr Katherine Sherif, which offered a multidisciplinary approach to the treatment of PCOS. As an alternative to just taking medications, I was taught that lifestyle changes, along with my diet and exercise were key in controlling the symptoms.

I started off very simple. I wore a pedometer and made it my goal to take 10,000 steps a day, which helped me get motivated and lose weight. Over time, steps turned into a jog, then into a run and eventually working out at the gym. In addition, I started to pay attention to the nutritional needs of my body. I realised a diet was not meant to starve my body, but to nourish it with the proper foods.

Unfortunately, doctors can only currently treat the individual symptoms of women with PCOS – rather than the entire syndrome. Once diagnosed, it can be managed effectively in most patients to help them lead healthier and more satisfying lifestyles. In the meantime, research continues to determine the cause and look for new and better treatments for PCOS.

There are diets, supplements, exercises and medications that can help so it’s important to take the first step and work with a professional who knows PCOS.

Bottom line treatments are just as varied as the symptoms, find what works best for you and take your time getting to where you want to be. Nothing happens over night, realising this is the biggest and most valuable step you can take!
          </p>
        </div>
      </div>
    </div>
    <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
            <div className="row gy-4 gx-5">
                <div className="col-lg-4 col-md-6">
                    <h5 className="h1 text-black">PCOS <br/> COMPANION</h5>
                    <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a  className="link footer-heading" className="text-primary" href="#">Pcoscompanion.com</a></p>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-black mb-3">Quick links</h5>
                    <ul className="foter-link list-unstyled text-muted">
                        <li><a className="link" href="#">Home</a></li>
                        <li><a className="link" href="#">About</a></li>
                        <li><a className="link" href="#">Blogs</a></li>
                        <li><a className="link" href="#">Diet</a></li>
                        <li><a className="link" href="#">Tracker</a></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-black mb-3">Quick links</h5>
                    <ul className="list-unstyled text-muted">
                        <li><a className="link" href="#">Home</a></li>
                        <li><a className="link" href="#">About</a></li>
                        <li><a className="link" href="#">Blogs</a></li>
                        <li><a className="link" href="#">Diet</a></li>
                        <li><a className="link"  href="#">Tracker</a></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-black mb-3">Newsletter</h5>
                    <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <form action="#">
                        <div className="input-group mb-3">
                            <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>
        </div>
    )
}
