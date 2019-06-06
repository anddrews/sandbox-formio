window.onload = function() {
  const node = document.querySelector('#test');
  const {formName, ...additionalData} = node.dataset;
  Formio.createForm(node, `http://localhost:3001/${formName}`).then(form => {
    form.submit = () => {
      const {submit, ...data} = form.data;
      const dataForSending = {...data, ...additionalData};
      fetch('/ddd', {
        method: 'post',
        body: JSON.stringify(dataForSending),
      })
        .then(({location}) => {
          window.location = '/typ.html'
        });
      console.log(dataForSending);
    }
  });
};
