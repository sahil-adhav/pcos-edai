import React from 'react'
import styleAboutPeriods from './CSS/styleAboutPeriods.css'
import gestational_diabetes1 from "./images/gestational_diabetes1.jpg";
import gestational_diabetes2 from "./images/gestational_diabetes2.jpg";

export default function About_gesDiabeates() {
    return (
        <div>
            <section id="overview">
                <h1 class="heading_big">Gestational Diabeates</h1>
                <h3 class="heading_content">Polycystic Ovarian Syndrome Gestational Diabetes</h3>
                <p class="content">Women with Polycystic Ovarian Syndrome diseases are predisposed to developing gestational diabetes mellitus (diabetes that develops in pregnancy), irrespective of whether they are over-weight or not. Insulin levels significantly increase in the second and third trimesters of pregnancy as a normal part of pregnancy; the majority of women with PCOS already present high insulin levels in the blood. If not well managed, polycystic ovarian syndrome diabetes can be troublesome, placing the health of both the mother and child at stake. However, diet and exercise prove to be effective measures in controlling gestational diabetes mellitus.

Screening for polycystic ovarian syndrome gestational diabetes

All women are monitored for polycystic ovarian syndrome diabetes through a regular blood test at 24 to 28 weeks to check for sugar levels. Since polycystic ovarian syndrome diabetes can result in higher blood sugar due to insulin resistance, women with PCOS are screened for gestational diabetes beforehand, at earlier stages in pregnancy.

There are two different ways to screen for gestational diabetes – the glucose challenge test and glucose tolerance testing. Both methods require that you drink a sugary solution, though the amount differs depending on which test the doctor is using.

The glucose challenge test requires a single blood withdrawal at one hour after you drink the solution. You do not need to fast before this test. However, this test alone is not sufficient to diagnose gestational diabetes. If the test is abnormal, you’ll need to have glucose tolerance testing.

During the glucose tolerance test, you’ll again drink the sugary solution (though you’ll need to drink more of it), with four blood draws one before drinking the solution, and at one, two, and three hours after finishing it. You will need to fast before taking this test.

If any of these tests show an abnormally high blood glucose level, it indicates gestational diabetes mellitus.</p>

<h3 class="heading_content">Polycystic Ovarian Syndrome Irregular Periods</h3>
<p class="content">polycystic ovarian syndrome irregular periods are the most common characteristic of this syndrome. Examples include prolonged menstrual intervals exceeding 35 days; fewer than eight menstrual cycles a year; failure to menstruate for four months or longer; and prolonged periods that may be scant or heavy.

Although some women with PCOS have regular periods, high levels of androgens (‘male’ hormones) and excess insulin can disrupt the monthly cycle of ovulation and menstruation.

</p>

<img
    src={gestational_diabetes1}
    class="img_overview"
/>

<h3 class="heading_content">Does PCOS Increase My Risk of Gestational Diabetes?</h3>
<p class="content">While it is a fact that women with Polycystic Ovarian Syndrome diseases have a higher risk of developing gestational diabetes during pregnancy, is PCOS the only cause of this condition? PCOS and pregnancy create the perfect storm for gestational diabetes because many women with PCOS are insulin resistant, and being pregnant increases glucose intolerance in the body.

However, it’s illogical to assume that only women with polycystic ovarian syndrome diseases develop gestational diabetes; many women without underlying PCOS also develop gestational diabetes mellitus. The series of biological processes that happen during a healthy pregnancy can also lead to an increase in blood sugar levels, irrespective of PCOS. During pregnancy, your baby is connected to your blood supply through the placenta, which produces hormones that can severely alter the way your insulin interacts with the cells in performing the function of controlling blood glucose levels. It ultimately results in increased blood sugar levels. As your pregnancy progresses, the placenta puts out an increasing volume of insulin-blocking hormones, which in the later trimesters can develop into gestational diabetes. A few additional risks and factors can tip the blood sugar see-saw of pregnancy onto the gestational diabetes side, even without considering polycystic ovarian syndrome.</p>

<h3 class="heading_content">Other complications from Gestational Diabetes</h3>
<p class="content">High blood pressure: This condition can develop during pregnancy, especially if you have PCOS. Women with PCOS have a higher risk of pregnancy-induced hypertension.

Preeclampsia and Eclampsia: These are severe conditions that can threaten the lives of both the mother and baby. They are characterized by high blood pressure, swelling in the extremities, and severe cases of seizures.

Gestational diabetes: Gestational diabetes resolves itself when the baby is born, but once you have had this condition, you are at a higher risk of having it again in future pregnancies.

Type 2 diabetes: If you experience gestational diabetes, your risk for developing Type 2 diabetes later in life is higher. PCOS can also increase this risk because Insulin Resistance plays a role in both PCOS and diabetes. A proactive approach involving healthy life choices such as following a balanced diet and exercising daily following the birth can be instrumental in preventing the development of diabetes.</p>

<img
    src={gestational_diabetes2}
    class="img_overview"
/>

            </section>
        </div>
    )
}