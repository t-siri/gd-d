// Script written by Jordi Kitto https://www.linkedin.com/in/jordi-kitto/


/**
 * This file contains functions for connecting buttons to activators
 * E.g. connecting a button to toggle the class from active/inactive
 */

import * as Activator from './activators.js';

/**
 * Searched for all classes that include 'btn-toggle__'
 * and connect them to their activator
 */
function addClickEventToToggles() {
    let toggles = document.querySelectorAll("[class*='btn-toggle__']");

    toggles.forEach((toggle) => {
        toggle.style.cursor = "pointer";
        let toggleActivator = Activator.findIfMissing(toggle);

        toggle.addEventListener("click", () => {
            Activator.toggleState(toggleActivator);
        });
    });
}

function addOnScrollAnimationToggles(className) {
    let classNameTrue = className+"-true";
    let classNameFalse = className+"-false";

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry) => {
            if(entry.isIntersecting === true) {
                if (entry.target.classList.contains(classNameFalse)) {
                    entry.target.classList.remove(classNameFalse);
                    entry.target.classList.add(classNameTrue);
                }
            }
        })
    }, { threshold: [0.025] });

    document.querySelectorAll("[class*='"+className+"-']").forEach((element) => {
        observer.observe(element);
    })
}

window.addEventListener("load", () => {
    console.log("Here");
    addClickEventToToggles();
    addOnScrollAnimationToggles("scroll-animation");
});
