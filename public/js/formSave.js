HTMLFormElement.prototype.save = function(configs){

    let form = this;

    form.addEventListener('submit', e =>{
      e.preventDefault();

      let formData = new FormData(form); //obj nativo para gerenciar dados de um forms
    
      fetch(form.action, {
        method: form.method,
        body: formData
      })
      .then(response => response.json())
      .then(json=>{
        if(json.error){
          if (typeof configs.failure === 'function') configs.failure(json.error);
        }else{
          if (typeof configs.sucess === 'function') configs.sucess(json);
        }

      }).catch(err =>{
        if (typeof configs.failure === 'function') configs.failure(err);
      });
    });

}