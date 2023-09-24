// Define an asynchronous function to render gifts on the webpage
const renderGifts = async () => {

    // Send an HTTP GET request to fetch gift data from the server
    const response = await fetch('/gifts')
    // Parse the response data as JSON
    const data = await response.json()

     // Get the 'main-content' element from the HTML document
    const mainContent = document.getElementById('main-content')

    // Check if there is data received from the server
    if (data) {
        // Iterate through each gift in the data  
        data.map(gift => {
            // Create a new 'div' element to represent a gift card
            const card = document.createElement('div')
            card.classList.add('card');

            // Create a container for the top part of the card
            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

             // Create a container for the bottom part of the card
            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            // Set the background image of the top container to the gift's image
            topContainer.style.backgroundImage = `url(${gift.image})`

            // Create an 'h3' element for the gift name
            const name = document.createElement('h3')
            name.textContent = gift.name
            // Append the name element to the bottom container
            bottomContainer.appendChild(name)

            // Create a 'p' element for the gift price
            const pricePoint = document.createElement('p')
            pricePoint.textContent = 'Price: ' + gift.pricePoint
            // Append the price element to the bottom container
            bottomContainer.appendChild(pricePoint)

            // Create a 'p' element for the target audience
            const audience = document.createElement('p')
            audience.textContent = 'Great For: ' + gift.audience
            // Append the audience element to the bottom container
            bottomContainer.appendChild(audience)

            // Create an 'a' element for the "Read More" link
            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/gifts/${gift.id}`
            // Append the link element to the bottom container
            bottomContainer.appendChild(link)

            // Append the top and bottom containers to the gift card
            card.appendChild(topContainer)
            card.appendChild(bottomContainer) 
            mainContent.appendChild(card)
        })
    }
    else {
        // Display a message when there are no gifts available
        const message = document.createElement('h2')
        message.textContent = 'No Gifts Available 😞'
        mainContent.appendChild(message)
    }
}

const requestedUrl = window.location.href.split('/').pop()
    if (requestedUrl) {
    window.location.href = '../404.html'
}
else {
    // Call the renderGifts function to render the gifts on the webpage
    renderGifts()
}

