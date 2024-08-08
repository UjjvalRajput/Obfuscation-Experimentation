const { execSync } = require('child_process');

function runBenchmark(script) {
  const start = process.hrtime();
  execSync(`node ${script}`);
  const end = process.hrtime(start);
  return end[0] * 1e9 + end[1]; // Convert to nanoseconds
}

const originalTime = runBenchmark('index.js');
const obfuscatedTime = runBenchmark('index.obfuscated.js');

const speedDifference = obfuscatedTime - originalTime;
const fasterPercentage = (speedDifference / originalTime) * 100;

console.log(`Original time: ${originalTime} ns`);
console.log(`Obfuscated time: ${obfuscatedTime} ns`);
if (speedDifference > 0) {
  console.log(`The original script is ${speedDifference} ns (${fasterPercentage.toFixed(2)}%) faster than the obfuscated script.`);
} else {
  console.log(`The obfuscated script is ${Math.abs(speedDifference)} ns (${Math.abs(fasterPercentage).toFixed(2)}%) faster than the original script.`);
}
