/**
 * By extending your class with Model, 
 * you declare all its instantiations to 
 * be bindable to one or more "views" 
 * (instances of Renderer). All models 
 * have the public method update(), 
 * which should be called to confirm any 
 * changes to your model's properties 
 * and initiate a new render cycle.
 */
class Model {
  constructor() {
    // creates hidden "view registry" where the model may be bound to multiple views
    // A WeakMap is collection of key/value pairs in which the keys must be objects and the values can be arbitrary values. A WeakMap is NOT iterable.
    if (!Model.viewMap) Model.viewMap = new WeakMap();
    Model.viewMap.set(this, []);
    console.log(Model.viewMap);
  }

  bindView(view) {
    const views = Model.viewMap.get(this);
    views.push(view);
  }
  // automatically runs a render cycle
  update() {
    const views = Model.viewMap.get(this);
    if (!views || views.length === 0) return;

    views.forEach(view => view.render());
  }
}

export default Model;