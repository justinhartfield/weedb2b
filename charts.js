// Data visualization for product charts
document.addEventListener('DOMContentLoaded', function() {
    // Create strain popularity chart
    function createStrainPopularityChart() {
        const ctx = document.getElementById('strain-popularity-chart');
        if (!ctx) return;
        
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Jet Fuel Gelato', 'OG Deluxe', 'White Widow', 'Krypton', 'Frosted Lemon Angel'],
                datasets: [{
                    label: 'Monthly Sales (grams)',
                    data: [789, 662, 610, 575, 540],
                    backgroundColor: [
                        'rgba(163, 248, 105, 0.8)',
                        'rgba(163, 248, 105, 0.7)',
                        'rgba(163, 248, 105, 0.6)',
                        'rgba(163, 248, 105, 0.5)',
                        'rgba(163, 248, 105, 0.4)'
                    ],
                    borderColor: [
                        'rgba(61, 35, 20, 1)',
                        'rgba(61, 35, 20, 1)',
                        'rgba(61, 35, 20, 1)',
                        'rgba(61, 35, 20, 1)',
                        'rgba(61, 35, 20, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Grams'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Top 5 Strains by Sales Volume',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                }
            }
        });
        
        return chart;
    }
    
    // Create pharmacy performance chart
    function createPharmacyPerformanceChart() {
        const ctx = document.getElementById('pharmacy-performance-chart');
        if (!ctx) return;
        
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                datasets: [{
                    label: 'Average Pharmacy',
                    data: [12, 15, 18, 22, 25],
                    borderColor: 'rgba(200, 200, 200, 0.8)',
                    backgroundColor: 'rgba(200, 200, 200, 0.1)',
                    borderWidth: 2,
                    fill: true
                }, {
                    label: 'With Weed.de Integration',
                    data: [12, 19, 28, 45, 68],
                    borderColor: 'rgba(163, 248, 105, 0.8)',
                    backgroundColor: 'rgba(163, 248, 105, 0.1)',
                    borderWidth: 2,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Orders per Month'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Order Growth Comparison',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                }
            }
        });
        
        return chart;
    }
    
    // Create regional distribution chart
    function createRegionalDistributionChart() {
        const ctx = document.getElementById('regional-distribution-chart');
        if (!ctx) return;
        
        const chart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Nordrhein-Westfalen', 'Bayern', 'Baden-Württemberg', 'Hessen', 'Berlin', 'Other'],
                datasets: [{
                    data: [32, 23, 19, 17, 6, 3],
                    backgroundColor: [
                        'rgba(163, 248, 105, 0.8)',
                        'rgba(163, 248, 105, 0.7)',
                        'rgba(163, 248, 105, 0.6)',
                        'rgba(163, 248, 105, 0.5)',
                        'rgba(163, 248, 105, 0.4)',
                        'rgba(163, 248, 105, 0.3)'
                    ],
                    borderColor: [
                        'rgba(61, 35, 20, 1)',
                        'rgba(61, 35, 20, 1)',
                        'rgba(61, 35, 20, 1)',
                        'rgba(61, 35, 20, 1)',
                        'rgba(61, 35, 20, 1)',
                        'rgba(61, 35, 20, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right'
                    },
                    title: {
                        display: true,
                        text: 'Regional Distribution (%)',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                }
            }
        });
        
        return chart;
    }
    
    // Create manufacturer visibility chart
    function createManufacturerVisibilityChart() {
        const ctx = document.getElementById('manufacturer-visibility-chart');
        if (!ctx) return;
        
        const chart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Search Visibility', 'User Engagement', 'Conversion Rate', 'Patient Retention', 'Brand Recognition'],
                datasets: [{
                    label: 'Before Weed.de',
                    data: [30, 40, 25, 35, 45],
                    backgroundColor: 'rgba(200, 200, 200, 0.2)',
                    borderColor: 'rgba(200, 200, 200, 0.8)',
                    pointBackgroundColor: 'rgba(200, 200, 200, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(200, 200, 200, 1)'
                }, {
                    label: 'With Weed.de Premium',
                    data: [80, 75, 70, 85, 90],
                    backgroundColor: 'rgba(255, 153, 204, 0.2)',
                    borderColor: 'rgba(255, 153, 204, 0.8)',
                    pointBackgroundColor: 'rgba(255, 153, 204, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255, 153, 204, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Manufacturer Visibility Impact',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                }
            }
        });
        
        return chart;
    }
    
    // Create patient demographics chart
    function createPatientDemographicsChart() {
        const ctx = document.getElementById('patient-demographics-chart');
        if (!ctx) return;
        
        const chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['18-30', '31-45', '46-60', '61+'],
                datasets: [{
                    data: [15, 42, 28, 15],
                    backgroundColor: [
                        'rgba(255, 153, 204, 0.8)',
                        'rgba(255, 153, 204, 0.6)',
                        'rgba(255, 153, 204, 0.4)',
                        'rgba(255, 153, 204, 0.2)'
                    ],
                    borderColor: [
                        'rgba(61, 35, 20, 1)',
                        'rgba(61, 35, 20, 1)',
                        'rgba(61, 35, 20, 1)',
                        'rgba(61, 35, 20, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    },
                    title: {
                        display: true,
                        text: 'Patient Age Demographics (%)',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                }
            }
        });
        
        return chart;
    }
    
    // Load Chart.js from CDN
    function loadChartJS() {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }
    
    // Initialize all charts
    async function initCharts() {
        try {
            await loadChartJS();
            
            // Create chart containers
            createChartContainers();
            
            // Initialize charts
            createStrainPopularityChart();
            createPharmacyPerformanceChart();
            createRegionalDistributionChart();
            createManufacturerVisibilityChart();
            createPatientDemographicsChart();
        } catch (error) {
            console.error('Failed to load Chart.js:', error);
        }
    }
    
    // Create chart containers in the DOM
    function createChartContainers() {
        // Add chart containers to pharmacy section
        const pharmacySection = document.querySelector('#pharmacy-section .container');
        if (pharmacySection) {
            const pharmacyChartsDiv = document.createElement('div');
            pharmacyChartsDiv.className = 'bg-white rounded-lg shadow-lg p-8 mb-16';
            pharmacyChartsDiv.innerHTML = `
                <h3 class="text-2xl font-bold mb-6 text-weed-brown">Performance Analytics</h3>
                <p class="mb-8">Visualize the impact of Weed.de partnership on your pharmacy's performance with our comprehensive analytics.</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <div class="h-64">
                            <canvas id="pharmacy-performance-chart"></canvas>
                        </div>
                    </div>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <div class="h-64">
                            <canvas id="regional-distribution-chart"></canvas>
                        </div>
                    </div>
                </div>
            `;
            
            // Insert after API Integration Benefits section
            const apiSection = pharmacySection.querySelector(':scope > div:nth-last-child(2)');
            if (apiSection) {
                apiSection.after(pharmacyChartsDiv);
            } else {
                pharmacySection.appendChild(pharmacyChartsDiv);
            }
        }
        
        // Add chart containers to manufacturer section
        const manufacturerSection = document.querySelector('#manufacturer-section .container');
        if (manufacturerSection) {
            const manufacturerChartsDiv = document.createElement('div');
            manufacturerChartsDiv.className = 'bg-white rounded-lg shadow-lg p-8 mb-16';
            manufacturerChartsDiv.innerHTML = `
                <h3 class="text-2xl font-bold mb-6 text-weed-brown">Product & Patient Analytics</h3>
                <p class="mb-8">Gain deeper insights into product performance and patient demographics with our advanced analytics tools.</p>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-gray-50 p-4 rounded-lg md:col-span-2">
                        <div class="h-64">
                            <canvas id="strain-popularity-chart"></canvas>
                        </div>
                    </div>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <div class="h-64">
                            <canvas id="patient-demographics-chart"></canvas>
                        </div>
                    </div>
                    <div class="bg-gray-50 p-4 rounded-lg md:col-span-3">
                        <div class="h-64">
                            <canvas id="manufacturer-visibility-chart"></canvas>
                        </div>
                    </div>
                </div>
            `;
            
            // Insert before Newsletter Example section
            const newsletterSection = manufacturerSection.querySelector(':scope > div:nth-last-child(2)');
            if (newsletterSection) {
                newsletterSection.before(manufacturerChartsDiv);
            } else {
                manufacturerSection.appendChild(manufacturerChartsDiv);
            }
        }
    }
    
    // Initialize charts
    initCharts();
});
