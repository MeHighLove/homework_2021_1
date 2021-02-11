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

'use strict';

//Нашел подобное решение проблемы с передачей объектов не массивом на learn.javascript, но так как ментор сказала использовать arguments, слушаемся и повинуемся)))
//const zip = (...sources) => Object.assign({}, ...sources.reverse());


//Используем нестрелочную функцию, чтобы был доступ к arguments
function zip(objs) {
    let args = [...arguments]; //arguments не может обращаться к встроенным методам Array, поэтому преобразуем его в обычный массив
    try {
        args.forEach(element => {
            if(element.constructor !== Object) {
                throw new Error('Some argument is not an Object!'); //Для undefined и null прокинется ошибка во время вызова constructor и мы точно так же попадем в наш блок catch(e)
            }
        });
    }
    catch(e) {
        console.log(e.message);
        return null;
    }
    return Object.assign({}, ...args.reverse());
}
