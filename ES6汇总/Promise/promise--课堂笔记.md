## Promise  决议。 承诺 

- 原来的JS异步操作主要是依赖于回调函数，但是当业务繁杂之后，代码容易产生回调地狱。 代码的安全性很差。
- Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。
-  本质就是一个是对象
-  新建Promise对象： new Promise(function(resolve, reject){}) 。 成功： resolve ， 失败 reject， pending 进行中。 
-  一旦状态决议后，就不会再变，任何时候都可以得到这个结果。
-  Promise 的好处： 有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise对象提供统一的接口，使得控制异步操作更加容易。


## Promise的实例方法： then 方法： 
- 两个函数类型的参数， 第一个参数代表实例resolve后执行的操作， 第二个参数是实例reject后执行的操作。  

##  Promise的实例方法： catch 方法： 
- Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。
- catch可以捕捉的错误形式：
	-  如果异步操作抛出错误，状态就会变为rejected，就会调用catch方法指定的回调函数，处理这个错误；
	-  then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获。

- Promise 在resolve语句后面，再抛出错误，不会被捕获，等于没有抛出。因为 Promise 的状态一旦改变，就永久保持该状态，不会再变了。
- 一般来说，不要在then方法里面定义Reject状态的回调函数（即then的第二个参数），推荐总是使用catch方法。

##  Promise的实例方法： all 方法： 
- Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
- p的状态由p1、p2、p3决定，分成两种情况。

（1）只有p1、p2、p3的状态都变成resolve，p的状态才会变成resolve，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。

（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。

##  Promise的实例方法： race 方法： 
- Promise.race方法同样是将多个Promise实例，包装成一个新的Promise实例。

- 只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。


## Promise 链式调用
- 如果resolve的参数是Promise实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。



