import React from "react";
import styleAboutPeriods from "./CSS/styleAboutPeriods.css";
import vegW1 from "./images/vegW1.png";
import vegW2 from "./images/vegW2.png";
import vegW3 from "./images/vegW3.png";
import vegW4 from "./images/vegW4.png";


export default function Diet_veg() {
  return (
    <div>
      <section id="overview">
      <h1 class="heading_big">Veg Diet Charts</h1>
        <div class="cards_homePage">
          <div class="cards">
            <div class="card" style={{ width: "18rem" }}>
              <img src={vegW1} class="cards___image" />
              <div class="card-body">
                <h5 class="card-title">VEG WEEK 1 DIET CHART</h5>

                {/* <p class="pTag__resume">
                  <a href="pdf/veg1.pdf" target="_blank" class="button" download>
                    <i class="fa fa-download"></i> Download Diet Chart
                  </a>
                </p> */}

                <a href="pdf/veg1.pdf" target="_blank" class="myButton" download>
                  Download
                </a>
              </div>
            </div>
          </div>
          <div class="cards">
            <div class="card" style={{ width: "18rem" }}>
              <img src={vegW2} class="cards___image" />
              <div class="card-body">
                <h5 class="card-title">VEG WEEK 2 DIET CHART</h5>

                <a href="pdf/veg2.pdf" target="_blank" class="myButton" download>
                  Download
                </a>
              </div>
            </div>
          </div>
          <div class="cards">
            <div class="card" style={{ width: "18rem" }}>
              <img src={vegW3} class="cards___image" />
              <div class="card-body">
                <h5 class="card-title">VEG WEEK 3 DIET CHART</h5>

                <a href="pdf/veg3.pdf" target="_blank" class="myButton" download>
                  Download
                </a>
              </div>
            </div>
          </div>
          <div class="cards">
            <div class="card" style={{ width: "18rem" }}>
              <img src={vegW4} class="cards___image" />
              <div class="card-body">
                <h5 class="card-title">VEG WEEK 4 DIET CHART</h5>

                <a href="pdf/veg4.pdf" target="_blank" class="myButton" download>
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
