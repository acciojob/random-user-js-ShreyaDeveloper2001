//your code here
// Function to display user information based on button click
        function displayInfo(attr) {
            const additionalInfo = document.getElementById('additionalInfo');
            const userInfo = getRandomUser.userInfo;

            if (userInfo) {
                const infoToShow = userInfo[attr];

                // Clear previous content
                additionalInfo.innerHTML = '';

                // Display the selected information
                const infoElement = document.createElement('p');
                infoElement.textContent = `${attr}: ${infoToShow}`;
                additionalInfo.appendChild(infoElement);
            }
        }
// Function to fetch a random user from the API
        async function getRandomUser() {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            const user = data.results[0];

            // Store user information in userInfo object
            getRandomUser.userInfo = {
                age: user.dob.age,
                email: user.email,
                phone: user.phone
            };

            // Display user's image and full name
            const userImage = document.getElementById('userImage');
            const userName = document.getElementById('userName');

            userImage.src = user.picture.large;
            userName.textContent = `${user.name.first} ${user.name.last}`;

 const additionalInfo = document.getElementById('additionalInfo');
            additionalInfo.innerHTML = '';
        }

        // Initial call to get a random user
        getRandomUser();