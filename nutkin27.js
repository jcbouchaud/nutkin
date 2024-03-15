const worldStandard = [
  100,
  105.648,
  106.373,
  112.649,
  119.469,
  116.754,
  123.558,
  118.682,
  120.025,
  117.874,
  125.624,
  134.805,
  146.361,
  141.347,
  144.007,
  154.884,
  155.748,
  149.143,
  149.137,
  149.918,
  161.313,
  153.859,
  157.481,
  144.01,
  135.668,
  139.603,
  129.228,
  125.58,
  134.449,
  138.795,
  134.593,
  128.484,
  117.801,
  107.128,
  110.386,
  117.598,
  118.983,
  119.32,
  117.71,
  121.852,
  113.961,
  110.101,
  97.816,
  90.22,
  90.347,
  79.785,
  85.487,
  89.68,
  80.879,
  76.654,
  75.012,
  73.846,
  78.604,
  78.831,
  82.126,
  85.481,
  89.517,
  84.902,
  90.09,
  88.69,
  89.566,
  92.399,
  93.931,
  94.34,
  94.732,
  93.841,
  96.122,
  93.965,
  93.496,
  93.217,
  93.242,
  93.931,
  95.35,
  97.186,
  98.467,
  98.613,
  97.115,
  103.339,
  106.308,
  109.659,
  109.12,
  114.201,
  112.166,
  117.751,
  120.299,
  122.074,
  124.147,
  125,
  123.734,
  117.2,
  117.697,
  118.663,
  121.373,
  124.109,
  127.697,
  125.968,
  129.202,
  132.659,
  129.82,
  131.184,
  133.598,
  139.29,
  137.714,
  132.864,
  133.308,
  133.864,
  135.624,
  128.21,
  127.058,
  115.878,
  112.362,
  106.618,
  114.215,
  116.169,
  105.445,
  103.877,
  108.539,
  100.232,
  89.979,
  84.098,
  79.231,
  78.414,
  71.022,
  73.061,
  81.417,
  83.126,
  83.506,
  89.614,
  92.186,
  94.112,
  91.577,
  93.674,
  99.783,
  98.742,
  101.987,
  109.231,
  111.173,
  108.929,
  105.379,
  107.111,
  105.696,
  107.574,
  109.601,
  114.496,
  119.268,
  119.343,
  122.609,
  118.158,
  117.822,
  119.07,
  116.196,
  115.109,
  106.791,
  104.701,
  111.133,
  112.338,
  116.427,
  121.251,
  124.451,
  126.618,
  125.951,
  123.185,
  126.137,
  131.648,
  131.886,
  132.77,
  130.927,
  132.114,
  132.781,
  135.536,
  140.957,
  146.87,
  147.554,
  150.161,
  146.027,
  150.474,
  148.304,
  151.689,
  156.948,
  159.497,
  160.933,
  158.351,
  162.354,
  162.931,
  163.615,
  169.524,
  171.977,
  173.172,
  179.783,
  182.373,
  185.069,
  189.724,
  192.311,
  202.481,
  215.643,
  221.686,
  217.459,
  223.025,
  214.349,
  220.043,
  202.612,
  195.882,
  213.624,
  222.323,
  212.353,
  200.433,
  198.117,
  201.722,
  203.876,
  210.933,
  209.001,
  216.409,
  217.464,
  216.664,
  217.82,
  228.326,
  235.13,
  235.023,
  245.658,
  246.661,
  245.854,
  243.118,
  240.619,
  238.343,
  236.691,
  243.375,
  251.646,
  251.191,
  252.796,
  256.541,
  251.175,
  243.663,
  250.879,
  261.297,
  261.116,
  268.696,
  273.552,
  275.549,
  261.727,
  264.887,
  242.412,
  260.294,
  270.181,
  277.594,
  287.988,
  272.918,
  284.656,
  292.592,
  289.769,
  298.935,
  299.55,
  311.536,
  315.181,
  317.305,
  293.063,
  254.556,
  282.868,
  291.987,
  296.829,
  295.419,
  311.613,
  306.84,
  299.42,
  328.853,
  335.133,
  334.165,
  343.038,
  366.063,
  374.029,
  373.568,
  390.885,
  397.92,
  409.672,
  399.947,
  423.221,
  425.586,
  439.249,
  422.02,
  410.541,
  425.807,
  411.788,
  405.83,
  379.824,
  420.354,
  408.428,
  380.254,
  403.974,
  414.732,
  383.129,
  403.136,
  402.924,
  405.453,
  406.002,
  416.238,
  431.337,
  441.157,
  437.444,
  429.089,
  417.329,
  442.189,
  458.207,
]

