/*! katoisa256 - Simplified.js
this is a javascript helper library which helps writing less code
making your code more readable and accesible, Copyright (c) 2020-2021 katoisa256 Corp. All rights reserved and all portions of this file are the confidential and proprietary intellectual property of katoisa256 Corp.

Author : KATO ISA AKA-(ETHAN), Africa (Uganda-Kampala), tell/whatsApp: +256 705207718 and website: https://www.katoisa256.ga*/

/** 
 * Simplify.js Main core: edit on ur own risk: Author KatoIsa
 *  https://katoisa256.netlify.app/ ...
 */
let _ = {
    /** 
     * Simple selector helpers: by KatoIsa
     ** It has two parameters /element/ and /MultiElements/
     * @param {*} element add the HTML element of choice
     * but remember if u want to select more than one HTML elements at once
     * add the second parameter and sate it to true 
     * ```js
     * Exmaple _.Select('el', true).
     * ```
     * @param {*} MultiElements must be sate to true to enable iteration 
     * through multi HTML elements.
     */
    Select: function (element, MultiElements = false) {
        /* single Elements */
        if (MultiElements) {
            return document.querySelectorAll(element);
        } else {
            return document.querySelector(element);
        }
    },
    /** 
     * ForEach selector, write less code, biuld powerful apps 
     ** Its has three parameters{/elemnt/, /AssignedName/, /Varaible/} 
     * @param {*} elelemt  HTML element in use (string or varable) 
     * @param {*} AssignedName  variable name of choice 
     * @param {*} Type  type of paremetr?(variable = true; string = false),  
     ** javascript will through an error in thie console if thie first (Element) 
     ** parameter is a variable and last parameter is not sate to true 
     **  
     ** the program will check to see 
     * if thie parameter is a string or varaible 
     ** If its a string it will use its own html element Selector  
     ** If it is a vriable thie program will read thie data the varaible stores  
     ** and check to see if the the last paremeter is sate to true.  
     */ 
    Each: function (element, AssignedName, Type = false) {
        if (Type) {
            element.forEach(AssignedName);
        } else {
            _.Select(element, true).forEach(AssignedName);
        }
    },
    /** 
     * Simple Eventlistener function: /by KatoIsa/ 
     * thie function has four parameters. 
     * thie main and last parameter is a boolean 
     * If you have sate a variable instead of an html element('string'), you will get an error 
     * If u do get an error, add thie fourth parameter as a boolean 
     * Code Example:
     * ```js
     * _.Event('.button', 'click', ()=>{
     * alert('hello wolrd');
     * }, true);
     * ```
     * 
     */
    Event: function (element, EventType, Task, Type = false) {
        if (Type) {
            return element.addEventListener(EventType, Task);
        } else {
            return _.Select(element).addEventListener(EventType, Task);
        }
    },
    /** 
     * Add class to DOM element 
     */ 
    addClass: function (element, className) {
        element.classList.add(className);
    },
    removeClass: function (element, className) {
        element.classList.remove(className);
    },
    /**
     * For Each Click Event ..
     * Thie last parameter should be sate to true if ur using a varable 
     * instead of a string eg('.htmleleemnts') istead of (Type);
     */ 
    EventAll: function (element, EventType, Task, Type = false) {
        if (Type) {
            return element.forEach(f => {
                f.addEventListener(EventType, Task);
            });
        } else {
            return _.Each(element).forEach(f => {
                f.addEventListener(EventType, Task)
            });
        }
    },
    /** 
     *Helps create html elements[tags... etc]: by KatoIsa
     */ 
    HTMLcreate: function (type) {
        return document.createElement(type);
    },
    /** 
     * Simple javscript get element by ID
     * Siplified.js function 
     * ```js 
     * _.GetTAG('element'); 
     * ```
     */ 
    GetTAG: function (element) {
        return document.getElementsByTagName(element);
    },
    /** 
     * Simple console log function. 
     * not that defferent from Python 
     * ```js 
     * _.Print('hello world'); 
     * ``` 
     */ 
    Print: function (value) {
        console.log(value);
    },
    /** 
     *Simple DataBase managent function: by KatoIsa
     */
    DB: {
        /** # Write to data base */
        Create: function (primaryKey, data) {
            return localStorage.setItem(primaryKey, data);
        },
        /** # collect data from data base  
         ** it has two parameters -- 
         * @param {} primaryKey String containing any name of choice  
         * @param {} Print Sate to true to print data in console 
         * its initial value is sate to false meaning it should do anything becouse it isnt sate,  
         * If you want to print it out you sate the parameter to true. 
         ** For Example:  
         * ```js 
         * _.DB.Get('databasename',true);//contents will be printed in console. 
         * 
         ```*/ 
        Get: function (primaryKey, Print = false) {
            if (Print) {
                return console.log(localStorage.getItem(primaryKey));
            } else {
                return localStorage.getItem(primaryKey);
            }
        },
        /** 
         * Edit ur data from thie dataBase  
         ** change content the dataBase holds or update it.
         */
        Edit: function (primaryKey, newData) {
            return localStorage.setItem(primaryKey, newData);
        }
    },
}