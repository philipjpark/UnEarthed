// Get the 'header' element from the HTML document
const header = document.querySelector('header')

// Create a new 'div' element and set its class name to 'header-container'
const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

// Create a new 'div' element and set its class name to 'header-left'
const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

// Create an 'img' element and set its 'src' attribute to '/logo.png'
const headerLogo = document.createElement('img')
headerLogo.src = '/logo.png'

// Create an 'h1' element and set its text content to 'UnEarthed'
const headerTitle = document.createElement('h1')
headerTitle.textContent = 'UnEarthed'

// Append the 'headerLogo' and 'headerTitle' elements as children of 'headerLeft'
headerLeft.appendChild(headerLogo)
headerLeft.appendChild(headerTitle)

// Create a new 'div' element and set its class name to 'header-right'
const headerRight = document.createElement('div')
headerRight.className = 'header-right'

// Create a 'button' element and set its text content to 'Home'
const headerButton = document.createElement('button')
headerButton.textContent = 'Home'
// Add Pico.css class names to style the button
headerButton.className = 'button'


// Add a click event listener to the 'headerButton' that redirects to the home page
headerButton.addEventListener('click', function handleClick(event) {
  window.location = '/'
})

// Append the 'headerButton' element as a child of 'headerRight'
headerRight.appendChild(headerButton)

// Append 'headerLeft' and 'headerRight' as children of 'headerContainer'
headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

// Append 'headerContainer' as a child of the 'header' element in the HTML document
header.appendChild(headerContainer)