const rates = [
  1,
  0.9786,
  0.9586,
  0.9386,
  0.9171,
  0.8967,
  0.8757,
  0.8548,
  0.8340,
  0.8126,
  0.7917,
  0.7708,
  0.7496,
  0.7303,
  0.7104,
  0.6931,
  0.6758,
  0.6606,
  0.6463,
  0.6334,
  0.6211,
  0.6093,
  0.5986,
  0.5887,
  0.5794,
  0.5711,
  0.5628,
  0.5550,
  0.5477,
  0.5408,
  0.5346,
]

const getRiskyAssetsRatesPerMonth = (duration) => {
  return worldStandard.slice(-duration);
}


const getNonRiskyAssetsRatesPerMonth = (duration) => {
  const nonRiskyAssetsRatesPerMonth = rates.reduce(
    (acc, rate, index) => {
      const monthlyRate = (rate - rates[index + 1]) / 12;
      return [...acc, ...Array(12).fill(rate).map((item, i) => item - (i * monthlyRate))];
    },
    []
  ).slice(0, duration).reverse();
  return nonRiskyAssetsRatesPerMonth;
}

let taxGainChart;

const generateTaxGainChart = (age, retirementAge, paymentsDuration, payment, frequency, tmi, tis) => {
  const effectivePayments = calculateEffectivePayments(age, retirementAge, paymentsDuration, payment, frequency, tmi, tis);
  const labels = effectivePayments.map((payment, index) => `Année ${index + 1}`);
  const effectivePaymentData = effectivePayments.map(payment => payment.effectivePayment);
  const taxGainData = effectivePayments.map(payment => payment.taxGain);

  const ctx = document.getElementById("tax-gain-chart").getContext("2d");

  if (taxGainChart) {
    taxGainChart.destroy();
  }

  taxGainChart = new Chart(ctx, {
    plugins: [ChartDataLabels],
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Versement Effectif",
          data: effectivePaymentData,
          backgroundColor: "rgb(56, 69, 144)",
          barThickness: 15,
        },
        {
          label: "Gain Fiscal",
          data: taxGainData,
          backgroundColor: "rgb(20, 20, 74)",
          barThickness: 15,  
        }
      ],
    },
    options: {
      layout: {
        padding: {
          right: 20
        }
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false
          }
        },
        y: {
          stacked: true,
          ticks: {
            stepSize: 50000,
            callback: function (value, index, values) {
              return `${value} €`;
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          font: {
            size: 8,
            weight: "bold"
          },
          backgroundColor: "white",
          borderRadius: 4,
          borderColor: "rgb(20, 20, 74)",
          borderWidth: 1,
          color: "rgb(20, 20, 74)",
          padding: 2,
          formatter: function(value, context) {
              return `${Math.ceil(value)} €`;
          },
          display: (context) => {
            return context.dataIndex === context.dataset.data.length - 1;
          },
        },
      },
    }
  });
}


let performanceChart;

