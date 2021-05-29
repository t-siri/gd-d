// Script written by Jordi Kitto https://www.linkedin.com/in/jordi-kitto/

/**
 * This code is used for connecting buttons to toggle inactice/active on other elements
 */

import {findAncestorWithClassThatIncludes} from './helpers.js';

/**
 * Returns true of element has active or inactive class
 * @param {Element} button 
 */
export function is(button) {
    return button.classList.contains("active") || button.classList.contains("inactive");
}

/**
 * Gives element class inactive, removes actice
 * @param {Element} element 
 */
export function setInactive(element) {
    element.classList.remove("active");
    element.classList.add("inactive");
}

/**
 * Gives element class active, removes inactive
 * @param {Element} element 
 */
export function setActive(element) {
    element.classList.add("active");
    element.classList.remove("inactive");
}

/**
 * Will toggle the active and inactive classes
 * @param {Element} element 
 */
export function toggleState(element) {
    element.classList.toggle("active");
    element.classList.toggle("inactive");
}

/**
 * Sets the element to active if current, otherwise inactive
 * @param {Element} element 
 * @param {Element} currentElement 
 */
export function setActiveIfCurrent(element, currentElement) {
    if (element != currentElement) {
        setInactive(element);
    } else {
        setActive(element);
    }
}

/**
 * Returns activator from ancestors
 * @param {Element} element 
 */
export function findInAncestors(element) {
    return findAncestorWithClassThatIncludes(element, "active");
}

/**
 * If element is not activator, will find activator in ancestors
 * @param {Element} element 
 */
export function findIfMissing(element) {
    if (!is(element)) {
        return findInAncestors(element);
    } 
    else {
        return element;
    } 
}