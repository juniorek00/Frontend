let operator = "";

function setOperator(val) {
  operator = val;
  document.getElementById("result").value += val;
}

function display(val) {
  document.getElementById("result").value += val;

  return val;
}
function solve() {
  const inputOperation = document.getElementById("result");
  const elements = inputOperation.value;

  let [a, b] = elements.split(operator);

  a = parseInt(a);
  b = parseInt(b);

  const doCalculation = async (a, b, operator) => {
    const result = await fetchData(a, b, operator);
    return (inputOperation.value = result);
  };
  doCalculation(a, b, operator);
}

function clearScreen() {
  document.getElementById("result").value = "";
}

const fetchData = async (valueA, valueB, operator) => {
  const response = await fetch("http://localhost:7000/test", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      a: valueA,
      b: valueB,
      operand: operator,
    }),
  });
  const data = await response.json();
  return data.result;
};

const doCalculation = async ({ a, b, operand }) => {
  const response = await fetchData(a, b, operand);
  console.log(response);
};
