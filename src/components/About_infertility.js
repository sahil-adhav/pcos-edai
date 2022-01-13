import React from 'react'
import styleAboutInfertility from './CSS/styleAboutInfertility.css'
import infertility1 from "./images/infertility1.jpg";
import infertility2 from "./images/infertility2.jpg";

export default function About_infertility() {
    return (
        <div>
            <section id="overview">
                <h1 class="heading_big">Infertility</h1>
                <h3 class="heading_content">Polycystic Ovarian Syndrome Infertility</h3>
                <p class="content">PCOS is a shared factor for anovulation and female infertility. Anovulation occurs when the ovaries do not release an egg during menstruation, thus ceases all the possibilities of pregnancy.</p>

<h3 class="heading_content">Causes of Polycystic ovarian syndrome Infertility: Why do Women with polycystic ovaries have fertility problems?</h3>
<p class="content">High levels of androgens (‘male’ hormones such as testosterone) and high insulin levels can affect the menstrual cycle, causing a hindrance in the release of an egg.

When an egg fails to get released during its normal cycle, this is called anovulation. Ovulation can permanently stop or can occur erratically, causing hurdles for women with PCOS to conceive naturally, and posing a higher risk of miscarriage in some women. However, this doesn’t mean all women with PCOS are infertile.

Yes, the infertility rate with polycystic ovaries tend to be high, but women with PCOS experience obstacles in getting pregnant and need specific treatments and medications to solve this issue.

</p>

<img
    src={infertility1}
    class="img_overview"
/>

<h3 class="heading_content">Polycystic Ovarian Syndrome Infertility Treatment</h3>
<p class="content">PCOS infertility treatment can increase the chances of the woman to get pregnant. A notably high proportion of women might be able to get pregnant after a Polycystic Ovarian Syndrome Infertility Treatment.</p>

<h3 class="heading_content">Weight management</h3>
<p class="content">Reductions in weight can help in PCOS infertility treatment. Hence, weight management must be considered as a primary approach to improve fertility. Even a five to ten percent loss of weight can lead to an improvement in the chances of getting pregnant. Current international recommendations state that healthy weight or modest weight loss before pregnancy can help prevent pregnancy-related complications.</p>

<h3 class="heading_content">Estimate your ovulation time</h3>
<p class="content">Polycystic ovarian syndrome infertility treatment is advisable for women who have an irregular menstrual cycle. As PCOS can interrupt regular periods, it’s difficult to estimate the accurate ovulation time. Anovulation calculator and anovulation predictor kit can help you out with this. Talk to your doctor to know more.</p>

<img
    src={infertility2}
    class="img_overview"
/>

            </section>
        </div>
    )
}