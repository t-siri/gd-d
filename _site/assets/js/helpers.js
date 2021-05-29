// Script written by Jordi Kitto https://www.linkedin.com/in/jordi-kitto/

// ------- Helper functions that are not specific to any context
/**
 * Will recursively search through each ancestor till it finds first with class name that includes
 * @param {Element} current First element to start search on
 * @param {String} className String to see if any classname includes
 * @param {Element} original DO NOT SET! Is done automatically. For debugging
 */
export function findAncestorWithClassThatIncludes(current, className, original) {
    if (original == null) {
        original = current;
    }

    var ancestor;

    if (current.parentElement == null) {
        throw {
            "message": "Could not find ancestor with class that includes '"+ className +"' for the following original element",
            "element": original
        };
    }

    current.parentElement.classList.forEach((parentClass) => {
        if (parentClass.includes(className)) {
            ancestor = current.parentElement;
        }
    })

    if (ancestor) {
        return ancestor;
    } else {
        return findAncestorWithClassThatIncludes(current.parentElement, className, original);
    }
}

/**
 * Sets the element cursor to pointer
 * @param {Element} element 
 */
export function usePointer(element) {
    element.style.cursor = "pointer";
}

/**
 * Searches classlist of element for class with prefix,
 * and returns what comes AFTER the prefix
 * @param {String} prefix 
 * @param {Element} element 
 */
export function getClassType(prefix, element) {
    var type = null;
    element.classList.forEach((aClass) => {
        if (aClass.startsWith(prefix)) {
            type = aClass.replace(prefix, "");
        }
    });

    if (type == null) {
        console.error("Could not find class starting with '"+prefix+"' on:");
        console.log(element);
        throw Error();
    }

    return type;
}

/**
 * Disables the ability to scroll the screen
 */
export function disableScroll() { 
    // Get the current page scroll position 
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  
    // if any scroll is attempted, set this to the previous value 
    window.onscroll = function() { 
        window.scrollTo(scrollLeft, scrollTop); 
    }; 
} 
  
/**
 * Removes on scroll function, usually enables scroll again
 */
export function enableScroll() { 
    window.onscroll = function() {}; 
}