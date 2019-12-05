// Создаем свой bind

const person = {
    name: 'Shemet Daniil'
};

function info(phone , email){
    console.log(` Имя: ${this.name}, Телефон: ${phone} Email: ${email}`)
    return 1
}

// Demo

info.bind(person, '0688105542', 'shemetg@gmail.com')();

1 Простой
function bind(fn, context , ...rest) {
    return fn.bind(context, ...rest)
}


// 2 (Без встроенных методов)

function bind(fn, context, ...rest){
    return function (...args) {
        const unicId = Date.now().toString()
        context[unicId] = fn;
        const result = context[unicId](...rest.concat(args))
        delete context[unicId]
        return result
    }
}

// 3 ES5

function bind(fn, context) {
    var rest = Array.prototype.slice.call(arguments, 2)
    return function () {
        var args  = Array.prototype.slice.call(arguments)
        fn.apply(context, rest.concat(args))
    }
}

// 4 ES6

function bind(fn, context, ...rest){
    return function (...args) {
        // return fn.apply(context, rest.concat(args))
        return fn.call(context, ...rest.concat(args))
    }
}

bind(info, person)('0688105542', 'shemetg@gmail.com')
bind(info, person ,'0688105542' )('shemetg@gmail.com')
bind(info, person ,'0688105542', 'shemetg@gmail.com')()



// Call

function call(fn, context, ...args) {

    const unicId = Date.now().toString()
    context[unicId] = fn;
    const result = context[unicId](...args)
    delete context[unicId]
    return result
}

call(info, person, '0688105542', 'shemetg@gmail.com')


// Apply

function apply(fn, context, args) {
    const unicId = Date.now().toString()
    context[unicId] = fn;
    const result = context[unicId](...args)
    delete context[unicId]
    return result
}
apply(info, person, ['0688105542', 'shemetg@gmail.com'])