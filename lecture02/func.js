function f1() {
    console.log('hello from f1')
}

const f2 = function () {
    console.log('hello from f2')
}

const f3 = () => {
    console.log('hello from f3')
}

function f4(x) {
    console.log('hello from f4')
    x()
}

// f4(f3)
f4(() => { console.log('hello from anon')})