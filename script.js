document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://6692765e346eeafcf46d009b.mockapi.io/data/time';

    // Function to fetch data from API
    async function fetchData() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    }

    // Function to display time
    function displayTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        document.getElementById('time').textContent = timeString;
    }

    // Function to display API data
    function displayApiData(data) {
        const apiList = document.getElementById('api-data-list');
        apiList.innerHTML = ''; // Clear previous content

        data.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.name; // Adjust this based on your API response structure
            apiList.appendChild(listItem);
        });
    }

    // Function to update time every second
    function updateTime() {
        displayTime();
        setTimeout(updateTime, 1000);
    }

    // Initialize function to load data and start clock
    async function initializeApp() {
        updateTime(); // Start updating time
        const apiData = await fetchData(); // Fetch API data
        displayApiData(apiData); // Display API data
    }

    // Load initial data when DOM is ready
    initializeApp();
});
