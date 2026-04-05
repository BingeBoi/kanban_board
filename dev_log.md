# 25-03-26

## learning react

### state is not mutable directly

 - states aka your data cant be altered directly if we want to use it as a state in react

    (money,setmoney) = usestate($100)
    this is called destructuring aka unpacking of values from array and object into variables

# 2-04-26

## i learnt

### react uses attributes for everything basically

 - we used element.addeventlistener for vanilla now we use attr like onlclick,onmousedown,etc

### passing functions for events 

 - if the code we want to execute after an event is passed like "onclick=(dothis)" it will get executed during the rendering of the code , inorder to not we need to pass it on a fuinction like "onclick=(()=>dothis)"

# 3-04-26

## i learnt working of state in react

### useState()

 - { x: 0, y: 0, z: 0 } //declared like this
 - setMousePos({ x: 10, y: 20 }); // set it to just x,y
 - { x: 10, y: 20 }   // z is gone