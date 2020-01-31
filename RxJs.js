const { Observable } = Rx;
const { tap, share } = RxOperators;

const observable = new Observable(subscriber => {
  //Throw the value 1 into the pipeline
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);

  //Marks the observable as complete, no more values will come out
  //subscriber.complete();

  //Emit an error, no more values will come out
  //subscriber.error(new Error('asdasd'));
}).pipe(
  tap(value => console.log("From tap:", value)),
  share()
);

observable.subscribe(
  value => console.log("Next value:", value), // next
  err => console.error("BAD THING!!!", err.message), //error
  () => console.log("Complete") //completion
);

observable.subscribe(value => {
  console.log("From secondsubscribe", value);
});

// Only here because of the tool
new Observable(() => {});
