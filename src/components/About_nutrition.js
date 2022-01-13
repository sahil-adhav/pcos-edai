import React from 'react'
import styleAboutPeriods from './CSS/styleAboutPeriods.css'
import nutri1 from "./images/nutri1.jpg";
import nutri2 from "./images/nutri2.jpg";
import nutri3 from "./images/nutri3.jpg";

export default function About_nutrition() {
    return (
        <div>
            <section id="overview">
                <h1 class="heading_big">Nutrition And PCOS</h1>
                <h3 class="heading_content">What is Lean polycystic ovarian syndrome?</h3>
                <p class="content">Most women think that obesity and polycystic ovary syndrome have many components in common. However, this is a clear misconception, and more notably, 50% of women diagnosed with PCOS are underweight or weigh normally.

It is important to get the concept of “lean”. The Body Mass Index is a key index for relating weight to height. BMI is a person’s weight in kilograms (kg) divided by his or her height in meters squared.

BMI between 19 and 24 is considered Normal Weight
BMI between 25 and 29 is considered Overweight
Diagnosis of Lean polycystic ovarian syndrome & Challenges: women with lean polycystic ovarian syndrome are often missed from getting diagnosed with PCOS, as typical tests show normal results. Fasting Insulin, Glucose, and HOMA Index will point to insulin resistance in lean women with PCOS.</p>

<img
    src={nutri1}
    class="img_overview"
/>

<h3 class="heading_content">Why does polycystic ovary syndrome cause weight gain?</h3>
<p class="content">PCOS brings in obstacles for the body to derive the benefit and effectively use the hormone insulin, which usually helps glucose utilization in the body by driving it towards energy production. This condition is called insulin resistance can cause excess insulin and sugar accumulation in the system.

High insulin levels are responsible for the higher production of male hormones androgen, which are responsible for weight gain. Additionally, women with PCOS have pre-existing high levels of androgen, which can worsen weight control.

</p>

<img
    src={nutri2}
    class="img_overview"
/>

<h3 class="heading_content">Does Being Overweight Cause PCOS or Does PCOS Result in Obesity?</h3>
<p class="content">Either way is possible, and the link between obesity and polycystic ovary syndrome is quite complicated. Signs and symptoms of polycystic ovary syndrome for some females begin soon after they start having periods. Women with PCOS produce too much insulin, or the insulin they produce does not work as it should. The inability of insulin to function normally is one reason why women with PCOS tend to gain weight or have a hard time losing weight. For others, PCOS develops later on, following substantial weight gain. What is clear is that women affected by obesity have a higher risk for PCOS, and women with PCOS have a higher risk of obesity, which is why obesity and polycystic ovary syndrome is considered as the most common combination.</p>

<img
    src={nutri3}
    class="img_overview"
/>

            </section>
        </div>
    )
}