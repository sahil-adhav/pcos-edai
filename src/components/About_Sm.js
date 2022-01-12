import React from "react";
import styleAboutPeriods from "./CSS/styleAboutPeriods.css";
import sm1 from "./images/sm1.jpeg";
import sm2 from "./images/sm2.png";

export default function About_Sm() {
  return (
    <div>
      <section id="overview">
        <h1 class="heading_big">Getting to Grips with Symtoms</h1>
        <h3 class="heading_content">
          Polycystic Ovarian Syndrome Symptoms and Treatment
        </h3>
        <p class="content">
          A large body of information has been gathered with regards to PCOS.
          Herein, we learn how PCOS depression and anxiety affects mental and
          emotional wellbeing.
        </p>

        <img src={sm1} class="img_overview" />

        <h3 class="heading_content">
        PCOS depression and anxiety
        </h3>
        <p class="content">
        Depression and anxiety are common in women with PCOS. Over 30% of women have polycystic ovarian syndrome depression compared to 7% in the general population, and around 45% have anxiety, compared to only 18% of the general population. Thus, the incidence of these disorders is roughly 3-5 times higher than the general average.

It is seen that the longer it takes to diagnose PCOS, the higher the patient is depressed or anxious. PCOS depression and anxiety can impact on a woman with PCOS and her quality of life in several ways:

Physically – by disruption of eating and sleeping pattern.
Psychologically – by seditious feelings of worthlessness and demotivation
Socially – by affecting relationships
In a nutshell, if you are suffering from PCOS and feel mentally down, it is not to be taken casually. You may be suffering from depression, which is associated with PCOS and need immediate help from your doctor and well-wishers.

Women with PCOS can suffer from different kinds of depression. The top three are:

Types of Polycystic ovarian syndrome depression:

Seasonal affective disorder
Dysthymia
Major depressive disorder
Seasonal affective disorder is a strain of depression that occurs during winter or even monsoons with a decrease in sunlight and causes periodic depression. Dysthymia is a chronic type of depression that can last for months and can occur alongside other forms of depression. Lastly, major depressive disorder lasts typically for weeks causing individuals to have a difficult time functioning. This issue can occur as both a one-time problem and a recurring illness.
        </p>

        <img src={sm2} class="img_overview" />

    

      </section>
    </div>
  );
}