const generatePerformanceChart = (age, retirementAge, paymentsDuration, payment, frequency, tmi, tis, profile) => {
  const effectivePayments = calculateEffectivePayments(age, retirementAge, paymentsDuration, payment, frequency, tmi, tis);
  const effectivePaymentsTotal = effectivePayments.reverse()[0];
  const investerProfile = profiles[profile];
  const investedAmount = effectivePaymentsTotal.effectivePayment + effectivePaymentsTotal.taxGain;
  const investmentDuration = getInvestmentDuration(age, retirementAge) * 12;
  const paymentsDurationMonths = paymentsDuration * 12;

  // Calculate risky assets performance
  const riskyAssetsRatesPerMonth = getRiskyAssetsRatesPerMonth(investmentDuration)
  const riskyAssetsPayment = payment * investerProfile.risky
  const riskyAssets = calculateStocksValue(riskyAssetsPayment, investmentDuration, paymentsDurationMonths, riskyAssetsRatesPerMonth, frequency)
  const riskyAssetsPerformance = calculateStocksPerformance(riskyAssets.total, investerProfile.risky, investedAmount);

  // Calculate non risky assets performance
  const nonRiskyAssetsRatesPerMonth = getNonRiskyAssetsRatesPerMonth(investmentDuration) 
  const nonRiskyAssetsPayment = payment * investerProfile.nonRisky
  const nonRiskyAssets = calculateStocksValue(nonRiskyAssetsPayment, investmentDuration, paymentsDurationMonths, nonRiskyAssetsRatesPerMonth, frequency)
  const nonRiskyAssetsPerformance = calculateStocksPerformance(nonRiskyAssets.total, investerProfile.nonRisky, investedAmount);

  const fee = riskyAssets.fee + nonRiskyAssets.fee
  const total = investedAmount + nonRiskyAssetsPerformance + riskyAssetsPerformance - fee; 
  
  const gainRatio = calculateGainRatio(total, effectivePaymentsTotal.effectivePayment)

  console.log("gain ratio", gainRatio.toFixed(2))
  console.log("fee", fee.toFixed(2))

  const labels = ["Versements", "Performance", "Total"]
  const ctx = document.getElementById("performance-chart").getContext("2d");

  if (performanceChart) {
    performanceChart.destroy();
  }

  const triangleBackgroundPlugin = {
    id: 'triangleBackground',
    beforeDraw: (chart, args, options) => {
      const { ctx } = chart;
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = options.color || '#99ffff';
  
      // Clear the previous rectangle
      ctx.clearRect(65, -30, chart.width, chart.height);
  
      ctx.beginPath();
      const xAxis = chart.scales.x;
      const yAxis = chart.scales.y;
      ctx.moveTo(xAxis.left, yAxis.bottom);
      ctx.lineTo(xAxis.right, yAxis.bottom);
      ctx.lineTo(xAxis.right, yAxis.top);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
  }}

  performanceChart = new Chart(ctx, {
    plugins: [ChartDataLabels, triangleBackgroundPlugin],
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Versement Effectif",
          data: [effectivePaymentsTotal.effectivePayment, 0, 0],
          backgroundColor: "rgb(56, 69, 144)",
          barThickness: 50,
        },
        {
          label: "Gain Fiscal",
          data: [effectivePaymentsTotal.taxGain, 0, 0],
          backgroundColor: "rgb(20, 20, 74)",
          barThickness: 50,
        },
        {
          label: "Intérêts Garantis",
          data: [0, nonRiskyAssetsPerformance, 0],
          backgroundColor: "rgb(20, 20, 70)",
          barThickness: 50
        },
        {
          label: "Performance Actions",
          data: [0, riskyAssetsPerformance, 0],
          backgroundColor: "rgb(130, 139, 188)",
          barThickness: 50
        },
        {
          label: "Total Frais Inclus",
          data: [0, 0, total],
          backgroundColor: "rgb(28, 175, 102)",
          barThickness: 50
        }
      ]
    },
    options: {
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false
          }
        },
        y: {
          stacked: true,
          grid: {
            display: false
          },
          ticks: {
            stepSize: 100000,
            callback: function (value, index, values) {
              return `${value} €`;
            }
          }
        }
      },
      plugins: {
        triangleBackground: {
          color: "rgb(241, 242, 255)"
        },
        legend: {
          display: false,
        },
        datalabels: {
            font: {
              size: 8,
              weight: "bold"
            },
            color: "white",
            formatter: function(value, context) {
                return `${Math.ceil(value)} €`;
            },
            display: function(context) {
              return context.dataset.data[context.dataIndex] > 0;
            },
        },
        tooltip: {
          filter: function (tooltipItem, data) {
            return !!tooltipItem.raw
          },
        },
      }
    },
  });
}

const profiles = { safe: { nonRisky: 1, risky: 0 }, careful: { nonRisky: .7, risky: .3 }, balanced: { nonRisky: .5, risky: .5 } };

const getInvestmentDuration = (age, retirementAge) => Math.min(retirementAge - age, 30);

const calculateTaxGainRate = (tmi, tis) => (100 - tmi + tis) / 100;

