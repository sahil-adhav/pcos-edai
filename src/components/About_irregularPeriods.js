import React from 'react'
import styleAboutPeriods from './CSS/styleAboutPeriods.css'
import periods1 from "./images/periods1.jpg";
import periods2 from "./images/periods2.jpg";

export default function About_irregularPeriods() {
    return (
        <div>
            <section id="overview">
                <h1 class="heading_big">Irregular Periods</h1>
                <h3 class="heading_content">What is a regular menstrual cycle?</h3>
                <p class="content">The average menstrual cycle is regulated by two hormones, progesterone, and estrogen, which are made by the ovaries. Every month, these hormones cause the endometrium (innermost layer of the uterus) to grow in preparation for a possible pregnancy. About 12-14 days before the start of a period, an egg is released from the ovary. This is called ovulation. The egg travels down the fallopian tubes where it can be fertilized by sperm. If it ceases to get fertilized, the egg disintegrates, and pregnancy does not occur. Following this cycle, the levels of the hormones estrogen and progesterone decrease, triggering the uterus to shed/breakaway it’s lining, which further leads to bleeding. It is called the menstrual period. In most women, this cycle lasts about 28 days, but cycles that are shorter or longer by seven days are considered normal.</p>

<h3 class="heading_content">Polycystic Ovarian Syndrome Irregular Periods</h3>
<p class="content">polycystic ovarian syndrome irregular periods are the most common characteristic of this syndrome. Examples include prolonged menstrual intervals exceeding 35 days; fewer than eight menstrual cycles a year; failure to menstruate for four months or longer; and prolonged periods that may be scant or heavy.

Although some women with PCOS have regular periods, high levels of androgens (‘male’ hormones) and excess insulin can disrupt the monthly cycle of ovulation and menstruation.

</p>

<img
    src={periods1}
    class="img_overview"
/>

<h3 class="heading_content">What is an irregular period in PCOS?</h3>
<p class="content">The polycystic ovarian syndrome can cause irregular periods. A patient with PCOS can experience irregularities in or complete cessation of the menstrual cycle. The average menstrual cycle lasts for 28 days, with cycles extending or shortened by seven days considered normal.</p>

<h3 class="heading_content">How can polycystic ovarian syndrome cause irregular periods?</h3>
<p class="content">We have already seen that Polycystic Ovarian Syndrome can cause irregular periods, but what exactly leads to this condition?

Here’s how PCOS affects your menstrual cycle: every month, a follicle matures and gets released by your ovaries to get fertilized. But because of the hormonal imbalance seen in PCOS (typically higher levels of androgens like testosterone and high levels of luteinizing hormone), the follicle doesn’t mature or get released. Instead of being released, the follicle (often miscalled a cyst) stays in the ovaries where it can be seen on an ultrasound. Abnormally higher levels of androgens can interfere with your menstrual cycle to the level of inhibiting ovulation (egg release). Thus, inhibition of egg release ceases the subsequent stages of the menstrual cycle, causing disruption in hormonal levels and overall interruption in the normal cycle, leading to the cessation of menstrual bleeding.

Keep in mind that this symptom can manifest in different ways. Some with PCOS can have regular periods every 28 days, others have periods every 30 to 40 days, and some don’t have periods at all. While this is a “normal” symptom of PCOS, it is one that needs to be addressed, especially if you are getting fewer than eight or nine periods each year.</p>

<img
    src={periods2}
    class="img_overview"
/>

            </section>
        </div>
    )
}