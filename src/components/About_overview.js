import React from 'react'
import styleAboutOverview from './CSS/styleAboutOverview.css'
import overview1 from "./images/overview1.jpg";

export default function About_overview() {
    return (
        <div>
            <section id="overview">
                <h1 class="heading_big">Overview</h1>
                <h3 class="heading_content">Polycystic Ovarian Syndrome Symptoms</h3>
                <p class="content">Polycystic ovarian syndrome (PCOS) is a common condition prevailing in women of reproductive age. PCOS can develop any time after a woman has had her first period (known as menarche). There are numerous instances where PCOS development can occur in later reproductive years as a response to certain hormonal factors. PCOS has various signs and symptoms-one felt by the patient, and one deduced by the doctor on thorough examination and medical counseling.

In order to reach a definitive diagnosis of PCOS, your doctor will observe for at least one of these two symptoms.</p>

<img
    src={overview1}
    class="img_overview"
/>

<h3 class="heading_content">Irregular periods</h3>
<p class="content">This is the most commonly encountered symptom. The outcomes include menstrual intervals (time gap between two sequential periods) exceeding 30 days, four or more non-menstruating months, extended periods of more than eight days, with heavy or scant bleeding.</p>

<h3 class="heading_content">Excess androgen</h3>
<p class="content">Another hallmark symptom of PCOS is excess secretion of the male hormone, androgen. This manifests in visible physical signs such as excess facial and body hair (hirsutism), adult or severe adolescent acne, and male pattern baldness, thinning of hair and excess hair on fingers of hands and toes, and on the surface of hands and legs.</p>
<p class="content">When observed under ultrasonography or any other imaging technique, polycystic ovaries are abnormally larger in size as compared with that of the normal ones and contain fluid-filled sacs that surround the eggs.</p>
            </section>
        </div>
    )
}