const calculateEffectivePayments = (age, retirementAge, paymentsDuration, paymentAmount, frequency, tmi, tis) => {
  const getYearlyPayment = (payment, frequency) => {
    switch (frequency) {
      case "monthly":
        return payment * 12
      case "quarterly":
        return payment * 4
      case "yearly":
        return payment
      default:
        return payment
    }
  }

  const investmentDuration = getInvestmentDuration(age, retirementAge);
  const taxGainRate = calculateTaxGainRate(tmi, tis);
  const effectivePayments = [];

  const yearlyPaymentAmount = getYearlyPayment(paymentAmount, frequency)

  for (let i = 0; i < investmentDuration; i++) {
    const year = i + 1;
    if (year > paymentsDuration) break;
    const payment = yearlyPaymentAmount * year;
    const effectivePayment = payment * taxGainRate;
    const taxGain = payment - effectivePayment;
    const yearlyPayment = { effectivePayment, taxGain };
    effectivePayments.push(yearlyPayment);
  }
  return effectivePayments;
};

const calculateStocksValue = (payment, investmentDuration, paymentsDuration, rates, frequency) => {
  const isPaymentDate = (month, frequency) => {
    switch (frequency) {
      case "monthly":
        return month % 1 === 0
      case "quarterly":
        return month % 3 === 0
      case "yearly":
        return month % 12 === 0
      default:
        return false
    }
  }

  const calculateFeeRate = (frequency) => {
    const fee = 0.012
    switch (frequency) {
      case "monthly":
        return 1 - (fee / 12);
      case "quarterly":
        return 1 - (fee / 4);
      case "yearly":
        return 1 - fee;
      default:
        return 1 - fee;
    }
  }

  let totalStocksValue = 0;

  const feeRate = calculateFeeRate(frequency);
  let totalStocksValueWithFees = 0;

  for (let i = 0; i < investmentDuration; i++) {
    if (!isPaymentDate(i, frequency)) {
      continue
    }
    if (i < paymentsDuration) {
      const currentRate = rates[i];
      const currentValue = payment / currentRate;
      totalStocksValue += currentValue;
      totalStocksValueWithFees = (totalStocksValueWithFees + currentValue) * feeRate;
    } else {
      totalStocksValueWithFees = totalStocksValueWithFees * feeRate;
    }
  } 
  const lastRate = rates[investmentDuration - 1];

  const total = totalStocksValue * lastRate;
  const totalWithFee = totalStocksValueWithFees * lastRate;

  const fee = total - totalWithFee;

  return { total, fee }
};

const calculateStocksPerformance = (value, ratio, investedAmount) => Math.ceil(value - (ratio * investedAmount));

const calculateGainRatio = (total, effectivePayment) => total / effectivePayment;

const getCheckedValue = name => {
  const elements = document.getElementsByName(name);
  const checkedElement = Array.from(elements).find(element => element.checked);
  return checkedElement ? checkedElement.value : null;
};

const getValueById = id => {
  const element = document.getElementById(id);
  return element ? element.value : null;
};

const handleSimulateTaxGain = () => {
  const age = parseInt(getValueById("age"));
  const retirementAge = parseInt(getValueById("retirement-age"));
  const tmi = parseInt(getValueById("tmi"));
  const tis = parseInt(getValueById("tis"));
  const paymentsDuration = parseInt(getValueById("payments-duration"));
  const payment = parseInt(getValueById("payment-amount"));
  const frequency = getCheckedValue("frequency");

  generateTaxGainChart(age, retirementAge, paymentsDuration, payment, frequency, tmi, tis);
};

const handleSimulatePerformance = () => {
  const age = parseInt(getValueById("age"));
  const retirementAge = parseInt(getValueById("retirement-age"));
  const tmi = parseInt(getValueById("tmi"));
  const tis = parseInt(getValueById("tis"));
  const paymentsDuration = parseInt(getValueById("payments-duration"));
  const frequency = getCheckedValue("frequency");
  const payment = parseInt(getValueById("payment-amount"));
  const profile = getCheckedValue("profile");

  generatePerformanceChart(age, retirementAge, paymentsDuration, payment, frequency, tmi, tis, profile);
};

const displayCharts = () => {
  handleSimulateTaxGain();
  handleSimulatePerformance();
}

