'use strict';

/**
 * Accepts several objects as input and returns a single object containing all fields from all objects are valid.
 * If the same field was in several objects, leaves the value that was encountered earlier
 * @author Mikhailov Daniel <mikhailov_danya@mail.ru>
 * @example
 * // returns {example: ex, exm: e}
 * zip({example: ex}, {exm: e})
 * @arg {...object} objs - Objects to merge
 * @throws {TypeError} - Throws an error if some argument is not an object
 * @returns {object}
 */

const zip = (...objs) => {
    objs.forEach((element) => {
        if (Object.prototype.toString.call(element) !== '[object Object]') {
            throw new TypeError('Some argument is not an Object!'); //Для undefined и null прокинется ошибка во время вызова constructor
        }
    });
    return Object.assign({}, ...objs.reverse());
};
