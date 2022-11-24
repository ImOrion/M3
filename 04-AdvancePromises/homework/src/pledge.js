"use strict";
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

// class $Promise {
//     constructor(executor) {
//       if (typeof executor !== "function") {
//         throw TypeError("executor function");
//       }

//       this._state = "pending";
//     }

//     _internalResolve() {
//       this._state = "fulfilled";
//     }
//     _internalReject() {}
//   }

function $Promise(executor) {
  if (typeof executor !== "function") {
    throw new TypeError("executor is not a function");
  }
  this._state = "pending";
  this._value = undefined;
  this._handlerGroups = [];
  executor(this._internalResolve.bind(this), this._internalReject.bind(this));
}


$Promise.prototype.then = function (successCb, errorCb) {
  var object = {
    successCb,
    errorCb,
  };

  if (typeof successCb != "function") object.successCb = false;
  if (typeof errorCb != "function") object.errorCb = false;
  this._handlerGroups.push(object);

  if (this._state !== "pending") {
    this._callHandlers();
  }
};



$Promise.prototype.catch = function (errorCb) {
  this.then(null, errorCb);
};



$Promise.prototype._internalResolve = function (someData) {
  if (this._state === "pending") {
    this._value = someData;
    this._state = "fulfilled";
    this._callHandlers();
  }
};


$Promise.prototype._internalReject = function (someData) {
  if (this._state === "pending") {
    this._value = someData;
    this._state = "rejected";
    this._callHandlers();
  }
};


$Promise.prototype._callHandlers = function () {
  while (this._handlerGroups.length > 0) {
    var actualHandler = this._handlerGroups.shift();
    if (this._state === "fulfilled") {
      actualHandler.successCb && actualHandler.successCb(this._value);
    } else {
      actualHandler.errorCb && actualHandler.errorCb(this._value);
    }
  }
};


let funception;

//   $Promise.prototype.then = function (succes,reject){
//     var obj={
//         succesCb:succes,
//         errorCb:reject
//     }
//     if(typeof succesCb!=="function"){
//         obj.succesCb=false
//     }
//     if(typeof errorCb!=="function"){
//         obj.errorCb=false
//     }
//     this.handlerGroups.push(obj)
//   }

module.exports = $Promise;

/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