const setDurationInputListener = (name) => {
  const input = document.getElementById(name);
  const defaultValue = input.value;
  document.getElementById(`${name}-display`).innerText = `${defaultValue} ans`;

  input.addEventListener('input', function () {
    const value = this.value;
    document.getElementById(`${name}-display`).innerText = `${value} ans`;
  });
};

const setRadioLabelListeners = () => {
  const labels = document.querySelectorAll('label');

  labels.forEach(label => {
    const parent = label.parentElement;
    label.addEventListener('click', () => {
      const siblingLabels = parent.querySelectorAll('label');
      siblingLabels.forEach(lbl => {
        lbl.classList.remove('selected');
      });
      label.classList.add('selected');
    });
  });
};

const setDisplayButtonListeners = () => {
  const ageField = document.getElementById('age');
  const retirementAgeField = document.getElementById('retirement-age');
  const paymentAmountField = document.getElementById('payment-amount');
  const tmiField = document.getElementById('tmi');
  const tisField = document.getElementById('tis');
  const paymentsDurationField = document.getElementById('payments-duration');
  const profileRadioButtons = document.querySelectorAll('input[name="profile"]');
  const frequencyRadioButtons = document.querySelectorAll('input[name="frequency"]');

  const checkFields = () => {
    let allFieldsFilled = true;

    [ageField, retirementAgeField, paymentAmountField, tmiField, tisField, paymentsDurationField].forEach(field => {
      if (!field.value.trim()) {
        allFieldsFilled = false;
      }
    })

    let profileRadioButtonChecked = false;
    profileRadioButtons.forEach(button => {
      if (button.checked) {
        profileRadioButtonChecked = true;
      }
    });
    
    let frequencyRadioButtonsChecked = false;
    frequencyRadioButtons.forEach(button => {
      if (button.checked) {
        frequencyRadioButtonsChecked = true;
      }
    });

    if (allFieldsFilled && profileRadioButtonChecked && frequencyRadioButtonsChecked) {
      document.getElementById("simulate-button").style.display = "block";
    } else {
      document.getElementById("simulate-button").style.display = "none";
    }
  }

  checkFields();

  [ageField, retirementAgeField, paymentAmountField, tmiField, tisField, paymentsDurationField].forEach(field => {
    field.addEventListener('input', checkFields);
  });

  profileRadioButtons.forEach(button => {
    button.addEventListener('change', checkFields);
  });
  
  frequencyRadioButtons.forEach(button => {
    button.addEventListener('change', checkFields);
  });
}

const setMaxDurationListeners = () => {
  const ageInput = document.getElementById('age');
  const retirementAgeInput = document.getElementById('retirement-age');
  const durationInput = document.getElementById('payments-duration');
  const durationDisplay = document.getElementById('payments-duration-display');

  ageInput.addEventListener('input', updateMaxAndValue);
  retirementAgeInput.addEventListener('input', updateMaxAndValue);
  

  function updateMaxAndValue() {
    const age = parseInt(ageInput.value);
    const retirementAge = parseInt(retirementAgeInput.value);
    const maxDuration = Math.max(retirementAge - age, 0);    
    durationInput.max = maxDuration;

    if (durationInput.value > maxDuration || parseInt(durationInput.value) === 0) {
      durationInput.value = maxDuration
    }
    
    durationDisplay.innerText = `${durationInput.value} ans`;
  }

  retirementAgeInput.min = ageInput.value;
}

const preventNumberInputFromChangingOnMouseWheel = () => {
  const numberInputs = document.querySelectorAll('input[type="number"]');
  
  numberInputs.forEach(function(input) {
      input.addEventListener('mousewheel', function(event) {
          event.preventDefault();
      }, { passive: false });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  preventNumberInputFromChangingOnMouseWheel()
  document.getElementById("tmi").value = 30;
  document.getElementById("tis").value = 15;

  // Hide simulate button until all inputs are filled
  document.getElementById("simulate-button").style.display = "none";
  
  document.getElementById("simulate-button").addEventListener("click", displayCharts);
  setDurationInputListener("age");
  setDurationInputListener("payments-duration");
  setRadioLabelListeners();
  setDisplayButtonListeners();
  setMaxDurationListeners();
}); 