class ToyotaCar {
   
   constructor(carCompany , mileageRuningKm){
      this.brand = carCompany
      this.mileage = mileageRuningKm
      console.log("creating new object")
    }
   start(){
      console.log("start")
   }

   stop(){
      console.log("stop")
   }
   setBrand(){
      this.brandName = brand ;

   }
}

let fortuner = new ToyotaCar("fortuner", "34"); 

let lexus = new ToyotaCar("Lexus", 10);

