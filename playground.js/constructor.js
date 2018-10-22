const Bicycle = (cadence, speed, gear) => {
  let newBicycle = {};
  (newBicycle.cadence = cadence),
    (newBicycle.speed = speed),
    (newBicycle.gear = gear);
  console.log("from 1:", this);
  return newBicycle;
};

const CreateBicycle = (cadence, speed, gear) => {
  (this.cadence = cadence), (this.speed = speed), (this.gear = gear);
  console.log("from 2:", this);
};
function CreateBicycle2(cadence, speed, gear) {
  (this.cadence = cadence), (this.speed = speed), (this.gear = gear);
  console.log("from 3:", this);
}

const bicycle1 = Bicycle(50, 20, 10);
const bicycle2 = CreateBicycle(50, 20, 10);
const bicycle3 = new CreateBicycle2(100, 20, 10);
const bicycle4 = CreateBicycle2(120, 20, 10);

console.log(bicycle1, bicycle2, bicycle3, bicycle4);
