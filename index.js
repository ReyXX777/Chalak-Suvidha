document.getElementById('rtoBtn').addEventListener('click', function() {
    alert('Contacting local RTO...');
});

document.getElementById('mukhiyaBtn').addEventListener('click', function() {
    alert('Contacting local Mukhiya...');
});

document.getElementById('advocateBtn').addEventListener('click', function() {
    alert('Contacting local Advocate...');
});

document.getElementById('policeBtn').addEventListener('click', function() {
    alert('Contacting local Police Station...');
});

document.getElementById('truckBtn').addEventListener('click', function() {
    alert('Contacting local Truck Associations...');
});
// Show/Hide VAHAN SUVIDHA sections
document.getElementById('vahanSuvidhaBtn').addEventListener('click', function() {
    const vahanForms = document.getElementById('vahanForms');
    vahanForms.style.display = vahanForms.style.display === "none" ? "block" : "none";
});

// Insurance Companies Form Submission
document.getElementById('insurance-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const regNumber = document.getElementById('regNumber').value;
    const ownerName = document.getElementById('ownerName').value;
    const vehicleModel = document.getElementById('vehicleModel').value;
    const policyNumber = document.getElementById('policyNumber').value;

    if (regNumber && ownerName && vehicleModel && policyNumber) {
        alert('Insurance: Vehicle details verified successfully!');
    } else {
        alert('Insurance: Please fill in all fields!');
    }
});

// Financial Institutions Form Submission
document.getElementById('finance-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const loanNumber = document.getElementById('loanNumber').value;
    const regNumber = document.getElementById('regNumber').value;
    const ownerDetails = document.getElementById('ownerDetails').value;

    if (loanNumber && regNumber && ownerDetails) {
        alert('Finance: Ownership details verified.');
    } else {
        alert('Finance: Complete all fields.');
    }
});

// Vehicle Leasing Form Submission
document.getElementById('rental-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const agreementNumber = document.getElementById('agreementNumber').value;
    const regNumber = document.getElementById('regNumber').value;
    const fileInput = document.getElementById('uploadDocs');

    if (agreementNumber && regNumber && fileInput.files.length > 0) {
        alert('Rental: Document uploaded and verified!');
    } else {
        alert('Rental: All fields must be filled, and document uploaded.');
    }
});

// E-Commerce Form Submission
document.getElementById('ecommerce-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const listingID = document.getElementById('listingID').value;
    const regNumber = document.getElementById('regNumber').value;
    const sellerInfo = document.getElementById('sellerInfo').value;

    if (listingID && regNumber && sellerInfo) {
        alert('E-Commerce: Listing details verified.');
    } else {
        alert('E-Commerce: Fill all fields.');
    }
});

// Law Enforcement Form Submission
document.getElementById('law-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const caseNumber = document.getElementById('caseNumber').value;
    const regNumber = document.getElementById('regNumber').value;
    const ownerDetails = document.getElementById('ownerDetails').value;

    if (caseNumber && regNumber && ownerDetails) {
        alert('Law Enforcement: Vehicle information retrieved.');
    } else {
        alert('Law Enforcement: All fields must be filled.');
    }
});

// Dealer/Manufacturer Form Submission
document.getElementById('dealer-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const dealerID = document.getElementById('dealerID').value;
    const vehicleModel = document.getElementById('vehicleModel').value;
    const regDetails = document.getElementById('regDetails').value;

    if (dealerID && vehicleModel && regDetails) {
        alert('Dealer: Vehicle registered successfully.');
    } else {
        alert('Dealer: All fields must be completed.');
    }
});

// SARATHI Button Functionality
document.getElementById('sarathiBtn').addEventListener('click', function() {
    const sarathiSections = document.getElementById('sarathiSections');
    sarathiSections.style.display = sarathiSections.style.display === "none" ? "block" : "none";
});

// Freight Transport Data Access (Mocked for demo purposes)
function fetchFreightData() {
    document.getElementById('freightData').innerHTML = "<p>Freight transport data fetched successfully!</p>";
}
fetchFreightData();  // Call the function to simulate data fetching

// Permit Renewal Form Submission
document.getElementById('permitForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const permitNumber = document.getElementById('permitNumber').value;
    const vehicleReg = document.getElementById('vehicleReg').value;

    if (permitNumber && vehicleReg) {
        alert('Permit renewed successfully!');
    } else {
        alert('Please fill in all fields!');
    }
});

// E-Payment Portal Form Submission
document.getElementById('paymentForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    if (cardNumber && expiryDate && cvv) {
        alert('Payment processed successfully!');
    } else {
        alert('Please complete all payment fields!');
    }
});

// Operational Efficiency Data Fetch (Mocked for demo purposes)
function fetchOperationalData() {
    document.getElementById('efficiencyDashboard').innerHTML = "<p>Operational data loaded.</p>";
}
fetchOperationalData();

// Route Optimization Form Submission
document.getElementById('routeForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const startLocation = document.getElementById('startLocation').value;
    const endLocation = document.getElementById('endLocation').value;

    if (startLocation && endLocation) {
        document.getElementById('optimizedRoute').innerHTML = "<p>Optimized route: Start at " + startLocation + " and end at " + endLocation + "</p>";
    } else {
        alert('Please provide both start and end locations!');
    }
});

// Real-Time Tracking Data Fetch (Mocked for demo purposes)
function fetchTrackingData() {
    document.getElementById('trackingMap').innerHTML = "<p>Real-time tracking data updated.</p>";
}
fetchTrackingData();

// FASTag Section Button Functionality
document.getElementById('fastagBtn').addEventListener('click', function() {
    document.getElementById('fastagSection').style.display = 'block';
    document.getElementById('vahanForms').style.display = 'none';
    document.getElementById('sarathiSections').style.display = 'none';
});

// Parking Fee Payment - Fetch Data
function fetchParkingFeeData() {
    document.getElementById('parking-fee-info').innerHTML = "<p>Real-time parking fee data fetched.</p>";
}
fetchParkingFeeData(); // Call this when the FASTag section is shown

// Handle Fuel Payment Form Submission
document.getElementById('fuel-payment-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const fuelAmount = document.getElementById('fuel-amount').value;

    if (fuelAmount) {
        alert('Fuel payment of ₹' + fuelAmount + ' processed successfully through FASTag.');
    } else {
        alert('Please enter a fuel amount.');
    }
});

// Handle E-Challan Payment Form Submission
document.getElementById('e-challan-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const challanNumber = document.getElementById('challan-number').value;

    if (challanNumber) {
        alert('Challan ' + challanNumber + ' paid successfully.');
    } else {
        alert('Please enter a valid challan number.');
    }
});

// Vehicle Tracking (Mocked for demo purposes)
function fetchVehicleTrackingData() {
    const vehicleLocation = "Vehicle Location: 12.9716° N, 77.5946° E";
    document.getElementById('vehicle-location').textContent = vehicleLocation;
}
fetchVehicleTrackingData(); // Call this when vehicle tracking section is shown
