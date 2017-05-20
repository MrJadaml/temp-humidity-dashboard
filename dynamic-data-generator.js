function dataMultiplyer(data) {
  const fiveXData = [data, data, data, data, data];

  return fiveXData.map(dynamicDataGenerator);
}

function dynamicDataGenerator(val) {
  const tempF = randOneIn(80) ? randOffset(val, 40) : randOffset(val, 10);
  const offline = randOneIn(100) === 0;
  const timestamp = Date.now() + randNegPos(Math.floor(Math.random() * 3));

  return { tempF, offline, timestamp };
}

function randOffset(val, deviation) {
  return val + randPercentDeviation(10);
}

function randOneIn(randomness) {
  Math.floor(Math.random() * randomness);
}

function randNegPos(val) {
  return val * (Math.random() < 0.5 ? -1 : 1);
}

function randPercentDeviation(range) {
  const randPercent = Math.random() / range * 100;

  return randNegPos(randPercent);
}


const result = dataMultiplyer(70);
console.log(result);
