// variable to store the URL string
// CDN link to ace editor in script tag gives acess to the variable ace

let url = null

//Add element that will be made into a code editor

const editor = ace.edit('editor')

// set editor theme to "dracula"

editor.setTheme('ace/theme/dracula')

// set editor mode to html to support autoclosing of tags

editor.getSession().setMode('ace/mode/html')

// create local URL's of Blob Objects

// function will take HTML Blob type object as argument and return an Object URL of it

function createURL(html) {
    let blob = new Blob([html], { type: 'text/html' })
    return URL.createObjectURL(blob)
}

// delete the URL generated from previous function to free up space

function removeUrl(url) {
    URL.revokeObjectURL(url)
    console.log('Revoked URL')
}

// return iframe object from DOM

function getIframe() {
    let iframe = document.getElementById('iframe')
    return iframe
}

// take URL as argument and set iframe's src to this URL - iframes show the content via src attribute

function setIframeUrl(url) {
    let iframe = getIframe() // fetch iframe object
    iframe.src = url
}

// return the code of editor

function getEditorCode() {

    return editor.getValue()
}

// store code in code variable, remove exisiting URL in system, create a new URL and store in url variable, assign URL to iframe src attribute

function runBtn() {
    let code = getEditorCode()
    removeUrl(url)
    url = createURL(code)
    setIframeUrl(url)
}