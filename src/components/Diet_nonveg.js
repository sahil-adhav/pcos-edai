import React from "react";
import styleAboutPeriods from "./CSS/styleAboutPeriods.css";
import non1 from "./images/non1.png";
import non2 from "./images/non2.png";
import non3 from "./images/non3.png";
import non4 from "./images/non4.png";


export default function Diet_nonveg() {
  return (
    <div>
      <section id="overview">
      <h1 class="heading_big">Non-Veg Diet Charts</h1>
        <div class="cards_homePage">
          <div class="cards">
            <div class="card" style={{ width: "18rem" }}>
              <img src={non4} class="cards___image" />
              <div class="card-body">
                <h5 class="card-title">VEG WEEK 1 DIET CHART</h5>

                {/* <p class="pTag__resume">
                  <a href="pdf/veg1.pdf" target="_blank" class="button" download>
                    <i class="fa fa-download"></i> Download Diet Chart
                  </a>
                </p> */}

                <a href="pdf/nonveg1.pdf" target="_blank" class="myButton" download>
                  Download
                </a>
              </div>
            </div>
          </div>
          <div class="cards">
            <div class="card" style={{ width: "18rem" }}>
              <img src={non3} class="cards___image" />
              <div class="card-body">
                <h5 class="card-title">VEG WEEK 2 DIET CHART</h5>

                <a href="pdf/nonveg2.pdf" target="_blank" class="myButton" download>
                  Download
                </a>
              </div>
            </div>
          </div>
          <div class="cards">
            <div class="card" style={{ width: "18rem" }}>
              <img src={non2} class="cards___image" />
              <div class="card-body">
                <h5 class="card-title">VEG WEEK 3 DIET CHART</h5>

                <a href="pdf/nonveg3.pdf" target="_blank" class="myButton" download>
                  Download
                </a>
              </div>
            </div>
          </div>
          <div class="cards">
            <div class="card" style={{ width: "18rem" }}>
              <img src={non1} class="cards___image" />
              <div class="card-body">
                <h5 class="card-title">VEG WEEK 4 DIET CHART</h5>

                <a href="pdf/nonveg4.pdf" target="_blank" class="myButton" download>
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* download */}
        {/* <p class="pTag__resume">
          <a href="pdf/resume.pdf" target="_blank" class="button">
            <i class="fa fa-download"></i> Download Resume
          </a>
        </p> */}
      </section>
    </div>
  );
}
