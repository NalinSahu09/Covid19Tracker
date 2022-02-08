import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

	oneAtATime = true;

  constructor() { }

  ngOnInit(): void {
  }

  faqs = [
    {
		idHeading:"headingOne",
		idCollaps:"collapseOne",
		idCollapsTarget:"#collapseOne",
		question:"What is COVID-19?",
		answer:"COVID-19 is a disease caused by a virus called SARS-CoV-2. Most people with COVID-19 have mild symptoms, but some people can become severely ill. Although most people with COVID-19 get better within weeks of illness, some people experience post-COVID conditions. Post-COVID conditions are a wide range of new, returning, or ongoing health problems people can experience more than four weeks after first being infected with the virus that causes COVID-19. Older people and those who have certain underlying medical conditions are more likely to get severely ill from COVID-19. Vaccines against COVID-19 are safe and effective."
	},
	{
		idHeading:"headingTwo",
		idCollaps:"collapseTwo",
		question:"How can I protect myself from COVID-19?",
		answer:"1. Wear a mask.2. Getting vaccinated is the best way to slow the spread of SARS-CoV-2, the virus that causes COVID-19.3. Stay 6 feet away from others.4. Avoid poorly ventilated spaces and crowds.5. COVID-19 self-tests are one of many risk-reduction measures, along with vaccination, masking, and physical distancing, that protect you and others by reducing the chances of spreading COVID-19.6. Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing.7. Cover coughs and sneezes.8. Monitor your health daily."
	},
	{
		idHeading:"headingThree",
		idCollaps:"collapseThree",
		question:"Who is at risk for severe COVID-19?",
		answer:"Among adults, the risk for severe illness from COVID-19 increases with age, with older adults at highest risk. Severe illness means that the person with COVID-19 may require hospitalization, intensive care, or a ventilator to help them breathe, or they may even die. People of any age with certain underlying medical conditions are also at increased risk for severe illness from SARS-CoV-2 infection."
	},
	{
		idHeading:"headingFour",
		idCollaps:"collapseFour",
		question:"What are the symptoms and complications that covid-19 can cause?",
		answer:"People with COVID-19 have reported a wide range of symptoms from mild symptoms to severe illness. Symptoms may appear 2-14 days after exposure to the virus. If you have fever, cough, or other symptoms, you might have COVID-19. Complications may include pneumonia, acute respiratory distress syndrome (ARDS), multi-organ failure, septic shock, and death."
	},
	{
		idHeading:"headingFive",
		idCollaps:"collapseFive",
		question:"How does COVID-19 affect the lungs?",
		answer:"Covid 19 directly impacts the lungs and damages the alveoli (tiny air sacs)."
	},
	{
		idHeading:"headingSix",
		idCollaps:"collapseSix",
		question:"How long is the incubation period for COVID-19?",
		answer:"The time taken by the symptoms to first appear on an infected individual. The incubation time for COVID-19 ranges from 1-14 days, most commonly being around 5 days."
	},
	{
		idHeading:"headingSeven",
		idCollaps:"collapseSeven",
		question:"I feel sick. What are the symptoms of COVID-19?",
		answer:"The most common symptoms are fever, cough, and shortness of breath or difficulty breathing. Other symptoms reported with COVID-19 include chills, fatigue, muscle or body aches, headache, new loss of taste or smell, sore throat, congestion or runny nose, nausea, vomiting, and/or diarrhea. Symptoms appear 2–14 days after exposure."
	},
	{
		idHeading:"headingEight",
		idCollaps:"collapseEight",
		question:"What should I do if I get sick or someone in my house gets sick?",
		answer:"People who have been in close contact with someone who has COVID-19—excluding people who have had COVID-19 within the past 3 months or who are fully vaccinated. People who have tested positive for COVID-19 within the past 3 months and recovered do not have to quarantine or get tested again as long as they do not develop new symptoms. People who develop symptoms again within 3 months of their first bout of COVID-19 may need to be tested again if there is no other cause identified for their symptoms. People who have been in close contact with someone who has COVID-19 are not required to quarantine if they have been fully vaccinated against the disease and show no symptoms."
	},
	{
		idHeading:"headingNine",
		idCollaps:"collapseNine",
		question:"Is online registration mandatory for Covid 19 vaccination?",
		answer:"Vaccination Centres provide for a limited number of on-spot registration slots every day. Citizens aged 45 years and above can schedule appointments online or walk-in to vaccination centres. However, Citizens aged 18-44 years should mandatorily register themselves and schedule appointment online before going to vaccination centre. In general, all citizens are recommended to register online and schedule vaccination in advance for a hassle-free vaccination experience."
	},
	{
		idHeading:"headingTen",
		idCollaps:"collapseTen",
		question:"Why do I need a vaccination certificate?",
		answer:"A COVID Vaccine Certificate (CVC) issued by the government offers an assurance to the beneficiary on the vaccination, type of vaccine used, and the provisional certificate also provides the next vaccination due. It also is an evidence for the citizen to prove to any entities which may require proof of vaccination specially in case of travel. Vaccination not only protects individuals from disease, but also reduces their risk of spreading the virus. Therefore, there could be a requirement in future to produce certificate for certain kind of social interactions and international travel. In this context the certificate issued by Co-WIN has built in security features to guarantee genuineness of the certificate which can be digitally verified using approved utilities which are provided in Co-WIN portal."
	},
	{
		idHeading:"headingEleven",
		idCollaps:"collapseEleven",
		question:"Is it necessary to take 2nd dose of vaccination?",
		answer:"Yes. It is recommended that both doses of vaccine should be taken for realising the full benefit of vaccination. Both doses must be of the same vaccine type."
	},
  ]
}
