import idb from 'idb';
import PropTypes from 'prop-types';
import knockout from 'knockout';



console.log('idb', idb);
console.log('PropTypes', PropTypes);
console.log('knockout', knockout);

document.addEventListener("DOMContentLoaded", function(e){
  // console.log('admit one');

  let DB;
  let mvc;

  window.lod_mvc = function() { console.log(mvc); }

  idb.open('sample_db', 1, upgradeDB => {
    upgradeDB.createObjectStore('sample_store', { keyPath: 'id' });
  })
  .then(db => {
    DB = db;
    init();
  })

  let CRUD = {};

  CRUD.create = function create(data_obj) {
    const tx = DB.transaction('sample_store', 'readwrite');
    tx.objectStore('sample_store').put(data_obj);
    return tx.complete;
  }

  CRUD.read = function read(key) {
    return key ?
    DB.transaction('sample_store').objectStore('sample_store').get(key) :
    DB.transaction('sample_store').objectStore('sample_store').getAll();
  }

  CRUD.update = function update(data_obj) {
    const tx = DB.transaction('sample_store', 'readwrite');
    tx.objectStore('sample_store').put(data_obj);
    return tx.complete;
  }

  CRUD.destroy = function destroy(key) {
    const tx = DB.transaction('sample_store', 'readwrite');
    tx.objectStore('sample_store').delete(key);
    return tx.complete;
  }

  //

  function MVC(list) {
    let self = this;
    let edit = null;

    self.app_name = knockout.observable("IDB Sample");
    self.list = knockout.observableArray(list);
    self.new_value_input = knockout.observable("");
    self.editing = knockout.observable(false);
    self.submit_new_value = function() {
      let value = self.new_value_input();
      if(!value) { return; }
      if(edit) {
        let obj = Object.assign({}, edit, { value, updated: Date() });
        CRUD.update(obj).then(resp => {
          self.list.replace(edit, obj);
          self.cancel_editing();
        });
      }
      else {
        let obj = { value, id: Date.now(), created: Date(), updated: null };
        CRUD.create(obj).then(resp => {
          self.list.push(obj);
          self.cancel_editing();
        });
      }
    }
    self.edit_value = function(val) {
      edit = val;
      self.new_value_input(val.value);
      self.editing(true);
    }
    self.delete_value = function(val) {
      CRUD.destroy(val.id).then(resp => {
        self.list.remove(val);
      });
    }
    self.cancel_editing = function() {
      self.new_value_input('');
      self.editing(false);
      edit = null;
    }
  }

  function init() {
    CRUD.read().then(arr => {
      console.log('data', arr);
      mvc = new MVC(arr);
      knockout.applyBindings(mvc);
    });
  }

});
