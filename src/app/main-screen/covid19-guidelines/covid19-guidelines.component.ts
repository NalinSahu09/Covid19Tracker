import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid19-guidelines',
  templateUrl: './covid19-guidelines.component.html',
  styleUrls: ['./covid19-guidelines.component.scss']
})
export class Covid19GuidelinesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  symtoms = [
    {
        img:"../../../assets/image/covid19-symptoms/high-fever-symptom.jpg", 
        description:"High Fever"
    },

    {
        img:"../../../assets/image/covid19-symptoms/cold.jpg", 
		description:"Cold"
	},

    {
		img:"../../../assets/image/covid19-symptoms/dry-cough.jpg", 
		description:"Dry Cough"
	},
    
	{
		img:"../../../assets/image/covid19-symptoms/sore-throat.jpg", 
		description:"Sore Throat"
	},
    
	{
		img:"../../../assets/image/covid19-symptoms/headache.jpg", 
		description:"Headache"
	},

    {
		img:"../../../assets/image/covid19-symptoms/loss-teast-smell.jpg", 
		description:"Loss Teast and Smell"
	},

    {
		img:"../../../assets/image/covid19-symptoms/muscle-pain.jpg", 
		description:"Muscle Pain"
	},

    {
		img:"../../../assets/image/covid19-symptoms/difficult-in-breathing.png", 
		description:"Difficult in Breathing"
	}
  ]
  howToSpreads = [
    {
		img:"../../../assets/image/covid19-spread/Without Face Mask.png", 
		description:"Not Using Facemask"
	},

    {
		img:"../../../assets/image/covid19-spread/Handshake.jfif", 
		description:"Handshake"
	},

    {
		img:"../../../assets/image/covid19-spread/Public Place-1.jfif", 
		description:"Touch Public Property without gloves"
	},
    
	{
		img:"../../../assets/image/covid19-spread/Public Place-2.jpg", 
		description:"Touch Public Property without gloves"
	},

    {
		img:"../../../assets/image/covid19-spread/No Self Quarantine.png", 
		description:"If you Have symptom, be in quarantine "
	},

    {
		img:"../../../assets/image/covid19-spread/Hug.jfif", 
		description:"Hug"
	},
    
	{
		img:"../../../assets/image/covid19-spread/Crowded Place.png", 
		description:"Croweded Place"
	},

    {
		img:"../../../assets/image/covid19-spread/Public Place-1.jfif", 
		description:"Touch Public Property without gloves"
	}
  ]
  preventions = [
    {
		img:"../../../assets/image/covid19-prevention/Wear-Mask.png", 
		description:"Wear Mask"
	},

    {
		img:"../../../assets/image/covid19-prevention/6-Feet.png",
		description:"Minimum 6 Feet Dinstance"
	},

    {
		img:"../../../assets/image/covid19-prevention/Avoid-Handshaking.jpg", 
		description:"Avoid Handshake"
	},
    
	{
		img:"../../../assets/image/covid19-prevention/Handwash.png", 
		description:"Wast your hand properly with soap and water(Minimum 2 Mintes)"
	},

    {
		img:"../../../assets/image/covid19-prevention/AvoidCrowd-Place.jpg", 
		description:"Avoid Croweded Place"
	},

    {
		img:"../../../assets/image/covid19-prevention/Use-Senitisez.jpg", 
		description:"Use Senitizes if washing hand with soap and water is not possible"
	},

    {
		img:"../../../assets/image/covid19-prevention/cover-your-nose.jpg", 
		description:"Cover Your Nose while Sneezing"
	},

    {
		img:"../../../assets/image/covid19-prevention/Don`t.png", 
		description:"Don`t Touch Nose and Eyes without wash your hands"
	},

    {
		img:"../../../assets/image/covid19-prevention/Avoid-Hug.png", 
		description:"Avoid Hug people"
	},

    {
		img:"../../../assets/image/covid19-prevention/Say Namaste.jfif", 
		description:"Say Namaste is best option for greeting people"
	},

    {
		img:"../../../assets/image/covid19-prevention/things-to-disinfect-clean-and-sanitize-areas-key.jpg", 
		description:"Senitize things before and after use"
	},

    {
		img:"../../../assets/image/covid19-prevention/Get-Vaccination.png", 
		description:"Get Vaccination"
	},

    {
		img:"../../../assets/image/covid19-prevention/Take-Test.jfif", 
		description:"If you got any symtoms do test and take proper precaution"
	},

    {
		img:"../../../assets/image/covid19-prevention/Stay_-Home_VectorForFree.png", 
		description:"Stay Home Stay Safe"
	}
  ]

}
