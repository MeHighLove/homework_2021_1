"use strict";

/**
 * Accepts several objects as input and returns a single object containing all fields from all objects are valid.
 * If the same field was in several objects, leaves the value that was encountered earlier
 * @author Mikhailov Daniel <mikhailov_danya@mail.ru>
 * @example
 * // returns {example: ex, exm: e}
 * zip({example: ex}, {exm: e})
 * @arg {...object} objs - Objects to merge
 * @returns {object | null} Returns null if some argument is not an Object
 */

const zip = (...objs) => {
  try {
    objs.forEach((element) => {
      if (Object.prototype.toString.call(element) !== "[object Object]") {
        throw new Error("Some argument is not an Object!"); //Для undefined и null прокинется ошибка во время вызова constructor
      }
    });
  } catch (e) {
    return null;
  }
  return Object.assign({}, ...objs.reverse());
};
